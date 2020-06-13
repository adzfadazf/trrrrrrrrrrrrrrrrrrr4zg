const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  let channel = client.channels.get('442819843239051284');
  channel.join()
});
client.login(process.env.BOT_TOKEN);
