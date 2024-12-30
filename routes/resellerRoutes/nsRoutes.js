const express = require('express');
const { addNsRecord, updateNsRecord, deleteNsRecord } = require('../../controllers/resellerControllers/nsController');

const router = express.Router();

router.post('/add-ns-record', addNsRecord);
router.put('/update-ns-record', updateNsRecord);
router.delete('/delete-ns-record', deleteNsRecord);


module.exports = router;