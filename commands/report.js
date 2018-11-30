const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Impossible de trouver cette patate.");
    args.shift();
    let reason = args.join(" ");

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Nouveau signalement")
    .setColor("#b7792d")
    .addField("Patate signalée", `${rUser} avec l'ID: ${rUser.id}`)
    .addField("Signalée par", `${message.author} avec l'ID: ${message.author.id}`)
    .addField("Salon", message.channel)
    .addField("Date", message.createdAt)
    .addField("Raison", reason);

    let reportchannels = message.guild.channels.find(x => x.name === "staff");
    if(!reportchannels) return message.channel.send("Impossible de trouver le salon.");


    message.delete().catch(O_o=>{});
    reportchannels.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
