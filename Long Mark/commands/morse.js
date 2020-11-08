const fetch = require('node-fetch');

module.exports = {
	name: 'morse',
	description: 'Translates message into morse code!',
	execute(message, args) {

        if(args.length==0) {
            return message.reply("Please Add Next to MORSIFY!")
        }
        
        str = ""
        for(var i = 0; i<args.length; i++) {
            str = str + args[i] + " "
        }

        var json;

        (async () => {
            const response = await fetch('https://api.funtranslations.com/translate/morse?text=' + str);
            json = await response.json();
        
            message.channel.send(json['contents']['translated']);

        })();


	},
};



