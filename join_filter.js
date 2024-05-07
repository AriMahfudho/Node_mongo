const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sekolah");
    dbo.collection("murid").aggregate([{
        $lookup : {
            from: 'ekstra',
            localField:'Nama',
            foreignField: 'Nama',
            as: 'data'}
        },
        {
            $match: {'data.Ekstra' : {$eq: "Badminton"}}
        },
        {
            $sort: {'data.Nama': 1}
        }
    ]) .toArray(function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
        db.close();
    });
});