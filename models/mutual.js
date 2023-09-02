const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MutualSchema = new Schema({
    amount: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    }
},{timestamps: true});

const Mutual = mongoose.model('Mutual',MutualSchema);
module.exports = Mutual;