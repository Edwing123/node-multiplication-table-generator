#!/home/edwing123/.tools/nvm/versions/node/v16.6.1/bin/node

require('colors')
const args = require('./config-args')
const emojis = require('node-emoji')
const utils = require('./utils')



;(async () => {
    const { base, limit, list } = args
    const numberTable = await utils.createNumberTable(base, limit)
    // console.log(args)
    console.clear()

    
    if (list) {
        console.log(numberTable.title.bold.green)
        for (let v of numberTable.values) {
            console.log(v)
        }
    }    


    try {
        response = await utils.writeNumberTable(numberTable)
        console.log()
        console.log(`${response.underline.blue} created successfully ${emojis.get('sparkles')}.`)
    } catch (e) {
        console.log()
        console.log(e.message)
    }
})()