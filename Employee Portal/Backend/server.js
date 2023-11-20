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

//leave

var username;
app.post("/empleave", function (req, res) {
  var options = {
    method: "POST",
    url: "http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_EP_LEAVE&interfaceNamespace=http://yuks_vendor.com",
    headers: {
      "Content-Type": "text/xml",
      SOAPAction: "http://sap.com/xi/WebService/soap1.1",
      Authorization: "Basic cG91c2VyQDE6MjAyMkBUZWNo",
      Cookie:
        "MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMxOTA0NDEFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzE5MDQ0MTU1WjAjBgkqhkiG9w0BCQQxFgQUVZdIoHY0dGRt0udXuQij16C!8DwwCQYHKoZIzjgEAwQvMC0CFCLmMpJ!HOHAcNVu7OtdX0LISJrbAhUA0Tboq1P7v5GBF4qBGtRtgwL2HiU%3D; JSESSIONID=VTMDEB9UTMefEAtTObCp7LN_kSz4hgF-Y2kA_SAPSVhAeLiL2HWrBdmuwofXWNf-; JSESSIONMARKID=8zj4NQ4cqpyep4QLauc9B2n9stSiY9lDUmdH5jaQA; saplb_*=(J2EE6906720)6906750",
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_YUKS_EMP_LEAVE>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <EMP_ID>8</EMP_ID>\r\n         <!--Optional:-->\r\n         <LEAVE_RES>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               <!--Optional:-->\r\n             \r\n            </item>\r\n         </LEAVE_RES>\r\n      </urn:ZFM_YUKS_EMP_LEAVE>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>',
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

//payroll

app.post("/emppayroll", function (req, res) {
  var options1 = {
    method: "POST",
    url: "http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_EP_PAYROLL&interfaceNamespace=http://yuks_vendor.com",
    headers: {
      SOAPAction: "http://sap.com/xi/WebService/soap1.1",
      "Content-Type": "text/xml",
      Authorization: "Basic cG91c2VyQDE6MjAyMkBUZWNo",
      Cookie:
        "MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMxOTA0NDEFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzE5MDQ0MTU1WjAjBgkqhkiG9w0BCQQxFgQUVZdIoHY0dGRt0udXuQij16C!8DwwCQYHKoZIzjgEAwQvMC0CFCLmMpJ!HOHAcNVu7OtdX0LISJrbAhUA0Tboq1P7v5GBF4qBGtRtgwL2HiU%3D; JSESSIONID=VTMDEB9UTMefEAtTObCp7LN_kSz4hgF-Y2kA_SAPSVhAeLiL2HWrBdmuwofXWNf-; JSESSIONMARKID=8zj4NQ4cqpyep4QLauc9B2n9stSiY9lDUmdH5jaQA; saplb_*=(J2EE6906720)6906750",
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_YUKS_EMP_PAYROLL>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <EMP_ID>5</EMP_ID>\r\n         <!--Optional:-->\r\n         <RESULT>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               <!--Optional:-->\r\n             \r\n            </item>\r\n         </RESULT>\r\n      </urn:ZFM_YUKS_EMP_PAYROLL>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>',
  };

  request(options1, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

//login

app.post("/emplogin", async (req, res) => {
  const fetch = require('node-fetch');
  console.log(req.body);
  empid = req.body.id;
  emppwd = req.body.pwd;
  var url = 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_LOGIN&interfaceNamespace=http://yuks_vendor.com';

  var xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZVP_VENDOR_LOGINY>
       <PASSWORD>${emppwd}</PASSWORD>
        <VENDOR_ID>${empid}</VENDOR_ID>
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
      console.log(empid);
      res.send(SendData);
    }
  })

});



//payslip

app.post("/emppay", function (req, res) {
  var options3 = {
    method: "POST",
    url: "http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_EP_LOGIN&interfaceNamespace=http://yuks_vendor.comhttp://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_EP_PAYSLIP&interfaceNamespace=http://yuks_vendor.com",
    headers: {
      "Content-Type": "text/xml",
      SOAPAction: "http://sap.com/xi/WebService/soap1.1",
      Authorization: "Basic cG91c2VyQDE6MjAyMkBUZWNo",
      Cookie:
        "MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDQwNjA4NDAFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNDA2MDg0MDI2WjAjBgkqhkiG9w0BCQQxFgQUt6wRmnMQrIr7sjMMY39VLahB0awwCQYHKoZIzjgEAwQvMC0CFBCWfFpA%2F9ZDzm3RWG4qAJSGs7baAhUAzKlhBBclz2qDn!!y0gekhMVbaEE%3D; JSESSIONID=hA1AOdG1gpv8AH-vJOwWn5QFaLlVhwF-Y2kA_SAPy4mfvmwrS7U1f_RpwoOqBiZH; saplb_*=(J2EE6906720)6906750",
    },
    body: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZFM_YUKS_EMP_PAYSLIP>
          <ZEMP_ID>5</ZEMP_ID>
          <ZPAYSLIP_DETAILS>
             <item>
             </item>
          </ZPAYSLIP_DETAILS>
       </urn:ZFM_YUKS_EMP_PAYSLIP>
    </soapenv:Body>
 </soapenv:Envelope>`,
  };
  request(options3, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

//PAYSLIP
app.post("/emppayslip", function (req, res) {
  console.log(username);
  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zsd_emp_payslip_aish_sr/100/zsd_emp_payslip_aish_sr/zsd_emp_payslip_aish_sr',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'action': 'urn:sap-com:document:sap:rfc:functions:ZSD_EMP_PAYSLIP_AISH_SR:ZFM_AISH_EMPL_PAYSLIPRequest',
      'Authorization': 'Basic QWJhcGVyMzpBYmFwZXJAMTIz',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDUyMjA1MzAFAAQAAAAICgAIUE9VU0VSQDH%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNTIyMDUzMDAwWjAjBgkqhkiG9w0BCQQxFgQUsXL%2FyJSFDy3uMlW6sbQVoY7C3jcwCQYHKoZIzjgEAwQuMCwCFA7Gy6JD6J!U6azCMXGzjJplxL6pAhR7r0AGORb%2FS1Y6D87ExJ5jMO!SPg%3D%3D; sap-usercontext=sap-client=100'
    },
    body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_AISH_EMPL_PAYSLIP>\r\n         <EMP_ID>8</EMP_ID>\r\n         <PAYSLIP_DETAILS>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </PAYSLIP_DETAILS>\r\n      </urn:ZFM_AISH_EMPL_PAYSLIP>\r\n   </soap:Body>\r\n</soap:Envelope>'

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);

  })
});

//profile

app.post("/empprofile", function (req, res) {
  var options4 = {
    method: "POST",
    url: "http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_EP_PROFILE&interfaceNamespace=http://yuks_vendor.com",
    headers: {
      "Content-Type": "text/xml",
      SOAPAction: "http://sap.com/xi/WebService/soap1.1",
      Authorization: "Basic cG91c2VyQDE6MjAyMkBUZWNo",
      Cookie:
        "MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDMxOTA0NDEFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMzE5MDQ0MTU1WjAjBgkqhkiG9w0BCQQxFgQUVZdIoHY0dGRt0udXuQij16C!8DwwCQYHKoZIzjgEAwQvMC0CFCLmMpJ!HOHAcNVu7OtdX0LISJrbAhUA0Tboq1P7v5GBF4qBGtRtgwL2HiU%3D; JSESSIONID=VTMDEB9UTMefEAtTObCp7LN_kSz4hgF-Y2kA_SAPSVhAeLiL2HWrBdmuwofXWNf-; JSESSIONMARKID=8zj4NQ4cqpyep4QLauc9B2n9stSiY9lDUmdH5jaQA; saplb_*=(J2EE6906720)6906750",
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_YUKS_EMP_PROFILE>\r\n         <EMP_ID>8</EMP_ID>\r\n      </urn:ZFM_YUKS_EMP_PROFILE>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>',
  };
  request(options4, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs);
    res.send(xmljs);
  });
});

app.post("/emppayslipform", function (req, res) {
  var options8 = {
    method: "POST",
    url: "http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_YUKS_PORTALS&receiverParty=&receiverService=&interface=SI_YUKS_EP_PAYSLIP_FORM&interfaceNamespace=http://yuks_vendor.com",
    headers: {
      "Content-Type": "text/xml",
      SOAPAction: "http://sap.com/xi/WebService/soap1.1",
      Authorization: "Basic cG91c2VyQDE6MjAyMkBUZWNo",
      Cookie:
        "MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIzMDQwNDA0MTIFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNDA0MDQxMjE5WjAjBgkqhkiG9w0BCQQxFgQUm1P4SbR43IFdTKKro7bFk1CVq5EwCQYHKoZIzjgEAwQvMC0CFBNVc8cOu4qvnexHMQs%2FogoLQvXOAhUAtbuY4ooUQg9HnwSbRf072P4lLDM%3D; JSESSIONID=OcS8ROgbBFjVamRGbbanN89ENndKhwF-Y2kA_SAPWPK1WAhXDgosfwumoIhwF3Q6; JSESSIONMARKID=-4hqNg2Xz0Up3m1BJsLz4CqjXZ-9OLAAX3Y35jaQA; saplb_*=(J2EE6906720)6906750",
    },
    body: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZFM_YUKS_EMP_PAYSLIP_FORM>
          <ZEMP_ID>8</ZEMP_ID>
       </urn:ZFM_YUKS_EMP_PAYSLIP_FORM>
    </soapenv:Body>
 </soapenv:Envelope>`,
  };
  request(options8, function (error, response) {
    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    res.send({
      xmljs:
        xmljs["Envelope"]["Body"]["ZFM_YUKS_EMP_PAYSLIP_FORM.Response"]["ZPDF"],
    });
  });
});



app.listen(3030, () => {
  console.log("Server listening on 3030");
});
