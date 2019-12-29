const Discord = require('discord.js');

var tokens = ["NjU5NDI1ODk2MDQ1NzQwMDYy.XgiYQw.LpI435Fxl5Pe9IgRp3uOUGIOBGw", "NjU5NDA1MzY2NjI2NjE1MzE3.XgiZCA.UnPywdtsnG-jEsNN3LM4XI-e8vY"]

tokens.forEach(t => {
let client = new Discord.Client();
client.login(t);

client.on("ready", () => {
  const channel = client.channels.get("627884388452925453");
  if (!channel) return console.error("Can't find the channel.");
  channel.join().then(connection => {
    console.log("Connected.[Done]");
  }).catch(error_ => {
    console.error(error_);
  });
});
