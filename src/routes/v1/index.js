const express = require("express");

const { createProperty } = require("../../controllers/property-controller");

const {
    createUser,usersignin
} = require("../../controllers/user-controller");


const router = express.Router();

// /api/v1/user POST
router.post("/user", createUser);

// /api/v1/login POST
router.post("/login", usersignin);

router.post("/createproperty",createProperty )


module.exports = router;
