module.exports = {
	name: 'choose',
	description: 'Sends back what you send to it.',
	execute(message, args) {
        var arr = args;
        if(arr.length==0) {
            return message.reply("You must type something to choose!");
        }
            

        message.channel.send(args[Math.floor(Math.random() * arr.length)])
	},
};
