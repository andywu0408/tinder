// const WebSocket = require('ws');
// const bodyParser = require("body-parser");
const express = require("express");
const app = express();
// const http = require("http");

// const sql = require("sqlite3").verbose();
// const gameDB = new sql.Database("tinderTable.db");

// var currentRound = 0;


/* ---------------------Database--------------------------------- */
//check that db isnt made yet
// let cmd = " SELECT name FROM sqlite_master WHERE type='table' AND name='TinderTable' ";
// gameDB.get(cmd, function (err, val) {
//     console.log(err, val);
//     if (val == undefined) {
//         console.log("No database file - creating one");
//         //emptydb = 0;
//         createDB();
//     } else {
//         // emptydb = 1;
//         console.log("Database file found");
//     }
// });


// function createDB () {
//   // explicitly declaring the rowIdNum protects rowids from changing if the 
//   // table is compacted; not an issue here, but good practice
//   const cmd = 'CREATE TABLE TinderTable ( id INTEGER PRIMARY KEY, name TEXT, imgurl TEXT, rating INTEGER, price TEXT, votes INTEGER, round INTEGER)';
//   gameDB.run(cmd, function(err, val) {
//     if (err) {
//       console.log("Database creation failure",err.message);
//     } else {
//       console.log("Created database");
//     }
//   });
// }



/* ---------------------Database--------------------------------- */

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

app.get("/gameroom", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
