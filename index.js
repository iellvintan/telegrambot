const TelegramBot = require('node-telegram-bot-api');
const token = '656651449:AAFsV572HjVLPs71wI9tUltCSNYFP9aoP78';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/hungry/g, (msg, match) => {
    var chatId = msg.chat.id;
    var message = msg.text.toString().toLowerCase();
    
    var split = match.input.split(' ');
    var noOfsides = split[1];

    console.log(msg);

    if (noOfsides == undefined){
        noOfsides = '8';
    }

    var username = msg.chat.username;
    var rollNumber = dice(noOfsides).toString();

    if (message.includes('hungry')){
        if (rollNumber == 1){bot.sendMessage(chatId, 'RockCafe')}
        else if (rollNumber == 2){bot.sendMessage(chatId, '128')}
        else if (rollNumber == 3){bot.sendMessage(chatId, 'epic')}
        else if (rollNumber == 4){bot.sendMessage(chatId, 'McD')}
        else if (rollNumber == 5){bot.sendMessage(chatId, 'Texas')}
        else if (rollNumber == 6){bot.sendMessage(chatId, 'KFC')}
        else if (rollNumber == 7){bot.sendMessage(chatId, 'Koenigii')}
        else{bot.sendMessage(chatId, 'AsianAvenue')}
    }
});


bot.on('message', msg => {
    var chatId = msg.chat.id;
    var message = msg.text.toString().toLowerCase();
    var username = msg.chat.username;

    console.log(msg);

    if (message.includes('happy birthday')){
        bot.sendMessage(chatId, 'thank you! ' + username); 
    }
})


function dice(sides){
    return Math.floor(Math.random() * sides) + 1;

}


var http = require("http");


http.createServer(function (request, response) {

    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello God\n');
 }).listen(process.env.PORT || 5000);