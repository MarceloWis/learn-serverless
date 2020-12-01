const uuid = require('uuid');
const dynamodb = require('../config/dynamodb');


const create = (event, context, callback) => {
    const timestamp = new Date().getTime();
    const data = JSON.parse(event.body);

    if (typeof data.text !== 'string') {
        console.error('Validation Failed!');
        return callback1(null, {
            statusCode: 400,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Couldn\'t create the todo item.',
        })
    }

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            id: uuid.v1(),
            text: data.text,
            checked: false,
            createAt: timestamp,
            updatedAt: timestamp
        }
    }
    dynamodb.put(params, (error) => {
        if (error) {
            console.error(error);
            return callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Couldn\'t create the todo item.',
            })
        }
    });
    const response = {
        statusCode: 200,
        body: JSON.stringify(params.Item),
    };
    callback(null, response);

}

module.exports = create;