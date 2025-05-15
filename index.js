const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassEl = document.getElementById("firstpass")
let secondPassEl = document.getElementById("secondpass")
let characterAmount = 15




function genchar() {
    let generatedcharacter = Math.floor(Math.random()*characters.length)
    return characters[generatedcharacter]
}

function generate() {
    let pass= []
    for (let i=0; i< characterAmount; i++ ) {
        pass.push(genchar(i))
    }
    return pass
}

function generatepass() {
    let firstpass= generate()
    firstpass = firstpass.join('')
   firstPassEl.textContent= firstpass
   let secondpass= generate()
    secondpass = secondpass.join('')
   secondPassEl.textContent= secondpass
    
}
