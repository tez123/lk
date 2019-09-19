const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("623476971203985408")
setInterval(function() {
channel.send(`coming soon ☠`);
}, 30)
})

client.login(process.env.BOT_TOKEN);