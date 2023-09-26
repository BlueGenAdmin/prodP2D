const fs = require('fs')
const json2csv = require('json2csv').Parser

exports.parseCsv = async (fields, data) => {
    try {
        const json2csvParser = new json2csv({ fields })
        const csv = json2csvParser.parse(data)
        return csv
    } catch (error) {
        return new Error('Error Parsing CSV')
    }
}