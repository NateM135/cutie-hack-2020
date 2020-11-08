module.exports = {
	name: 'russian',
	description: 'Tag a member and kick them (but not really).',
	execute(message) {
		console.log(message.mentions.users)
		if (message.mentions.users.size < 2) {
			return message.reply('you need to tag atleast two users to play!');
		}


		temp = message.mentions.users.array()
		const taggedUser = message.mentions.users.array()[Math.floor(Math.random() * temp.length)]
		const member = message.guild.member(message.mentions.users.array()[Math.floor(Math.random() * temp.length)])

		member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`Successfully kicked ${member.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
		  });
		},
	};
