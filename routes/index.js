const express = require('express');
const Todo = require('../models/todo');
const routes = express.Router();

routes.get("/",async(req,res)=>{
    const allTodo=await Todo.find();
    res.render("home",{todo:allTodo});
});

routes.post("/add/todo", (req,res)=>{
const todo =req.body.todo;
const newTodo =new Todo({todo:todo});
newTodo.save().then(()=>{
    console.log("item has been added");
    res.redirect("/");
});
});

routes.get("/delete/todo/:_id",(req,res)=>{
    const{_id}=req.params;
    Todo.deleteOne("deleted");
    res.redirect("/");

});

module.exports=routes;