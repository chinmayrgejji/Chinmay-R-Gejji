document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation

    let isValid = true;

    // First Name Validation
    const firstName = document.getElementById("firstname").value;
    let firstNameError = document.getElementById("firstname-error");
    if (!firstNameError) {
        firstNameError = document.createElement("div");
        firstNameError.id = "firstname-error";
        firstNameError.className = "error";
        document.getElementById("firstname").after(firstNameError);
    }
    if (firstName.length < 3) {
        firstNameError.innerText = "First name should be at least 3 characters.";
        isValid = false;
    } else {
        firstNameError.innerText = "";
    }

    // Last Name Validation
    const lastName = document.getElementById("lastname").value;
    let lastNameError = document.getElementById("lastname-error");
    if (!lastNameError) {
        lastNameError = document.createElement("div");
        lastNameError.id = "lastname-error";
        lastNameError.className = "error";
        document.getElementById("lastname").after(lastNameError);
    }
    if (lastName.length < 3) {
        lastNameError.innerText = "Last name should be at least 3 characters.";
        isValid = false;
    } else {
        lastNameError.innerText = "";
    }

    // Email Validation
    const email = document.getElementById("email").value;
    let emailError = document.getElementById("email-error");
    if (!emailError) {
        emailError = document.createElement("div");
        emailError.id = "email-error";
        emailError.className = "error";
        document.getElementById("email").after(emailError);
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        emailError.innerText = "Please enter a valid email.";
        isValid = false;
    } else {
        emailError.innerText = "";
    }

    // Password Validation
    const password = document.getElementById("password").value;
    let passwordError = document.getElementById("password-error");
    if (!passwordError) {
        passwordError = document.createElement("div");
        passwordError.id = "password-error";
        passwordError.className = "error";
        document.getElementById("password").after(passwordError);
    }
    if (password.length < 8) {
        passwordError.innerText = "Password must be at least 8 characters.";
        isValid = false;
    } else {
        passwordError.innerText = "";
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById("confirm_password").value;
    let confirmPasswordError = document.getElementById("confirm-password-error");
    if (!confirmPasswordError) {
        confirmPasswordError = document.createElement("div");
        confirmPasswordError.id = "confirm-password-error";
        confirmPasswordError.className = "error";
        document.getElementById("confirm_password").after(confirmPasswordError);
    }
    if (password !== confirmPassword) {
        confirmPasswordError.innerText = "Passwords do not match.";
        isValid = false;
    } else {
        confirmPasswordError.innerText = "";
    }

    // Show success alert if all validations pass
    if (isValid) {
        alert("Signup successful!");
    }
});
