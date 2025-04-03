function checkPassword() {
    let password = document.getElementById("password").value;
    
    if (password === "anu2606") {
        document.getElementById("passwordSection").style.display = "none"; // Hide password input
        document.getElementById("heartContainer").style.display = "block"; // Show heart
    } else {
        alert("Incorrect password! Try again.");
    }
}


