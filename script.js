const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
"mongodb://localhost:27017/streamflix"
);

app.get("/", (req,res)=>{
    res.send("StreamFlix API Running");
});

app.listen(5000,()=>{
    console.log("Server Running");
});
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    subscription:String,
    watchlist:[]
});

module.exports = mongoose.model("User",UserSchema);
const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title:String,
    description:String,
    genre:String,
    poster:String,
    trailer:String,
    type:String,
    price:Number
});

module.exports = mongoose.model("Movie",MovieSchema);
fetch("/api/reviews",{
method:"POST",
body:JSON.stringify({
movieId,
rating:5,
comment:"Excellent movie"
}),
headers:{
"Content-Type":"application/json"
}
});
setTimeout(() => {
   window.location.href = "login.html";
}, 5000);
window.location.href = "home.html";
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Example validation
    if(email && password) {
        window.location.href = "index.html"; // homepage
    } else {
        alert("Invalid credentials");
    }
});
fetch("/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
})
.then(res => res.json())
.then(data => {
    if(data.success){
        window.location.href = "index.html";
    } else {
        alert("Login failed");
    }
});
window.location.href = "home.html";
document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email === "admin@gmail.com" && password === "123456") {

        alert("Login Successful");

        window.location.href = "home.html";

    } else {

        alert("Invalid Email or Password");

    }

});
document.getElementById("registerForm").addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Account Created");

    window.location.href = "login.html";

});
document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if(email === savedEmail && password === savedPassword){

        window.location.href = "home.html";

    } else {

        alert("Invalid Credentials");

    }

});
