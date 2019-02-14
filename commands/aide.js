const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send(`Salut !\nQuelqu'un a demandé de l'aide ?\n\nVoici la liste des commandes disponibles:`);

  let AideEmbed = new Discord.RichEmbed()
  .setDescription("-- AIDE --")
  .setColor("#b7792d")
  .addField("- k:addrole {patate} {rôle} [STAFF]", "Ajoute un rôle précis à la patate choisie.")
  .addField("- k:aide", "Affiche ce message d'aide.")
  .addField("- k:ban {patate} {raison} [STAFF]", "Bannir une patate.")
  .addField("- k:bot", "Donne les informations du bot.")
  .addField("- k:chat", "Affiche une photo de chat au hasard.")
  .addField("- k:chien", "Affiche une photo de chien au hasard.")
  .addField("- k:kick {patate} {raison} [STAFF]", "Kick une patate.")
  .addField("- k:report {patate} {raison}", "Signaler une patate.")
  .addField("- k:serveur", "Donne les informations sur le serveur.")
  .addField("- k:suprole", "Retirer un rôle à une patate.")
  .addField("- k:tempmute {patate} {temps} {raison}", "Rendre une patate muette.");

  message.channel.send(AideEmbed);
}

module.exports.help = {
  name: "aide"
}
