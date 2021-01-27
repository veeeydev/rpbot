!! 
MOZESZ EDYTOWAC TYLKO FOLDER "commands" ORAZ GLOWNY PLIK (index.js) ORAZ ICH ZAWARTOSC
!!

definicje;
"token" haslo twojego bota. Wlasnie tokenu uzywasz go zalogowania sie na konto bota.
"prefix" Przedrostek wszystkich komend, Jezeli ustawisz go na "!" kazda komenda bedzie musiala zaczynac sie od "!". Przyklad: !help. Owy prefix moze byc dowolny

== Ogolne ==

1; Tworzenie Konta bota

1. Wejdz na discord.com/developers
2. Prawy gorny rog, kliknij "New Application"
3. Podaj nazwe swojego bota, np: "TwojeRP BOT"
4. Nastepnie wybierz zakladke "Bot"
5. Kliknij "Add bot"
6. Teraz, zarzadzasz kontem swojego bota, tzn ustawiasz mu avatar oraz nazwe jego konta
7. Pod username masz "TOKEN" Click to Reveal token, ty kliknij przycisk lekko nizej "copy", Co to jest ten token? Czytaj wyzej

2; ID Roli

1. Wlacz tryb developera w discord
2. Nadaj sobie role jakiej chcesz zdobyc ID
3. Kliknij PPM na role, a nastepnie wybierz "Kopiuj ID"

3; Twoje ID

1. Wlacz tryb developera
2. Najedz na swoj nick np. w tabeli uzytkownikow
3. PPM, a nastepnie kopiuj ID

4; ID Kanalu

1. Wlacz tryb developera
2. PPM na kanal ktorego chcesz zdobyc ID, a nastepnie "Kopiuj ID"

5; Dodanie bota

1. Wybierz aplikacje bota.
2. Lewa strona. Wybierz "OAuth2" 
3. W Sekcji "scopes" wybierz "bot" oraz zjedz nizej
4. Teraz wybierasz permissje jaka ma miec bot. Zalecane: Administrator

6; Odpalanie bota (VSCODE)

1. Otworz terminal (Terminal > New Terminal)
2. Wpisz "node .", Bot bedzie online dopoki nie wylaczysz programu

7; Odpalanie bota (host)

1. Odpalanie bota na hostingu jest indywidualne, napisz do wlasciciela hostingu aby dowiedziec sie wiecej informacji. (Pamietaj! Musi to byc hosting obslugujacy "Node.js")

== Sekcje ==

Sekcja 0; Ogolne
    1. Wklej swoj token do odpowiednej linii
    2. Ustaw swoj prefix komend

Sekcja 1; Konfiguracja
    "ownerid" - ID Wlasciciela, ma on dostep do komendy "changelog" oraz "ogloszenie", w nastepnej aktualizacji bedzie mozna wybierac wiecej niz jedna osobe!
    "changelog" - ID Kanalu changelogu 
    "ogloszenia" - ID Kanalu ogloszen
    "szef" - ID Roli mogacej zarzadzac podaniami
    "wlchecker" - ID Roli mogacej uzywac komend "wl"
    "obywatel" - ID Roli obywatela. (Osoby po zdanej wlce)
    "podaniakanal" - ID kanalu z wynikami podan
    "wlkanal" - ID Kanalu z wynikami whitelist

Sekcja 2; Command handler
    !! nic nie tykaj, jezeli usuniesz ta sekcje, komendy nie beda dzialac! !!

Sekcja 3; Powitania

sekcja pojawi sie w najblizszej aktualizacji ;p

Przyklady komend

changelog:
    !changelog + nowe mieszkania
    - stare mieszkania
ogloszenie:
    !ogloszenie Od dzisiaj WL-ON
podanie:
    zdane:
        !podanie accept lspd @ping
    niezdane:
        !podanie decline lspd @ping
wl:
    zdane:
        wl tak @ping hex
    niezdane:
        wl nie @ping 1h


Prawdopodobnie wszystko rozpisalem, lecz jezeli wciaz czegos nie wiesz lub wywala bledy skontaktuj sie ze mna na discordzie!  (v e e y.#2484)