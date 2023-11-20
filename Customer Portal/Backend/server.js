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

//login
app.post("/custlogin", async (req, res) => {
  const fetch = require('node-fetch');
  console.log(req.body);
  customerid = req.body.id;
  var url = 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zsd_cust_login_aish_sr/100/zsd_cust_login_aish_sr/zsd_cust_login_aish_sr';

  var xml = `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions"> 
    <soap:Header/>   
    <soap:Body>   
        <urn:ZFM_AISH_CUSTO_LOGIN>    
               <ZCUSTOMER_ID>${req.body.id}</ZCUSTOMER_ID>    
                  <ZCUSTOMER_PASS>${req.body.pwd}</ZCUSTOMER_PASS>   
                    </urn:ZFM_AISH_CUSTO_LOGIN> 
                     </soap:Body></soap:Envelope>`
  var options = await fetch(url, {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'SOAPAction': 'urn:sap-com:document:sap:rfc:functions:ZSD_CUST_LOGIN_AISH_SR:ZFM_AISH_CUSTO_LOGINRequest',
      'Authorization': 'Basic QWJhcGVyMzpBYmFwZXJAMTIz',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: xml

  }).then(res => res.text())
  parser.parseString(options, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      var SendData = data['env:Envelope']['env:Body'][0]['n0:ZFM_AISH_CUSTO_LOGINResponse'][0]['RETURN_MSG'];
      console.log(SendData);
      res.send(SendData);
    }
  })

});


// app.post("/custlogin", async (req, res) => {
//   const fetch = require('node-fetch');
//   console.log(req.body);
//   customerid = req.body.id;
//   customerpwd = req.body.pwd;
//   var url = 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_LOGIN&interfaceNamespace=http://yuks_vendor.com';

//   var xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
//   <soapenv:Header/>
//   <soapenv:Body>
//      <urn:ZVP_VENDOR_LOGINY>
//        <PASSWORD>${req.body.pwd}</PASSWORD>
//         <VENDOR_ID>${req.body.id}</VENDOR_ID>
//      </urn:ZVP_VENDOR_LOGINY>
//   </soapenv:Body>
// </soapenv:Envelope>`
//   var options = await fetch(url, {
//     'method': 'POST',
//     'headers': {
//       'Content-Type': 'application/soap+xml;charset=UTF-8',
//       'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
//       'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
//       'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDQwNDA0MTIFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNDA0MDQxMjE5WjAjBgkqhkiG9w0BCQQxFgQUm1P4SbR43IFdTKKro7bFk1CVq5EwCQYHKoZIzjgEAwQvMC0CFBNVc8cOu4qvnexHMQs%2FogoLQvXOAhUAtbuY4ooUQg9HnwSbRf072P4lLDM%3D; JSESSIONID=OcS8ROgbBFjVamRGbbanN89ENndKhwF-Y2kA_SAPWPK1WAhXDgosfwumoIhwF3Q6; saplb_*=(J2EE6906720)6906750'
//     },
//     body: xml

//   }).then(res => res.text())
//   parser.parseString(options, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       var SendData = data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZVP_VENDOR_LOGINY.Response'][0]['RETURN'];
//       console.log(SendData);
//       console.log(customerid);
//       res.send(SendData);
//     }
//   })

// });

//profile

