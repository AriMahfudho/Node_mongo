const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sekolah");
    dbo.collection("murid").findOne({ Nama : "Ari"}, {projection: {nama: 1, Alamat: 1}}, function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
