let userMail = document.getElementById("userMail");
let userPassword = document.getElementById("userPassword");
let login = document.getElementById("login");

login.addEventListener("click", () => {
    let users = JSON.parse(localStorage.getItem("users"));
    for (let index = 0; index < users.length; index++) {
        if (users[index].email == userMail.value && users[index].password == userPassword.value) {
            window.location.href = "home.html";
            localStorage.setItem("userName", JSON.stringify(users[index].name));
        }
        else {
            alert("Wrong email or password");
        }
    }
});