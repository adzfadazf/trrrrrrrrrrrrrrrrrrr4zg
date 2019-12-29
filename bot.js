const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
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
  });
});
client.login('NjU5NDA1MzY2NjI2NjE1MzE3.XgiYJQ.sCcWuI6gvvAx2Eq0xUaj0_CHp40')
client2.login('NjU5NDI1ODk2MDQ1NzQwMDYy.XgiYQw.LpI435Fxl5Pe9IgRp3uOUGIOBGw')
