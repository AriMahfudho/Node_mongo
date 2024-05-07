const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sekolah");
    var myquery = { Nama : "Muhammad" };
    dbo.collection("murid").deleteOne(myquery, function(err, res) {
        if (err) throw err;
        console.log("1 data telah didelete");
        db.close();
    });
});