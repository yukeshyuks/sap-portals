process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const express = require("express");
const fs = require('fs');
const bodyParser = require("body-parser");
const convert = require('xml-js');
const { response } = require("express");
var cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.all("/*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-?Length, X-Requested-With');
  next();
});


app.post("/login", (req, res) => {
  console.log(req.body)
  var USERNAME = req.body.USERNAME;
  var PASSWORD = req.body.PASSWORD;
  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_M_LOG&receiverParty=&receiverService=&interface=SI_M_LOGIN&interfaceNamespace=http://vendorsnh.com',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Authorization': 'Basic cG91c2VyQDI6VGVjaEAyMDIy',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6cG91c2VyQDKIAAdkZWZhdWx0AQAIUE9VU0VSQDICAAMwMDADAANLUE8EAAwyMDIzMDMwMzA0NDMFAAQAAAAICgAIUE9VU0VSQDL%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzAzMDQ0MzQxWjAjBgkqhkiG9w0BCQQxFgQUIIb32YVjYgSmVXi6onFNbJ9VcIgwCQYHKoZIzjgEAwQwMC4CFQCyW4nEk5Kd0!p0LNc2PLw8i3af7AIVAI5LirIO8RI!i12oAZOqKX8AOkFL; JSESSIONID=iXisQs1O2LQ1wJgK_GCj0Jp_W9ulhgF-Y2kA_SAP04YH4Q-y_QTy4b0Q1lV0TvTk; JSESSIONMARKID=5qTb9grJ5f1RdahX0XHu3hXaNjvB_DXAizi35jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZNH_LOGIN>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <!--Optional:-->\r\n         <LV_PASSWORD>NAWAZ</LV_PASSWORD>\r\n         <!--Optional:-->\r\n         <LV_USERID>13</LV_USERID>\r\n      </urn:ZNH_LOGIN>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);

    var result1 = convert.xml2json(response.body, { compact: true, spaces: 4 });
    const result2 = JSON.parse(result1);
    console.log(JSON.parse(result1));
    console.log(
      result2['soap-env:Envelope']['soap-env:Body']['ns0:ZLOGIN.Response']['EX_STATUS']['_text']);
    res.json({
      status1:
        result2['soap-env:Envelope']['soap-env:Body']['ns0:ZLOGIN.Response']['EX_STATUS']['_text']
    });
  });
});

app.post("/notlist", (req, res) => {
  var user = req.body.user;
  console.log(req.body)
  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zfm_yuks_main_notification/100/zfm_yuks_main_notification/zfm_yuks_main_notification',
    'headers': {
      'Host': 'dxbktlds4.kaarcloud.com:4300',
      'Content-Type': 'application/soap+xml',
      'action': 'urn:sap-com:document:sap:rfc:functions:ZFM_YUKS_MAIN_NOTIFICATION:ZFM_YUKS_MAIN_NOTIFICATIONRequest',
      'Authorization': 'Basic YWJhcGVyMTpBYmFwZXJAMTIz',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_YUKS_MAIN_NOTIFICATION>\r\n         <NOTIFICATION_DATE>2023-02-10</NOTIFICATION_DATE>\r\n         <NOTIFI_LIST>\r\n            <item>\r\n            </item>\r\n         </NOTIFI_LIST>\r\n         <PLANT>0001</PLANT>\r\n         <PLANT_GROUP>010</PLANT_GROUP>\r\n      </urn:ZFM_YUKS_MAIN_NOTIFICATION>\r\n   </soap:Body>\r\n</soap:Envelope>'

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    var result227 = convert.xml2json(response.body, {
      compact: true,
      spaces: 4
    });
    const result3 = JSON.parse(result227);
    console.log(result3);
    console.log(result3['env:Envelope']['env:Body']['n0:ZFM_YUKS_MAIN_NOTIFICATIONResponse']['NOTIFI_LIST']['item']);
    res.json({
      data227: result3['env:Envelope']['env:Body']['n0:ZFM_YUKS_MAIN_NOTIFICATIONResponse']['NOTIFI_LIST']['item']
    });
  });
});



app.post("/workorder", (req, res) => {
  var user = req.body.user;
  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zfm_yuks_main_workorder2/100/zfm_yuks_main_workorder2/zfm_yuks_main_workorder2',
    'headers': {
      'Content-Type': 'application/soap+xml',
      'action': 'urn:sap-com:document:sap:rfc:functions:ZFM_YUKS_MAIN_WORKORDER2:ZFM_YUKS_MAIN_WORKORDER2Request',
      'Authorization': 'Basic YWJhcGVyMTpBYmFwZXJAMTIz',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '\r\n<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_YUKS_MAIN_WORKORDER2>\r\n         <IM_PLANNER_GROUP>010</IM_PLANNER_GROUP>\r\n         <IM_PLANNING_PLANT>0001</IM_PLANNING_PLANT>\r\n         <RETURN>\r\n            <item>\r\n            </item>\r\n         </RETURN>\r\n         <WO_LIST>\r\n            <item>\r\n            </item>\r\n         </WO_LIST>\r\n      </urn:ZFM_YUKS_MAIN_WORKORDER2>\r\n   </soap:Body>\r\n</soap:Envelope>'

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    var result227 = convert.xml2json(response.body, {
      compact: true,
      spaces: 4
    });
    const result3 = JSON.parse(result227);
    console.log(result3);
    console.log(result3['env:Envelope']['env:Body']['n0:ZFM_YUKS_MAIN_WORKORDER2Response']['WO_LIST']['item']);
    res.json({
      data227: result3['env:Envelope']['env:Body']['n0:ZFM_YUKS_MAIN_WORKORDER2Response']['WO_LIST']['item']
    });
  });
});

app.listen(3030, () => {

  console.log("Server running at port 3030");

})