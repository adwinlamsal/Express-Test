const postRoute  = require("express").Router();



postRoute.get("/",(req,response)=>{

    response.json({ msg: "I get the data" });

});





module.exports= postRoute;

