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
    }
}

const createUser = async (req, res) => {
    try {
        const {firstName, lastName, email, password } = req.body

        if (!firstName && !lastName && !email && !password) {
            throw new Error('Pastikan seluruh field terisi')
        }

        const createdUser = await userModel.createUser(firstName, lastName, email, password)
        if (!createdUser.affectedRows) {
            throw new Error('Terjadi kesalahan')
        }

        return res.status(201).json({
            status : 201,
            data : req.body
        })

    } catch (error) {
        return res.status(500).json({
            status : 500,
            message : `Internal Server Error : ${error.message}`
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const {userId} = req.params
        const {firstName, lastName, email, password} = req.body 

        if (!firstName && !lastName && !email && !password) {
            throw new Error('Pastikan semua field terisi')
        }

        const updatedUser = await userModel.updateUser(userId, firstName, lastName, email, password)
        if (!updatedUser.affectedRows) {
            throw new Error('Terjadi kesalahan')
        }
        
        return res.status(200).json({
            status:200,
            data : {
                userId,
                ...req.body
            }
        })
    } catch (error) {
        return res.status(500).json({
            status : 500,
            message : `Internal Server Error : ${error.message}`
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const {userId} = req.params
        
        const deletedUser = await userModel.deleteUser(userId)
        if (!deletedUser.affectedRows) {
            throw new Error('Terjadi kesalahan')
        }

        return res.status(200).json({
            status : 200,
            data : {
                userId
            }
        })

    } catch (error) {
        return res.status(500).json({
            status : 500,
            message : `Internal Server Error: ${error.message}`
        })
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.userId)
        if (!user || user.length === 0) {
            return res.status(404).json({
                succes: false,
                message: "User tidak ditemukan"
            })
        }
        return res.status(200).json({
            succes : true,
            message:"User berhasil ditemukan",
            data : user
        })
    } catch (error) {
        return res.status(500).json({
            status : 500,
            message : `Internal Server Error: ${error.message}`
        })
    }
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById

}