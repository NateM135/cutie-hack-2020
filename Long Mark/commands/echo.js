module.exports = {
	name: 'echo',
	description: 'Sends back what you send to it.',
	execute(message, args) {

        if(args.length==0) {
            return message.reply("You must type something to send back!")
            
        }

        str = ""
        for(var i = 0; i<args.length; i++) {
            str = str + args[i] + " "
        }

        message.channel.send(str)
	},
};
