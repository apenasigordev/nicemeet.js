const Discord = require('discord.js');
const client = new Discord.Client();
const meet = require("./index.js");
//onst func = new meet();
//require('dotenv').config();
client.on("message", message => {
  if(message.author.bot) return;
  if(message.content === "test") return meet.joke(message);
});
client.login("NzgwMTAwMDMzMzQ0NTY5Mzk0.X7qKxQ.BGWpX1s1EeNQtzVq4c0QFzoZJOA");