const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
});
const fruitSchema = new mongoose.Schema({
     name: String,
     rating: Number,
     review: String,
});
const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
     name: "apple",
     rating: 6,
     reviews: "nice fruite",
});
const peopleschema = new mongoose.Schema({
     _id: Number,
     name: String,
     age: Number,
});
const People = mongoose.model("People", peopleschema);
const people = new People({
     _id: 5,
     name: "Ali ",
     age: 24,
});
const orange = new Fruit({
     name: "orange",
     rating: 5,
     review: "Nice fruit",
});
const Mango = new Fruit({
     name: "Mango",
     rating: 4.8,
     review: "sweet fruit",
});
const pineapple = new Fruit({
     name: "pineapple",
     rating: 7.5,
     review: "it like hard in out side ",
});
// Fruit.insertMany([orange, Mango, pineapple], function (err) {
//      if (err) {
//           console.log(err);
//      } else {
//           console.log("success store the db");
//      }
// });
Fruit.find(function (err, fruits) {
     if (err) {
          console.log(err);
     } else {
          fruits.forEach(function (fruit) {
               console.log(fruit.name);
               mongoose.connection.close();
          });
     }
});
Fruit.deleteOne({ name: "orange" }, function (err) {
     if (err) {
          console.log(err);
     } else {
          console.log("Sucesss");
     }
});
