import { auth, signInWithEmailAndPassword } from "../signup/firebase.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, email.value.trim(), password.value.trim())
        .then((userCredential) => {
            console.log("Logged in:", userCredential.user);

            window.location.href = "../new-window/style.html";
        })
        .catch((error) => {
            if (!email.value || !password.value) {
                Swal.fire({
                    icon: "warning",
                    title: "Missing fields",
                    text: "Please fill email and password"
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error.message
                });
            }

        });
});