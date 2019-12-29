const Discord = require('discord.js');

var tokens = ["NjU5NDA1MzY2NjI2NjE1MzE3.Xghyjg.OqoHx2R76g7zre5M3yS3mAvF9aE", "NjU5NDI1ODk2MDQ1NzQwMDYy.Xghyow.BSZEG3wVAV-KKXU5PjrYu9wrdXI"]

tokens.forEach(t => {
let client = new Discord.Client();
client.login(t);
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
  client.on("ready", () => {
  const channel = client.channels.get("627884388452925453");
  if (!channel) return console.error("Can't find the channel.");
  channel.join().then(connection => {
    console.log("Connected.[Done]");
  }).catch(error_ => {
    console.error(error_);
  };
});
