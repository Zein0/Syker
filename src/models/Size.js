const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sizeSchema = new Schema({
	name: {
		type: String,
		required: [true, "please Enter a size Name"],
	},
	quantity: {
		type: Number,
		required: [true, "please Enter a quantity number"],
	},
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "product",
	},
});

module.exports = mongoose.model("size", sizeSchema);
