const express = require('express');
const employeeRoutes = require('./employeeRouter');

let router = express.Router();

router.use = ("/employee" , employeeRoutes);

module.exports = router;