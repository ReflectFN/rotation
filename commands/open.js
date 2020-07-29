const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    var botEmbed = new discord.MessageEmbed()
            .setTitle('Open Zonewars Host')
            .setDescription(" **Rules** \n Don't Streamsnipe")
            .setColor("#0099ff")
            .addField(" **CREATIVE FILL** Code:", "lobbyfullpls")
            .addField("Map Code:", "8546-1628-3429")
            .addField("Custom Host", message.author)
 
            .setThumbnail('https://imgur.com/3AYn0NE.png')
            .setImage('')
            .setTimestamp()
            .setFooter('Click ✅ If you are in Queue', 'https://imgur.com/s5FaM8T.png');

            if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Error");
 
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("No Perms");
        message.delete();
            
            
        // Verzend het bericht en voeg er reacties aan toe.
    message.channel.send(botEmbed).then(embedMessage => {
        embedMessage.react('735569723550335087');
    });
        
        
        
    }
    

module.exports.help = {
    name: "open"
}