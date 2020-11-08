module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
	execute(message) {

		if (message.mentions.users.size == 0) {
			return message.reply('You need to mention a user to kick!');
		}


		if(!message.member.roles.cache.some(r=>["Administrator", "Moderator"].includes(r.name))) {
			return message.reply("Sorry, you don't have permissions to use this!");
		}

		let member = message.mentions.members.first() || message.guild.members.get(args[0]);
		if(!member)
			return message.reply("Please mention a valid member of this server");
	  	if(!member.kickable) 
			return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");


		member.kick("Kicked by Administrator").catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: Kicked by Administrator`);
	},
};
