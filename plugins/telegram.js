import TelegramBot from "node-telegram-bot-api";
import dotenv from 'dotenv';

dotenv.config();

//process.env.TELEGRAM_TOKEN

const bot = new TelegramBot('sdfsdfsdf', { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const name = msg.from.first_name || "User";

    bot.sendMessage(chatId, `Привет, ${name}! Добро пожаловать в нашего бота! ${chatId}`);
});

export default bot;