const router = require("express").Router();
const blogRouter = require("../blogs/blog.route");

const apiVersion ="/api/v1";





try {


  router.get("/", (req, response) => {
    

    if(!title) throw Error("Title is missing");



    response.json({ msg: "I get the data" });


  });
  



}catch(e){


  console.log(e);




} finally{


console.log("Hey krishna i got an error");



}










router.post("/", (req, response) => {




  const data = req.body;

  console.log(data);

  response.json({ msg: `I posted a ${data}` });
});

router.put("/:id", (req, response) => {
  const { id } = req.params;
  const data = req.body;

  response.json({ msg: `$id` });
});

router.patch("/:id", (req, response) => {
  response.json({ msg: "Patch" });
});

router.delete("/:id", (req, response) => {
  const { id } = req.params;

  response.json({ msg: "Delete" });
});



router.use(`${apiVersion}/blogs`,blogRouter);




module.exports = router;
