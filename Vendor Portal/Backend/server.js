process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const express = require("express");
const fs = require("fs");
var cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
var request = require("request");
const { response } = require("express");
const parser = require("xml2js");
const xml = require("x2js");

app.use(bodyparser.json());
app.use(cors());
app.use(function (req, res, next) {
  res.getHeader("Access-Control-Allow-Original", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});

//Receipt

var username;
app.post("/vendreceipt", function (req, res) {
  var option = {
    method: "POST",
    url: "http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_RECEIPT&interfaceNamespace=http://yuks_vendor.com",
    headers: {
      "Content-Type": "text/xml",
      SOAPAction: "http://sap.com/xi/WebService/soap1.1",
      Authorization: "Basic cG91c2VyQDE6MjAyMkBUZWNo",
      Cookie:
        "MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMxNzExMTQFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzE3MTExNDIwWjAjBgkqhkiG9w0BCQQxFgQUPKYJrKv6xSo6BHiOsrBnXuiklWswCQYHKoZIzjgEAwQvMC0CFQDra7V6y153ug6vPQoyuI!4RKVHOQIUNdSWO4qVeA0zSkX8Ngf0RaXGn!8%3D; JSESSIONID=FqLE1Dkp6hNxbo7MWcuWU5WRG0fvhgF-Y2kA_SAPyvCQSXi8x5FhfRkc8i7mSoDT; JSESSIONMARKID=bxiANAdHRbYPMbX3mHZVfC4esn9L-fEDQG7H5jaQA; saplb_*=(J2EE6906720)6906750",
    },
    body: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZVP_VENDOR_RECEIPT>\r\n         <!--You may enter the following 3 items in any order-->\r\n         <VENDOR_ID>${vendorid}</VENDOR_ID>\r\n         <HEADER_RESULT>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n             \r\n            </item>\r\n            </HEADER_RESULT>\r\n	<RETURN>\r\n         </RETURN>\r\n      </urn:ZVP_VENDOR_RECEIPT>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>`,
  };

  request(option, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

//purchase

app.post("/vendpurchase", function (req, res) {
  var options = {
    method: "POST",
    url: "http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_PURCHASE&interfaceNamespace=http://yuks_vendor.com",
    headers: {
      "Content-Type": "text/xml",
      SOAPAction: "http://sap.com/xi/WebService/soap1.1",
      Authorization: "Basic cG91c2VyQDE6MjAyMkBUZWNo",
      Cookie:
        "MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMxNzExMTQFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzE3MTExNDIwWjAjBgkqhkiG9w0BCQQxFgQUPKYJrKv6xSo6BHiOsrBnXuiklWswCQYHKoZIzjgEAwQvMC0CFQDra7V6y153ug6vPQoyuI!4RKVHOQIUNdSWO4qVeA0zSkX8Ngf0RaXGn!8%3D; JSESSIONID=FqLE1Dkp6hNxbo7MWcuWU5WRG0fvhgF-Y2kA_SAPyvCQSXi8x5FhfRkc8i7mSoDT; JSESSIONMARKID=bxiANAdHRbYPMbX3mHZVfC4esn9L-fEDQG7H5jaQA; saplb_*=(J2EE6906720)6906750",
    },
    body: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZVP_VENDOR_PURCHASE>\r\n         <!--You may enter the following 3 items in any order-->\r\n         <VENDOR_ACC>2</VENDOR_ACC>\r\n         <!--Optional:-->\r\n         <IT_PURCHASE_HEAD>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </IT_PURCHASE_HEAD>\r\n      </urn:ZVP_VENDOR_PURCHASE>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>`,
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

//profile

app.post("/vendprofile", function (req, res) {
  var options2 = {
    method: "POST",
    url: "http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_PROFILE&interfaceNamespace=http://yuks_vendor.com",
    headers: {
      "Content-Type": "text/xml",
      SOAPAction: "http://sap.com/xi/WebService/soap1.1",
      Authorization: "Basic cG91c2VyQDE6MjAyMkBUZWNo",
      Cookie:
        "MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMxNzExMTQFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzE3MTExNDIwWjAjBgkqhkiG9w0BCQQxFgQUPKYJrKv6xSo6BHiOsrBnXuiklWswCQYHKoZIzjgEAwQvMC0CFQDra7V6y153ug6vPQoyuI!4RKVHOQIUNdSWO4qVeA0zSkX8Ngf0RaXGn!8%3D; JSESSIONID=FqLE1Dkp6hNxbo7MWcuWU5WRG0fvhgF-Y2kA_SAPyvCQSXi8x5FhfRkc8i7mSoDT; JSESSIONMARKID=bxiANAdHRbYPMbX3mHZVfC4esn9L-fEDQG7H5jaQA; saplb_*=(J2EE6906720)6906750",
    },
    body: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZVP_VENDOR_PROFILE>\r\n         <VENDOR_ID>${vendorid}</VENDOR_ID>\r\n      </urn:ZVP_VENDOR_PROFILE>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>`,
  };
  request(options2, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

//credeb

app.post("/vendcredeb", function (req, res) {
  var options5 = {
    method: "POST",
    url: "http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_CREDEB&interfaceNamespace=http://yuks_vendor.com",
    headers: {
      SOAPAction: "http://sap.com/xi/WebService/soap1.1",
      "Content-Type": "text/xml",
      Authorization: "Basic cG91c2VyQDE6MjAyMkBUZWNo",
      Cookie:
        "MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMxNzExMTQFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzE3MTExNDIwWjAjBgkqhkiG9w0BCQQxFgQUPKYJrKv6xSo6BHiOsrBnXuiklWswCQYHKoZIzjgEAwQvMC0CFQDra7V6y153ug6vPQoyuI!4RKVHOQIUNdSWO4qVeA0zSkX8Ngf0RaXGn!8%3D; JSESSIONID=FqLE1Dkp6hNxbo7MWcuWU5WRG0fvhgF-Y2kA_SAPyvCQSXi8x5FhfRkc8i7mSoDT; JSESSIONMARKID=69X2OAL3mqXG3xssxOB_yJz4sUF4k9Xr11835jaQA; saplb_*=(J2EE6906720)6906750",
    },
    body: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZVP_VENDOR_CREDEB>\r\n         <!--You may enter the following 3 items in any order-->\r\n         <VENDOR_ID>${vendorid}</VENDOR_ID>\r\n         <CREDIT>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </CREDIT>\r\n         <DEBIT>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n\r\n            </item>\r\n         </DEBIT>\r\n      </urn:ZVP_VENDOR_CREDEB>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>`,
  };
  request(options5, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

//pay

app.post("/vendpay", function (req, res) {
  var options1 = {
    method: "POST",
    url: "http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_PAY&interfaceNamespace=http://yuks_vendor.com",
    headers: {
      "Content-Type": "text/xml",
      SOAPAction: "http://sap.com/xi/WebService/soap1.1",
      Authorization: "Basic cG91c2VyQDE6MjAyMkBUZWNo",
      Cookie:
        "MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMxNzExMTQFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzE3MTExNDIwWjAjBgkqhkiG9w0BCQQxFgQUPKYJrKv6xSo6BHiOsrBnXuiklWswCQYHKoZIzjgEAwQvMC0CFQDra7V6y153ug6vPQoyuI!4RKVHOQIUNdSWO4qVeA0zSkX8Ngf0RaXGn!8%3D; JSESSIONID=FqLE1Dkp6hNxbo7MWcuWU5WRG0fvhgF-Y2kA_SAPyvCQSXi8x5FhfRkc8i7mSoDT; JSESSIONMARKID=bxiANAdHRbYPMbX3mHZVfC4esn9L-fEDQG7H5jaQA; saplb_*=(J2EE6906720)6906750",
    },
    body: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZVP_VENDOR_PAY>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <VENDOR_ID>9</VENDOR_ID>\r\n         <!--Optional:-->\r\n         <IT_PAYINV>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </IT_PAYINV>\r\n      </urn:ZVP_VENDOR_PAY>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>`,
  };

  request(options1, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

//quotation

app.post("/vendquota", function (req, res) {
  var options7 = {
    method: "POST",
    url: "http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_QUOTE&interfaceNamespace=http://yuks_vendor.com",
    headers: {
      SOAPAction: "http://sap.com/xi/WebService/soap1.1",
      "Content-Type": "text/xml",
      Cookie:
        "MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMxOTA0NDEFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzE5MDQ0MTU1WjAjBgkqhkiG9w0BCQQxFgQUVZdIoHY0dGRt0udXuQij16C!8DwwCQYHKoZIzjgEAwQvMC0CFCLmMpJ!HOHAcNVu7OtdX0LISJrbAhUA0Tboq1P7v5GBF4qBGtRtgwL2HiU%3D; JSESSIONID=VTMDEB9UTMefEAtTObCp7LN_kSz4hgF-Y2kA_SAPSVhAeLiL2HWrBdmuwofXWNf-; JSESSIONMARKID=-JxUrg2GSd0EZxE38tUTXywKAmLhcMAlAMdH5jaQA; saplb_*=(J2EE6906720)6906750",
    },
    body: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZVP_VENDOR_QUOTA>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <VENDOR_ACC>${vendorid}</VENDOR_ACC>\r\n         <!--Optional:-->\r\n         <IT_RFQ_LIST>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n   \r\n            </item>\r\n         </IT_RFQ_LIST>\r\n      </urn:ZVP_VENDOR_QUOTA>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>`,
  };

  request(options7, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

//login

app.post("/vendlogin", async (req, res) => {
  const fetch = require('node-fetch');
  console.log(req.body);
  vendorid = req.body.id;
  vendorpwd = req.body.pwd;
  var url = 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_LOGIN&interfaceNamespace=http://yuks_vendor.com';

  var xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZVP_VENDOR_LOGINY>
       <PASSWORD>${vendorpwd}</PASSWORD>
        <VENDOR_ID>${vendorid}</VENDOR_ID>
     </urn:ZVP_VENDOR_LOGINY>
  </soapenv:Body>
</soapenv:Envelope>`
  var options = await fetch(url, {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDQwNDA0MTIFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNDA0MDQxMjE5WjAjBgkqhkiG9w0BCQQxFgQUm1P4SbR43IFdTKKro7bFk1CVq5EwCQYHKoZIzjgEAwQvMC0CFBNVc8cOu4qvnexHMQs%2FogoLQvXOAhUAtbuY4ooUQg9HnwSbRf072P4lLDM%3D; JSESSIONID=OcS8ROgbBFjVamRGbbanN89ENndKhwF-Y2kA_SAPWPK1WAhXDgosfwumoIhwF3Q6; saplb_*=(J2EE6906720)6906750'
    },
    body: xml

  }).then(res => res.text())
  parser.parseString(options, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      var SendData = data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZVP_VENDOR_LOGINY.Response'][0]['RETURN'];
      console.log(SendData);
      console.log(vendorid);
      res.send(SendData);
    }
  })

});


//invoice

app.post("/vendinvoice", function (req, res) {
  var options8 = {
    method: "POST",
    url: "http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_INVOICE&interfaceNamespace=http://yuks_vendor.com",
    headers: {
      "Content-Type": "text/xml",
      SOAPAction: "http://sap.com/xi/WebService/soap1.1",
      Authorization: "Basic cG91c2VyQDE6MjAyMkBUZWNo",
      Cookie:
        "MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMyMTA4MTYFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzIxMDgxNjIwWjAjBgkqhkiG9w0BCQQxFgQUnAt4o%2FON!gCkv1iGtjRL6RNv5ZEwCQYHKoZIzjgEAwQwMC4CFQCzihtJy3k!9Lqz8tQEG!w1sOG%2FhwIVAIXGfkzJ3lVMANyWN7tgwZSXxtF7; JSESSIONID=jhTdbcZ151K6LvFPIQExbklrlj0DhwF-Y2kA_SAPoTvxZZGFLCX7WvHcBg8dGmpE; JSESSIONMARKID=pDgeRwZNb_etT_kXDmZfVv0N5X7sz12KOmHH5jaQA; saplb_*=(J2EE6906720)6906750",
    },
    body: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZVP_VENDOR_INVOICE>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <VENDORNUMBER>7</VENDORNUMBER>\r\n         <INVOICEDET_IT>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               <!--Optional:-->\r\n              \r\n            </item>\r\n         </INVOICEDET_IT>\r\n      </urn:ZVP_VENDOR_INVOICE>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>`,
  };

  request(options8, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

//invoiceform

app.post("/vendinvoice_form", function (req, res) {
  var options8 = {
    method: "POST",
    url: "http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_VP_INVOICE_FORM&interfaceNamespace=http://yuks_vendor.com",
    headers: {
      SOAPAction: "http://sap.com/xi/WebService/soap1.1",
      "Content-Type": "text/xml",
      Authorization: "Basic cG91c2VyQDE6MjAyMkBUZWNo",
      Cookie:
        "MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMyMDA2NTkFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzIwMDY1OTI2WjAjBgkqhkiG9w0BCQQxFgQUWUXRPx21nMARC%2FsyiYEJIohYG%2F8wCQYHKoZIzjgEAwQvMC0CFFvu9FPuB4cf0VuMVtgV%2FTl!UDynAhUA5pJDjGnlYW6qPkiOPCOIF4Xbwiw%3D; JSESSIONID=QVToYU_3Ud55gQUnm9QpnuEV0dD9hgF-Y2kA_SAPNbOJKuHlgk4uFwBj85iUAUmn; JSESSIONMARKID=SYO3GQz5W9Kp3WZTJJS_adAst7wo101jHYyX5jaQA; saplb_*=(J2EE6906720)6906750",
    },
    body: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZVP_VENDOR_INVOICE_FM>\r\n         <VEN_ID>${vendorid}</VEN_ID>\r\n      </urn:ZVP_VENDOR_INVOICE_FM>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>`,
  };

  request(options8, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    res.send({
      xmljs:
        xmljs["Envelope"]["Body"]["ZVP_VENDOR_INVOICE_FM.Response"]["RESULT"],
    });
  });
});

app.listen(3030, () => {
  console.log("Server listening on 3030");
});
