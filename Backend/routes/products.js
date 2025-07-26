const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const Category = require("../models/Category");
const Business = require("../models/Business");
const authMiddleware = require("../middleware/authMiddleware");
require("dotenv").config();

// POST /products
router.post("/", authMiddleware, async (req, res) => {
  const { name, description, price, category_id, business_id } = req.body;
  console.log("Product creation attempt by:", req.user.email);

  try {
    // Only vendors can add products
    if (!req.user.is_provider) {
      return res.status(403).json({ error: "Only vendors can add products" });
    }

    // Validate required fields
    if (!name || !price || !category_id || !business_id) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create and save the product
    const newProduct = new Product({
      name,
      description,
      price,
      category_id,
      business_id,
      vendor_id: req.user._id,
    });

    await newProduct.save();

    return res.status(201).json({
      message: "Product created successfully",
      product_id: newProduct._id,
    });
  } catch (err) {
    console.error("Error creating product:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;


// GET /products
router.get("/", async (req, res) => {
    try {
      const { category, name, store } = req.query;
  
      let filter = {};
  
      // Filter by product name (case-insensitive)
      if (name) {
        filter.name = { $regex: name, $options: "i" };
      }
  
      // Filter by category name
      if (category) {
        const matchedCategory = await Category.findOne({
          name: { $regex: category, $options: "i" },
        });
        if (matchedCategory) {
          filter.category_id = matchedCategory._id;
        } else {
          // No matching category, return empty list
          return res.json([]);
        }
      }
  
      // Filter by business/store name
      if (store) {
        const matchedBusiness = await Business.findOne({
          name: { $regex: store, $options: "i" },
        });
        if (matchedBusiness) {
          filter.business_id = matchedBusiness._id;
        } else {
          // No matching business, return empty list
          return res.json([]);
        }
      }
  
      const products = await Product.find(filter);
  
      const response = products.map((p) => ({
        id: p._id,
        name: p.name,
        description: p.description,
        price: p.price,
        category_id: p.category_id,
        business_id: p.business_id,
        vendor_id: p.vendor_id,
      }));
  
      res.json(response);
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ error: "Server error" });
    }
  });
  
  module.exports = router;
  