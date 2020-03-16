const DB_USER = [
    {
        username: "witri",
        password: "witri12",
    }
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputPassword2 = document.querySelector("#password2");
const buttonSubmit = document.querySelector("#submitForm");
const warningMsg = document.querySelector(".warning");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const valueInputUsername = inputUsername.value;
    const valueInputPassword = inputPassword.value;
    const valueInputPassword2 = inputPassword2.value;

    if (valueInputPassword === valueInputPassword2) {
        //Hide Warning Text
        warningMsg.classList.add("warning");

        const data = {
            username: valueInputUsername,
            password: valueInputPassword
        }

        DB_USER.push(data);

        // Response Success
        console.log("Registrasi Sukses!");
        console.log(DB_USER);
        alert("Registrasi Sukses!");
    }else{
        // Respons When Password is Different
        warningMsg.className = "alert bg-danger text-white text-center mb-5";
    }

})