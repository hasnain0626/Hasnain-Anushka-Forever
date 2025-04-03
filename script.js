function checkPassword() {
    let password = document.getElementById("password").value;
    let heart = document.getElementById("heart");

    if (password === "anu2606") { // Correct password for Anushka
        heart.style.display = "block";
    } else {
        alert("Wrong password! Try again 💔");
    }
}

