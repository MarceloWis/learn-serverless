function validateFields(data, requiredField) {
    return new Promise((resolve, reject) => {
        for (const field of requiredField) {
            if(!data[field]) {
                throw new Error()
            }
        }
        return resolve(true)
    })
    
    
}

module.exports = validateFields;