const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

if(guild.available()){
  console.log('guild available');
}

client.on('message', msg => {
  console.log(msg.content);
  if (msg.content.startsWith('ping')) {
    msg.reply('pong');
  }
  if (msg.content === 'pong') {
    msg.reply('ping');
  }
  if (msg.content.startsWith('zipi')) {
    msg.reply('zape');
  }
  if (msg.content === 'zape') {
    msg.reply('zipi');
  }
});

client.login('inserta token');
