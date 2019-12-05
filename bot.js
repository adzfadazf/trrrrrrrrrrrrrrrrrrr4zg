const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
  let channel = client.channels.get('442803314531500053');
  channel.join()
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
