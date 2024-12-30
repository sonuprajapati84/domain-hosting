const axios = require('axios');

exports.searchDnsRecords = async ({ domainName, type, noOfRecords, pageNo, host, value }) => {
  try {
    const response = await axios.get(
      'https://test.httpapi.com/api/dns/manage/search-records.json',
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'type': type,
          'no-of-records': noOfRecords,
          'page-no': pageNo,
          'host': host,
          'value': value,
        },
      }
    );
    // console.log('Full API response:', response);
    return response.data;
  } catch (error) {
    // console.error('Error searching DNS records:', error.response ? error.response.data : error.message);
    throw new Error('Error searching DNS records: ' + error.message);
  }
};
