const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NjM2NjM1MjAyMjE0NDI4NzIy.XbCp-Q.vfUPaIGtwAhPuH85GM4mu3Htn5M');
