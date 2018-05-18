const Discord = require("discord.js");
const client = new Discord.Client();
var firebase = require("firebase");

var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAG_EBUCKET,
  messagingSenderId: process.env.MESSAGIN_SENDER_ID
};
//firebase.initializeApp(config);

client.on("ready", () => {
  console.log("O lemarc está pronto!");
});
client.on("message", (message) => {
  if (message.content.startsWith("!lemarc")) {
    switch (message.content.toLowerCase()) {
      case message.content.startsWith("lemarc help!"):
        message.channel.send("as opções são 'inicie seu pedido com 'quero' ou peça pelo 'cardápio'");
        break;
      case message.content.startsWith("!lemarc quero"):
        message.channel.send("foda-se");
        break;
      case message.content.startsWith("!lemarc cardápio"):
        message.channel.send("tem altas coisas");
        break;
        message.channel.send("Me desculpe, não entendi");
      default:
        break;
    }
  }
});
client.login(process.env.BOT_TOKEN);




