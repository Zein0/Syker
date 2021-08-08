const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itemSchema = new Schema({
	name: {
		type: String,
		required: [true, "please Enter an item-Type Name"],
	},
	product: [
		{
			id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "product",
			},
		},
	],
	subcategory: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "subcategory",
	},
});

module.exports = mongoose.model("itemtype", itemSchema);
