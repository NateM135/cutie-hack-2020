const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

var regexes = ['(n( )*(i)*( )*(g+( )*g*|g+)( )*e+( )*r)', '(n( )*(i)*( )*(g+( )*g*|g+)( )*a*( )*r*)', '(n( )*!*1*(i)*( )*(g+( )*g*|g+)( )*4*a*( )*r*)', '(n( )*!*1*(i)*( )*(g+( )*g*|g+)( )*4*a*( )*r*)', 'n(a)*te','f( )*(a)*( )*g*( )*g+( )*(o)*( )*t'];

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	
	if (message.author.bot) return;

	for (let regex of regexes) {

		let refinedmessage = message.content.replace('\.*,*\'*(\*)*\(*\)*\{*\}*\\*\/*\[*\]*', '');

		let regularexpression = new RegExp(regex);

		let joke = new RegExp('l(o*)ng l(o*)ng m(a*)n');

		if (regularexpression.test(refinedmessage || message.author.id == '299685173262286849') == true) {

			console.log(regex);

			message.reply("", {files: ["https://i.kym-cdn.com/photos/images/newsfeed/001/869/628/370.gif"]});

			message.delete();

			break;

		}
		else if (joke.test(refinedmessage)){

			message.reply('https://www.youtube.com/watch?v=6-1Ue0FFrHY');
			break;

        }

    }
	
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);
