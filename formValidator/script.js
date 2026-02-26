const DOM = {
    emailInput : document.getElementById("email"),
    password : document.getElementById("password"),
    firstName : document.getElementById("first-name"),
    lastName : document.getElementById("last-name"),
    form : document.getElementById("form"),
    logIn : document.getElementById("log-in-link"),
    emailPopup : document.querySelector(".email-modal"),
    emailPopupText: document.getElementById("error-text-email"),
    passwrdPopup : document.querySelector(".password-modal"),
    passPopupText: document.getElementById("pass-text"),
    wrapper : document.getElementById("wrapper")
};


function validateEmailInput(value){
    return /^[a-zA-Z0-9@.]+$/.test(value.trim());
}

function validatePassword(value){
    return value.trim().length >= 6;
}

function getErrors() {
    const errors = {
        email : !validateEmailInput(DOM.emailInput.value),
        password : !validatePassword(DOM.password.value)
    }
    return errors;
}

function renderErrors(errors) {
    if(errors.email){
        DOM.emailPopup.style.display = "flex";
        DOM.emailPopupText.textContent ="Email cannot have special characters."
    } 

    else {
        DOM.emailPopup.style.display = "none";
    }
    
    if (errors.password) {
        DOM.passwrdPopup.style.display = "flex";
        DOM.passPopupText.textContent = "Password cannot be less than 6 characters";

    } else {
        DOM.passwrdPopup.style.display = "none";
    }
}

DOM.emailInput.addEventListener("input", ()=> {
    const errors = getErrors();
    renderErrors(errors);
});

DOM.password.addEventListener("input", () => {
    const errors = getErrors();
    renderErrors(errors);
});
