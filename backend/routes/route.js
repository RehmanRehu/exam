const express = require('express')
const router = express.Router();

const usercontroller = require('../controller/usercontroller')

router.post('/users', validate(createUserSchema), usercontroller.createUser);
router.post('/login', validate(loginSchemab), usercontroller.loginUser);
router.put('update/:id', protect, authorize('User'), usercontroller.updateUserById);
router.put('delete/:id', usercontroller.softdeleteById);


Module.exports = router;
