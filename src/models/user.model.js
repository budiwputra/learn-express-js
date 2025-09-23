const connection = require('../database/connection')
const crypto = require('crypto')

const getAllUsers = () => new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) reject(err)
            resolve(results)
    })
})

module.exports = {getAllUsers}