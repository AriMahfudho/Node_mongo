const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sistem_akademik");
    var myquery = { kode_mapel : "AP" };
    var newvalues = { $set: { kode_mapel : "AlgoPro" }};
    dbo.collection("mapel").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 data telah diupdate");
        db.close();
    });
});
