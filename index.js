// Name: Dad do I have school.
// Author: Chuck Phelps - PhelpsIncDotNet
// Date: 03/15/2018
// Pupose: Alexa Skill to determine if my son has School Today or Not
// Version: 0.1
// Updates:

//Call i nthe Alexa SDK
const Alexa = require('alexa-sdk');
//Define the App ID in the Alexa Developer Console.
const APP_ID = "amzn1.ask.skill.14b6f016-9fd7-4a92-93aa-82e42a6d9af8"

const handlers = {
    'shool_today' : function() {
        this.response.speak('No!');
        this.emit(':responsereay');
    }
};

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
}
