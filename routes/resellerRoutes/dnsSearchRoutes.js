const express = require('express');
const { searchDnsRecords } = require('../../controllers/resellerControllers/dnsSearchController');

const router = express.Router();



router.get('/search-records',searchDnsRecords);

module.exports = router;
