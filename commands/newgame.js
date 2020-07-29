const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.delete();
    return message.channel.send(" **Dit was de laatste Game voor vandaag, MORGEN CUSTOMS!!** ");
    
    
        
}

module.exports.help = {
    name: "newgame"
}