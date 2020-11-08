module.exports = {
    name: 'backwards',
    description: 'Prints a string backwards.',
    execute(message, args) {

        holder = ""
        for(var i = args.length -1 ; i>=0; i--) {
            holder += args[i] + " ";
        }
            
        message.channel.send(holder)
    },
};
