require('dotenv').config({path: "../.env"}); 
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const axios = require("axios");

const apiKey = process.env.API_KEY;
console.log(apiKey + "")
const searchTerm = 'nicki minaj';
const apiYTEndpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&key=${apiKey}`;


app.get("/", async (req, res) => {
  try {
    const videos = await axios.get(apiYTEndpoint);
    console.log(videos);
    const videoData = videos.data;
    res.json(videoData); 
  } catch (err) {
    console.log(err);
    res.status(500).send("THERE IS A PROBLEM");
  }
});

app.listen(port, () => {
  console.log(`Microservice listening on port ${port}`);
});
