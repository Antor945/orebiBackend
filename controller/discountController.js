const discountSchema = require("../model/discountSchema");

function productdiscount(req, res) {
    const { price, cash, product } = req.body;

    const discountData = new discountSchema({
        price,
        cash,
        product
    })
    discountData.save();
    res.send("discount create successfull")
};


async function getallDiscount(req,res) {
    const discount = await discountSchema.find({})
    res.send(discount)
}

module.exports = { productdiscount, getallDiscount };

