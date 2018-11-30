const Discord = require("discord.js");
const ms = require("ms");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Impossible de trouver cette patate.");
  args.shift();
  let kReason = args.join("");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission :c");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette patate ne peut pas être kick.");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("-- KICK --")
  .setColor("#b7792d")
  .addField("Utilisateur kick", `${kUser} avec l'ID: ${kUser.id}`)
  .addField("Kick par", `<@${message.author.id}> avec l'ID: ${message.author.id}`)
  .addField("Kick depuis le salon", message.channel)
  .addField("Date", message.createdAt)
  .addField("Reason", kReason);

  let kickChannels = message.guild.channels.find(x => x.name === "staff");
  if(!kickChannels) return message.channel.send("Impossible de trouver le salon.");

  message.guild.member(kUser).kick(kReason);
  kickChannels.send(kickEmbed);

}

module.exports.help = {
  name: "kick"
}
