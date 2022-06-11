// server/index.js

const express = require("express");
const axios = require("axios");
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", async (req, res) => {
    try {
        const reservation = await axios.post(`https://api.testwyre.com/v3/orders/reserve`, {
            "referrerAccountId": process.env.ACCOUNTID,
            "redirectUrl": "http://localhost:3000/",
            "autoRedirect": false
        }, {headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + process.env.AUTHKEY}
        
        })
    res.json({ url: reservation.data.url });
    }
    catch (err)
    {
        console.error(err)
    }
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});