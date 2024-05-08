
function emailValidation(email, req, res) {
    if (!email) {
        return  res.send('Email is requied')
        } else {
          if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return  res.send('You have entered an invalid email address!')
          }
        }
}

module.exports = emailValidation;