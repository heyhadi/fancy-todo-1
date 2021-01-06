const bcrypt = require('bcryptjs')

function hashPassword (userPassword) {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(userPassword, salt)

    return hash
}

function comparePass(userPassword,hash){
    return bcrypt.compareSync(userPassword,hash)
}

module.exports = {hashPassword, comparePass}