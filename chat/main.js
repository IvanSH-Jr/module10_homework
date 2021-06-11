//const textValue = document.getElementById('textValue').value
const sendMess = document.querySelector('#sendMess')
const getGeo = document.querySelector('#getGeo')
const wsUrl = "wss://echo.websocket.org/"
const output = document.getElementById("output")
let mapLink = ''
let textValue = ''
let websocket = new WebSocket(wsUrl)

    websocket.onmessage = function(evt) {
        if ( !evt) return
        console.log("flag")
        textView(
            'From-Server: ' + evt.data + ';'
        )
        
    }

    websocket.onerror = function(evt) {
        console.log(evt)
        
    }

function textView(textValue) {
    let textElem = document.createElement('p')
    textElem.className = 'text-area'
    textElem.innerHTML = textValue
    output.appendChild(textElem)
}


const getGeoLoc = (position) => {
    console.log('position', position);
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    let textContent = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
    mapLink =  document.createElement('a')
    mapLink.href = textContent
    mapLink.innerHTML = "Ваша геолокация"

    output.appendChild(mapLink)
}

sendMess.addEventListener('click', () => {

    textValue = document.getElementById('textValue').value
    console.log(websocket.OPEN)
    console.log( websocket.CONNECTING)
    textView("From-you: " + textValue + ';')
    websocket.send(textValue)
});

getGeo.addEventListener('click', () => {
    if (!navigator.geolocation) {
       alert( 'Geolocation не поддерживается вашим браузером');
      } else {
        
        navigator.geolocation.getCurrentPosition(getGeoLoc);
      }
})

