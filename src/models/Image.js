const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ImageSchema = new Schema({
	imageName: {
		type: String,
		default: "none",
		required: true,
	},
	imageData: {
		type: String,
		required: true,
	},
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "product",
	},
});
var Image = mongoose.model("Image", ImageSchema);
module.exports = Image;
