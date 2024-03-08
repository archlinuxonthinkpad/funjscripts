// Execute this script in the JavaScript console

let isScrambleEnabled = false; // Flag to track if scrambling is enabled
let intervalId; // ID of the interval

function scrambleText() {
    document.querySelectorAll("*").forEach(element => {
        Array.from(element.childNodes).forEach(childNode => {
            if (childNode.nodeType === Node.TEXT_NODE) {
                const originalText = childNode.nodeValue;
                const scrambledText = scrambleString(originalText);
                childNode.nodeValue = scrambledText;
            }
        });
    });
}

function scrambleString(str) {
    const strArray = str.split('');
    for (let i = strArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [strArray[i], strArray[j]] = [strArray[j], strArray[i]];
    }
    return strArray.join('');
}

// Event listener for keydown event
document.addEventListener('keydown', (event) => {
    if (event.key === 's') {
        isScrambleEnabled = true;
        // Scramble text every 100 milliseconds (10 times per second)
        intervalId = setInterval(scrambleText, 100);
    }
});

// Event listener for keyup event
document.addEventListener('keyup', (event) => {
    if (event.key === 's') {
        isScrambleEnabled = false;
        clearInterval(intervalId);
    }
});
