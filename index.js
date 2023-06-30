const express = require("express")
const uploadRoute = require('./route/uploadRoute')

const app = express()

app.use("/api/upload",uploadRoute)

app.listen(5001,  (req, res) => {
    console.log('Le serveur demarre sur le port 5001');
  });