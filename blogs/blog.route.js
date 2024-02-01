
const blogRouter = require("express").Router();


const postRouter = require("./posts/post.route");


blogRouter.get("/",(req,response)=>{

    response.json({ msg: "I am from blogs" });


});














blogRouter.get("/", (req, response) => {
    response.json({ msg: "I get the data" });
  });
  
  blogRouter.post("/", (req, response) => {
    const data = req.body;
  
    console.log(data);
  
    response.json({ msg: `I posted a ${data}` });
  });
  
  blogRouter.put("/:id", (req, response) => {
    const { id } = req.params;
    const data = req.body;
  
    response.json({ msg: `$id` });
  });
  
  blogRouter.patch("/:id", (req, response) => {
    response.json({ msg: "Patch" });
  });
  
  blogRouter.delete("/:id", (req, response) => {
    const { id } = req.params;
  
    response.json({ msg: "Delete" });
  });
  


  blogRouter.use("/posts",postRouter);


module.exports = blogRouter;