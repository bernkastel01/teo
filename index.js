const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!!"; 

client.on("ready",() => {
    console.log("Telah Online")
})
client.on("message", message =>{

    //chat auto balas 
    if (message.content === "halo"){
      message.channel.send('halo juga');
    }
    if (message.content.startsWith("name")){
        message.channel.send(':regional_indicator_b: :regional_indicator_e: :regional_indicator_r: :regional_indicator_n::regional_indicator_k: :regional_indicator_a: :regional_indicator_s: :regional_indicator_t: :regional_indicator_e: :regional_indicator_l: ');
    }
    if (message.content.startsWith("ada slot")){
        message.reply('Silahkan cek ke voice channel untuk ketersedian slot, atau tunggu di channel #『⏳』Waiting_to_Sail dari pada hanya sekedar menanyakan slot saja :) ')
    }
    if (message.content.startsWith("sini")){
      message.reply('punten gofood')
    }
    if (message.content.startsWith("punten gofood")){
      message.channel.send('apakah benar anda seorang jomblo?')
    }
    if (message.content.startsWith("tumben rame")){
      message.channel.send('kalau sepi ya kuburan')
    }
    if (message.content.startsWith("aliansi")){
      message.channel.send('go go go power rangers')
    }
    if (message.content.startsWith(`ping`)) {
      message.channel.send('Matamu.');
    } else if (message.content.startsWith(`beep`)) {
      message.channel.send('anda pikir izin discord?.');
    } 
     else if (message.content === `server`) {
      message.channel.send(`Server name : ${message.guild.name}\nTotal members : ${message.guild.memberCount}`);
    }
    else if (message.content === `user-info`) {
      message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }

      })

client.login(process.env.TOKEN)
