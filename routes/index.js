const path = require("path");
const router = require("express").Router();
const apiRoutes = require("../routes/api");

// API Routes
router.use("../routes/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/index.html"));
  res.sendFile("../client/index.html");
});