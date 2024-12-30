const dnsSearchServices = require('../../services/resellerServices/dnsSearchService');

exports.searchDnsRecords = async (req, res) => {
    try {
        const { domainName, type, noOfRecords, pageNo, host, value } = req.body;
        if (!domainName || !type || !noOfRecords || !pageNo) {
            return res.status(400).json({ message: 'Missing required parameters { domainName, type, noOfRecords, pageNo, host, value }' });
        }
        const records = await dnsSearchServices.searchDnsRecords({
            domainName,
            type,
            noOfRecords,
            pageNo,
            host,
            value,
        });
        // console.log('Response from DNS Service:', records);
        if (records.recsonpage === '0' && records.recsindb === '0') {
            return res.status(404).json({
                message: 'No DNS records found.',
            });
        }
        return res.status(200).json({
            message: 'DNS records fetched successfully.',
            details: records,
        });
    } catch (error) {
        // console.error('Error searching DNS records:', error.message);
        return res.status(500).json({
            message: 'Error searching DNS records',
            error: error.message,
        });
    }
};
