const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); //Prevent form from submitting right away

    const isValid = validateForm();

    if (isValid) {
        //perform submission
        console.log("Form submited successfully");
        form.reset()
        nameError.textContent = "";
        emailError.textContent = "";

    }

}

//form input validation
function validateForm() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    let isValid = true

    if (nameValue === "") {
        nameError.textContent = "Name is required"
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    if  (emailValue ==="") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else {
        emailError.textContent = "";
    }
}

// == Equality Operator - sees if value is equal no matter the data type

// === Strict equality Operator - sees if value AND data type is equal