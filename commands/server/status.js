const Discord = require("discord.js");
const client = new Discord.Client();
const fivem = require("discord-fivem-api");

/*
module.exports = {
    name: "status",
    code: `$djsEval[
    fivem.getServerInfo("51.83.234.237:30120").then((server) => setDescription((server.players.length))]`
}
*/
module.exports = {
    name: "status",
    code: `$djsEval[
        fivem.getServerInfo("51.83.234.237:30120").then(server) => {
            const Embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setAuthor("Server is online")}]
   `
}