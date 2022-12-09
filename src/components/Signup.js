import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components"
import styled from "styled-components";
import { firebaseAuth } from "../firebase-config";
import "../login-signup.css";
export default function Signup()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async (event) => {
        event.preventDefault();
        console.log("entered function");
        try {
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log(error);
        }
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    });

    return (
        <div>
            <GlobalStyle />
            <div class="login-card-container">
                <div class="login-card">
                    <div class="login-card-header">
                        <h1>Sign Up</h1>
                        <div>Please sign up to use the platform</div>
                    </div>
                    <form  onSubmit={handleSignIn} class="login-card-form">
                        <div class="form-item">
                            <span class="form-item-icon material-symbols-rounded">mail</span>
                            <input type="text" placeholder="Enter Email" id="emailForm" onChange={(e) => setEmail(e.target.value)}
                                autofocus required />
                        </div>
                        <div class="form-item">
                            <span class="form-item-icon material-symbols-rounded">lock</span>
                            <input type="password" placeholder="Enter Password" id="passwordForm" onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        <button>Sign Up</button>
                    </form>
                    <div class="login-card-footer">
                        Have an account already? <a href="/login">Log In</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const GlobalStyle = createGlobalStyle`

body {
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
    background: linear-gradient(to right, #333399, #ff00cc);
    display: flex;
    justify-content: center;
    align-items: center;
}


/* Login Card */
.login-card {
    width: 450px;
    background: rgba(255, 255, 255, .5);
    padding: 4rem;
    border-radius: 10px;
    position: relative;
}

.login-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, .15);
    transform: rotate(-6deg);
    border-radius: 10px;
    z-index: -1;
}
/* ---------- */

/* Login Card Logo */
.login-card-logo {
    margin-bottom: 2rem;
}

.login-card-logo img {
    width: 60px;
}
/* ---------- */

/* Login Card Standard */
.login-card-logo,
.login-card-header,
.login-card-footer {
    text-align: center;
}

.login-card a {
    text-decoration: none;
    color: #35339a;
}

.login-card a:hover {
    text-decoration: underline;
}
/* ---------- */

/* Login Card Header */
.login-card-header {
    margin-bottom: 2rem;
}

.login-card-header h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: .5rem;
}

.login-card-header h1+div {
    font-size: calc(1rem * .8);
    opacity: .8;
}
/* ---------- */

/* Login Card Form */
.login-card-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.login-card-form .form-item {
    position: relative;
}

.login-card-form .form-item .form-item-icon {
    position: absolute;
    top: 1rem;
    left: 1.4rem;
    font-size: 1.3rem;
    opacity: .4;
}

.login-card-form .checkbox {
    display: flex;
    align-items: center;
    gap: 7px;
}

.login-card-form .form-item-other {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: calc(1rem * .8);
    margin-bottom: .5rem;
}
/* ---------- */

/* Login Card Footer */
.login-card-footer {
    margin-top: 1.5rem;
    font-size: calc(1rem * .8);
}
/* ---------- */

/* Login Card Form Elements */
.login-card input[type="text"],
.login-card input[type="password"],
.login-card input[type="email"] {
    border: none;
    outline: none;
    background: rgba(255, 255, 255, .3);
    padding: 1rem 1.5rem;
    padding-left: calc(1rem * 3.5);
    border-radius: 100px;
    width: 100%;
    transition: background .5s;
}

.login-card input:focus {
    background: white;
}

.login-card input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: black;
}

.login-card button {
    background: black;
    color: white;
    padding: 1rem;
    border-radius: 100px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: background .5s;
}

.login-card button:hover {
    background-color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
}
/* ---------- */

/* Responsive */
@media (max-width: 768px) {

    body {
        padding: 2rem 0;
    }

    .login-card {
        width: 280px;
        padding: 2rem;
    }

}
/* ---------- */
`;
