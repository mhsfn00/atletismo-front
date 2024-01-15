<script setup>
// This file works as a main file, with the nav bar and the routing;
// From here each imported component is a page;
// Simple routing copied from the vue docs;
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const loginPopup = ref(false); 
const logoutPopup = ref(false);
const loggedUser = ref(null);
const userIdentityLetter = ref('');

function showHideLoginPopup() {
    loginPopup.value = !loginPopup.value;
}

function showHideLogoutPopup() {
    logoutPopup.value = !logoutPopup.value;
}

async function loginEmailPassword() { // Login using email and password (account was created in the firebase console, might keep it that way)
    const auth = getAuth();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            loggedUser.value = user;
            userIdentityLetter.value = user.email.charAt(0).toUpperCase();
            alert("Login Succesfull"); 
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert("Login Failed");
        });
    
    showHideLoginPopup();
}

async function logout() {
    const auth = getAuth();
    signOut(auth)
        .then(function() {
            loggedUser.value = null;
            alert("Sign out successful");
        })
        .catch(function(error) {
            alert("Something went wrong when signing out");
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    
    showHideLogoutPopup();
}

function nextField(nextFieldId) {
    document.getElementById(nextFieldId).focus();
}
</script>

<template>
    <div>
        <ul class="navbar">
            <router-link to="/" class="container-home-image link-nostyling">
                <img class="logo-navbar" src='https://lh3.google.com/u/0/d/1etG4XZKAcdPVg7tRjhpPTrRBp4ZYWdmS' alt="logo" />
            </router-link>
            <div class="navbar-container-buttons">
                <router-link to="/" class="link-nostyling">
                    <div class="navbar-button">
                        INICIO
                    </div>
                </router-link>
                <router-link to="/roster" class="link-nostyling">
                    <div class="navbar-button">
                        ATLETAS
                    </div>
                </router-link>
                <router-link to="/coaches" class="link-nostyling">
                    <div class="navbar-button">
                        TREINADORES
                    </div>
                </router-link>
                <router-link to="/about" class="link-nostyling">
                    <div class="navbar-button">
                        SOBRE
                    </div>
                </router-link>
            </div>
            <div v-if="!loggedUser" class="login-button" @click="showHideLoginPopup">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 
                    482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 
                    304 269.7 304H178.3z"/>
                </svg>
            </div>
            <div v-else class="logout-button" @click="showHideLogoutPopup">
                {{ userIdentityLetter }}
            </div>
        </ul>
        <div v-if="loginPopup" class="login-popup" id="loginPopup">
            Email <input id="email" value="mhsfn00@gmail.com" @keyup.enter="nextField('password')" /> <!-- value set so i dont need to type the email every time -->
            Senha <input id="password" type="password" @keyup.enter="loginEmailPassword"/>
            <button @click="loginEmailPassword">Entrar</button>
        </div>
        <div v-if="logoutPopup" class="logout-popup" id="logoutPopup">
            <button @click="logout">Sair</button>
            <router-link to="/newPost" @click="showHideLogoutPopup">Criar Post</router-link>
        </div>
        <router-view :loggedUser="loggedUser"></router-view>
    </div>
</template>

<style scoped>
.login-popup, .logout-popup {
    background-color:aquamarine;
    display: flex;
    flex-direction: column;
    width: 10vw;
    position: fixed;
    top: 5%;
    right: 5%;
    padding: 5px;
    gap: 3px;
}

.login-button, .logout-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    width: 80px;
    cursor: pointer;
}

.navbar-container-buttons {
    display: flex;
    align-items: center;
}

.navbar-button {
    display: flex;
    align-items: center;
    padding: 0 36px;
    height: 55px;
    font-weight: bold;
    font-size: 18px;
}

.navbar-button:hover, .login-button:hover, .logout-button:hover {
    background-color: var(--verde-hover);
}

.container-home-image {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.search-navbar {
    width: 20px;
    height: 20px;
}

.logo-navbar {
    width: 39px;
    height: 45px;
    margin-left: 25px;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    background-color: var(--verde-main);
    margin-bottom: 20px;
    position: sticky;
    top: 0;
    width: 100%;
}
</style>
