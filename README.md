# NiceMeet
NiceMeet is simple and easy to use.

# How does NiceMeet work?
NiceMeet creates bot functions for Discord.

# Code Example
```
const Discord = require('discord.js');
const client = new Discord.Client();
const meet = require("nicemeet.js");
client.on("message", message => {
  if(message.author.bot) return;
  if(message.content === "ping") {
    message.quote("pong!");
  }
})
```

# Extensions
`.quote(<String>)` - this extension adds the quote mode, for example:
<img src="https://cdn.discordapp.com/attachments/709397060079583305/821401853739663370/Screenshot_20210316-121654_Discord.jpg">
`.joke()` - This extension adds jokes, for example:
```
client.on("message", message => {
  if(message.author.bot) return;
  if(message.content === "joke") {
    meet.joke(message.channel); // Send the joke on the channel.
  }
})
```

