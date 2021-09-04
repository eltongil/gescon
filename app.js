var http = require('http');
var mysql = require('mysql');
var fs = require('fs');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

http.createServer(function (req, res) {
    fs.readFile('home.html',function(err,data){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);