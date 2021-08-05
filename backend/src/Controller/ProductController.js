const mongoose = require("mongoose");
const Products = require("../models/Product");
const Itemtype = require("../models/Itemtype");
const Size = require("../models/Size");
const Image = require("../models/Image");
const Category = require("../models/Category");
const Subcategory = require("../models/Subcategory");
const imageapi = require("../routes/api/image");
module.exports = {
	async getAllProducts(req, res) {
		await Products.find()
			// .populate({ path: "description", select: ["Body"] })
			.then((products) => res.json(products));
		return products;
	},
	async Merge(req, res) {
		const { productid, imageid } = req.body;
		try {
			const product = await Products.findOne({ _id: productid });
			const image = await Image.findOne({ _id: imageid });
			image.product = product._id;
			await image.save();
			product.image.push(image._id);
			await product.save();
			res.json({ product, image });
		} catch (err) {
			res.json({ err });
		}
	},
	async AddCat(req, res) {
		const { name } = req.body;
		try {
			const newCat = new Category({
				name: name,
			});
			const n = await newCat.save();
			res.json(n);
		} catch (err) {
			res.status(404).json(err);
		}
	},
	async AddSCat(req, res) {
		const { name } = req.body;
		try {
			const newSCat = new Subcategory({
				name: name,
			});
			const n = await newSCat.save();
			const cat = await Category.findOne({ name: req.body.cat });
			cat.subcategory.push({ id: n._id });
			const c = await cat.save();
			res.json(c);
		} catch (err) {
			res.status(404).json(err);
		}
	},
	async AddType(req, res) {
		const { name } = req.body;
		try {
			const sub = await Subcategory.findOne({ name: req.body.subcategory });
			const newType = new Itemtype({
				name: name,
				subcategory: sub._id,
			});
			const n = await newType.save();
			sub.itemtype.push(newType._id);
			const c = await sub.save();
			res.json(c);
		} catch (err) {
			res.status(404).json("nope");
		}
	},

	async AddProduct(req, res) {
		const { name, price, size, quantity, itemtype, subcategory } = req.body;
		// const imageData = req.file.path;
		const subid = await Subcategory.findOne({ name: subcategory });
		try {
			const thisitem = await Itemtype.findOne({
				name: itemtype,
				subcategory: subid._id,
			});
			const newProduct = new Products({
				name: name,
				price: price,
				itemtype: thisitem._id,
			});
			const finalp = await newProduct.save();

			thisitem.product.push(finalp._id);
			// req2 = {
			// 	body: {
			// 		imageName: imageName,
			// 		product: newProduct.name,
			// 	},
			// 	file: {
			// 		path: imageData,
			// 	},
			// };
			// imageapi.AddImage(req2, res);

			await thisitem.save();
			const newSize = new Size({
				name: size,
				quantity: quantity,
				product: finalp._id,
			});
			const finals = await newSize.save();
			finalp.size.push(finals._id);
			await finalp.save();
			res.json({ product: finalp._id });
		} catch (err) {
			res.json("bad");
		}
	},

	async deleteProduct(req, res) {
		const { name } = req.body;
		try {
			const produ = await Products.findOne({ name: name });
			groupS = produ.size;
			groupS.map(async (oneS) => {
				const size = await Size.findOne(oneS._id);
				await size.remove();
			});

			const type = await Itemtype.findOne(produ.itemtype);
			for (var i = 0; i < type.product.length; i++) {
				if (type.product[i]._id.equals(produ._id)) {
					type.product.splice(i, 1);
					await type.save();
					break;
				}
			}
			await produ.remove();
			res.json("done");
		} catch (err) {
			res.status(404).json("ahbal");
		}
	},
	async deleteIndex(req, i) {
		const type = await Itemtype.findOne(req.id);

		type.product.splice(req.i, 1);
		await type.save();

		// console.log(i);
	},
	async UpdateProduct(req, res, x) {
		var newProduct = {
			name: req.body.name,
			Quantity: req.body.Quantity,
			Price: req.body.Price,
		};
		Products.findById(x).then((products) => {
			if (newProduct.name == null) {
				newProduct.name = products.name;
			}
			if (newProduct.Quantity == null) {
				newProduct.Quantity = products.Quantity;
			}
			if (newProduct.Price == null) {
				newProduct.Price = products.Price;
			}
			Products.findByIdAndUpdate(x, {
				name: newProduct.name,
				Quantity: newProduct.Quantity,
				Price: newProduct.Price,
			})
				.then(() => res.json({ success: true }))
				.catch((err) => res.status(404).json({ success: false }));
		});
	},
};
