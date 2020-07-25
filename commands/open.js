const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    var botEmbed = new discord.MessageEmbed()
            .setTitle('Open Zonewars Host')
            .setDescription(" **Rules** \n Don't Streamsnipe")
            .setColor("#0099ff")
            .addField("Code:", "CODE")
            .addField("Map Code:", "8546-1628-3429")
            .addField("Custom Host", message.author)
 
            .setThumbnail('https://imgur.com/LSMJctE.png')
            .setImage('')
            .setTimestamp()
            .setFooter('Click ✅ If you are in Queue', 'https://imgur.com/s5FaM8T.png');

            if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Error");
 
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("No Perms");
        message.delete();
            
            
        // Vind het kanaal.
        var openChannel = message.guild.channels.find(`name`, "open");
    if (!openChannel) return message.guild.send("Kan het kanaal niet vinden");
 
    // Verzend het bericht en voeg er reacties aan toe.
    openChannel.send(botEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });
        
        
        
    }
    

module.exports.help = {
    name: "open"
}