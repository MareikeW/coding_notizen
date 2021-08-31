/**
 * Challenge: Define our anonymous callback function as a separate function, then
 * pass it as the 2nd parameter to our `addEventListener`
 */

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(response => response.json())
        .then(data => console.log(data))
}
                                                            // Eine Callback-Funktion wird nicht sofort, sondern
                                                            // zu einem späteren Zeitpunkt ausgeführt.
document.getElementById("new-deck").addEventListener("click", handleClick)

/* oder mit Funktionsausdruck / functional expression const handleClick
const handleClick = function() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(response => response.json())
        .then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener("click", handleClick)
*/