const srvService = require('../../services/resellerServices/srvService');

exports.addSrvRecord = async (req, res) => {
    const { domainName, srvValue, host, ttl, priority, port, weight } = req.body;
    if (!domainName || !srvValue || !host || !ttl) {
        return res.status(400).json({
            message: 'All Fields are required { domainName, SrvValue, host, ttl }',
        });
    }
    try {
        const response = await srvService.addSrvRecord({ domainName, srvValue, host, ttl, priority, port, weight });
        if (response.status === 'Success') {
            return res.status(200).json({
                message: 'SRV record add successfully.',
                details: response,
            });
        } else {
            return res.status(400).json({
                message: 'Failed to add SRV record.',
                details: response,
            });
        }
    } catch (error) {
        console.error('Error adding SRV record:', error.response?.data || error.message);
        return res.status(500).json({
            message: 'Error adding SRV record',
            error: error.response?.data?.message || error.message,
        });
    }
};


exports.updateSrvRecord = async (req, res) => {
    const { domainName, host, currentValue, newValue, ttl } = req.body;
    if (!domainName || !currentValue || !newValue) {
        return res.status(400).send({ message: 'Domain name, current value, and new value are required.' });
    }
    try {
        const response = await srvService.updateSrvRecord({ domainName, host, currentValue, newValue, ttl });
        if (response.status === 'Success' && response.msg === 'Record details have been modified successfully.') {
            return res.status(200).send({
                message: 'SRV record updated successfully',
                details: response,
            });
        } else {
            return res.status(400).send({
                message: 'Failed to update SRV record',
                details: response,
            });
        }
    } catch (error) {
        console.error('Error updating SRV record:', error.response?.data || error.message);
        return res.status(500).send({
            message: 'Error updating SRV record',
            error: error.response?.data?.message || error.message,
        });
    }
};



exports.deleteSrvRecord = async (req, res) => {
    const { domainName, host, srvValue, port, weight } = req.body;
    if (!domainName || !host || !srvValue || !port || !weight) {
        return res.status(400).json({
            message: 'All Fields are required { domainName, host, srvValue, port, weight }',
        });
    }
    try {
        const response = await srvService.deleteSrvRecord({ domainName, host, srvValue, port, weight });
        if (response.status === 'Success') {
            return res.status(200).json({
                message: 'SRV record deleted successfully.',
                details: response,
            });
        } else {
            return res.status(400).json({
                message: 'Failed to delete SRV record.',
                details: response,
            });
        }
    } catch (error) {
        console.error('Error deleting SRV record:', error.response?.data || error.message);
        return res.status(500).json({
            message: 'Error deleting SRV record',
            error: error.response?.data?.message || error.message,
        });
    }
};