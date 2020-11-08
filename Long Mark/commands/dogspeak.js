//https://api.funtranslations.com/translate/doge.json?text=

const fetch = require('node-fetch');

module.exports = {
	name: 'dogspeak',
	description: 'Sends a picture of a dog!',
	execute(message, args) {

        if(args.length==0) {
            return message.reply("Please Add Next to DOGGIFY!")
        }
        
        str = ""
        for(var i = 0; i<args.length; i++) {
            str = str + args[i] + " "
        }

        var json;

        (async () => {
            const response = await fetch('https://api.funtranslations.com/translate/doge.json?text=' + str);
            json = await response.json();
        
            message.channel.send(json['contents']['translated']);

        })();


	},
};



