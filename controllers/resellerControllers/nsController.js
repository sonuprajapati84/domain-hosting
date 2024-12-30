const nsService = require('../../services/resellerServices/nsService');

exports.addNsRecord = async (req, res) => {
    const { domainName, nsValue, host, ttl } = req.body;
    if (!domainName || !nsValue || !host || !ttl) {
        return res.status(400).json({
            message: 'All Fields are required { domainName, nsValue, host, ttl }',
        });
    }
    try {
        const response = await nsService.addNsRecord({ domainName, nsValue, host, ttl });
        if (response.status === 'Success') {
            return res.status(200).json({
                message: 'NS record add successfully.',
                details: response,
            });
        } else {
            return res.status(400).json({
                message: 'Failed to add NS record.',
                details: response,
            });
        }
    } catch (error) {
        console.error('Error adding NS record:', error.response?.data || error.message);
        return res.status(500).json({
            message: 'Error adding NS record',
            error: error.response?.data?.message || error.message,
        });
    }
};


exports.updateNsRecord = async (req, res) => {
    const { domainName, host, currentValue, newValue, ttl } = req.body;
    if (!domainName || !currentValue || !newValue) {
        return res.status(400).send({ message: 'Domain name, current value, and new value are required.' });
    }
    try {
        const response = await nsService.updateNsRecord({ domainName, host, currentValue, newValue, ttl });
        if (response.status === 'Success' && response.msg === 'Record details have been modified successfully.') {
            return res.status(200).send({
                message: 'NS record updated successfully',
                details: response,
            });
        } else {
            return res.status(400).send({
                message: 'Failed to update NS record',
                details: response,
            });
        }
    } catch (error) {
        console.error('Error updating NS record:', error.response?.data || error.message);
        return res.status(500).send({
            message: 'Error updating NS record',
            error: error.response?.data?.message || error.message,
        });
    }
};


exports.deleteNsRecord = async (req, res) => {
    const { domainName, host, nsValue } = req.body;
    if (!domainName || !host || !nsValue ) {
        return res.status(400).json({
            message: 'All Fields are required { domainName, host, nsValue }',
        });
    }
    try {
        const response = await nsService.deleteNsRecord({ domainName, host, nsValue });
        if (response.status === 'Success') {
            return res.status(200).json({
                message: 'NS record deleted successfully.',
                details: response,
            });
        } else {
            return res.status(400).json({
                message: 'Failed to delete NS record.',
                details: response,
            });
        }
    } catch (error) {
        console.error('Error deleting NS record:', error.response?.data || error.message);
        return res.status(500).json({
            message: 'Error deleting NS record',
            error: error.response?.data?.message || error.message,
        });
    }
};