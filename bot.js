const Discord = require('discord.js');
var tokens = ["NTg0ODExNTgwMzExNjAxMTYy.XgeiSA.aNebgXMsupE9MJdAkd-iqqM8e3Q", ""NjYwNTMzNDg2MjU1MzQxNTc5.XgekHA.hWS4015Xl5EletUp3Ns8rqpNU7M", "token3"]

tokens.forEach(t => {
let client = new Discord.Client();
client.login(t);
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


  client.on("ready", () => {
  const channel = client.channels.get("529746544975544342");
  if (!channel) return console.error("Can't find the channel.");
  channel.join().then(connection => {
    console.log("Connected.[Done]");
  }).catch(error_ => {
    console.error(error_);
  });
});



