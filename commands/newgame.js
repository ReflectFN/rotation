const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.delete();
    return message.channel.send(" **New Game at 17:50!** ");
    
    
        
}

module.exports.help = {
    name: "newgame"
}