/**
 * Challenge:
 * 
 * Check this website for how to change the Content-Type header
 * to indicate that there's JSON in the request body.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
 * 
 * Apply that header to our fetch request, send it, and check what comes back.
 */

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