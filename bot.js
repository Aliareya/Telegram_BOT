const TelegramBot = require('node-telegram-bot-api');
const translate = require('google-translate-api-x');

const token = "7573249705:AAFZ_flYffPLyjBJj2v5h7LmT46BKhAlZ6w"
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (!text) {
    return bot.sendMessage(chatId, 'فقط پیام متنی ترجمه می‌شود.');
  }

  try {
    const res = await translate(text, { to: 'en' });
    bot.sendMessage(chatId, `ترجمه:\n${res.text}`);
  } catch (err) {
    console.error('❌ خطا:', err);
    bot.sendMessage(chatId, '⚠️ مشکلی در ترجمه رخ داد.');
  }
});
