const emailTemplate = require("../helper/emailTemplate");
const emailValidation = require("../helper/emailValidation");
const passwordValidation = require("../helper/passwordVlidation");
const sendemail = require("../helper/sendEmail");
const validation = require("../helper/validation");
const userList = require("../model/userSchema");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

async function registration(req, res) {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            password,
            confromPassword,
            addressOne,
            addressTwo,
            city,
            devision,
            postCode,
            distict
        } = req.body

        passwordValidation(password, confromPassword, req, res);
        emailValidation(email, req, res);
        validation(firstName, lastName, phone, password,
            addressOne, addressTwo, city, devision, postCode, distict, req, res);


        if (firstName && lastName && email && phone && password == confromPassword && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            && /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password)) {

            const existingEmail = await userList.findOne({ email })

            if (existingEmail) {
                return res.send("email already used")
            } else {
                bcrypt.hash(password, 10, function (err, hash) {
                    const users = new userList({
                        firstName,
                        lastName,
                        email,
                        phone,
                        password: hash,
                        addressOne,
                        addressTwo,
                        city,
                        devision,
                        postCode,
                        distict
                    })
                    users.save()
                    return res.send("registration suscces")
                });
            }
        }
        var token = jwt.sign({ email }, 'antorkhan');
        sendemail(email, "oliba", emailTemplate(token))

    } catch (error) {
        console.log(error);
    }
}

module.exports = registration;