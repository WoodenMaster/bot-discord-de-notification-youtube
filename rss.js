const axios = require('axios');
const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");

class Rss{

    xmlToJson(xml){
        
        const parser = new XMLParser();
        return parser.parse(xml);
    }

    async getRss(rssLink){

        return await new Promise(
            (resolve) => {
                axios.get(rssLink)
                    .then(async res=>{
                        resolve(this.xmlToJson(res.data))
                    })
            }
        )

    }
}


module.exports = {Rss}