const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.delete();
    return message.channel.send(" **ee** ");
    
    
        
}

module.exports.help = {
    name: "newgame"
}