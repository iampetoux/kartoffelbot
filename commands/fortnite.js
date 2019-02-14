const Discord = require("discord.js");
const ms = require("ms");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  let rMember = message.member;
  if(!rMember) return message.reply("Impossible de trouver cette patate.");
  args.shift();
  let gRole = message.guild.roles.find(x => x.name === "Patatenite");
  if(!gRole) return message.reply("Erreur de rôle.");

  if(rMember.roles.has(gRole.id)) return message.reply("Vous possédez déjà ce rôle.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Vous avez reçu le rôle ${gRole.name}`)
  } catch(e) {
    rMember.channel.send(`Vous avez ajouté le rôle ${gRole.name} à <@${rMember.id}>. Les DM de cette patate sont bloqués.`)
  }
  }

module.exports.help = {
  name: "fortnite"
}
