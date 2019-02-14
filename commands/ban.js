const Discord = require("discord.js");
const ms = require("ms");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Impossible de trouver cette patate.");
  args.shift();
  let bReason = args.join(" ");
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission :c");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette patate ne peut pas être ban.");

  let BanEmbed = new Discord.RichEmbed()
  .setDescription("-- BAN --")
  .setColor("#ad140c")
  .addField("Utilisateur banni", `${bUser} avec l'ID: ${bUser.id}`)
  .addField("Banni par", `<@${message.author.id}> avec l'ID: ${message.author.id}`)
  .addField("Banni depuis le salon", message.channel)
  .addField("Date", message.createdAt)
  .addField("Raison", bReason);

  let banChannels = message.guild.channels.find(x => x.name === "staff");
  if(!banChannels) return message.channel.send("Impossible de trouver le salon.");

  message.guild.member(bUser).ban(bReason);
  banChannels.send(BanEmbed);

}

module.exports.help = {
  name: "ban"
}
