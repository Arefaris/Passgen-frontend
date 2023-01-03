const charactersALL = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersNosymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const charactersOnlyLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const charactersLettersAndSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")
let passlen = document.getElementById("pass-lenght")
let symbols = document.getElementById("Symbols")
let numbers = document.getElementById("Numbers")
let range = document.getElementById("range")

function change() {
    passlen.textContent = range.value
}
 
function copytext1() {
    let el = document.createElement('textarea')
    let timepass = pass1.textContent
    el.value = pass1.textContent
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    pass1.textContent = "Password was copied to the clipboard"
    setTimeout(() => {
      pass1.textContent = timepass 
}, "2000")
}

function copytext2() {
    let el = document.createElement('textarea')
    let timepass = pass2.textContent
    el.value = pass2.textContent
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    pass2.textContent = "Password was copied to the clipboard"
    setTimeout(() => {
      pass2.textContent = timepass 
}, "2000")
    
}



function start(){
    function pass() {
         let password = ""
         
         for (let i = 0; i < passlen.textContent; i++) {
            if (symbols.checked == true && numbers.checked == true) {
                let randomint = Math.floor(Math.random() * charactersALL.length)
                password += charactersALL[randomint]  
            }else if (symbols.checked == true && numbers.checked == false) {
                let randomint = Math.floor(Math.random() * charactersLettersAndSymbols.length)
                password += charactersLettersAndSymbols[randomint] 
            }else if (symbols.checked == false && numbers.checked == true) {
                let randomint = Math.floor(Math.random() * charactersNosymbols.length)
                password += charactersNosymbols[randomint]
            }else {
                let randomint = Math.floor(Math.random() * charactersOnlyLetters.length)
                password += charactersOnlyLetters[randomint]
            }
        }
        
         return password
    }
    pass1.textContent = pass()
    pass2.textContent = pass()
}