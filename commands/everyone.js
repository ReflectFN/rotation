const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.delete();

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Error");
 
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("No Perms");
        
    return message.channel.send(" @everyone ");
    
    
        
}

module.exports.help = {
    name: "everyone"
}