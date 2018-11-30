const Discord = require("discord.js");
const ms = require("ms");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Vous n'avez pas la permission :c");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Impossible de trouver cette patate.");
  args.shift();
  let role = args.join(" ");
  if(!role) return message.reply("Précisez un rôle!");
  let gRole = message.guild.roles.find(x => x.name === role);
  if(!gRole) return message.reply("Impossible de trouver ce rôle.");

  if(rMember.roles.has(gRole.id)) return message.reply("Cette patate possède déjà ce rôle.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Vous avez reçu le rôle ${gRole.name}`)
  } catch(e) {
    rMember.channel.send(`Vous avez ajouté le rôle ${gRole.name} à <@${rMember.id}>. Les DM de cette patate sont bloqués.`)
  }
  }

module.exports.help = {
  name: "addrole"
}
