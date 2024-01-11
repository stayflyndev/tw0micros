require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const axios = require("axios");

const apiKey = process.env.API_KEY;
const searchTerm = "nicki minaj";
const youtubeAPI = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&key=${apiKey}`;

const path = require("path");
app.use("/public", express.static(path.join(__dirname, "../public")));
 // app.use(express.static('../client')); 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/../views"));

app.get("/", async (req, res) => {
  try {
    const videoResults = await axios.get(youtubeAPI);
    console.log(videoResults.data);
    const videoData = videoResults.data;

    res.render("index", { videoData });
  } catch (err) {
    console.log(err);
    res.status(500).send("THERE IS A PROBLEM");
  }
});

app.listen(port, () => {
  console.log(`Microservice listening on port ${port}`);
});
