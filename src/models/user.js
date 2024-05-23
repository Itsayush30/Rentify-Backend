const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        phone_number: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["seller", "buyer"],
            required: true,
        },
    },
    { timestamps: true }
);

userSchema.pre("save", function (next) {
    const user = this;
    if (user.isModified("password") || user.isNew) {
        const SALT = bcrypt.genSaltSync(9);
        const encryptedPassword = bcrypt.hashSync(user.password, SALT);
        user.password = encryptedPassword;
    }
    next();
});

const User = mongoose.model("User", userSchema); //creating model
module.exports = User;
