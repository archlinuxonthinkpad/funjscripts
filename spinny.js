// Execute this script in the JavaScript console

function spinElements() {
    document.querySelectorAll("*").forEach(element => {
        const rotationSpeed = Math.random() * 2 + 1; // Random rotation speed between 1 and 3 degrees per frame
        const currentRotation = parseFloat(element.style.transform.replace('rotate(', '').replace('deg)', '') || 0);
        const newRotation = currentRotation + rotationSpeed;

        element.style.transition = "transform 0.1s linear";
        element.style.transform = `rotate(${newRotation}deg)`;
    });
}

// Spin elements every 100 milliseconds
setInterval(spinElements, 100);
