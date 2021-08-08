const mongoose = require("mongoose");
const Products = require("../models/Product");
const Itemtype = require("../models/Itemtype");
const Size = require("../models/Size");
const Image = require("../models/Image");
const Cart = require("../models/Cart");
const Category = require("../models/Category");
const Subcategory = require("../models/Subcategory");
const imageapi = require("../routes/api/image");
const { checkUser } = require("../Middleware/authUser");
module.exports = {
	async getProductsOfAllTypes(req, res) {
		const { size, subcategory } = req.body;
		const products = [];
		const finalp = [];
		const final = [];
		try {
			const SubCat = await Subcategory.findOne({ name: subcategory });
			const itemtype = await Itemtype.find({ subcategory: SubCat._id });
			itemtype.map((item) => {
				item.product.map((prod) => {
					products.push(prod);
				});
			});
			for (var i = 0; i < products.length; i++) {
				const thisproduct = await Products.findOne(products[i]._id).populate({
					path: "image",
				});
				const image = await Image.findOne(thisproduct.image[0]);
				const size = await Size.findOne(thisproduct.size[0]);
				final.push({
					name: thisproduct.name,
					price: thisproduct.price,
					size: size.name,
					image: image.imageData,
				});
			}
			res.json(final);
		} catch (err) {
			res.json(err);
		}
	},
	async getProductsOfType(req, res) {
		const { size, subcategory, type } = req.body;
		const products = [];
		const finalp = [];
		const final = [];
		try {
			const SubCat = await Subcategory.findOne({ name: subcategory });
			const itemtype = await Itemtype.findOne({
				name: type,
				subcategory: SubCat._id,
			});

			itemtype.product.map((prod) => {
				products.push(prod);
			});
			for (var i = 0; i < products.length; i++) {
				const thisproduct = await Products.findOne(products[i]._id).populate({
					path: "image",
				});
				const image = await Image.findOne(thisproduct.image[0]);
				const size = await Size.findOne(thisproduct.size[0]);
				final.push({
					name: thisproduct.name,
					price: thisproduct.price,
					size: size.name,
					image: image.imageData,
				});
			}
			res.json(final);
		} catch (err) {
			res.json(err);
		}
	},
	async CreateCartWithProduct(req, res, x, y) {
		const newCart = new Cart({
			ordered: false,
			cartItems: [
				{
					product: y._id,
					quantity: 1,
					Price: y.price,
				},
			],
			User: x,
		});
		await newCart.save().then((shop) => res.json(shop));
	},
	async addToCart(req, res) {
		var add = false;
		const x = req.body.user;
		const product = await Products.findOne({ name: req.body.name });
		// try{

		const cart = await Cart.findOne({ User: x, ordered: false });
		console.log(cart);
		if (!cart) {
			this.CreateCartWithProduct(req, res, x, product);
			return;
		}
		cart.cartItems.map((item) => {
			if (item.product.equals(product._id)) {
				item.quantity++;

				add = true;
			}
		});
		if (add == false) {
			cart.cartItems.push({
				product: product._id,
				quantity: 1,
				Price: product.price,
			});
		}
		await cart.save();
		res.json(cart);
	},
	async getNum(req, res) {
		var quan = 0;
		const x = req.body.user;
		const cart = await Cart.findOne({ User: x, ordered: false });
		if (!cart) {
			res.json({ quantity: 0 });
			return;
		}
		cart.cartItems.map((item) => {
			quan += item.quantity;
		});
		res.json({ quantity: quan });
	},
	async getCart(req, res) {
		const data = await checkUser(req, res);
		const x = data.user;

		if (x == null) {
			res.json({ error: true });
		} else {
			const totalCart = [];
			const cart = await Cart.findOne({ User: x, ordered: false });
			if (!cart) {
				res.json({ cart: null });
				return;
			}
			var i = cart.cartItems.length;
			cart.cartItems.map(async (item) => {
				const prod = await Products.findOne(item.product);
				const img = await Image.findOne({ product: prod._id });
				totalCart.push({
					image: img.imageData,
					name: prod.name,
					price: item.Price,
					quantity: item.quantity,
				});
				i--;
				if (i == 0) {
					console.log(totalCart);
					res.json({ cart: totalCart });
				}
			});
		}
	},
	async deleteproduct(req, res) {
		const data = await checkUser(req, res);
		const x = data.user;
		const product = await Products.findOne({ name: req.body.name });
		if (x == null) {
			res.json({ error: true });
		} else {
			const cart = await Cart.findOne({ User: x, ordered: false });
			for (var i = 0; i < cart.cartItems.length; i++) {
				if (cart.cartItems[i].product.equals(product._id)) {
					if (cart.cartItems[i].quantity > 1) {
						cart.cartItems[i].quantity--;
						await cart.save();
					} else {
						cart.cartItems.splice(i, 1);
						await cart.save();
					}
				}
			}
			res.json({ cart: cart });
		}
	},
	async OrderCart(req, res) {
		const data = await checkUser(req, res);
		const x = data.user;
		if (x == null) {
			res.json({ error: true });
		} else {
			const cart = await Cart.findOne({ User: x, ordered: false });
			console.log(cart.ordered);
			cart.ordered = true;
			await cart.save();
			res.json({ error: false });
		}
	},
};
