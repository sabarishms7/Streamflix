
// Force splash screen before login page

if(performance.navigation.type === 1){

    window.location.replace("index.html");

};

window.addEventListener("beforeunload", function(){

    sessionStorage.setItem(
        "reloadLogin",
        "true"
    );

});

document.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
    document.getElementById("email").value.trim();

    const password =
    document.getElementById("password").value;

    const users =
    JSON.parse(localStorage.getItem("users"))
    || [];

    const user =
    users.find(user =>
        user.email.toLowerCase() ===
        email.toLowerCase() &&
        user.password === password
    );

    if(!user){

        alert("Invalid Email or Password");

        return;
    }

    const blockedUsers =
JSON.parse(localStorage.getItem("blockedUsers"))
|| [];

if(blockedUsers.includes(email)){

    alert("Your account has been blocked by Admin");

    return;

}

    localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );

    alert("Login Successful");

    window.location.replace("home.html");

});
function openAdminPanel(){

    const passcode =
    prompt("Enter Admin Passcode");

    const adminPasscode =
    "2026";

    if(passcode === adminPasscode){

        window.location.href =
        "admin.html";

    }else{

        alert("Incorrect Admin Passcode");

    }

}
