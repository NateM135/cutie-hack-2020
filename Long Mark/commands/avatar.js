module.exports = {
	name: 'server',
	description: 'prints server name',
	execute(message) {
        if (message.content === `${prefix}server`) {
            message.channel.send(`This server's name is: ${message.guild.name}`);
        }

}
};
