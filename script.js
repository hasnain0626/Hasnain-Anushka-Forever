function checkPassword() {
    let password = document.getElementById("password").value;
    
    if (password === "anu2606") {
        document.getElementById("passwordSection").style.display = "none"; // Hide password input
        document.getElementById("heartContainer").style.display = "flex"; // Show hearts
        
        createHeartRain(); // Start heart rain effect
    } else {
        alert("Incorrect password! Try again.");
    }
}

function createHeartRain() {
    const body = document.body;
    for (let i = 0; i < 30; i++) { // Create 30 falling hearts
        let heart = document.createElement("div");
        heart.classList.add("heart-rain");
        heart.innerText = "A"; // Letter "A" inside hearts
        heart.style.left = Math.random() * 100 + "vw"; // Random position
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random speed
        body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove(); // Remove heart after animation
        }, 5000);
    }
}


