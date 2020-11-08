module.exports = {
	name: 'flip',
	description: 'Flip a Coin!',
	execute(message) {
        val = Math.floor(Math.random()*2);
        if(val==0) {
            message.channel.send("Tails!", {files: ["https://i.imgur.com/YctYlLB.png"]}); 
        }
        else {
            message.channel.send("Heads!", {files: ["https://i.imgur.com/eQ2tprd.png"]});
        }

	},
};
