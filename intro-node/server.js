 const express =require("express")
 const bodyParser =require("body-parser")
  const app =express()
  app.use(bodyParser.urlencoded({extended:true}))
  app.get("/",function(req,res){
      res.sendFile(__dirname +"/index.html")
    })
      app.post("/",function(req,res){
    var num1=Number(req.body.n1)   ;
     var num2=Number(req.body.n2);
      var result = num1+num2;
        res.send(""+result)//dout
    });
    app.get("/bmicalculator",function(req,res){
     res.sendFile(__dirname+"/bmicalculator.html")   
    })
    app.post("/bmicalculator",function(req,res){
        var h1=req.body.hight
        var h2=req.body.weight
        var bmi=h1/(h2*h2);

res.send(""+bmi)
    })
    app.listen(4040,function(){
        console.log("server is start");
    })