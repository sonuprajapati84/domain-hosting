const axios = require('axios');



exports.addMxRecord = async ({ domainName, mxValue, host, ttl }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/add-mx-record.json', 
      null, 
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'MX',
          'value': mxValue,
          'host': host,
          'ttl': ttl
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error adding MX record: ' + error.message);
  }
};



exports.updateMxRecord = async ({ domainName, host, currentValue, newValue, ttl }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/update-mx-record.json', 
      null, 
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'MX',
          'host': host,
          'current-value': currentValue,
          'new-value': newValue,
          'ttl': ttl,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error updating MX record: ' + error.message);
  }
};


exports.deleteMxRecord = async ({ domainName, host, mxValue }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/delete-mx-record.json',
      null,
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'MX',
          'host': host,
          'value': mxValue,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error deleting MX record: ' + error.message);
  }
};