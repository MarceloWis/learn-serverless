'use strict';

const OrderController = require("./controllers/OrderController");


module.exports.endpoint = async (event, context, callback) => {
  const response = await OrderController.post(event)

  callback(null, response);
};

