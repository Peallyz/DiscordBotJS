const axios = require("axios");

require("dotenv").config();

const apiKey = process.env.TENOR_API_KEY;
const gifUrl = process.env.GIF_URL;

const getRandomGif = async () => {
  const url = `https://tenor.googleapis.com/v2/search?q=my-hero-academia&key=${apiKey}&client_key=discordJS&limit=1&media_filter=gif&random=true`;

  try {
    const response = await axios.get(url);
    const data = response.data; // Accéder aux données de la réponse de l'API
    return data.results[0].media_formats.gif.url;
  } catch (error) {
    console.error(error);
    return gifUrl;
  }
};

module.exports = { getRandomGif };
