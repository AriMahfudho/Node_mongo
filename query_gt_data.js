const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sekolah");
    dbo.collection("murid").find({Umur: {$lt: 20} }).toArray(function(err, result) { //menggunakan $gt untuk menampilkan data murid yang memiliki umur diatas parameter
        if (err) throw err;                                                          //menggunakan $lt untuk menampilkan nilai dibawah parameter
        console.log(result);                                                         //menggunakan $eq untuk menampilkan nilai yang sama dengan parameter
        db.close();
    });
});