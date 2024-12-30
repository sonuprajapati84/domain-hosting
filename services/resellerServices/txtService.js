const axios = require('axios');

exports.addTxtRecord = async ({ domainName, txtValue, host, ttl }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/add-txt-record.json', 
      null, 
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'TXT',
          'value': txtValue,
          'host': host,
          'ttl': ttl
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error adding TXT record: ' + error.message);
  }
};


exports.updateTxtRecord = async ({ domainName, host, currentValue, newValue, ttl }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/update-txt-record.json', 
      null, 
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'TXT',
          'host': host,
          'current-value': currentValue,
          'new-value': newValue,
          'ttl': ttl,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error updating TXT record: ' + error.message);
  }
};


exports.deleteTxtRecord = async ({ domainName, host, txtValue }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/delete-txt-record.json',
      null,
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'TXT',
          'host': host,
          'value': txtValue,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error deleting TXT record: ' + error.message);
  }
};
