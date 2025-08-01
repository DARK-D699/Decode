function encode() {
    const inputText = document.getElementById("inputText").value;
    let encodedText = '';
    for (let char of inputText) {
        encodedText += String.fromCharCode(char.charCodeAt(0) + 1); // Simple encoding by shifting character codes
    }
    document.getElementById("outputText").innerText = encodedText;
}

function decode() {
    const inputText = document.getElementById("inputText").value;
    let decodedText = '';
    for (let char of inputText) {
        decodedText += String.fromCharCode(char.charCodeAt(0) - 1); // Reverse shift for decoding
    }
    document.getElementById("outputText").innerText = decodedText;
}

function exit() {
    window.close(); // Stops the website
}
