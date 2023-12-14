const formContainer = document.getElementById('custom-form');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    formContainer.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    formContainer.classList.remove("active");
});


// For Required Filed
document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.querySelector(".form-formContainer.sign-in form");
    const signInButton = signInForm.querySelector("button");

    signInForm.addEventListener("input", function () {
        const requiredInputs = signInForm.querySelectorAll('input[required]');
        
        const isAnyEmpty = Array.from(requiredInputs).some(input => input.value.trim() === "");

        signInButton.disabled = isAnyEmpty;
    });
});