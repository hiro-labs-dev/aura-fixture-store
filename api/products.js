const express = require("express");
const router = express.Router();
// @entity Product
router.get("/api/products", (req, res) => res.json([]));
router.get("/api/products/:id", (req, res) => res.json({}));
router.post("/api/products", (req, res) => res.status(201).json({}));
router.put("/api/products/:id", (req, res) => res.json({}));
router.delete("/api/products/:id", (req, res) => res.status(204).end());
module.exports = router;
