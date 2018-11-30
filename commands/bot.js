const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Infos du BOT")
  .setColor("#b7792d")
  .setThumbnail(bicon)
  .addField("Nom du BOT", bot.user.username)
  .addField("Création", bot.user.createdAt);

  return message.channel.send(botembed);

}

module.exports.help = {
  name: "bot"
}