app.post("/custprofile", function (req, res) {
  var options = {
    method: "POST",
    url: "https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_cust_profile_y/100/zws_cust_profile_y/zws_cust_profile_y",
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
      SOAPAction:
        "urn:sap-com:document:sap:soap:functions:mc-style:zws_cust_loginy:ZsdCustLoginyRequest",
      Authorization: "Basic YWJhcGVyMTpBYmFwZXJAMTIz",
      Cookie: "sap-usercontext=sap-client=100",
    },
    body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZSD_CUST_PROFILEY>\r\n         <!--Optional:-->\r\n         <IT_KNA1>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </IT_KNA1>\r\n         <ZCUS_ID>${customerid}</ZCUS_ID>\r\n      </urn:ZSD_CUST_PROFILEY>\r\n   </soap:Body>\r\n</soap:Envelope>`,
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

//payments

app.post("/custpayments", function (req, res) {
  var options1 = {
    method: "POST",
    url: "https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_cust_payments_y/100/zws_cust_payments_y/zws_cust_payments_y",
    headers: {
      Action:
        "urn:sap-com:document:sap:rfc:functions:zws_cust_payments_y:ZSD_CUST_PAYMENTSYRequest",
      "Content-Type": "application/soap+xml",
      Authorization: "Basic YWJhcGVyMTpBYmFwZXJAMTIz",
      Cookie: "sap-usercontext=sap-client=100",
    },
    body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZSD_CUST_PAYMENTSY>\r\n         <IT_DET>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </IT_DET>\r\n         <ZCUS_ID>${customerid}</ZCUS_ID>\r\n      </urn:ZSD_CUST_PAYMENTSY>\r\n   </soap:Body>\r\n</soap:Envelope>`,
  };

  request(options1, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

//Salesorder

app.post("/custsales", function (req, res) {
  var options2 = {
    method: "POST",
    url: "https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_cust_soy_y/100/zws_cust_soy_y/zws_cust_soy_y",
    headers: {
      "Content-Type": "application/soap+xml",
      SOAPAction:
        "urn:sap-com:document:sap:rfc:functions:zws_cust_soy_y:ZSD_CUST_SOYRequest",
      Authorization: "Basic YWJhcGVyMTpBYmFwZXJAMTIz",
      Cookie: "sap-usercontext=sap-client=100",
    },
    body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZSD_CUST_SOY>\r\n         <IT_INVOICE>\r\n            <item>\r\n            </item>\r\n         </IT_INVOICE>\r\n         <ZCUS_ID>${customerid}</ZCUS_ID>\r\n      </urn:ZSD_CUST_SOY>\r\n   </soap:Body>\r\n</soap:Envelope>`,
  };
  request(options2, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

//invoice

app.post("/custinvoice", function (req, res) {
  var options3 = {
    method: "POST",
    url: "https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_cust_invoice_y/100/zws_cust_invoice_y/zws_cust_invoice_y",
    headers: {
      Host: "dxbktlds4.kaarcloud.com:4300",
      "Content-Type": "application/soap+xml",
      action:
        "urn:sap-com:document:sap:rfc:functions:zws_cust_invoice_y:ZSD_CUST_INVOICEYRequest",
      Authorization: "Basic YWJhcGVyMTpBYmFwZXJAMTIz",
      Cookie: "sap-usercontext=sap-client=100",
    },
    body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZSD_CUST_INVOICEY>\r\n         <IT_INVOICE>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </IT_INVOICE>\r\n         <ZCUS_ID>${customerid}</ZCUS_ID>\r\n      </urn:ZSD_CUST_INVOICEY>\r\n   </soap:Body>\r\n</soap:Envelope>`,
  };
  request(options3, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

//inquiry

app.post("/custinquiry", function (req, res) {
  var options4 = {
    method: "POST",
    url: "https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_cust_enquiry_y/100/zws_cust_enquiry_y/zws_cust_enquiry_y",
    headers: {
      "Content-Type": "application/soap+xml",
      action:
        "urn:sap-com:document:sap:rfc:functions:zws_cust_invoice_y:ZSD_CUST_INVOICEYRequest",
      Authorization: "Basic YWJhcGVyMTpBYmFwZXJAMTIz",
      Cookie: "sap-usercontext=sap-client=100",
    },
    body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZSD_CUST_ENQUIRYY>\r\n         <IT_INQUIRY>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n\r\n            </item>\r\n         </IT_INQUIRY>\r\n         <ZCUS_ID>${customerid}</ZCUS_ID>\r\n      </urn:ZSD_CUST_ENQUIRYY>\r\n   </soap:Body>\r\n</soap:Envelope>`,
  };

  request(options4, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

//delivery

app.post("/custdelivery", function (req, res) {
  var options5 = {
    method: "POST",
    url: "https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_cust_delivery_y/100/zws_cust_delivery_y/zws_cust_delivery_y",
    headers: {
      "Content-Type": "application/soap+xml",
      action:
        "urn:sap-com:document:sap:rfc:functions:zws_cust_delivery_y:ZSD_CUST_DELIVERYYRequest",
      Authorization: "Basic YWJhcGVyMTpBYmFwZXJAMTIz",
      Cookie: "sap-usercontext=sap-client=100",
    },
    body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZSD_CUST_DELIVERYY>\r\n         <CUST_ID>${customerid}</CUST_ID>\r\n         <IT_DELIVERY_INFO>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </IT_DELIVERY_INFO>\r\n      </urn:ZSD_CUST_DELIVERYY>\r\n   </soap:Body>\r\n</soap:Envelope>`,
  };

  request(options5, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

//credit and debit

app.post("/custcredit", function (req, res) {
  var options6 = {
    method: "POST",
    url: "https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_cust_credit_y/100/zws_cust_credit_y/zws_cust_credit_y",
    headers: {
      "Content-Type": "application/soap+xml",
      action:
        "urn:sap-com:document:sap:rfc:functions:zws_cust_credit_y:ZSD_CUST_CREDITYRequest",
      Authorization: "Basic YWJhcGVyMTpBYmFwZXJAMTIz",
      Cookie: "sap-usercontext=sap-client=100",
    },
    body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZSD_CUST_CREDITY>\r\n         <IT_CREDIT>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </IT_CREDIT>\r\n         <IT_DEBIT>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </IT_DEBIT>\r\n         <ZCUS_ID>${customerid}</ZCUS_ID>\r\n      </urn:ZSD_CUST_CREDITY>\r\n   </soap:Body>\r\n</soap:Envelope>`,
  };

  request(options6, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

app.post("/custinvoice_form", function (req, res) {
  var options7 = {
    method: "POST",
    url: "https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_cust_invoice_form_y/100/zws_cust_invoice_form_y/zws_cust_invoice_form_y",
    headers: {
      action:
        "urn:sap-com:document:sap:rfc:functions:zws_cust_invoice_form_y:ZSD_CUST_INVOICE_FORM_YRequest",
      "Content-Type": "application/soap+xml",
      Authorization: "Basic YWJhcGVyMjpBYmFwZXJAMTIz",
      Cookie:
        "MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMyMDA1MDMFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzIwMDUwMzM2WjAjBgkqhkiG9w0BCQQxFgQUiztTirsgAS3WWBGV7gJTJEWiKrYwCQYHKoZIzjgEAwQuMCwCFHNB4rY56rRmMsjhAH5YDDTMkAZwAhRjre4TRXP9pUrTIuWPKcweDzuQIg%3D%3D; sap-usercontext=sap-client=100",
    },
    body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZSD_CUST_INVOICE_FORM_Y>\r\n         <ZCUS_ID>9</ZCUS_ID>\r\n      </urn:ZSD_CUST_INVOICE_FORM_Y>\r\n   </soap:Body>\r\n</soap:Envelope>`,
  };
  request(options7, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    res.send({
      xmljs:
        xmljs["Envelope"]["Body"]["ZSD_CUST_INVOICE_FORM_YResponse"][
        "IT_RESULT"
        ],
    });
  });
});

app.listen(3030, () => {
  console.log("Server listening on 3030");
});
