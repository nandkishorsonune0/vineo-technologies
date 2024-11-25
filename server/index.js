const Express=require("express");
const fs = require("fs");
const PORT = 5000;
const cors=require("cors")




const server= Express();
server.use(cors());

server.get("/data",(req, res, next )=>{
    fs.readFile("./data.json", (err, data, )=>{
        if(err){
            console.log("Json File Error", err);
            // res.status(500).send("Internal server error");
            next(err)
            // return

        }else 
        res.json(JSON.parse(data));
    });
});
server.use("/",(req, res, next)=>{
    console.log("Hello");
    next({
        statusCode: 400,
        name: 'USER_ERROR_NAME',
        message: 'Bad Request. No such endpoint',
    });
    
})
server.use( ( err, req, res, next ) => {
    console.log(err)
    res.status(403).send(err.message);
} )
server.listen(PORT, ()=>{
    console.log("Server is running on port", PORT);
})
