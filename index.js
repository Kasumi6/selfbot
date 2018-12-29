const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();

client.on("ready", () => {
    console.log(`${client.user.tag} prêt pour le carnage`)
   client.user.setActivity(`Le cul de ta mère sur pornhub`,{type:"WATCHING"})
    })
    client2.on("ready", () => {
        console.log(`${client2.user.tag} prêt pour le carnage`)
        client2.user.setActivity("Deadly Gang", {type: 'STREAMING'})
    })
    client3.on("ready", () => {
        console.log(`${client3.user.tag} prêt pour le carnage`)
        client3.user.setActivity("ta mère se faire prendre par des noirs", {type: 'WATCHING'})
    })
    client4.on("ready", () => {
        console.log(`${client4.user.tag} prêt pour le carnage`)
        client4.user.setActivity("Le cul de ta soeur", {type: 'WATCHING'})
    })
    client5.on("ready", () => {
        console.log(`${client5.user.tag} prêt pour le carnage`)
        client5.user.setActivity("Ta mère en slipe", {type: 'STREAMING'})
    })
    client6.on("ready", () => {
        console.log(`${client6.user.tag} prêt pour le carnage`)
        client6.user.setActivity("Enculé des licornes", {type: 'PLAYING'})
    })
client.on("message", message => {
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?FunH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(MessH)
}
if(message.content.includes("EL?FunH")){
    message.delete();
    var FunH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie fun 👻")
    .setColor("#ff1115")
    .addField("Fun 👻", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Biffle", "Vous envoyez un gif d'une femme qui se fait bifflé !")
    .addField("EL?Pute", "Vous envoyez un gif très mignon et pas du tout vulgaire.")
    .addField("EL?Blc", "M'en bat les couilles frère.")
    .addField("EL?RIPepil")
}
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
client2.on("message", message => {
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?FunH",true)
        .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?Pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(messH)
}
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    console.error();
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
client3.on("message", message => {
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?FunH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?Pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(messH)
    }
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
client4.on("message", message => {
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?FunH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?Pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(MessH)
}
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
client.on("message", message => {
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?FunH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(MessH)
}
if(message.content.includes("EL?FunH")){
    message.delete();
    var FunH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie fun 👻")
    .setColor("#ff1115")
    .addField("Fun 👻", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Biffle", "Vous envoyez un gif d'une femme qui se fait bifflé !")
    .addField("EL?Pute", "Vous envoyez un gif très mignon et pas du tout vulgaire.")
    .addField("EL?Blc", "M'en bat les couilles frère.")
    .addField("EL?RIPepil")
}
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();

client.on("ready", () => {
    console.log(`${client.user.tag} prêt pour le carnage`)
   client.user.setActivity(`Le cul de ta mère sur pornhub`,{type:"WATCHING"})
    })
    client2.on("ready", () => {
        console.log(`${client2.user.tag} prêt pour le carnage`)
        client2.user.setActivity("Deadly Gang", {type: 'STREAMING'})
    })
    client3.on("ready", () => {
        console.log(`${client3.user.tag} prêt pour le carnage`)
        client3.user.setActivity("ta mère se faire prendre par des noirs", {type: 'WATCHING'})
    })
    client4.on("ready", () => {
        console.log(`${client4.user.tag} prêt pour le carnage`)
        client4.user.setActivity("Le cul de ta soeur", {type: 'WATCHING'})
    })
    client5.on("ready", () => {
        console.log(`${client5.user.tag} prêt pour le carnage`)
        client5.user.setActivity("Ta mère en slipe", {type: 'STREAMING'})
    })
    client6.on("ready", () => {
        console.log(`${client6.user.tag} prêt pour le carnage`)
        client6.user.setActivity("Enculé des licornes", {type: 'PLAYING'})
    })
client.on("message", message => {
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?FunH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(MessH)
}
if(message.content.includes("EL?FunH")){
    message.delete();
    var FunH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie fun 👻")
    .setColor("#ff1115")
    .addField("Fun 👻", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Biffle", "Vous envoyez un gif d'une femme qui se fait bifflé !")
    .addField("EL?Pute", "Vous envoyez un gif très mignon et pas du tout vulgaire.")
    .addField("EL?Blc", "M'en bat les couilles frère.")
    .addField("EL?RIPepil")
}
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
//2
client2.on("message", message => {
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?FunH",true)
        .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?Pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(messH)
}
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    console.error();
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
//3
client3.on("message", message => {
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?FunH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?Pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(messH)
    }
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
//4
client4.on("message", message => {
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?FunH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?Pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(MessH)
}
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
//5
client5.on("message", message => {
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?FunH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(MessH)
}
if(message.content.includes("EL?FunH")){
    message.delete();
    var FunH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie fun 👻")
    .setColor("#ff1115")
    .addField("Fun 👻", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Biffle", "Vous envoyez un gif d'une femme qui se fait bifflé !")
    .addField("EL?Pute", "Vous envoyez un gif très mignon et pas du tout vulgaire.")
    .addField("EL?Blc", "M'en bat les couilles frère.")
    .addField("EL?RIPepil")
}
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
//6
client6.on("message", message => {
    if(message.content.includes("EL?Help")){
        message.delete();
        var Help = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`)
        .setTitle("Voici le help. 🆘")
        .setColor("#13f6e5")
        .addField("Voici les catégories du self-bot", "-------------------------------------------------------------------------")
        .addBlankField()
        .addField("Fun 👻", "EL?FunH",true)
        .addField("Message 💬", "EL?MessH",true)
        .addField("Info ℹ️", "EL?FunH",true)
        message.channel.sendEmbed(Help)
    }
    if(message.content.includes("EL?MessH")){
    message.delete();
    var MessH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie message ! 💬")
    .setColor("#fffe00")
    .addField("Message 💬", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?salut", "Vous envoyez un salut en mode random 👋",true)
    .addField("EL?pub", "Vous envoyez une pub en mode random 🔀",true)
    .setFooter("Et pour l'instant c'est tout, mais c'est en dév ! | By El Kasumi")
    message.channel.send(MessH)
}
if(message.content.includes("EL?FunH")){
    message.delete();
    var FunH = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Voici le help de la partie fun 👻")
    .setColor("#ff1115")
    .addField("Fun 👻", "-------------------------------------------------------------------------")
    .addBlankField()
    .addField("EL?Biffle", "Vous envoyez un gif d'une femme qui se fait bifflé !")
    .addField("EL?Pute", "Vous envoyez un gif très mignon et pas du tout vulgaire.")
    .addField("EL?Blc", "M'en bat les couilles frère.")
    .addField("EL?RIPepil")
}
      if(message.content.includes("EL?RIPepil")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif")
      }
      if(message.content.includes("EL?Mi-Grand")){
          message.delete();
          message.channel.send("https://cdn.discordapp.com/attachments/518527001280380960/520669737647341579/download.jpg")
      }
      if(message.content.includes("EL?RIPmusulmans")){
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/494169648514727968/520351217906614295/image-5.jpg")
      }
      if(message.content.includes("EL?Biffle")){
          message.delete();
          message.channel.send("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
      }
      if(message.content.includes("EL?Pute")){
          message.delete();
          message.channel.send("https://tenor.com/v3bY.gif")
      }
      if(message.content.includes("EL?Blc")){
          message.delete();
          message.channel.send("https://tenor.com/EtH0.gif")
      }
      if(message.content.includes("EL?Pub")){
          message.delete();
          var Pub = new Discord.RichEmbed()
          .setAuthor("PUB")
          .setColor("#45af08")
          .addField("https://discord.gg/Ar5fQS", "REJOIGNEZ BANDE DE PUTE")
          message.channel.send(Pub)
      }

    if(message.content.startsWith("EL?info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.client == true){
              var checkclient = "L'utilisateur est un client";
          } else {
              var checkclient = "N'est pas un client";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'bot',
                value: checkclient,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'By Apothéose.',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
    if(message.content.includes("EL?serverinfo")){
        message.delete();
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('#1fff03')
        .setFooter("By El Kasumi")
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    }
})
client.login("TOKEN1")
client2.login("TOKEN2")
client3.login("TOKEN3")
client4.login("TOKEN4")
client5.login("TOKEN5")
client6.login("TOKEN6")
