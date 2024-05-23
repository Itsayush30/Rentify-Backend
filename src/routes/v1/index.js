const express = require("express");

const { createProperty, allProperty, getPropertyByUserId, getPropertyByCity} = require("../../controllers/property-controller");

const {
    createUser, usersignin
} = require("../../controllers/user-controller");

const {
    validateAuthRequest,
    checkAuth,
} = require("../../middlewares/auth-request-middleware");

const router = express.Router();

// /api/v1/user POST
router.post("/user", createUser);

// /api/v1/login POST
router.post("/login", usersignin);

// /api/v1/createproperty POST
router.post("/createproperty", checkAuth, createProperty)

// /api/v1/allproperty GET
router.get("/allproperty", allProperty)

// /api/v1/property GET
router.get("/property",checkAuth, getPropertyByUserId)

// /api/v1/city GET
router.get("/city", getPropertyByCity)


module.exports = router;
