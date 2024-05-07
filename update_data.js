const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sekolah");
    var myquery = { Umur : 35 };
    var newvalues = { $set: { Umur : 21, Alamat : "Kota Kudus" }};
    dbo.collection("murid").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 data telah diupdate");
        db.close();
    });
});
