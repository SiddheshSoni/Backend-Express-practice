const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("Home Page!");
})

app.get("/welcome/:username", (req, res)=>{
    const username = req.params.username;
    const role = req.query.role || "";
    res.send(`<h1>Welcome ${username} ${role? `, Your Role is: ${role}` :"!"}</h1>`)
})
app.post("/products", (req, res)=>{
    res.send("A new product has been added!");
})

// app.get("/categories", (req, res)=>{
//     res.send("Here is a list of all categories!")
// })

// app.post("/categories", (req, res)=>{
//     res.send("A new category has been created!")
// })

app.get(`/{*splat}`, (req, res)=>{
    res.status(404);
    console.log("Error 404 Page Not Found")
    res.send("<h1>404- Page Not Found</h1>")
})

app.listen(4000, ()=>{
    console.log("Server is up and running on port 4000! Ready to handle requests.");
});


// const customMW = (req, res, next)=>{
//     req.user = "Guest";
//     next();
// };

// app.get("/welcome", customMW, (req, res)=>{
//     res.send(`<h1> Welcome, ${req.user} </h1>`)
// })