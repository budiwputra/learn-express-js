const userModel = require('../models/user.model')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.getAllUsers()
        return res.status(200).json({
            status : 200,
            data : allUsers
        })
    } catch (error) {
        return res.status(500).json({
            status : 500,
            message : `Internal Server Error : ${error.message}`
        })

    } finally {
        console.log('data res :', res)
    }
}

module.exports = {
    getAllUsers
}