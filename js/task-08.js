const form = document.querySelector(".login-form");
let data = {};
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    

    if (email.value.trim() === "" || password.value.trim() === "") {
        return alert("Заповни всі поля, будь ласка!")
    } else {
        data = { email: email.value.trim(), password: password.value.trim() };
        console.log(data);
        event.currentTarget.reset();
    }

}