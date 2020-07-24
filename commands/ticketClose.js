const discord = require("discord.js");

module.exports.run = async(Client, message, args) =>{

     message.delete();

    const categoryID = "736165377301807144";

    if(! message.member.roles.cache.has("735135165931585628")) return message.reply("You can't use this command");

    if (message.channel.parentID == categoryID) {
        message.channel.delete();

        var ticketLog = new discord.MessageEmbed()
         .setTitle("Ticket Log - " + message.channel.name)
         .setColor("#A0DFE9")
         .setFooter("Rotation Practise")
         .setTimestamp()
         .setDescription(`This Ticket is closed by. ${message.author}`)
   
        var logsTicket = message.member.guild.channels.cache.find(channel => channel.name === "logs")
        if (!logsTicket) return message.reply("We can't find the log channel");

        logsTicket.send(ticketLog);

    } else {

        message.channel.send("You can't use this command here")

    }

}

module.exports.help = {
    name: "close"
}