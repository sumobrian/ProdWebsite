const express = require('express');
const auth0 = require('auth0-js');
const app = express();
const dotenv = require('dotenv').config();




app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_CLIENT_ID) {
  throw new Error('Make sure to set AUTH0_DOMAIN and AUTH0_CLIENT_ID in your .env file');
}

var webAuth = new auth0.WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID
});
