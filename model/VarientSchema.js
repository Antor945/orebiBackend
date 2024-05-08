const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const variantSchema = new Schema({
    name: {
        type: String,
        // required: true
    },
    storage: {
        type: String
    },
    ram: {
        type: String
    },
    color: {
        String
    },
    image: {
        type: String
    },
    size: {
        type: String
    },
    product: {
        // type: Schema.Types.ObjectId,
        // ref: 'productList',
        // required: true
    },
    created: {
        type: Date,
        default: new Date(),
    },
    updated: {
        type: Date
    }
});

module.exports = mongoose.model('variant', variantSchema)