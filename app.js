const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("Home Page!");
})

app.get("/orders", (req, res)=>{
    res.send("Here is a list of all orders!")
})
app.post("/orders", (req, res)=>{
    res.send("A new order has been created!");
})

app.get("/users", (req, res)=>{
    res.send("here is a list of all users!")
})

app.post("/users", (req, res)=>{
    res.send("A new user has been created!")
})


app.listen(3000, ()=>{
    console.log("Server is up and running on port 3000! Ready to handle requests.");
});


// const customMW = (req, res, next)=>{
//     req.user = "Guest";
//     next();
// };

// app.get("/welcome", customMW, (req, res)=>{
//     res.send(`<h1> Welcome, ${req.user} </h1>`)
// })