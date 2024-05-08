const userList = require('../model/userSchema');
const emailValidation = require('../helper/emailValidation');
const passwordValidation = require('../helper/passwordVlidation');
const bcrypt = require('bcrypt');

async function loginController(req, res) {
    try {
        const { email, password } = req.body;

        emailValidation(email, req, res);
        passwordValidation(password, req, res);

        const existingUser = await userList.findOne({ email });

        if (existingUser) {
            bcrypt.compare(password, existingUser.password, function (err, result) {
                if (result) {
                    return res.send("Login successful");
                } else {
                    return res.send("Login Failed: Incorrect password");
                }
            });
        } else {
            return res.send("Login Failed: User not found");
        }

    } catch (error) {

    }
}
module.exports = loginController;

// if (existingUser) {
//     const passwordMatch = bcrypt.compare(password, existingUser.password);
//     console.log(passwordMatch);
//     if (passwordMatch) {
//        return res.send("Login successful");
//     } else {
//        return res.send("Login Failed: Incorrect password");
//     }
//  } else {
//     return res.send("Login Failed: User not found");
//  }