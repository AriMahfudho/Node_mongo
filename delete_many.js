const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sekolah");
    var myquery = { Nama : "Muhammad" }; //parameter acuan dan akan menghapus semua data yg berhubungan dengan parameter
    dbo.collection("murid").deleteMany(myquery, function(err, res) {
        if (err) throw err;
        console.log(res.deletedCount + " data telah diupdate");
        db.close();
    });
});