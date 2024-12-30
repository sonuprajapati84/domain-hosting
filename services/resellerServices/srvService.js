const axios = require('axios');

exports.addSrvRecord = async ({ domainName, srvValue, host, ttl, priority, port, weight }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/add-srv-record.json', 
      null, 
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'SRV',
          'value': srvValue,
          'host': host,
          'ttl': ttl,
          'priority': priority,
          'port': port,
          'weight': weight
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error adding SRV record: ' + error.message);
  }
};


exports.updateSrvRecord = async ({ domainName, host, currentValue, newValue, ttl }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/update-ns-record.json', 
      null, 
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'SRV',
          'host': host,
          'current-value': currentValue,
          'new-value': newValue,
          'ttl': ttl,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error updating SRV record: ' + error.message);
  }
};


exports.deleteSrvRecord = async ({ domainName, host, srvValue, port, weight }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/delete-srv-record.json',
      null,
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'SRV',
          'host': host,
          'value': srvValue,
          'port': port,
          'weight': weight,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error deleting SRV record: ' + error.message);
  }
};