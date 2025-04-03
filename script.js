function checkPassword() {
    let password = document.getElementById("password").value;
    
    if (password === "anu2606") {
        document.getElementById("passwordSection").style.display = "none"; // Hide password input
        document.getElementById("heartContainer").style.display = "block"; // Show heart
        
        setInterval(createHeartRain, 300); // Small hearts continuously shower
    } else {
        alert("Incorrect password! Try again.");
    }
}

function createHeartRain() {
    const body = document.body;
    let heart = document.createElement("div");
    heart.classList.add("heart-rain");
    heart.innerText = "A";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}




