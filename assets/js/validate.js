// Initialize error messafes array
let errorMessages = [];

function checkRequired() {
    errorMessages = [];

    //get requirements
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const zip = document.getElementById("zip");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const formErrors = document.getElementById("formErrors");

    //remove error class from all fields
    firstName.classList.remove("error");
    lastName.classList.remove("error");
    address.classList.remove("error");
    city.classList.remove("error");
    state.classList.remove("error");
    zip.classList.remove("error");
    phone.classList.remove("error");
    email.classList.remove("error");
    message.classList.remove("error");

    //check first name
    if (firstName.value.length < 1)  {
        errorMessages.push("First Name is required.");
        firstName.classList.add("error");
    } else {
        const firstNameRegex = /^[a-zA-Z]+$/;
        if (!firstNameRegex.test(firstName.value)) {
            errorMessages.push("First Name must contain only letters.");
            firstName.classList.add("error");
        }
    }

    //check last name
    if (lastName.value.length < 1)  {
        errorMessages.push("Last Name is required.");
        lastName.classList.add("error");
    } else {
        const lastNameRegex = /^[a-zA-Z]+$/;
        if (!lastNameRegex.test(lastName.value)) {
            errorMessages.push("Last Name must contain only letters.");
            lastName.classList.add("error");
        }
    }

    //check address
    const addressRegex = /^\d+\s+\w+/;
    if (!addressRegex.test(address.value)) {
        errorMessages.push("Address must include a street number and name.");
        address.classList.add("error");
    }

    //check city
    if (city.value.length < 1) {
        errorMessages.push("City is required.");
        city.classList.add("error");
    }

    //check state
    if (state.value === "") {
        errorMessages.push("State is required.");
        state.classList.add("error");
    }
    //check zip code
    //add an error for when you click out of it
    const zipRegex = /^\d{5}$/;
    if (!zipRegex.test(zip.value)) {
        errorMessages.push("Zip code must be 5 digits.");
        zip.classList.add("error");
    }

    //check phone number
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone.value)) {
        errorMessages.push("Phone number must be in the format XXX-XXX-XXXX.");
        phone.classList.add("error");
    }

    //check email address
    const emailRegex = /^\w+@\w+\.\w+$/;
    if (!emailRegex.test(email.value)) {
        errorMessages.push("Email address must be in the format username@domain.extension.");
        email.classList.add("error");
    }

    //check message
    if (message.value === "") {
        errorMessages.push("Message is required.");
        message.classList.add("error");
    }
    displayErrors();
}

// Display or hide error messages
function displayErrors() {
    const formErrors = document.getElementById("formErrors");
    if (errorMessages.length > 0) {
      formErrors.innerHTML = '<ul><li>' + errorMessages.join('</li><li>') + '</li></ul>';
      formErrors.classList.remove("hide");
    } else {
      formErrors.classList.add("hide");
    }
 }
 
/*=============== TO DO: add click out of field show error ===============*/

 //event for first name
 document.getElementById("firstName").addEventListener("input", function() {
    console.log("First Name is " + this.value);
});

 //event for last name
 document.getElementById("lastName").addEventListener("change", function() {
    console.log("Last Name is " + this.value);
});

 //event for address
 document.getElementById("address").addEventListener("change", function() {
    console.log("Address is " + this.value);
});

 //event for city
 document.getElementById("city").addEventListener("change", function() {
    console.log("City is " + this.value);
});

//event for select state
document.getElementById("state").addEventListener("change", function() {
    console.log("Selected option is " + this.value);
});

//event for "how did you find us" select
document.getElementById("message").addEventListener("change", function() {
    console.log("Selected option is " + this.value);
});

//event for submit
document.getElementById("submit").addEventListener("click", function(event) {
    checkRequired()
    //checkFormat();
    // Prevent default form action. DO NOT REMOVE THIS LINE
    event.preventDefault();
});