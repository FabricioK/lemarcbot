const Discord = require("discord.js");
const client = new Discord.Client();

var config = {
    apiKey: "AIzaSyCvjz6ZeHdrYgUB4w__0VbjpWBrufUMxFg",
    authDomain: "lemarc-bot.firebaseapp.com",
    databaseURL: "https://lemarc-bot.firebaseio.com",
    projectId: "lemarc-bot",
    storageBucket: "lemarc-bot.appspot.com",
    messagingSenderId: "430726932366"
  };
  firebase.initializeApp(config);

client.on("ready", () => {
  console.log("O GM está pronto!");
});
client.on("message", (message) => {
    if (message.content.startsWith("!GM!")) {
        switch (message.content) {
          case "!gm! vou sair em uma aventura":
              message.channel.send("ai que brava ela.");
            break;
            message.channel.send("Me desculpe, não entendi");
          default:
            break;
        }        
      }
});
//client.login(process.env.BOT_TOKEN);