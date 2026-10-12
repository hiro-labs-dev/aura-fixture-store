const express = require("express");
const router = express.Router();
// @entity Order
router.get("/api/orders", (req, res) => res.json([]));
router.get("/api/orders/:id", (req, res) => res.json({}));
router.post("/api/orders", (req, res) => res.status(201).json({}));
module.exports = router;
