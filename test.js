const Discord = require('discord.js');
const client = new Discord.Client();
const meet = require("./index.js");
//onst func = new meet();
//require('dotenv').config();
client.on("message", message => {
  if(message.author.bot) return;
  if(message.content === "joke") return meet.joke(message);
});
client.login();