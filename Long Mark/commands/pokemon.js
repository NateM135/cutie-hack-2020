module.exports = {
    name: 'pokemon',
    description: 'Sends a specific Pokemon Image',
    execute(message, args) {
        if(args.length != 1 ) {
            return message.reply("Please specify one Pokemon");
        }
        message.channel.send("", {files: ["https://img.pokemondb.net/artwork/large/" + args[0].toLowerCase() + ".jpg"]});
    
    },
};