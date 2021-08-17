const express=require("express")
const app =express();
app.get("/",function(req,res){
    res.send("hello")
})
app.get("/home",function(req,res){
    res.send("welcome")
})
app.listen(4040,function(){
    console.log("now start");
})