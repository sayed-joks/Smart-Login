let userName = document.getElementById("userName");
let userMail = document.getElementById("userMail");
let userPassword = document.getElementById("userPassword");
let logout = document.getElementById("signup");
let userContaner=[];
if(localStorage.getItem('users') != null){
    userContaner = JSON.parse(localStorage.getItem("users"));
}
logout.addEventListener("click", () => {
    for(let index = 0; index < userContaner.length; index++){
        if(userContaner[index].email == userMail.value){
            alert("Email already exists");
            return false;
        }
        if (userContaner[index].name == userName.value) {
            alert("User Name already exists");
            return false;
        }
    }
    if(userName.value == "" && userMail.value == "" && userPassword.value == ""){
        alert("Please fill all the fields");
        return false;
    }
    if(userMail.value.indexOf("@") == -1){
        alert("Please enter a valid email");
        return false;
    }
    if(userPassword.value.length < 6){
        alert("Password must be at least 6 characters long");
        return false;
    }
    if(userName.value.length < 3){
        alert("Name must be at least 3 characters long");
        return false;
    }
    if(userMail.value.indexOf("@") == -1){
        alert("Please enter a valid email");
        return false;
    }
    let user = {
        name: userName.value,
        email: userMail.value,
        password: userPassword.value
    }
    userContaner.push(user)
    console.log(userContaner);
    localStorage.setItem("users", JSON.stringify(userContaner))
    alert("User created successfully");
    window.location.href = "index.html"; 
});
