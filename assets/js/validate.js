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
    const stateRadioButtons = document.querySelectorAll("input[name='state']");
    let isStateSelected = false;
    for (let i = 0; i < stateRadioButtons.length; i++) {
        if (stateRadioButtons[i].checked) {
            isStateSelected = true;
            break;
        }
    }
    if (!isStateSelected) {
        errorMessages.push("State is required.");
        // Add error class to state radio button group container if it exists
        const stateContainer = document.getElementById("state-container");
        if (stateContainer) {
            stateContainer.classList.add("error");
        }
    }

    //check message
    if (message.value === "") {
        errorMessages.push("Message is required.");
        message.classList.add("error");
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

//event for select state
const stateRadioButtons = document.querySelectorAll("input[name='state']");
stateRadioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function() {
        if (this.checked) {
            console.log("Selected state is " + this.value);
        }
    });
});

 //event for select page
document.getElementById("message").addEventListener("change", function() {
    console.log("Selected option is " + this.value);
});

 //event for submit
 document.getElementById("submit").addEventListener("click", function(event) {
    checkForm();
    // Prevent default form action. DO NOT REMOVE THIS LINE
    event.preventDefault();
 });
