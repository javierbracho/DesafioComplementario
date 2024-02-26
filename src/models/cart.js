import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    Products: [
        {
            Product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            Quantity: {
                type: Number,
                required: true
            }
        }
    ]
})

const CartModel = mongoose.model("Carts", CartSchema)

export default CartModel