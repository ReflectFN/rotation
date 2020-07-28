const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    const categoryID = "736165377301807144";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketExist = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == "Ticket" + userName.toLowerCase()) {
            ticketExist = true;

            message.reply("You already have a ticket!");

            return;
        }

    });

    if (ticketExist) return;

    var embed = new discord.MessageEmbed()
    .setFooter(botConfig.footer)
    .setTitle("Welcome " + message.author.username)
        .setDescription("_**Your ticket has been created!**_")
        .setTimestamp()

    message.channel.send(embed);

    message.guild.channels.create("Ticket -" + userName.toLowerCase(), { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });
                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === 'Staff'), {
                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: true,
                        CONNECT: true,
                        READ_MESSAGES_HISTORY: true,
                        READ_MESSAGES: true
                    });

                    settedParent.updateOverwrite(message.author, {
                        CREATE_INSTANT_INVITE: false,
                        VIEW_CHANNEL: true,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        READ_MESSAGES_HISTORY: true

                    });
                    var embedParent = new discord.MessageEmbed()  
                    .setTitle(`Hey ${message.author.username}`)
                    .setDescription("Send your Question / Report here.")
                    .setTimestamp()
 
                    settedParent.send(`<@${message.author.id}>`, embedParent)
                    settedParent.send(`<@735135165931585628>`, embedParent)

                }
            ).catch(err => {
                message.channel.send("Error"),
                    console.log(err);
            });
        }
    ).catch(err => {
        message.channel.send("Error 2"),
            console.log(err);
    });

}

module.exports.help = {
    name: "ticket"
}