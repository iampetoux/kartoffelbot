const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Informations du Serveur")
  .setColor("#b7792d")
  .setThumbnail(sicon)
  .addField("Nom du Serveur", message.guild.name)
  .addField("Création le", message.guild.createdAt)
  .addField("Vous l'avez rejoint le", message.member.joinedAt)
  .addField("Total de Membres", message.guild.memberCount);

  return message.channel.send(serverembed);

}

module.exports.help = {
  name: "serveur"
}
