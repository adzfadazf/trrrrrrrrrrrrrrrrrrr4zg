const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();


client.on("ready", () => {
  const channel = client.channels.get("627884388452925453");
  if (!channel) return console.error("Can't find the channel.");
  channel.join().then(connection => {
    console.log("Connected.[Done]");
  }).catch(error_ => {
    console.error(error_);
  });
});
client.login("NjU5NDA1MzY2NjI2NjE1MzE3.XgjZfg.V5a_GNyI_jBkr19BOhZRASmWCcs")
client2.login("NjU5NDI1ODk2MDQ1NzQwMDYy.Xgjb6g.o5VjsWULq7kd--pthJA1Lb8z0zA")
