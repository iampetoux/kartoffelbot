const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`http://aws.random.cat/meow`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#b7792d")
  .setTitle("Chat")
  .setImage(body.file);

  message.reply("Voici un joli chat :cat:");
  message.channel.send(dogembed);

}

module.exports.help = {
  name: "chat"
}
