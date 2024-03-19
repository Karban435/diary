const kontejner = document.getElementById("kontejner");
const tlacitko =document.getElementById("BTN");
const OdebratTl = document.getElementById("REM");
let hodnota = 1;

function pridatElement(){
    const myElement = document.createElement('input');
    myElement.type = "text";
    myElement.id = `elem${hodnota}`;

    const myBtn = document.createElement('button');
    myBtn.id = `elemBtn${hodnota}`


    const myBr = document.createElement('br')
    myBr.id = `elemBr${hodnota}`

    kontejner.appendChild(myElement);
     kontejner.appendChild(myBtn);
    kontejner.appendChild(myBr);
    hodnota++;
}

tlacitko.onclick = pridatElement;

function odebratElement(){
    let jmeno = `elem${hodnota-1}`
    const RemElement = document.getElementById(jmeno)

    let removBr = `elemBr${hodnota-1}`
    const RemBr = document.getElementById(removBr)

    let removBtn = `elemBtn${hodnota-1}`
    const RemBtn = document.getElementById(removBtn)

    kontejner.removeChild(RemBr)
    kontejner.removeChild(RemBtn)
    kontejner.removeChild(RemElement)
    hodnota--
    console.log("sdaD")
}

OdebratTl.onclick = odebratElement

