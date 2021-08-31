API: Application Programming Interface (Programmierschnittstelle)
    --> Mit so einer Schnittstelle kann man auf Funktionen vom Betriebssystem oder von anderen Diensten zugreifen.

Server: Ein Computer, der Requests/Anfragen für etwas von einem Client annimmt und dann dem Client das gewünschte schickt.
        --> Daten (z. B. als JSON-Dateiformat, Bilder, Dateien, eine HTML-Seite)
Client: Jedes Gerät, das sich mit dem Internet verbindet, um Daten von woanders zu bekommen (macht Anfragen/Requests) 
        --> Handy, Tablet, Laptop, "smart" Devices wie Apple Watch oder Smart-TV

Request/Anfrage: Wenn ein Client (e.g. mein Computer) nach einer Resource von einem Server fragt.
Response: Wenn ein Server auf die Anfrage des Clients antwortet (Anfrage wurde angenommen oder nicht).

HTTP: Hypertext Transfer Protocol
    --> HTTP ist ein Protokoll, indem festgelegt wird, wie Hyptertext (Text) über das Internet geschickt werden soll.
    --> Bestandteile eines HTTP-Requests:
            1. Path (die URL)
            2. Methoden (GET, POST, PUT, DELETE, PATCH, OPTIONS)
            3. Body (optional)
                --> Daten, die man an den Server senden möchte.
                --> Benutzt man nur mit POST- und PUT-Anfragen.
                --> Muss zuerst in JSON umgewandelt werden.
            4. Headers (Meta-Infos über den Request z. B. was für ein Browser sendet diesen Request oder ein Authentifizierungs-Token)
                --> Extra/Meta-Infos über den ausgesendeten Request.
                --> Art der Authentifizierung, body info, client info, usw.
    --> GET: Daten bekommen
    --> POST: neue Daten hinzufügen
    --> PUT: vorhandene Daten aktualisieren
    --> DELETE: Daten löschen

URL: Uniform Resource Locator
    --> Bestandteile einer URL: 
            - BaseURL, die sich nie verändert: https://apis.scrimba.com/jsonplaceholder
            - Endpoint, der sich an die Resource, die man haben möchte, anpasst: /posts

Mit fetch():
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => console.log(data))

oder:
fetch("https://apis.scrimba.com/jsonplaceholder/todos", {method: "GET"})
    .then(response => response.json())
    .then(data => console.log(data));

oder:
fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
    method: "POST",
    body: JSON.stringify({
        title: "Einkaufen",
        completed: false
    }),
    headers: {
        // sagt, dass Daten im JSON-Format geschickt werden
        "Content-Type": "application/json"
    }
})
    .then(response => response.json())
    .then(data => console.log(data))


