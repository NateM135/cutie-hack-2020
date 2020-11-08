module.exports = {
    name: 'rps',
    description: 'Rock Paper Scissors!',
    execute(message, args) {

        var computerpick = Math.round(Math.random() * (3 - 1) + 1);
        console.log(computerpick);
        var playerpick=4;
        switch (args[0]) {


            case 'Rock':

                playerpick = 2;
                break;

            case 'Paper':
                playerpick = 0;
                break;

            case 'Scissors':
                playerpick = -2;
                break;

        }

        switch (computerpick) {

            case 1:
                message.channel.send('Rock!');
                computerpick = 2;
                break;

            case 2:
                message.channel.send('Paper!');
                computerpick = 0;
                break;
            case 3:
                message.channel.send('Scissors');
                computerpick = -2;
                break;

        }


        console.log(computerpick + '==' + playerpick);
        if (computerpick == playerpick) {

            message.channel.send('It\'s a draw!');

        }
        else if ((playerpick * (computerpick * computerpick)) > playerpick || (computerpick * playerpick * playerpick) < computerpick) {

            message.channel.send('You win!');

        }
        else {
            console.log(playerpick * (computerpick * computerpick) + '>' + playerpick + '||' + computerpick * playerpick * playerpick + '<' + computerpick);
            message.channel.send('You lose!');
        }
    },
};