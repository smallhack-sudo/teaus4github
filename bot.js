const teaus = require("teaus4")
 
const bot = new teaus({
  token: "TOKEN",
  prefix: ["PREFIX"]
})
bot.Status({
        0: {
            description: "npm i teaus4", 
            type: "WATCHING" 
        }, 
        1: {
            description: "Автор бота: SmallTea", 
            type: "WATCHING" 
        },
        2: {
            description: "Сделано с помощью teaus4", 
            type: "WATCHING" 
        },
    }, 13000)
console.log("Бот запущен")
bot.MessageEvent()
 
bot.Command({
  name: "test",
  code: `
test lol
  `
})