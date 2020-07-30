const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    var botEmbed = new discord.MessageEmbed()
            .setTitle('Arena Solo Custom')
            .setDescription(" **Rules** \n **YOU MAY** fight off spawn until there are 80 players alive. \n **DO NOT** fight or shoot at all until 2nd zone has fully closed. \n **DO NOT** Stream snipe/use anonymous or streamer mode. \n **DO NOT** grief players in any way until 2nd zone has fully closed. \n **YOU MAY** fight if storm surge occurs and you need damage, you \n are allowed to shoot until storm surge is over.")
            .setColor("#0099ff")
            .addField("Code:", "firstgame2")
            .addField("Custom Host", message.author)
 
            .setThumbnail('https://imgur.com/LSMJctE.png')
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
    name: "solo"
}