const fetch = require('node-fetch');

module.exports = {
	name: 'dog',
	description: 'Sends a picture of a dog!',
	execute(message) {

        var json;

        (async () => {
            const response = await fetch('https://nekos.life/api/v2/img/woof');
            json = await response.json();
        
            message.channel.send("", {files: [json.url]});

        })();


	},
};



