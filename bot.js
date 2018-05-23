const Discord = require("discord.js");
const client = new Discord.Client();
var firebase = require("firebase");
var Sentiment = require('sentiment');

var sentiment = new Sentiment();
var ptLanguage = require('./portugues');

sentiment.registerLanguage('pt-Br', ptLanguage);

var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAG_EBUCKET,
  messagingSenderId: process.env.MESSAGIN_SENDER_ID
};


var opcoes = {
  "help": (s, msg) => {
    let textOpcoes = [];
    for (let opcao in opcoes) {
      textOpcoes.push(opcao);
    }
    let mensagemEnviada = `As opções de comando são: ${textOpcoes.join(', ')}`;
    msg.channel.send(mensagemEnviada);
  },
  "e o bambu?": (s, msg) => {
    msg.channel.send('enfia no cu <@' + msg.author.id + '>');
  },
  "quero": (s, msg,r) => {
    /*if (msg.createdAt.getHours() >= 11 && msg.createdAt.getMinutes() >= 30) {
      msg.channel.send("Achou que ainda dava tempo de fazer pedido? Achou errado Otário!");
      return;
    }*/
    if (r.score > 0) {
      msg.channel.send('Saudável ' + r.score);
    }else{
      msg.channel.send('Não saudável ' + r.score);
    }
  },
  "cardápio": (s, msg) => { msg.channel.send('tem altas coisas'); }
}
//firebase.initializeApp(config);

client.on("ready", () => {
  console.log("O lemarc está pronto!");
});
client.on("message", (message) => {

  if (message.author.bot)
    return;

  if (message.content.startsWith("!lemarc")) {
    var validate = message.content.toLowerCase().substring(8);

    var result = sentiment.analyze(validate, { language: 'pt-Br' });

    for (let opcao in opcoes) {
      if (validate.startsWith(opcao)) {
        opcoes[opcao](validate.substring(opcao.length), message, result);
        return;
      }
    }

    message.channel.send("Me desculpe, não entendi");
  }
});
client.login(process.env.BOT_TOKEN);
