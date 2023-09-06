const express = require("express");
const axios = require("axios");
const app = express();
const port = 3001; // Choose a suitable port

app.use(express.json());

// Define a route that proxies the request to the external API
app.get("/getIpGeolocation", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY"
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching IP geolocation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
