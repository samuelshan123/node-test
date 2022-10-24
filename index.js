const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  
    res.send('connected! to backend');
  });


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });