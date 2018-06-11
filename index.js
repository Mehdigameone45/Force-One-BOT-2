const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login(process.env.TOKEN)

bot.on("ready", () => { //On dis que quand le bot est prêt, on va faire une action.
    bot.user.setStatus("dnd") //Le bot va se mettre en mode ne pas déranger
    bot.user.setGame("F!help / Tout le monde, faites semblant d'être occupés ! ):", "https://www.twitch.tv/mehdigameone") //Va mettre le bot en streaming avec le jeu séléctionner (dans les premiers "")
    console.log("Prêt") //On va dire au bot de mettre "Prêt" dans la console
   }) //On termine les instruction

    
bot.on('message' , message => {  
        if(message.content === 'F!hello') { 
            message.reply('Salut à toi !') 
         
        }
                            
});

bot.on('message' , message => {  
    if(message.content === 'F!ping') { 
        message.reply(':hourglass: ``257`` ms / :stopwatch: ``128`` ms / :heartbeat: ``15`` ms ') 
     
    }
                        
}); 

bot.on('message' , message => {  
    if(message.content === 'F!help') { 
        message.reply('Les commandes du bot sont : `F!hello` / `F!ping`/ `F!youtube`/`F!information`/`F!notificationyoutube`/`F!Jouer`/`F!feille`/`F!blague`/`F!afk`/`F!aide`/`F!helpserver`') 
     
    }
                        
}); 

bot.on('message' , message => {  
    if(message.content === 'F!youtube') { 
        message.reply('Voici le lien de ma chaîne YouTube : **https://www.youtube.com/channel/UCKwuk_yxzxfIK4ys_zCvt4Q**') 
     
    }
                        
}); 

bot.on('message' , message => {  
    if(message.content === 'F!information') { 
        message.reply('Le bot et dévloppement Version : `1.0`') 
     
    }
                        
}); 

bot.on('message' , message => {  
    if(message.content === 'F!notificationyoutube') { 
        message.reply('Tu as des Problème avec les notifications YouTube pas de problème sois actif sur Discord et dans le salon Textuel #😂notification-youtube😂 Tu recevoir un message qui te dis si `Mehdigameone` et en live !') 
     
    }
                        
}); 

bot.on('message' , message => {  
    if(message.content === 'F!Jouer') { 
        message.reply('Sa te dis de jouer à feille Papier ciseaux ? fait la commande pour jouer qui es `M!???`') 
     
    }
                        
}); 

bot.on('message' , message => {  
    if(message.content === 'F!???') { 
        message.reply('1 , 2 , 3 Je fait feille ✋🏼 et toi ? `(mes amis dise toujours que je suis nul à se jeux Pourquoi je sais pas 😰?)`') 
     
    }
                        
}); 

bot.on('message', message => {
 
    if(message.content === 'F!blague') { 
        message.reply('Tiens une blague mais venu à la tête : Quelle est la plus intelligente, la blonde, la rousse ou la brune ? La rousse parce que c’est un dictionnaire') 
     
    }
                        
}); 

bot.on('message', message => {  
    if(message.content === 'F!afk') { 
        message.reply('`Tu viens de te mettre AFK avec Succès` :tada: (Pour plus être AFK fait la commande `F!plusafk`)') 
     
    }    

});             

bot.on('message', message => {  
    if(message.content === 'F!plusafk') { 
        message.reply('Tu es plus AFK avec Succès :tada:') 
     
    }    

});    

bot.on('message', message => {  
    if(message.content === 'F!aide') { 
        message.reply('Je viens de demander à un administrateurs de venir voir ton problème sois patiencs et explique briévement ton problème en cas de pub en message privée ou autre fait ta demande de signalement sur le site internet : https://docs.google.com/forms/d/1ccpv9r1y9mXCe9Rnby-k-ttRN4kppT3iFVrYOOyZWr8/viewform?edit_requested=true') 
     
    }    

});    

bot.on('message', message => {  
    if(message.content === 'F!Sncf') { 
        message.reply('(Voici les information du Trafique Sncf) https://twitter.com/SNCF/status/995705734930292737') 
     
    }    

}); 

bot.on('message', message => {  
    if(message.content === 'F!helpserver') { 
        message.reply('Viens sur le serveur nous pourrons essaye de régler ton probléme ! : https://discord.gg/jR2q9Kd') 
     
    }    

}); 

bot.on('message', message => {  
    if(message.content === 'F!test') { 
        message.reply('Jennifer tu es la ?  <@381861828067852288> ') 
     
    }    

}); 



