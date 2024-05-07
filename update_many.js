const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sekolah");
    var myquery = { Nama : "Ari" }; //parameter acuan
    var newvalues = { $set: { Umur : 21, Alamat : "Kota Demak" }}; //data yg akan diubah
    dbo.collection("murid").updatetMany(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log(res.modifiedCount + " data telah diupdate");
        db.close();
    });
});
