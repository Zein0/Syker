const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartSchema = new Schema({
	ordered: {
		type: Boolean,
	},
	dateOfOrder: {
		type: Date,
	},
	address: {
		type: String,
	},
	cartItems: [
		{
			product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "products",
			},
			quantity: {
				type: Number,
			},
			Price: {
				type: Number,
			},
		},
	],
	TotalPrice: {
		type: Number,
	},
	User: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
});

module.exports = mongoose.model("cart", cartSchema);
