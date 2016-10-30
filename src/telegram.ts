var TelegramBot = require('node-telegram-bot-api');
declare var TelegramBot: any;
import { config } from "../config";

export class Telegram {
    private _token: string = config.telegramToken;
    private bot:any;

    constructor() {
         this.bot = new TelegramBot(this._token, {polling: true});
    }


    receiveMessage() {
        this.bot.onText(/Post/i, (msg:any, match:any) => {
            let fromId = msg.from.id;
            let response = "Article posted.";
            this.bot.sendMessage(fromId, response);
        });

        this.bot.onText(/Add me/i, (msg:any, match:any)=> {
            let fromId = msg.from.id;
            let response = "Added you to list.";
            this.bot.sendMessage(fromId, response);
        });

        this.bot.onText(/123/, (msg:any, match:any)=> {
            let fromId = msg.from.id;
            let response = "Only numbers send";
            this.bot.sendMessage(fromId, response);
        });
    }

    sendMessage() {
        this.bot.sendMessage(config.chatId, "Work hard!")
    }

}
