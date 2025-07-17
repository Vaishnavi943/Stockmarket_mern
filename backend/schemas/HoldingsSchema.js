import { Schema, model } from "mongoose";

const HoldingsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String ,
})

const HoldingsModel = model("HoldingsModel", HoldingsSchema);
export default HoldingsModel;