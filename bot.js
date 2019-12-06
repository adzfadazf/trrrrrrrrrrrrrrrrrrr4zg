const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  let channel = client.channels.get('586340223827443733');
  channel.join()
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
