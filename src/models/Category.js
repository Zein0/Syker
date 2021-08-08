const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const catSchema = new Schema({
	name: {
		type: String,
		required: [true, "please Enter a Category Name"],
		unique: true,
	},
	subcategory: [
		{
			id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "subcategory",
			},
		},
	],
});

module.exports = mongoose.model("category", catSchema);
