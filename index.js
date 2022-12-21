function encrypt(key, plaintext, algorithm) {
    let output = "";
    

    switch (algorithm.value) {
        case "AES":
            output = CryptoJS.AES.encrypt(plaintext, key)
            break
        case "3DES":
            output = CryptoJS.TripleDES.encrypt(plaintext, key)
            break
        case "OTP":
            output = otp(plaintext, key, "encrypt", true);
            break
        default:
            console.log("Algorithm not selected")
            output = "Algorithm not selected"
    }
    

    document.getElementById("result").innerHTML = output
}

function decrypt(key, cyphertext, algorithm) {
    let output = "";

    switch (algorithm.value) {
        case "AES":
            output = CryptoJS.AES.decrypt(cyphertext, key).toString(CryptoJS.enc.Utf8)
            break
        case "DES":
            
        case "3DES":
            output = CryptoJS.TripleDES.decrypt(cyphertext, key).toString(CryptoJS.enc.Utf8)
            break
        case "OTP":
            output = otp(cyphertext, key, "decrypt", true);
            break
        default:
            console.log("Algorithm not selected")
            output = "Algorithm not selected"
    }
    
    if (output === "")
        output = "Wrong key"

    document.getElementById("result1").innerHTML = output
}

let copyOutput = document.getElementById("copy")

copyOutput.addEventListener("click", () => {
    let copyText = document.getElementById('result')
    navigator.clipboard.writeText(copyText.innerHTML)
    
    copyOutput.innerHTML = "Copied!"
    copyOutput.disabled = true
})

let paste = document.getElementById("paste")
paste.addEventListener("click", async () => {
    let pasteText = await navigator.clipboard.readText()
    document.getElementById("text1").value = pasteText
})

let submitButton = document.getElementById("submit")

let crypt = document.getElementById("crypt")



let cryptForm = document.getElementById('cryptForm')

cryptForm.addEventListener('submit', (event)=>{
    event.preventDefault()

    let key = document.getElementById("key").value
    let text = document.getElementById("text").value
    let algorithm = document.getElementById("algorithm")
    encrypt(key, text, algorithm)
    
    copyOutput.innerHTML = 'Copy'
    copyOutput.disabled = false
})

let submitButton1 = document.getElementById("submit1")





let cryptForm1 = document.getElementById('cryptForm1')

cryptForm1.addEventListener('submit', (event)=>{
    event.preventDefault()

    let key = document.getElementById("key").value
    let text1 = document.getElementById("text1").value
    let algorithm = document.getElementById("algorithm")
    decrypt(key, text1, algorithm)
    
    copyOutput.innerHTML = 'Copy'
    copyOutput.disabled = false
})
