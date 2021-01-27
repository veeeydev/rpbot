/* PAMIETAJ! 

Zanim cokolowiek zaczniesz tutaj edytowac przeczytaj readme.txt. Z tego pliku dowiesz sie co do czego sluzy, co mozesz edytowac oraz jak to mozesz zrobic!

*/

/* sekcja 0 */

const dbd = require("dbd.js")

const bot = new dbd.Bot({
token: "NzgyMDA3ODIzNzQ3OTA3NTk2.X8F7ig.HihYBMkMpnoMP1nmqUT0hYx_-a8", //tutaj wpisz swoj token bota. Jak to zdobyc przeczytaj readme.txt
prefix: "!"  //tutaj wpisz prefix swoich komend. Jezeli prefix. Jezeli nie wiesz co to jest przeczytaj "readme.txt"
})

/* koniec sekcji 0 */

/* sekcja 1 */
bot.variables({
    ownerid: "",
    changelog: "",
    ogloszenia: "",
    szef: "",
    wlchecker: "",
    obywatel: "",
    podaniakanal: "",
    wlkanal: " ",

  })

/* koniec sekcji 1 */

/* sekcja 2 */
bot.onMessage()
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
aliases: command.aliases,
nonPrefixed: command.nonPrefixed,
code: command.code
})
} 
}

/* koniec sekcji 2*/

/* sekcja 3 callbacki */  


/* koniec sekcji 3 */

/* sekcja 4 */
bot.status({
    type: "PLAYING",
    text: "TwojeRP",
    time: "45"
})

bot.status({
    type: "LISTENING",
    text: "connect twojeip",
    time: "45"
})
/* koniec sekcji 4 */


