const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sekolah");
    dbo.collection("murid").find().toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
// const {MongoClient} = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);
// const database = 'sekolah';

// async function getData()
// {
//   let result = await client.connect();
//   let db = result.db(database);
//   let collection = db.collection('murid');
//   let response = await collection.find({}).toArray();
//   console.log(response);
// }

// getData();