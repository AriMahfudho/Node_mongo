const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sekolah");
    var my_object = {
        Nama : "Muhammad",
        Alamat : "Kudus",
        Umur : 35,
        Hobi : "Mengaji"
        
    };
    dbo.collection("murid").insertOne(my_object, function(err, res) {
        if (err) throw err;
        console.log("1 data ditambahkan");
        db.close();
    });
});
