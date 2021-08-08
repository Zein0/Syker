const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const userSchema = new Schema({
	name: {
		type: String,
		required: [true, "Please Enter your Name"],
		lowercase: true,
	},
	username: {
		type: String,
		required: [true, "Please Enter your user name"],
		unique: true,
		lowercase: true,
	},
	email: {
		type: String,
		required: [true, "Please Enter your Email"],
		unique: true,
		lowercase: true,
		validate: [isEmail, "Please Enter a valid Email"],
	},
	password: {
		type: String,
		required: [true, "Please Enter a Password"],
		minlength: [8, "minimum password length is 8 characters"],
	},
	address: {
		type: String,
		required: [true, "Please Enter your address"],
	},
});
userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});
userSchema.statics.login = async function (email, password) {
	const usr = await this.findOne({ email });
	if (usr) {
		const auth = await bcrypt.compare(password, usr.password);
		if (auth) {
			return usr;
		}
	} else {
		const usr = await this.findOne({ username: email });
		if (usr) {
			const auth = await bcrypt.compare(password, usr.password);
			if (auth) {
				return usr;
			}
		}
	}
	throw Error("Email or password are wrong");
};
module.exports = mongoose.model("user", userSchema);
