const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`http://uinames.com/api/`);

  let identiteembed = new Discord.RichEmbed()
  .setColor("#b7792d")
  .setTitle("Fausse identité")
  .setImage("https://www.emoji.co.uk/files/phantom-open-emojis/smileys-people-phantom/12325-bust-in-silhouette.png")
  .addField("Prénom", body.name)
  .addField("Nom de famille", body.surname)
  .addField("Genre", body.gender)
  .addField("Région", body.region);

  message.reply("Voici votre nouvelle identité :bust_in_silhouette:");
  message.channel.send(identiteembed);

}

module.exports.help = {
  name: "identite"
}
