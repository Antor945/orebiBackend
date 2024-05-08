var jwt = require('jsonwebtoken');
const userList = require('../model/userSchema');

async function emailVerification(req, res) {

    const token = req.headers.authorization;
    var decoded = jwt.verify(token, 'antorkhan');
    const updatedemail = await userList.findOneAndUpdate(
        { email: decoded.email },
        { emailverified: true },
        { new: true }
    )
    updatedemail.save();
    res.send('Email verify successfully done')
}


module.exports = emailVerification;