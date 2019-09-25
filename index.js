const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() == "js");
  if(jsfile.length <= 0) {
    console.log("Aucune commande trouvée.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} [OK]`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("voiceStateUpdate", (oldMember, newMember) => {
  let newUserChannelID = newMember.voiceChannelID
  let newUserName = newMember.username
  let channel = bot.channels.get("626043862397354025")
  let newPrivateChannel = bot.channels.get("626043862397354025")

  if(newUserChannelID == "534437314231926804") {
    channel.clone('Salon privé de ' + newUserName, true, false, 'Création channel privé.')
    .then(clone => console.log(`Clone du channel ${channel.name} pour faire un nouveau channel nommé ${clone.name}`), newPrivateChannel = clone.id)
    .catch(console.error);

    newMember.setVoiceChannel(newPrivateChannel)
  }
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} est connecté!`);
  bot.user.setActivity("Tapez k:aide !");
});

bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} a rejoint`);

  let welcomechannel = member.guild.channel.find(x => x.name === "serveur");
  welcomechannel.send(`${member} a rejoint Kartoffel, tu es maintenant une patate que tu le veuilles ou non !`);

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args);

});

bot.login(process.env.token);
