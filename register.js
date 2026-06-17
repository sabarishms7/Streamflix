document.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const password =
    document.getElementById("password").value;

    let users =
    JSON.parse(localStorage.getItem("users"))
    || [];

    // Check existing email
    const existingUser =
    users.find(user =>
        user.email.toLowerCase() ===
        email.toLowerCase()
    );

    if(existingUser){

        alert("Email already registered. Please login.");

        return;
    }

    users.push({
        name:name,
        email:email,
        password:password,
        blocked:false
    });

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    alert("Account Created Successfully");

    window.location.href = "login.html";

});