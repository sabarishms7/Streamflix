const currentUser =
JSON.parse(localStorage.getItem("currentUser"));

if(!currentUser){

    window.location.href = "login.html";

}

// Load User Data

document.getElementById("name").value =
currentUser.name || "";

document.getElementById("email").value =
currentUser.email || "";

// Load Profile Image

const savedImage =
localStorage.getItem(
"profileImage_" + currentUser.email
);

if(savedImage){

    document.getElementById(
    "profilePreview"
    ).src = savedImage;

}

// Upload Image

document.getElementById(
"profileImage"
).addEventListener(
"change",
function(){

    const file = this.files[0];

    if(file){

        const reader =
        new FileReader();

        reader.onload =
        function(){

            document.getElementById(
            "profilePreview"
            ).src = reader.result;

        }

        reader.readAsDataURL(file);

    }

});

// Subscription Details

const subscriptions =
JSON.parse(
localStorage.getItem("subscriptions")
) || [];

const sub =
subscriptions.find(
s => s.email === currentUser.email
);

if(sub){

    document.getElementById(
    "subscriptionStatus"
    ).innerHTML = `

        <h3>💎 Premium Membership</h3>

        <p><b>Plan:</b> ${sub.plan}</p>

        <p><b>Amount Paid:</b> ₹${sub.amount}</p>

        <p><b>Status:</b> ${sub.status}</p>

        <p><b>Start Date:</b> ${sub.startDate}</p>

        <p><b>Expiry Date:</b> ${sub.expiryDate}</p>

    `;

}
else{

    document.getElementById(
    "subscriptionStatus"
    ).innerHTML = `

        <h3>Free User</h3>

        <p>No Active Subscription</p>

    `;

}

// Save Profile

function saveProfile(){

    let users =
    JSON.parse(
    localStorage.getItem("users")
    ) || [];

    const newName =
    document.getElementById(
    "name"
    ).value;

    const newEmail =
    document.getElementById(
    "email"
    ).value;

    const newPassword =
    document.getElementById(
    "password"
    ).value;

    const index =
    users.findIndex(
    user =>
    user.email === currentUser.email
    );

    if(index !== -1){

        users[index].name =
        newName;

        users[index].email =
        newEmail;

        if(newPassword){

            users[index].password =
            newPassword;

        }
        

        localStorage.setItem(
        "users",
        JSON.stringify(users)
        );

        localStorage.setItem(
        "currentUser",
        JSON.stringify(users[index])
        );

        const image =
        document.getElementById(
        "profilePreview"
        ).src;

        localStorage.setItem(
        "profileImage_" + newEmail,
        image
        );

        alert(
        "Profile Updated Successfully"
        );

    }

}

// Cancel Premium

function cancelPremium(){

    if(confirm(
    "Are you sure you want to cancel Premium?"
    )){

        let subscriptions =
        JSON.parse(
        localStorage.getItem(
        "subscriptions"
        )) || [];

        subscriptions =
        subscriptions.filter(
        sub =>
        sub.email !== currentUser.email
        );

        localStorage.setItem(
        "subscriptions",
        JSON.stringify(subscriptions)
        );

        alert(
        "Premium Cancelled Successfully"
        );

        location.reload();

    }

}