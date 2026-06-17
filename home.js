// Check Login

const currentUser =
JSON.parse(localStorage.getItem("currentUser"));

if(!currentUser){

    window.location.href = "login.html";

}

// Welcome User

document.getElementById("welcomeUser").innerHTML =
`Welcome, ${currentUser.name}
<span id="premiumBadge"></span>`;

// Logout

document.getElementById("logoutBtn")
.addEventListener("click", function(){

    localStorage.removeItem("currentUser");

    window.location.href = "login.html";

});

// Premium Subscription Details

const subscriptions =
JSON.parse(localStorage.getItem("subscriptions"))
|| [];

const userSubscription =
subscriptions.find(
sub => sub.email === currentUser.email
);

if(userSubscription){

    document.getElementById("premiumBadge")
    .innerHTML = "PREMIUM";

    document.getElementById("premiumInfo")
    .innerHTML =

    `
    <h3>💎 Premium Member</h3>

    <p><strong>Plan:</strong>
    ${userSubscription.plan}</p>

    <p><strong>Amount Paid:</strong>
    ${userSubscription.amount}</p>

    <p><strong>Status:</strong>
    ${userSubscription.status}</p>

    <p><strong>Date:</strong>
    ${userSubscription.date}</p>
    `;

}
else{

    document.getElementById("premiumInfo")
    .innerHTML =

    `
    <h3>Free User</h3>
    <p>Upgrade to Premium to unlock exclusive content.</p>
    `;

}

// Watch Now Button

function scrollToTrending(){

    document
    .getElementById("trendingMovies")
    .scrollIntoView({
        behavior:"smooth"
    });

}

// Movie Player

function playMovie(videoPath){

    document.getElementById("movieModal")
    .style.display = "flex";

    document.getElementById("movieSource")
    .src = videoPath;

    document.getElementById("moviePlayer")
    .load();

}

function closeMovie(){

    document.getElementById("movieModal")
    .style.display = "none";

    document.getElementById("moviePlayer")
    .pause();

}

// Card Selection Effect

const cards =
document.querySelectorAll(".movie-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        cards.forEach(c =>
        c.classList.remove("selected"));

        card.classList.add("selected");

    });

});
function openPremiumDetails(){

    const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

    const subscriptions =
    JSON.parse(localStorage.getItem("subscriptions"))
    || [];

    const userSubscription =
    subscriptions.find(
        sub => sub.email === currentUser.email
    );

    if(!userSubscription){

        alert("No Premium Subscription Found");
        return;
    }

    let startDate =
    new Date(userSubscription.date);

    let expiryDate =
    new Date(startDate);

    if(userSubscription.plan === "Basic"){
        expiryDate.setMonth(
        expiryDate.getMonth()+1);
    }

    else if(userSubscription.plan === "Standard"){
        expiryDate.setMonth(
        expiryDate.getMonth()+6);
    }

    else{
        expiryDate.setFullYear(
        expiryDate.getFullYear()+1);
    }

    document.getElementById(
    "premiumDetails"
    ).innerHTML =

    `
    <p><strong>Name:</strong>
    ${userSubscription.name}</p>

    <p><strong>Email:</strong>
    ${userSubscription.email}</p>

    <p><strong>Plan:</strong>
    ${userSubscription.plan}</p>

    <p><strong>Amount Paid:</strong>
    ${userSubscription.amount}</p>

    <p><strong>Status:</strong>
    ${userSubscription.status}</p>

    <p><strong>Started:</strong>
    ${startDate.toLocaleDateString()}</p>

    <p><strong>Expiry:</strong>
    ${expiryDate.toLocaleDateString()}</p>
    `;

    document.getElementById(
    "premiumModal"
    ).style.display = "flex";
}

function closePremiumDetails(){

    document.getElementById(
    "premiumModal"
    ).style.display = "none";
}
function playMovie(video){

document.getElementById(
"movieModal"
).style.display="flex";


document.getElementById(
"movieSource"
).src = video;


document.getElementById(
"moviePlayer"
).load();


}




function closeMovie(){


document.getElementById(
"movieModal"
).style.display="none";


document.getElementById(
"moviePlayer"
).pause();


}