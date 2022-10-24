const express = require("express");
const app = express();
const port = 3000;

app.get("/test", (req, res) => {
  
    res.send('connected! to backend');
  });


  app.listen(port,'0.0.0.0', () => {
    console.log(`Example app listening at ${port}`);
  });