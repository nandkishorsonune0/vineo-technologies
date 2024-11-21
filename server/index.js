const Express=require("express");
const fs = require("fs");
const path = require("path");
const PORT = 5000;

const server= Express();

server.get("/data",(req, res)=>{
    fs.readFile("./data.json", (err, data)=>{
        if(err){
            console.log("Json File Error", err);
            res.status(500).send("Internal server error");
            return
        }
        res.json(JSON.parse(data));
    });
});

server.listen(PORT, ()=>{
    console.log("Server is running on port", PORT);
})
