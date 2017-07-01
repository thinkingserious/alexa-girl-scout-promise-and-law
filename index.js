'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.fd610c25-37c7-4890-a0d4-77769a2f5e7b";

var SKILL_NAME = "Unofficial Girl Scout Law & Promise";
var GET_GIRL_SCOUT_PROMISE = "On my honor, I will try: To serve God and my country, To help people at all times, And to live by the Girl Scout Law.";
var GET_GIRL_SCOUT_LAW = "I will do my best to be honest and fair, friendly and helpful, considerate and caring, courageous and strong, and responsible for what I say and do, and to respect myself and others, respect authority, use resources wisely, make the world a better place, and be a sister to every Girl Scout.";
var HELP_MESSAGE = "You can say tell me the girl scout promise, or, you can say tell me the the girl scout law... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetGirlScoutPromiseIntent');
    },
    'GetGirlScoutPromiseIntent': function () {
        this.emit(':tellWithCard', GET_GIRL_SCOUT_PROMISE, SKILL_NAME, GET_GIRL_SCOUT_PROMISE)
    },
    'GetGirlScoutLawIntent': function () {
        this.emit(':tellWithCard', GET_GIRL_SCOUT_LAW, SKILL_NAME, GET_GIRL_SCOUT_LAW)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};