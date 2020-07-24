const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.id != "735115409870684270") return;
    message.react(`✅`);


}

    

module.exports.help = {
    name: "react"
}