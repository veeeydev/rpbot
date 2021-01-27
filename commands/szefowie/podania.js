module.exports = {
    name: "podanie",
    code: `
    
    $if[$message[1]==accept]
        $useChannel[$getVar[podaniakanal]]
        $author[$userTag[$mentioned[1]];$userAvatar[$mentioned[1]]]
        $description[<@$mentioned[1]>, twoje podanie o **$toUpperCase[$message[2]]** zostalo rozpatrzone z wynikiem __Pozytywnym!__]
        $footer[Twoje podanie sprawdzal $userTag;$authorAvatar]
        $color[#e7df11]
        $onlyIf[$mentioned[1]!=; Oznacz kogos! podanie accept <co> <wzmianka>]
        $onlyIf[$message[2]!=; Podaj kategorie! podanie accept <co> <wzmianka>]
    $endif
    $if[$message[1]==decline]
        $useChannel[$getVar[podaniakanal]]
        $author[$userTag[$mentioned[1]];$userAvatar[$mentioned[1]]]
        $description[<@$mentioned[1]>, twoje podanie o **$toUpperCase[$message[2]]** zostalo rozpatrzone z wynikiem __Negatywnym!__]
        $footer[Twoje podanie sprawdzal $userTag;$authorAvatar]
        $color[#fa4a4a]
        $onlyIf[$mentioned[1]!=; Oznacz kogos! podanie decline <co> <wzmianka>]
        $onlyIf[$message[2]!=; Podaj kategorie! podanie decline <co> <wzmianka>]
    $endif
    $onlyIf[$message[1]!=; podanie <accept/decline> <co (lspd,etc)> <wzmianka>]
    $onlyIf[$hasRoles[$authorID;$getVar[szef]]==true; Nie posiadasz roli szefa!]`
}