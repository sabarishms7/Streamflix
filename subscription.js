let selectedPlan = "";

let selectedAmount = "";



function openPayment(plan,amount){


    selectedPlan = plan;

    selectedAmount = amount;


    document.getElementById(
    "paymentModal"
    ).style.display="flex";


}





function closePayment(){


    document.getElementById(
    "paymentModal"
    ).style.display="none";


}







function completePayment(){



    const currentUser =

    JSON.parse(

    localStorage.getItem("currentUser")

    );



    if(!currentUser){


        alert("Please Login First");

        return;

    }





    let subscriptions =


    JSON.parse(

    localStorage.getItem("subscriptions")

    ) || [];





    let startDate = new Date();



    let expiryDate = new Date();



    expiryDate.setFullYear(

        expiryDate.getFullYear() + 1

    );






    subscriptions.push({


        name: currentUser.name,


        email: currentUser.email,


        plan:selectedPlan,


        amount:selectedAmount,


        status:"Active",



        startDate:

        startDate.toLocaleDateString(),



        expiryDate:

        expiryDate.toLocaleDateString()



    });







    localStorage.setItem(


    "subscriptions",


    JSON.stringify(subscriptions)


    );






    alert(

    "Subscription Activated Successfully!"

    );




    window.location.href="home.html";



}







function rentMovie(){


    alert(

    "Movie Rental Purchased Successfully"

    );


}







function buyMovie(){


    alert(

    "Movie Purchased Successfully"

    );


}