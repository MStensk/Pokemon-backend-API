const AuthController = require("../auth/controllers/AuthController");
const router = require("express").Router();

router.post("/signup", AuthController.register)