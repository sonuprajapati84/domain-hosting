const axios = require('axios');

exports.addNsRecord = async ({ domainName, nsValue, host, ttl }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/add-txt-record.json', 
      null, 
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'NS',
          'value': nsValue,
          'host': host,
          'ttl': ttl
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error adding NS record: ' + error.message);
  }
};


exports.updateNsRecord = async ({ domainName, host, currentValue, newValue, ttl }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/update-txt-record.json', 
      null, 
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'NS',
          'host': host,
          'current-value': currentValue,
          'new-value': newValue,
          'ttl': ttl,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error updating NS record: ' + error.message);
  }
};


exports.deleteNsRecord = async ({ domainName, host, nsValue }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/delete-ns-record.json',
      null,
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'NS',
          'host': host,
          'value': nsValue,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error deleting NS record: ' + error.message);
  }
};