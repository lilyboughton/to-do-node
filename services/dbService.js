const MongoClient = require('mongodb').MongoClient

const url = "mongodb://root:password@localhost:27017"
const dbName = 'hyperlynx'
const Client = new MongoClient(url, {})

function dbConnection (callback) {
    Client.connect((error) => {
        let db = Client.db(dbName)
        callback(db)
    })
}

module.exports = dbConnection