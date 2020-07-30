const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.delete();
    return message.channel.send(" **Dit was de laatste game voor vandaag. Succes iedereen in de Bugha Throwback Cup! <3** ");
    
    
        
}

module.exports.help = {
    name: "newgame"
}