function loadUsers(){


const users =

JSON.parse(localStorage.getItem("users"))

|| [];



const subscriptions =

JSON.parse(localStorage.getItem("subscriptions"))

|| [];



const blockedUsers =

JSON.parse(localStorage.getItem("blockedUsers"))

|| [];



const table =

document.getElementById("userData");



table.innerHTML="";



users.forEach(user=>{


const sub =

subscriptions.find(

s=>s.email===user.email

);



const isBlocked =

blockedUsers.includes(user.email);



let row =

document.createElement("tr");



row.innerHTML = `


<td>${user.name}</td>


<td>${user.email}</td>


<td>

${sub ? "💎 Premium":"Free"}

</td>


<td>

${sub ? sub.plan:"-"}

</td>


<td>

${sub ? "₹"+sub.amount:"-"}

</td>


<td>
${sub && sub.startDate ? sub.startDate : "-"}
</td>

<td>
${sub && sub.expiryDate ? sub.expiryDate : "-"}
</td>



<td>


<button

class="${isBlocked ? "unblock":"block"}"

onclick="toggleBlock('${user.email}')">


${isBlocked ? "✅ Unblock":"🚫 Block"}


</button>



<button

class="remove"

onclick="removeAccount('${user.email}')">


🗑 Remove


</button>



</td>


`;



table.appendChild(row);


});


}






// BLOCK / UNBLOCK USER


function toggleBlock(email){



let blockedUsers =

JSON.parse(localStorage.getItem("blockedUsers"))

|| [];



if(blockedUsers.includes(email)){


blockedUsers =

blockedUsers.filter(

e=>e!==email

);


alert("User Unblocked");


}

else{


blockedUsers.push(email);


alert("User Blocked");


}



localStorage.setItem(

"blockedUsers",

JSON.stringify(blockedUsers)

);



loadUsers();


}







// REMOVE ACCOUNT


function removeAccount(email){



let confirmDelete =

confirm(

"Delete this account permanently?"

);



if(!confirmDelete){

return;

}



let users =

JSON.parse(localStorage.getItem("users"))

|| [];



let subscriptions =

JSON.parse(localStorage.getItem("subscriptions"))

|| [];



let blockedUsers =

JSON.parse(localStorage.getItem("blockedUsers"))

|| [];




users =

users.filter(

user=>user.email!==email

);



subscriptions =

subscriptions.filter(

sub=>sub.email!==email

);



blockedUsers =

blockedUsers.filter(

e=>e!==email

);



localStorage.setItem(

"users",

JSON.stringify(users)

);



localStorage.setItem(

"subscriptions",

JSON.stringify(subscriptions)

);



localStorage.setItem(

"blockedUsers",

JSON.stringify(blockedUsers)

);



alert("Account Removed Successfully");



loadUsers();


}








// EXPORT EXCEL


function exportToExcel(){



let csv =

"Name,Email,Premium,Plan,Amount,Start Date,Expiry Date\n";



const users =

JSON.parse(localStorage.getItem("users"))

|| [];



const subscriptions =

JSON.parse(localStorage.getItem("subscriptions"))

|| [];




users.forEach(user=>{


const sub =

subscriptions.find(

s=>s.email===user.email

);



csv +=


`${user.name},`

+

`${user.email},`

+

`${sub?"Premium":"Free"},`

+

`${sub ? sub.plan:""},`

+

`${sub ? sub.amount:""},`

+

`${sub ? sub.startDate:""},`

+

`${sub ? sub.expiryDate:""}\n`;



});



let blob =

new Blob(

[csv],

{type:"text/csv"}

);



let link =

document.createElement("a");



link.href =

URL.createObjectURL(blob);



link.download =

"StreamFlix_Users.csv";



link.click();



}




loadUsers();
function goBackToLogin(){

    window.location.href =
    "login.html";

}