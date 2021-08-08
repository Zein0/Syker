const mongoose = require("mongoose");
const Products = require("../models/Product");
const Image = require("../models/Image");
module.exports = {
	async getAds(req, res) {
		try {
			const allProducts = await Products.find()
				.sort({ _id: -1 })
				.populate({ path: "image" });
			const newArrivals = await Products.find()
				.sort({ _id: -1 })
				.limit(3)
				.populate({ path: "image" });
			const BestSeller = [];
			BestSeller.push(newArrivals[0]);
			BestSeller.push(newArrivals[1]);
			BestSeller.push(newArrivals[2]);
			BestSeller.push(allProducts[Math.floor(allProducts.length / 2)]);
			BestSeller.push(allProducts[Math.floor(allProducts.length / 2) - 1]);
			BestSeller.push(allProducts[Math.floor(allProducts.length / 2) + 1]);
			const Images = [];
			BestSeller.map(async (best) => {
				const img = await Image.findOne({ product: best._id });
				Images.push(img);
				if (Images.length == 6) {
					res.json(Images);
				}
			});
		} catch (err) {
			res.json(err);
		}
	},
};
