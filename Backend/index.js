const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ You forgot this line
const User = require("./models/User");
require("dotenv").config();
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");

const app = express();
const PORT = 5000;

// ✅ Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Vite frontend
    credentials: true,
  })
);

app.use(express.json()); // JSON middleware

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Register route
app.use("/register", registerRoute);
app.use("/login", loginRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
