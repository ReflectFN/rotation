const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.delete();
    return message.channel.send(" **New Game at 18:15!** ");
    
    
        
}

module.exports.help = {
    name: "newgame"
}