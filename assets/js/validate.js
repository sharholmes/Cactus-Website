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
    const message = document.getElementById("message");
    const formErrors = document.getElementById("formErrors");

    //remove error class from all fields
    firstName.classList.remove("error");
    lastName.classList.remove("error");
    address.classList.remove("error");
    city.classList.remove("error");
    state.classList.remove("error");
    message.classList.remove("error");

    //check first name
    if (firstName.value.length < 1)  {
        errorMessages.push("First Name is required.");
        firstName.classList.add("error");
    }

    //check last name
    if (lastName.value.length < 1) {
        errorMessages.push("Last Name is required.");
        lastName.classList.add("error");
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
    const stateRegex = /^(AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY)$/;
    if (!stateRegex.test(state.value)) {
        errorMessages.push("State must be a valid two-letter abbreviation.");
        state.classList.add("error");
    }

    //check message
    //get checkboxes
    const checkboxes = document.querySelectorAll("input[type=checkbox]");

    //check if a least one checkbox is selected
    let isOneChecked = false;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isOneChecked = true;
            break;
        }
    }

    if((!isOneChecked)) {
        errorMessages.push("At least one checkbox must be selected");
        const checkboxContainer = document.getElementById("checkboxContainer");
        if (checkboxContainer) {
            checkboxContainer.classList.add("error");
        }
    }
    displayErrors();

}

function checkFormat () {
    errorMessages = [];

    //get requirements
    const zip = document.getElementById("zip");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");

    //remove error class from all fields
    zip.classList.remove("error");
    phone.classList.remove("error");
    email.classList.remove("error");

    //check zip code
    const zipRegex = /^\d{5}$/;
    if (!zipRegex.test(state.value)) {
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
 
 //events
 document.getElementById("submit").addEventListener("click", function(event) {
    checkForm();
    // Prevent default form action. DO NOT REMOVE THIS LINE
    event.preventDefault();
 });

//event for select
document.getElementById("message").addEventListener("change", function() {
    console.log("Selected option is " + this.value);
});