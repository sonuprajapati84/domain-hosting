const axios = require('axios');

exports.addCnameRecord = async ({ domainName, cnameValue, cnameHost, ttl }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/add-cname-record.json', 
      null, 
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'CNAME',
          'value': cnameValue,
          'cname-host': cnameHost,
          'ttl': ttl,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error adding CNAME record: ' + error.message);
  }
};

exports.updateCnameRecord = async ({ domainName, cnameHost, currentValue, newValue, ttl }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/update-cname-record.json', 
      null, 
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'CNAME',
          'current-value': currentValue,
          'new-value': newValue,
          'ttl': ttl,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error updating CNAME record: ' + error.message);
  }
};


exports.deleteCnameRecord = async ({ domainName, host, cnameValue }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/delete-cname-record.json',
      null,
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'CNAME',
          'host': host,
          'value': cnameValue,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error deleting CNAME record: ' + error.message);
  }
};