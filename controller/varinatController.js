const VarientSchema = require("../model/VarientSchema");
const productSchema = require("../model/productSchema");

async function variantControler(req, res) {
    
    const { name, price, storage, ram, color, image, product } = req.body

    const variant = new VarientSchema({
        name,
        price,
        storage,
        ram,
        color,
        image:`http://https://localhost:8000/upload/${req.file.filename}`,
        product
    });
    variant.save()
    res.send("variant create successful")
    await productSchema.findByIdAndUpdate(

        // { _id:variant.product },
        // { $push: { variant: variant._id } },
        // { new: true }
    )
}

module.exports = variantControler;