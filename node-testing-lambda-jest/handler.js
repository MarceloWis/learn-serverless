'use strict';

const OrderController = require("./controllers/OrderController");


function getLocalGreeting(language) {
  switch(language) {
    case "en":
      return "Hello!";
    case "es":
      return "¡Hola!";
    case "ru":
      return "Привет!";
    default:
      return "🌊";
  }
}

function pickLocale() {
  const languages = ["en", "es", "cn", "fr", "ru"];

  return languages [Math.floor(Math.random() * languages.length)];
}

module.exports.endpoint = async (event, context, callback) => {
  const response = await OrderController.post(event)

  callback(null, response);
};


  module.exports.getLocalGreeting = getLocalGreeting;