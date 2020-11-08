module.exports = {
	name: 'eval',
	description: 'Evaluate an expression',
	execute(message, args) {

        flag = "flag{th1s_1s_n0t_4_ctf}"

		if (args.length != 1) {
			return message.reply('Put one mathematical expression WITHOUT spaces');
		}

        message.channel.send(eval(args[0]))

		},
	};
