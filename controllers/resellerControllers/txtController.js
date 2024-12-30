const txtService = require('../../services/resellerServices/txtService');


exports.addTxtRecord = async (req, res) => {
    const { domainName, txtValue, host, ttl } = req.body;
    if (!domainName || !txtValue || !host || !ttl) {
        return res.status(400).json({
            message: 'All Fields are required { domainName, txtValue, host, ttl }',
        });
    }
    try {
        const response = await txtService.addTxtRecord({ domainName, txtValue, host, ttl });
        if (response.status === 'Success') {
            return res.status(200).json({
                message: 'TXT record add successfully.',
                details: response,
            });
        } else {
            return res.status(400).json({
                message: 'Failed to add TXT record.',
                details: response,
            });
        }
    } catch (error) {
        console.error('Error adding TXT record:', error.response?.data || error.message);
        return res.status(500).json({
            message: 'Error adding TXT record',
            error: error.response?.data?.message || error.message,
        });
    }
};


exports.updateTxtRecord = async (req, res) => {
    const { domainName, host, currentValue, newValue, ttl } = req.body;
    if (!domainName || !currentValue || !newValue) {
        return res.status(400).send({ message: 'Domain name, current value, and new value are required.' });
    }
    try {
        const response = await txtService.updateTxtRecord({ domainName, host, currentValue, newValue, ttl });
        if (response.status === 'Success' && response.msg === 'Record details have been modified successfully.') {
            return res.status(200).send({
                message: 'TXT record updated successfully',
                details: response,
            });
        } else {
            return res.status(400).send({
                message: 'Failed to update TXT record',
                details: response,
            });
        }
    } catch (error) {
        console.error('Error updating TXT record:', error.response?.data || error.message);
        return res.status(500).send({
            message: 'Error updating TXT record',
            error: error.response?.data?.message || error.message,
        });
    }
};


exports.deleteTxtRecord = async (req, res) => {
    const { domainName, host, txtValue } = req.body;
    if (!domainName || !host || !txtValue) {
        return res.status(400).json({
            message: 'All Fields are required { domainName, host, txtValue }',
        });
    }
    try {
        const response = await txtService.deleteTxtRecord({ domainName, host, txtValue });
        if (response.status === 'Success') {
            return res.status(200).json({
                message: 'TXT record deleted successfully.',
                details: response,
            });
        } else {
            return res.status(400).json({
                message: 'Failed to delete TXT record.',
                details: response,
            });
        }
    } catch (error) {
        console.error('Error deleting TXT record:', error.response?.data || error.message);
        return res.status(500).json({
            message: 'Error deleting TXT record',
            error: error.response?.data?.message || error.message,
        });
    }
};