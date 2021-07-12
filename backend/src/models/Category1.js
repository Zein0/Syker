const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostCategory1 = new Schema({
    shirt: {
        type: String,
        required:true
    },
    pants: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Category1',PostCategory1);