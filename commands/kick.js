const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

    if (!arguments[0]) return message.reply("Geen gebruiker opgegeven.");

    if (!arguments[1]) return message.reply("Gelieve een redenen op te geven.");

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[1]));

    var reason = arguments.slice(2).join(" ");

    if (!kickUser) return message.reply("Kan de gebruiker niet vinden.");

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setThumbnail(kickUser.user.displayAvatarURL)
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`** Gekickt:** ${kickUser} (${kickUser.id})
        **Gekickt door:** ${message.author}
        **Redenen: ** ${reason}`);


}
    

module.exports.help = {
    name: "kick"
}