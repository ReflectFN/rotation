const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.delete();
    return message.channel.send(" @everyone ");
    
    
        
}

module.exports.help = {
    name: "everyone"
}