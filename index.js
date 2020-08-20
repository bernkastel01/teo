const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "T."; 

const token = "process.env.TOKEN"

client.on("ready",() => {
    console.log("Telah Online")
})
client.on("message", message =>{
    if (!message.content.startsWith(prefix))return;

    if (message.content.startsWith(prefix + "Dor")){
        message.channel.send("jeder.");
        message.reply("Ntapz!");

    }
})

client.login(token)
