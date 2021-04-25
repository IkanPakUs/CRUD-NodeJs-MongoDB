const express = require("express");
const router = express.Router();

const productController = require("./../app/controllers/productController");

router.get("/", productController.findAll);

router.post("/", productController.create);

router.delete("/:id", productController.delete);

router.get("/find", productController.find);

router.put("/:id", productController.update);

module.exports = router;
