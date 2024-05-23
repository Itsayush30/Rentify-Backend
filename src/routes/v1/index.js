const express = require("express");

const {
    createUser,
} = require("../../controllers/user-controller");

const router = express.Router();

// /api/v1/user POST
router.post("/user", createUser);


module.exports = router;
