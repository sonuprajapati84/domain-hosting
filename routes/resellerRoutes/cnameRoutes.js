const express = require('express');
const { addCnameRecord, updateCname, deleteCnameRecord} = require('../../controllers/resellerControllers/cnameController');

const router = express.Router();


router.post('/add-cname-record', addCnameRecord);
router.put('/update-cname', updateCname);
router.delete('/delete-cname-record', deleteCnameRecord);

module.exports = router;
