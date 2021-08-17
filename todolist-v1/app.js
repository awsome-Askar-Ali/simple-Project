const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let items = [" Set Alaram", " Weak up", "freshnes", "cycling", "pratice"];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
     app.use;
     let today = new Date();
     let opton = {
          month: "short",
          weekday: "long",
          day: "numeric",
     };
     let day = today.toLocaleDateString("en-IN", opton);

     // let currentDay = today.getDay();
     // let day = "";
     // switch (currentDay) {
     //      case 0:
     //           day = "sunday";

     //           break;
     //      case 1:
     //           day = "Monday";

     //           break;
     //      case 2:
     //           day = "Tuesday";

     //           break;
     //      case 3:
     //           day = "Wenesday";

     //           break;
     //      case 4:
     //           day = "Thursday";

     //           break;
     //      case 5:
     //           day = "Friday";

     //           break;
     //      case 6:
     //           day = "Saturday";

     //           break;
     // }
     // if (currentDay == 0) {
     //      day = "sunday";
     // } else if (currentDay == 1) {
     //      day = "Monday";
     // } else if (currentDay == 2) {
     //      day = "Tuesday";
     // } else if (currentDay == 3) {
     //      day = "Wensday";
     // } else if (currentDay == 4) {
     //      day = "thirsday";
     // } else if (currentDay == 5) {
     //      day = "friday";
     // } else if (currentDay == 6) {
     //      day = "saturday";
     // }

     res.render("list", {
          kindOfDay: day,
          off: items,
     });

     app.post("/", function (req, res) {
          let item = req.body.newitem;
          items.push(item);
          console.log(item);
          res.redirect("/");
     });
});

app.listen(5000, function () {
     console.log("Server in 5k");
});
