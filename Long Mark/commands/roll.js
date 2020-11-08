module.exports = {
	name: 'roll',
	description: 'Roll a Dice!',
	execute(message) {
		message.channel.send(1 + Math.floor(Math.random()*6));
	},
};
