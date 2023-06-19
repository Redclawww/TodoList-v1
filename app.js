
const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js")
 
const app=express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

app.set("view engine","ejs");

let items=["Buy Food","Cook Food","Eat Food"];
let workItems=[];

app.listen(3000,function(req,res){
    console.log("Server started on port 3000");
});

app.get("/",function(req,res){
    
    let day=date.getDate();
    res.render("list.ejs",{listTitle: day,newListItems: items});
});

app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List",newListItems: workItems})
});

app.get("/about", function(req,res){
    res.render("about.ejs");
});

app.post("/",function(req,res){

    console.log(req.body);
    let item=req.body.newItem;

    if(req.body.button==="Work"){
        workItems.push(item);
        res.redirect("/work");
    } else{
        items.push(item);
        res.redirect("/");
    }
});

app.post("/work",function(req,res){
    let item=req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
}); 



