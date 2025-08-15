const path = require("path");
const adminController = require("../controllers/admin");

const express = require("express");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

// /admin/edit-product => GET
router.get("/edit-product/:productId", adminController.getEditProduct);

// /admin/edit-product => GET
router.post("/edit-product", adminController.postEditProduct);

// /admin/product-list => GET
router.get("/product-list", adminController.getProducts);

// /admin/delete-product => POST
router.post("/delete-product", adminController.deleteProduct);

module.exports = router;
