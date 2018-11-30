const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send("Salut !");
  message.channel.send("Quelqu'un a demandé de l'aide ?");
  message.channel.send(`Ah, c'est toi ${message.author} !`);

}

module.exports.help = {
  name: "aide"
}
