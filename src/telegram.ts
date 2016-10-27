var TelegramBot = require('node-telegram-bot-api');
declare var TelegramBot: any;
import { config } from "../config";

export class Telegram {
    private _token: string = config.telegramToken;
    private bot:any;

    constructor() {
         this.bot = new TelegramBot(this._token, {polling: true});
    }

    echo() {
        this.bot.onText(/(.+)/, (msg:any, match:any) => {
            console.log(msg)
            let fromId = msg.from.id;
            let response = match[1];
            console.log(this.bot);
            this.bot.sendMessage(fromId, response);
        })
    }

}
