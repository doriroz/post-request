var express = require("express");
var app = express();
var bdyParser = require("body-parser");
 
//Doc - link into 
//https://www.npmjs.com/package/body-parser#bodyparserurlencodedoptions
app.use(bdyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

var todo = [
		"Clean the room",
		"Do the homework",
		"Buy a TV"
	];

app.get("/",function(req,res){
	res.render("home");
})

//insert new todo
app.post("/addTodo",function(req,res){
	console.log(req.body.newTodo);
	var nTodo = req.body.newTodo;
	todo.push(nTodo);
	res.redirect("/todo");
})

//todo list
app.get("/todo",function(req,res){
	res.render("todo",{todo:todo});
})
app.listen(3000,function(req,res){
	console.log("Server is started !!!");
})