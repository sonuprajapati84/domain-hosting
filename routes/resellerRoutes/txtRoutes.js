const express = require('express');
const { addTxtRecord, updateTxtRecord, deleteTxtRecord } = require('../../controllers/resellerControllers/txtController');

const router = express.Router();

router.post('/add-txt-record', addTxtRecord);
router.put('/update-txt-record', updateTxtRecord);
router.delete('/delete-txt-record', deleteTxtRecord);

module.exports = router;