// JavaScript source code

const Discord = require('discord.js');

//This is the client that the discord bot runs on. The client login is the token needed for the bot to go online

const client = new Discord.Client();
export const token = process.env['token'];
client.login(token);
