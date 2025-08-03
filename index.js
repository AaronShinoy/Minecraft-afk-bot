const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bot is running'));
app.listen(3000);

const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'aaronshinoy111.aternos.me',
  port: 41205,
  username: 'your-email@gmail.com', // Replace with your Minecraft login or bot name
  auth: 'microsoft' // Change to 'offline' if your server is cracked (check Aternos settings)
});

bot.once('spawn', () => {
  console.log('Bot has joined the server.');

  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 1000);
  }, 15000); // Jump every 15 seconds
});

bot.on('kicked', console.log);
bot.on('error', console.log);
