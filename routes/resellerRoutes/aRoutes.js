const express = require('express');
const { addRecord, updateRecord, deleteAddressRecord } = require('../../controllers/resellerControllers/aController');

const router = express.Router();
router.post('/add-address', addRecord);
router.put('/update-record', updateRecord);
router.delete('/delete-address', deleteAddressRecord);

module.exports = router;