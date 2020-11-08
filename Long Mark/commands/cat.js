const fetch = require('node-fetch');

module.exports = {
	name: 'cat',
	description: 'Sends a picture of a cat!',
	execute(message) {

        var json;

        (async () => {
            const response = await fetch('https://nekos.life/api/v2/img/meow');
            json = await response.json();
        
            message.channel.send("", {files: [json.url]});

        })();


	},
};



