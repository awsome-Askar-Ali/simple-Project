const https = require("https");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(
     bodyParser.urlencoded({
          extended: true,
     })
);
app.get("/", function (req, res) {
     res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
     //  console.log("post request is recived");
     const query = req.body.city;

     const appid = "a763ee9d7d4f65953b74ff4781833456";
     const unit = "metric";
     const url =
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          query +
          "&appid=" +
          appid +
          "&units=" +
          unit;
     https.get(url, function (response) {
          if (response.statusCode) {
               ("you enter the wrong data");
          }
          response.on("data", (d) => {
               //  process.stdout.write(d)
               const weather = JSON.parse(d);
               const dec = weather.weather[0].description;
               const temp = weather.main.temp;
               const icon = weather.weather[0].icon;
               const imgurl =
                    "http://openweathermap.org/img/wn/" + icon + "@2x.png";
               res.write(
                    "<h1>The temperature in" +
                         " " +
                         query +
                         " " +
                         temp +
                         " " +
                         dec +
                         "</h1>"
               );
               res.write("<img src=" + imgurl + ">");
               console.log(dec, temp);
               res.send();
          });
     });
});

app.listen(5000, function () {
     console.log("Server in 5k");
});
