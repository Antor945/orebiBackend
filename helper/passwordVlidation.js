
function passwordValidation(password, confromPassword, req, res) {
    try {
        if (password != confromPassword) {
            return res.send(`password dose't exist`)
        };
        if (!confromPassword) {
            return res.send('ConfromPassword is requied')
        };
        if (!password) {
            return res.send('Password is requied')
        } else if (!/(?=.*[a-z])/.test(password)) {
            return res.send("1 lowercase alphabetical character")
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            return res.send("1 uppercase alphabetical character")
        } else if (!/(?=.*[0-9])/.test(password)) {
            return res.send(" 1 numeric character")
        } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            return res.send("  at least one special character")
        } else if (!/(?=.{8,})/.test(password)) {
            return res.send("The string must be eight characters or longer")
        }

    } catch (error) {
        console.log(error);
    }
}


module.exports = passwordValidation;