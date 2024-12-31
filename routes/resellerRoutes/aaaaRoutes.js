const express = require('express');
const { addAAAARecord, updateAAAARecord, deleteAAAARecord } = require('../../controllers/resellerControllers/aaaaController');


const router = express.Router();

router.post('/add-AAAA-record', addAAAARecord);
router.put('/update-AAAA-record', updateAAAARecord);
router.delete('/delete-AAAA-record', deleteAAAARecord);



module.exports = router;