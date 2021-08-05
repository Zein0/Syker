const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    shirt: {
        type: String,
        required:true
    },
    size: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Shirts',PostSchema);