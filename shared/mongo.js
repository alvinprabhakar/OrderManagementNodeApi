const {MongoClient}  = require('mongodb');

const url = "mongodb+srv://alvinprabhakar:%40lvink25@cluster0.qw6ac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const db_name = "order_management";
const client = new MongoClient(url);

module.exports = {
    db: null,

    async connect(){
        await client.connect();

        this.db = client.db(db_name);

        console.log("Selected Database" , db_name);
    }
}