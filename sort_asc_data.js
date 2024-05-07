const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sekolah");
    var mysort = {Umur: 1}; //asc menggunakan "1" dan desc menggunakan "-1" pada nilai parameter
    dbo.collection("murid").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});