module.exports = {
	name: 'servername',
	description: 'prints server name',
	execute(message) {

            message.channel.send(message.guild.name);
        

}
};
