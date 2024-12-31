const aaaaService = require('../../services/resellerServices/aaaaService');



exports.addAAAARecord = async (req, res) => {
    const { domainName, addressValue, host, ttl } = req.body;
    if (!domainName || !addressValue || !host || !ttl) {
        return res.status(400).json({
            message: 'All Fields are required { domainName, addressValue, host, ttl }',
        });
    }
    try {
        const response = await aaaaService.addAAAARecord({ domainName, addressValue, host, ttl });
        if (response.status === 'Success') {
            return res.status(200).json({
                message: 'IPv6 address record added successfully.',
                details: response,
            });
        } else {
            return res.status(400).json({
                message: 'Failed to add IPv6 address record.',
                details: response,
            });
        }
    } catch (error) {
        console.error('Error adding IPv6 address record:', error.response?.data || error.message);
        return res.status(500).json({
            message: 'Error adding IPv6 address record',
            error: error.response?.data?.message || error.message,
        });
    }
};


exports.updateAAAARecord = async (req, res) => {
    const { domainName, oldAddressValue, newAddressValue, host, ttl } = req.body;
    if (!domainName || !oldAddressValue || !newAddressValue || !host || !ttl) {
        return res.status(400).json({
            message: 'All fields are required { domainName, oldAddressValue, newAddressValue, host, ttl }',
        });
    }
    try {
        const response = await aaaaService.updateAAAARecord({ domainName, oldAddressValue, newAddressValue, host, ttl });
        if (response.status === 'Success') {
            return res.status(200).json({
                message: 'IPv6 address record updated successfully.',
                details: response,
            });
        } else {
            return res.status(400).json({
                message: 'Failed to update IPv6 address record.',
                details: response,
            });
        }
    } catch (error) {
        console.error('Error updating IPv6 address record:', error.response?.data || error.message);
        return res.status(500).json({
            message: 'Error updating IPv6 address record',
            error: error.response?.data?.message || error.message,
        });
    }
};



exports.deleteAAAARecord = async (req, res) => {
    const { domainName, host, Value } = req.body;
    if (!domainName || !host || !Value ) {
        return res.status(400).json({
            message: 'All Fields are required { domainName, host, addressValue }',
        });
    }
    try {
        const response = await aaaaService.deleteAAAARecord({ domainName, host, Value });
        if (response.status === 'Success') {
            return res.status(200).json({
                message: 'Address(IPv6) record deleted successfully.',
                details: response,
            });
        } else {
            return res.status(400).json({
                message: 'Failed to delete Address(IPv6) record.',
                details: response,
            });
        }
    } catch (error) {
        console.error('Error deleting Address(IPv6) record:', error.response?.data || error.message);
        return res.status(500).json({
            message: 'Error deleting Address(IPv6) record',
            error: error.response?.data?.message || error.message,
        });
    }
};