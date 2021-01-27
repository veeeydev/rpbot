module.exports = {
    name: "wl",
    code: `
    
    $if[$message[1]==tak]
        $useChannel[$getVar[wlkanal]]
        $giveRoles[$mentioned[1];$getVar[obywatel]]
        $onlyIf[$message[3]!=; Musisz podac hex!] 
        $onlyIf[$mentioned[1]!=; Musisz kogos oznaczyc!]
        $title[Zdane!]
        $description[<@$mentioned[1]> Pomyslnie zdal whitelist!]
        $color[2add15]
        $footer[$message[3] • WL Checker: $userTag;$authorAvatar]
        $addTimestamp
    $endif
    $if[$message[1]==nie] 
        $useChannel[$getVar[wlkanal]]
        $onlyIf[$message[3]!=; Musisz podac ] 
        $onlyIf[$mentioned[1]!=; Musisz kogos oznaczyc!]
        $title[Niezdane!]
        $description[<@$mentioned[1]> niezdal whitelist! **Wroc ponownie za** \`$message[3]\`]
        $color[fa4a4a]
        $footer[WL Checker: $userTag;$authorAvatar]
        $addTimestamp
    $endif
    $onlyIf[$message[1]!=; wl <czy zdal (tak/nie)> <wzmianka> <hex (jezeli zdal)> <kiedy moze wrocic (jezeli nie zdal)>]
    $onlyIf[$hasRoles[$authorID;$getVar[wlchecker]]==true; Nie posiadasz roli wlcheckera!]
    $suppressErrors[:x: Błąd!]`
}