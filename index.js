const express = require("express");

const indexRouter = require("./Routes");

const app = express();

app.use(express.json());



app.use("/", indexRouter);




app.listen(8000, () => {
  console.log("App is running in background");
});
