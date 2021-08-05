const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = (req, res, next) => {
	const token = req.cookies["User"];
	// check json web token exists & is verified
	if (token) {
		// console.log("zabt");
		jwt.verify(token, "Syker", (err, decodedToken) => {
			if (err) {
				// console.log("ntz3");
				res.json({ error: 1 });
			} else {
				// console.log("zabt2");
				// console.log(decodedToken);
				next();
			}
		});
	} else {
		// console.log("ntz32");
		res.json({ error: 1 });
	}
};
const checkUser = async (req, res, next) => {
	const token = req.cookies["User"];
	if (token) {
		return jwt.verify(token, "Syker", async (err, decodedToken) => {
			if (err) {
				return { user: null };
			} else {
				let user = await User.findById(decodedToken.id);
				return { user: user };
			}
		});
	} else {
		return { user: null };
	}
};
module.exports = { requireAuth, checkUser };
