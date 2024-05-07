const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sistem_akademik");
    dbo.collection("mapel").aggregate([{
        $lookup : {
            from: 'siswa',
            localField:'kode_mapel',
            foreignField: 'kode_mapel',
            as: 'data'}
    } ]) .toArray(function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
        db.close();
    });
});