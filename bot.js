const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_BOT_TOKEN' на токен вашего бота
const token = '7944647334:AAGRvJyxU0L3qKDfpNsyTP8siuSz64U4gIg';

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Создаем кнопку с параметром web_app
    const options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Открыть Mini App',
                        web_app: { url: 'https://mounty12312312.github.io/merchshop/' } // Замените на URL вашего приложения
                    }
                ]
            ]
        }
    };

    // Отправляем сообщение с кнопкой
    bot.sendMessage(chatId, 'Нажмите кнопку, чтобы открыть Mini App:', options);
});