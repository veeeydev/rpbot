module.exports = {
    name: "changelog",
    code: `
    $channelSendMessage[$getVar[changelog];{title: Aktualizacja} {description: \`\`\`diff
$message
\`\`\`}{color: 2add15}{footer: $userTag:$authorAvatar} {timestamp}]
    $onlyIf[$message[1]!=; Musisz cos wpisac! \n+ cos \n- cos]
    $onlyForIDs[$getVar[ownerid];{author: Błąd!:https://cdn.discordapp.com/emojis/802561237883813959.png?v=1} {description: Nie posiadasz wystarczajacych uprawnien do wykonania tej komendy!} {color: fa4a4a} {footer: $userTag:$authorAvatar} {timestamp}]
    $suppressErrors[:x: Wystapil blad! Upewnij sie ze obecnie ustawiony kanal istnieje!]`}