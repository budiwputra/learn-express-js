const router = require('express').Router();
const UserControllers = require('../controllers/user.controllers');

router.get('/users', UserControllers.getAllUsers); // ngambil semua data

module.exports = router;