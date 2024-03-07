const Discord = require("discord.js")

class Bot{

    constructor(token){
        this.client = new Discord.Client({intents : 3276799})
        this.client.login(token)
    }

    sendMessageToChannel(message, channel_id){

        this.client.on("ready", async()=>{
            this.client.channels.cache.get(channel_id).send(message)
        })
    }
}


module.exports = {Bot};
