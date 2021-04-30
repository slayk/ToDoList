const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

const items = [];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  let day = date.getDate();
  res.render("list", {
    listTitle: day,
    newListItem: items
  });
});

app.post("/", function(req, res) {
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItem: workItems
  });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});





// app.get("/", function(req, res) {
//
//   res.render()
//   let date = new Date;
//   let today = date.getDay();
//   let day = "";
//
//
//   if(date.getDay() === 6 || date.getDay() === 0) {
//     day = "weekend";
//     res.render("list", {kindOfDay: day});
//     // res.sendFile(__dirname + "/weekend.html");
//     // res.write("<h1>Yay! It's the weekend, and it's " + date + " today!</h1>");
//   } else {
//     day = "weekday";
//     res.render("list", {kindOfDay: day});
//     // res.sendFile(__dirname + "/weekday.html");
//     // res.write("<p>It's not a weekend</p>");
//     // res.write("<h1>It's " + date + " so you better work work work!</h1>");
//     // res.send();
//   }
//
// });

//   const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
//   let today = new Date().getDay();
//   let day = week[today];
//
