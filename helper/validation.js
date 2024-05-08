

function validation(firstName, lastName, phone,
    addressOne, addressTwo, city, devision, postCode, distict, req, res) {

    if (!firstName) {
        return res.send("First Name is requied")
    };
    if (!lastName) {
        return res.send('Last name is requied')
    };
    if (!phone) {
        return  res.send('Phone is requied')
    };

    if (!addressOne) {
        return res.send(`addressOne is requied`)
    };
    if (!addressTwo) {
        return res.send(`addressTwo is requied`)
    };
    if (!city) {
        return res.send(`city is requied`)
    };
    if (!devision) {
        return res.send(`devision is requied`)
    };
    if (!postCode) {
        return res.send(`postCode is requied`)
    };
    if (!distict) {
        return res.send(`distict is requied`)
    };
}

module.exports = validation;