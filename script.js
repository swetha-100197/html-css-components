const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("click", function (event) {

    event.preventDefault(); // stop page reload

    const email = emailInput.value;
    const password = passwordInput.value;
    if (email === "" || password === "") {
        alert("Both fields are required");
        return;
    }
    console.log(email, password);
});
