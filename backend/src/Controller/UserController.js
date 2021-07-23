const mongoose = require("mongoose");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const db = require("../index");

// const DescriptionController = require("./DescriptionController");

const handleErrors = (err) => {
    let errors = { name: "", username: "", email: "", password: "", address: "" };

    // duplicate email error
    if (err.code === 11000) {
        if (err.keyPattern.email) {
            errors.email = "this email is already registered";
        } else {
            errors.username = "this username is already registered";
        }
        return errors;
    }

    // validation errors
    if (err.message.includes("user validation failed")) {
        // console.log(err);
        Object.values(err.errors).forEach(({ properties }) => {
            // console.log(val);
            // console.log(properties);
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, "Syker", {
        expiresIn: maxAge,
    });
};
module.exports = {
    async addUser(req, res) {
       
        const { name, username, email, password, address } = req.body;
    
        try {
            const user = new User ({
                name: name,
                username: username,
                email: email,
                password: password,
                address: address
            });
            const data = await user.save();
          
            const token = createToken(data._id);
            res.cookie("User", token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(201).json({ user: data._id });
        } catch (err) {
            console.log(err);
            const errors = handleErrors(err);
            if (errors.username == "this username is already registered") {
                var found = await User.findOne({ email: email });
                if (found) {
                    errors.email = "this email is already registered this";
                }
            }
            res.status(400).send({errors});
        }
    },

    async Signin(req, res) {
        const { email, password } = req.body;
        try {
            const user = await User.login(email.trim(), password.trim());
            const token = createToken(data._id);
            res.cookie("User", token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(200).json({ user: user._id });
        } catch (err) {
            res.status(400).send(err.message);
        }
    }
};
