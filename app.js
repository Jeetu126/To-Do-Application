var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();
var i1=[];
app.set('view engine' , 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://locolhost:27017/todolistDB",{useNewUrlParser:true,useUnifiedTopology:true});
const itemSchema={
    name: String
}
const Item = mongoose.model("Item",itemSchema);
const item1 = new Item({
    name: "Jitendra",
});
const item2 = new Item({
    name: "kumar",
});
const item3 = new Item({
    name: "verma",
});
const d=[item1,item2,item3];
Item.insertMany(d,function(err)
{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully saved items");
    }
})
app.get("/",function(req,res)
{
    //res.send("<h1>Hey guys</h1>"); 
    res.render("list",{newListItems:i1});
})
app.post("/",function(req,res)
{
    var i=req.body.n;
    //console.log(i);
    i1.push(i);
   // res.render("list",{newListItem:i});
   res.redirect("/");
})

app.listen(3000,function(){
    console.log("Listing to port 3000");
})