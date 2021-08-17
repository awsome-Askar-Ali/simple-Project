const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ people", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
});

const personSchema = new mongoose.Schema({
     id: Number,
     name: String,
     Age: Number,
});
const Person = mongoose.model("person", personSchema, {
     useUnifiedTopology: true,
});

const person = new Person({
     id: 10,
     name: "ali",
     Age: 20,
});
person.save();
