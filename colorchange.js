// Execute this script in the JavaScript console

function changeColors() {
    document.querySelectorAll("*").forEach(element => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        element.style.transition = "background-color 0.5s ease-in-out, color 0.5s ease-in-out";
        element.style.backgroundColor = randomColor;
        element.style.color = randomColor;
    });
}

// Change colors every 500 milliseconds
setInterval(changeColors, 1);
