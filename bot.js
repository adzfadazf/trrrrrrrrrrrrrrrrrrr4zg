const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () => {
  const channel = client.channels.get("529746544975544342");
  if (!channel) return console.error("Can't find the channel.");
  channel.join().then(connection => {
    console.log("Connected.[Done]");
  }).catch(error_ => {
    console.error(error_);
  });
});
client.login("NTg0ODExNTgwMzExNjAxMTYy.XghyXw.Fb1BYdoYyQTtA0S3uOhuso8lgS8")
