const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  const channel = client.channels.get("627884388452925453");
  if (!channel) return console.error("Can't find the channel.");
  channel.join().then(connection => {
    console.log("Connected.[Done]");
  }).catch(error_ => {
    console.error(error_);
  });
});
client.login(process.env.BOT_TOKEN);
