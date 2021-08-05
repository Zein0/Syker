const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");
const adminSchema = new Schema({
	name: {
		type: String,
		required: [true, "please Enter your Name"],
		lowercase: true,
	},
	username: {
		type: String,
		required: [true, "please Enter your user name"],
		unique: true,
	},
	email: {
		type: String,
		required: [true, "please Enter your Email"],
		unique: true,
		lowercase: true,
		validate: [isEmail, "please Enter a valid Email"],
	},
	pass: {
		type: String,
		required: [true, "please Enter a Password"],
		minlength: [8, "minimum password length is 8 characters"],
	},
});

module.exports = mongoose.model("admin", adminSchema);
