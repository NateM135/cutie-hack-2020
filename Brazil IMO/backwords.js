module.exports = {
    name: 'backwords',
    description: 'Prints a string backwords.',
    execute(message, args) {

        holder = ""
        for(var i = args.length() -1 ; i>0; i--) {
            holder += args[i]
        }
            
        message.channel.send(holder)
    },
};