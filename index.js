const express = require("express");
const app = express();
const port = 3000;

app.get("/test", (req, res) => {
  
    res.send('connected! to backend');
  });


  app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
  });