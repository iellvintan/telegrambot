const TelegramBot = require('node-telegram-bot-api');
const token = '656651449:AAFsV572HjVLPs71wI9tUltCSNYFP9aoP78';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', msg => {
    var chatId = msg.chat.id;
    var message = msg.text.toString().toLowerCase();
    var username = msg.chat.username;

    console.log(msg);

    if (message.includes('happy birthday')){
        bot.sendMessage(chatId, 'thank you! ' + username); 
    }
})