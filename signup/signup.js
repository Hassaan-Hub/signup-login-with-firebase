import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    createUserWithEmailAndPassword(auth, email.value.trim(), password.value.trim())
        .then((userCredential) => {

            console.log("User created:", userCredential.user);

            // 🔥 CONNECT: go to login page
            window.location.href = "../login/login-form.html";
        })
        .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    Swal.fire({
                        icon: "error",
                        title: "Account already exists",
                        text: "This email is already registered"
                    });

                } else if (error.code === "auth/invalid-email") {
                    Swal.fire({
                        icon: "error",
                        title: "Invalid Email",
                        text: "Please enter a valid email address"
                    });

                } else if (error.code === "auth/weak-password") {
                    Swal.fire({
                        icon: "error",
                        title: "Weak Password",
                        text: "Password should be at least 6 characters"
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
