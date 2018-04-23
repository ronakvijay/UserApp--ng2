var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('userDb',['records']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname  + "/public/"));
app.use(bodyParser.json());

app.get('/users' , function(req , res) {
    console.log("I received a GET request");
db.records.find( function(err , docs) {
    console.log(docs);
    res.json(docs);
})
   
});

app.post('/users' , function(req , res) {
    console.log(req.body);

    db.records.insert( req.body , function(err , doc) {
        res.json(doc);
    });
});

app.delete('/users/:id' , function(req , res) {
    var id = req.params.id;
    console.log(id);
    db.records.remove({_id:mongojs.ObjectId(id)} , function(err,doc){
        res.json();
        console.log("deleted");
    });
} )

app.listen(3200);
console.log("Server is running on 3200!!");

