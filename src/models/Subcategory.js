const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const subSchema = new Schema({
	name: {
		type: String,
		required: [true, "please Enter a Subcategory Name"],
		unique: true,
	},
	itemtype: [
		{
			id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "itemtype",
			},
		},
	],
});

module.exports =  mongoose.model("subcategory", subSchema);
