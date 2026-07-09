require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const formRoutes = require("./routes/formRoutes");
const responseRoutes = require("./routes/responseRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api/forms", formRoutes);
app.use("/api/responses", responseRoutes);

app.get("/", (req, res) => {
  res.send("Form Builder API is running 🚀");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on https://form-backend-r4xi.onrender.com/api`);
});
