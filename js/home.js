let welcomeMsg = document.getElementById("welcomeMsg");
let logout = document.getElementById("logout");
let user = JSON.parse(localStorage.getItem("userName"));
welcomeMsg.innerHTML = `Welcome ${user}`
logout.addEventListener("click", () => {
    window.location.href = "index.html";
    localStorage.removeItem("userName" , JSON.stringify(user));
});