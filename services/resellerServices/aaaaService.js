const axios = require('axios');

exports.addAAAARecord = async ({ domainName, addressValue, host, ttl }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/add-ipv6-record.json', 
      null, 
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'AAAA',
          'value': addressValue,
          'host': host,
          'ttl': ttl,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error adding IPv6 address record: ' + error.message);
  }
};


// exports.updateAAAARecord = async ({ domainName, oldAddressValue, newAddressValue, host, ttl }) => {
//   try {
//     const response = await axios.post(
//       'https://test.httpapi.com/api/dns/manage/update-ipv6-record.json', 
//       null, 
//       {
//         params: {
//           'auth-userid': process.env.AUTH_USERID,
//           'api-key': process.env.RESELLER_API_KEY,
//           'domain-name': domainName,
//           'dns-type': 'AAAA',
//           'current-value': oldAddressValue, 
//           'new-value': newAddressValue,
//           'host': host,
//           'ttl': ttl,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error updating IPv6 address record:', error.response?.data || error.message);
//     throw new Error('Error updating IPv6 address record: ' + error.message);
//   }
// };



exports.deleteAAAARecord = async ({ domainName, host, Value }) => {
  try {
    const response = await axios.post(
      'https://test.httpapi.com/api/dns/manage/delete-ipv6-record.json',
      null,
      {
        params: {
          'auth-userid': process.env.AUTH_USERID,
          'api-key': process.env.RESELLER_API_KEY,
          'domain-name': domainName,
          'dns-type': 'AAAA',
          'host': host,
          'value': Value,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error deleting Address(IPv6) record: ' + error.message);
  }
};


