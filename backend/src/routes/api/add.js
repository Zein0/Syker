const express = require("express");
const router = express.Router();
const Shirts = require("../../models/Shirts");
const Catgories1 = require("../../models/Category1");
const { requireAuth } = require("../../Middleware/authUser");

router.post("/addCatgories", async (req, res) => {
	try {
		const newCatgories1 = new Catgories1({
			shirt: req.body.shirt,
			pants: req.body.pants,
		});
		newCatgories1 = await newCatgories1.save();
		res.status(201).json(newCatgories1);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});
router.get("/readCatgories", requireAuth, async (req, res) => {
	try {
		const posts = await Catgories1.find();
		if (!posts) throw Error("No Shirts");
		res.status(200).json(posts);
	} catch (err) {
		console.log("hii");
		res.status(400).json({ msg: err });
	}
});

router.post("/add", async (req, res) => {
	try {
		const newShirts = new Shirts({
			shirt: req.body.shirt,
			size: req.body.size,
		});
		newShirts = await newShirts.save();
		res.status(201).json(newShirts);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});
router.get("/read", async (req, res) => {
	try {
		const posts = await Shirts.find();
		if (!posts) throw Error("No Shirts");
		res.status(200).json(posts);
	} catch (err) {
		res.status(400).json({ msg: err });
	}
});

module.exports = router;
