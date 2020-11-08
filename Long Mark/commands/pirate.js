//https://api.funtranslations.com/translate/doge.json?text=

const fetch = require('node-fetch');

module.exports = {
	name: 'pirate',
	description: 'Translates words into pirate!',
	execute(message, args) {

        if(args.length==0) {
            return message.reply("Please Add Next to PIRATE-IFY! ARG!!")
        }
        
        str = ""
        for(var i = 0; i<args.length; i++) {
            str = str + args[i] + " "
        }

        var json;

        (async () => {
            const response = await fetch('https://api.funtranslations.com/translate/pirate?text=' + str);
            json = await response.json();
        
            message.channel.send(json['contents']['translated']);

        })();


	},
};



