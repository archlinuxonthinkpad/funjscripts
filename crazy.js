// Execute this script in the JavaScript console

function makePageCrazy() {
    document.querySelectorAll("*").forEach(element => {
        const rotationAngle = Math.random() * 360;
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        const deltaX = Math.random() * 20 - 10;
        const deltaY = Math.random() * 20 - 10;

        element.style.transition = "transform 0.5s ease-in-out, background-color 0.5s ease-in-out";
        element.style.transform = `rotate(${rotationAngle}deg) translate(${deltaX}px, ${deltaY}px)`;
        element.style.backgroundColor = randomColor;
    });
}

// Make the page go crazy every 300 milliseconds
setInterval(makePageCrazy, 300);
