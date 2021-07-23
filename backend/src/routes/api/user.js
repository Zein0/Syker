const express = require("express");
const router = express.Router();

const UserController = require("../../Controller/UserController");






router.post("/login", (req, res) => UserController.Signin(req, res));

router.post("/signup", (req, res) => UserController.addUser(req, res));


module.exports = router;