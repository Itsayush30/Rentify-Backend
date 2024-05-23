const express = require("express");

const { createProperty,allProperty } = require("../../controllers/property-controller");

const {
    createUser,usersignin
} = require("../../controllers/user-controller");


const router = express.Router();

// /api/v1/user POST
router.post("/user", createUser);

// /api/v1/login POST
router.post("/login", usersignin);

// /api/v1/createproperty POST
router.post("/createproperty",createProperty )

// /api/v1/allproperty GET
router.get("/allproperty",allProperty )


module.exports = router;
