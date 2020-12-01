const { DynamoDB } = require('aws-sdk');

let options = {};

if(process.env.IS_OFFLINE) {
    options = {
        region: 'localhost',
        endpoint: 'http://localhost:8000'
    };
}

const client = new DynamoDB.DocumentClient(options);

module.exports = client;