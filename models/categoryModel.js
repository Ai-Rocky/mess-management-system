const mongoose = require('mongoose');
const schema = mongoose.Schema;


const categorySchema = new schema({
    name: {
        type: String,
        unique: false,
        required: true
    },
    messName: {
        type: String,
        unique: false,
        required: true
    }
});


module.exports = mongoose.model('category',categorySchema);