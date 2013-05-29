// use the newly minted Twilio Node.js module
var twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var number = "+19724457263";
// iterate through all of the text messages I receieved today
twilio.listSms({to: number, dateSent: "2013-05-29"}, function(err, response) {
  response.smsMessages.forEach(function(sms) {
    // send a "thank you" SMS
    twilio.sendSms({
      to: sms.from, 
      from: number, 
      body: ""
    });
  });
});
