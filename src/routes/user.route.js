const router = require('express').Router();
const UserControllers = require('../controllers/user.controllers');

router.get('/users', UserControllers.getAllUsers); 
router.post('/users', UserControllers.createUser)
router.put('/users/:userId', UserControllers.updateUser)
router.delete('/users/:userId', UserControllers.deleteUser)
router.get('/users/:userId', UserControllers.getUserById)

module.exports = router;