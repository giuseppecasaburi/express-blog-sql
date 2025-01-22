const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

// Index
router.get("/", controller.index);

// Show
router.get("/:id", controller.show);

// Create
router.post("/", controller.create);

// Update
router.put("/:id", controller.update);

// Delete
router.delete("/:id", controller.destroy);


module.exports = router