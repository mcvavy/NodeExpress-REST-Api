const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;

const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }

    //add n geo location

});

//Model
const Ninja = mongoose.model("ninja", NinjaSchema);

module.exports = Ninja;