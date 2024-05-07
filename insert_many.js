const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sekolah");
    var my_object = [
        { Nama : "Syamsul", Alamat : "Grobogan", Umur : 20, Hobi : "Badminton"},
        { Nama : "Fuad", Alamat : "Jepara", Umur : 21, Hobi : "Mancing"},
        { Nama : "Bakri", Alamat : "Boyolali", Umur : 19, Hobi : "Futsal"}];
    dbo.collection("murid").insertOne(my_object, function(err, res) {
        if (err) throw err;
        console.log("Jumlah data yang ditambahkan : " + res.insertedCount);
        db.close();
    });
});