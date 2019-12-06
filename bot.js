const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


  client.on('ready', () => {
  let channel = client.channels.get('627881624440275015');
  channel.join()
});

client.login('NjI3ODgxODAxNzg3ODk5OTA1.Xepj4w.BI9baGMzckUQwv2d03JPfRAibuM')