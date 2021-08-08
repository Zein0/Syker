const express = require("express");
const router = express.Router();

const Products = require("../../models/Product");
const OrderController = require("../../Controller/OrderController");

router.post("/order", (req, res) => OrderController.Order(req, res));

module.exports = router;
