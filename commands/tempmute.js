const Discord = require("discord.js");
const ms = require("ms");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  // k:tempmute @patate temps(1s/m/d)

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Impossible de trouver cette patate.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Impossible de rendre cette patate muette.");
  let muterole = message.guild.roles.find(x => x.name === "muted");

  // CREATION DU ROLE

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions: []
      })
      message.guild.channel.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
        });
      });
    } catch {
      console.log(e.stack);
    }
  }
  // FIN DE CREATION ROLE

let mutetime = args[1];
if(!mutetime) return message.reply("Vous n'avez pas précisé de temps.");

await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> a été rendu muet pendant ${ms(ms(mutetime))}.`);

setTimeout(function(){
  tomute.removeRole(muterole.id);
  message.channel.send(`<@${tomute.id}> n'est plus muet.`)
}, ms(mutetime));

}

module.exports.help = {
  name: "tempmute"
}
