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
            description: "����� ����: SmallTea", 
            type: "WATCHING" 
        },
        2: {
            description: "������� � ������� teaus4", 
            type: "WATCHING" 
        },
    }, 13000)
console.log("��� �������")
bot.MessageEvent()
 
bot.Command({
  name: "test",
  code: `
test lol
  `
})