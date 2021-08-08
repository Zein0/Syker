const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const proSchema = new Schema({
	name: {
		type: String,
		required: [true, "please Enter a product Name"],
		unique: true,
	},
	price: {
		type: Number,
		required: [true, "please Enter a price"],
	},
	image: [
		{
			id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "image",
			},
		},
	],
	size: [
		{
			id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "size",
			},
		},
	],
	itemtype: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "itemtype",
	},
});

module.exports = mongoose.model("product", proSchema);
