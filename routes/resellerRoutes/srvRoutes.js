const express = require('express');
const { addSrvRecord, updateSrvRecord, deleteSrvRecord } = require('../../controllers/resellerControllers/srvController');

const router = express.Router();

router.post('/add-srv-record', addSrvRecord);
router.put('/update-srv-record', updateSrvRecord);
router.delete('/delete-srv-record', deleteSrvRecord);


module.exports = router;