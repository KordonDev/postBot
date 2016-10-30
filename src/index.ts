import { Greeter } from "./greeter";
import { Telegram } from "./telegram";

export { Greeter };
const greeter = new Greeter("Arne");
console.log(greeter.greet());
const bot = new Telegram();
bot.receiveMessage();
bot.sendMessage();

