const express = require("express");

const UserController = require("../../controllers/user.controller.js");

//route - /api/v1/user
const router = express.Router();

router.get("/health", (req, res) => res.status(200).send("UP"));

router.get("/", UserController.findAll);
router.get("/:id", UserController.findOne);
router.post("/", UserController.create);
router.patch("/:id", UserController.update);
router.delete("/:id", UserController.userDelete);

module.exports = router;
