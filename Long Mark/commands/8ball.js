module.exports = {
	name: '8ball',
	description: 'Ask a question to the magic 8ball!',
	execute(message) {
		var magic = Math.floor(Math.random()*10+1);
		var x = ""
		switch (magic)
		{
			case 1: x = "Yes.";
			break;
			case 2: x = "No.";
			break;
			case 3: x = "The odds are in favor.";
			break;
			case 4: x = "The odds are against you.";
			break;
			case 5: x = "Never.";
			break;
			case 6: x = "Definitely!";
			break;
			case 7: x = "Maybe.";
			break;
			case 8: x = "I don't think so.";
			break;
			case 9: x = "I'd say no.";
			break;
			case 10: x = "Probably.";
			break;
	
			default: x = "Try Again.";
			break;
		}
		message.channel.send(x)
	},
};
