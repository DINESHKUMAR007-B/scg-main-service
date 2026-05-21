var request = require('request');
var https = require('https');
var fs = require('fs');
const tls = require('tls');
const jks = require('jks-js');

async function main() {
    const functionstart = Date.now();
    console.log("function started");

    let keyStorePwAsString ;
    let keyStorePsw ;
    let keystore ;

    let trustStorePwAsString ;
    let trustStorePsw ;
    let truststore ;

    let cert,key,ca;
    let secureContext;
    let agent

    for (let i = 0; i < 3; i++) {
      //  text += cars[i] + "<br>";
      if(i == 0){
        const start = Date.now();
        console.log("1st loop");
    
       keyStorePwAsString = 'Changeit#1234';
       keyStorePsw = Buffer.from(keyStorePwAsString, 'utf-8').toString();
       keystore = jks.toPem(
          fs.readFileSync('certs/qa-civa.socalgas.com.jks'),
          keyStorePsw
      );
     
       trustStorePwAsString = 'changeit';
       trustStorePsw = Buffer.from(trustStorePwAsString, 'utf-8').toString();
       truststore = jks.toPem(
          fs.readFileSync('certs/cacerts'),
          trustStorePsw
      );
      //console.info("truststore : " , truststore);
     
      const { cert, key } = keystore['qa-civa.socalgas.com'];
      const { ca } = truststore['soagwxrootcert'];
      secureContext = tls.createSecureContext({
          key,
          cert,
          ca
      });
  
       agent = new https.Agent({
          secureContext, //the custom SSL context
          rejectUnauthorized: true, // Ensure the server's certificate is validated
      });

      var options = {
        method: 'POST',
        url: 'https://soagwqx.sempra.com/OpEx/CC/eServices/ScreenPop/E92660CC/1.0/q2',
        headers: {
            'Content-Type': 'text/xml',
            'SOAPAction': 'createScreenPopRequest'
        },
        agent,
        strictSSL: true,
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://ns.sempra.com/OpEx/CC/eServices/ScreenPop/Request/1.0">\r\n   <soapenv:Header>\r\n      <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\r\n         <wsse:UsernameToken>\r\n            <wsse:Username>scgivrcs</wsse:Username>\r\n            <wsse:Password>cs1$Gcs</wsse:Password>\r\n         </wsse:UsernameToken>\r\n      </wsse:Security>\r\n   </soapenv:Header>\r\n   <soapenv:Body>\r\n      <ns:REQUEST>\r\n         <ns:screen_pop_request_data>\r\n            <ns:req_operation_cd>60</ns:req_operation_cd>\r\n            <ns:req_channel_type>IVR</ns:req_channel_type>\r\n            <ns:req_database_name>E60F200</ns:req_database_name>\r\n            <ns:req_account_id>1081103302</ns:req_account_id>\r\n            <ns:req_check_digit/>\r\n            <ns:req_key_type>1</ns:req_key_type>\r\n            <ns:req_language_code>EN</ns:req_language_code>\r\n         </ns:screen_pop_request_data>\r\n      </ns:REQUEST>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });
      
    const end = Date.now();
    console.log(`Async duration: ${end - start} ms`);
    }else if(i == 1){
        const start = Date.now();
        console.log("2nd loop");

        var options = {
            method: 'POST',
            url: 'https://soagwqx.sempra.com/OpEx/CC/eServices/ScreenPop/E92660CC/1.0/q2',
            headers: {
                'Content-Type': 'text/xml',
                'SOAPAction': 'createScreenPopRequest'
            },
            agent,
            strictSSL: true,
            body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://ns.sempra.com/OpEx/CC/eServices/ScreenPop/Request/1.0">\r\n   <soapenv:Header>\r\n      <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\r\n         <wsse:UsernameToken>\r\n            <wsse:Username>scgivrcs</wsse:Username>\r\n            <wsse:Password>cs1$Gcs</wsse:Password>\r\n         </wsse:UsernameToken>\r\n      </wsse:Security>\r\n   </soapenv:Header>\r\n   <soapenv:Body>\r\n      <ns:REQUEST>\r\n         <ns:screen_pop_request_data>\r\n            <ns:req_operation_cd>60</ns:req_operation_cd>\r\n            <ns:req_channel_type>IVR</ns:req_channel_type>\r\n            <ns:req_database_name>E60F200</ns:req_database_name>\r\n            <ns:req_account_id>1081103302</ns:req_account_id>\r\n            <ns:req_check_digit/>\r\n            <ns:req_key_type>1</ns:req_key_type>\r\n            <ns:req_language_code>EN</ns:req_language_code>\r\n         </ns:screen_pop_request_data>\r\n      </ns:REQUEST>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
    
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        });

    const end = Date.now();
    console.log(`Async duration: ${end - start} ms`);
    }else{
        const start = Date.now();
        console.log("3rd loop");

        const keyStorePwAsString = 'Changeit#1234';
        const keyStorePsw = Buffer.from(keyStorePwAsString, 'utf-8').toString();
        const keystore = jks.toPem(
            fs.readFileSync('certs/qa-civa.socalgas.com.jks'),
            keyStorePsw
        );
    
        const trustStorePwAsString = 'changeit';
        const trustStorePsw = Buffer.from(trustStorePwAsString, 'utf-8').toString();
        const truststore = jks.toPem(
            fs.readFileSync('certs/cacerts'),
            trustStorePsw
        );
    
        const { cert, key } = keystore['qa-civa.socalgas.com'];
        const { ca } = truststore['soagwxrootcert'];
        const secureContext = tls.createSecureContext({
            key,
            cert,
            ca
        });
    
        const agent = new https.Agent({
            secureContext, //the custom SSL context
            rejectUnauthorized: true, // Ensure the server's certificate is validated
        });
    
        var options = {
            method: 'POST',
            url: 'https://soagwqx.sempra.com/OpEx/CC/eServices/ScreenPop/E92660CC/1.0/q2',
            headers: {
                'Content-Type': 'text/xml',
                'SOAPAction': 'createScreenPopRequest'
            },
            agent,
            strictSSL: true,
            body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://ns.sempra.com/OpEx/CC/eServices/ScreenPop/Request/1.0">\r\n   <soapenv:Header>\r\n      <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\r\n         <wsse:UsernameToken>\r\n            <wsse:Username>scgivrcs</wsse:Username>\r\n            <wsse:Password>cs1$Gcs</wsse:Password>\r\n         </wsse:UsernameToken>\r\n      </wsse:Security>\r\n   </soapenv:Header>\r\n   <soapenv:Body>\r\n      <ns:REQUEST>\r\n         <ns:screen_pop_request_data>\r\n            <ns:req_operation_cd>60</ns:req_operation_cd>\r\n            <ns:req_channel_type>IVR</ns:req_channel_type>\r\n            <ns:req_database_name>E60F200</ns:req_database_name>\r\n            <ns:req_account_id>1081103302</ns:req_account_id>\r\n            <ns:req_check_digit/>\r\n            <ns:req_key_type>1</ns:req_key_type>\r\n            <ns:req_language_code>EN</ns:req_language_code>\r\n         </ns:screen_pop_request_data>\r\n      </ns:REQUEST>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
    
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);

            const end = Date.now();
            console.log(` function duration: ${end - functionstart} ms`);
            console.log(response.body);
        });

    const end = Date.now();
    console.log(`Async duration: ${end - start} ms`);
    }
      }
    
}

main();