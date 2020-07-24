const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    var botEmbed = new discord.MessageEmbed()
            .setTitle('Open Zonewars Host')
            .setDescription(" **Rules** \n Don't Streamsnipe")
            .setColor("#0099ff")
            .addField("Code:", "CODE")
            .addField("Map Code:", "1234")
            .addField("Custom Host", message.author)
 
            .setThumbnail('https://imgur.com/LSMJctE.png')
            .setImage('')
            .setTimestamp()
            .setFooter('Click ✅ If you are in Queue', 'https://imgur.com/s5FaM8T.png');

            if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Error");
 
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("No Perms");
        message.delete();
            
            
        // Terug sturen van het bericht
        message.channel.send(botEmbed);

        if(message.author.id != "735115409870684270") return;
        message.react(`✅`);
        
        
    }
    

module.exports.help = {
    name: "open"
}