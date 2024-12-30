const express = require('express');
const { addMxRecord, updateMxRecord, deleteMxRecord } = require('../../controllers/resellerControllers/mxController');

const router = express.Router();
router.post('/add-mx-record', addMxRecord);
router.put('/update-mx-record', updateMxRecord);
router.delete('/delete-mx-record', deleteMxRecord);


module.exports = router;