import TelegramBot from "node-telegram-bot-api";
import dotenv from 'dotenv';

dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const name = msg.from.first_name || "User";

    bot.sendMessage(chatId, `Привет, ${name}! Добро пожаловать в нашего бота! ${chatId}`);
});

export default bot;