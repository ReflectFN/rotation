const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.delete();
    return message.channel.send(" **New Game at 20:30!** ");
    
    
        
}

module.exports.help = {
    name: "newgame"
}