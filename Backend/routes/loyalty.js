const express = require("express");
const router = express.Router();
const LoyaltyCard = require("../models/LoyaltyCard");
const authMiddleware = require("../middleware/authMiddleware");

// GET /user/:userId/loyalty
router.get("/user/:userId/loyalty", authMiddleware, async (req, res) => {
  const userId = req.params.userId;

  try {
    const card = await LoyaltyCard.findOne({ user_id: userId });

    if (!card) {
      return res.status(404).json({ error: "Loyalty card not found" });
    }

    return res.json({
      points: card.points,
      tier: card.tier,
    });
  } catch (err) {
    console.error("Error fetching loyalty card:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
