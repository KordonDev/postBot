var TelegramBot = require('node-telegram-bot-api');
declare var TelegramBot: any;
import { config } from "../config";

export class Telegram {
    private _token: string = "";
    // var bot = TelegramBot(_token, {polling: true});
    // console.log(bot);
    constructor() {
        console.log(config.telegramToken);
    }
}
