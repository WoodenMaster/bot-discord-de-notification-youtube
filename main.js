const bot = require("./bot")
const rss = require("./rss")
let last = require("./last.json")
const fs = require("fs")

const token = "votre_token"

setInterval(()=>{
    const Bot = new bot.Bot(token)
    const Rss = new rss.Rss()

    Rss.getRss("https://www.youtube.com/feeds/videos.xml?channel_id=id_de_la_chaine")
    .then(res=>{
        let lastVideo = res.feed.entry[0]
        
        if(lastVideo['yt:videoId'] != last.url){
                        
            last.url = lastVideo['yt:videoId']

            fs.writeFileSync("./last.json", JSON.stringify(last))

            Bot.sendMessageToChannel(`${lastVideo.title} https://www.youtube.com/watch?v=${last.url}`,"votre_lien_du_salon")
        }
    })
}, 60000);