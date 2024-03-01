<script setup>
import { ref } from 'vue';
import { focusOnField } from '@/helpers/helpers.js';
import { useUsersStore } from '@/stores/UsersStore.js';

const usersStore = useUsersStore();
const loginPopup = ref(false); 
const logoutPopup = ref(false);

const logoLink = ref("https://i.postimg.cc/B8cLkWyq/LOGO-PRETA.png");


async function loginEmailPassword() { 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    await usersStore.login(email, password);

    showHideLoginPopup();
}

async function logout() {
    usersStore.logout();
    showHideLogoutPopup();
}

function showHideLoginPopup() {
    loginPopup.value = !loginPopup.value;
}

function showHideLogoutPopup() {
    logoutPopup.value = !logoutPopup.value;
}
</script>

<template>
    <div>
        <ul class="navbar">
            <router-link to="/" class="container-home-image link-nostyling">
                <img class="logo-navbar" :src="`${logoLink}`" alt="logo" />
            </router-link>
            <div class="navbar-container-buttons">
                <router-link to="/" class="link-nostyling">
                    <div class="navbar-button">
                        INICÍO
                    </div>
                </router-link>
                <router-link to="/roster" class="link-nostyling">
                    <div class="navbar-button">
                        ATLETAS
                    </div>
                </router-link>
                <router-link to="/coaches" class="link-nostyling" style="display: none;">
                    <div class="navbar-button">
                        TREINADORES
                    </div>
                </router-link>
                <router-link to="/schedule" class="link-nostyling">
                    <div class="navbar-button">
                        CALENDÁRIO
                    </div>
                </router-link>
                <router-link to="/about" class="link-nostyling">
                    <div class="navbar-button">
                        SOBRE
                    </div>
                </router-link>
            </div>
            <div v-if="!usersStore.loggedUser" class="login-button" @click="showHideLoginPopup">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 
                    482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 
                    304 269.7 304H178.3z"/>
                </svg>
            </div>
            <div v-else class="logout-button" @click="showHideLogoutPopup">
                {{ usersStore.userIdentityLetter }}
            </div>
        </ul>
        <div v-if="loginPopup" class="login-popup" id="loginPopup">
            Email <input id="email" value="mhsfn00@gmail.com" @keyup.enter="focusOnField('password')" /> <!-- value set so i dont need to type the email every time -->
            Senha <input id="password" type="password" @keyup.enter="loginEmailPassword"/>
            <button @click="loginEmailPassword">Entrar</button>
        </div>
        <div v-if="logoutPopup" class="logout-popup" id="logoutPopup">
            <button @click="logout">Sair</button>
            <router-link to="/newPost" @click="showHideLogoutPopup">Criar Post</router-link>
            <router-link to="/newAthletes" @click="showHideLogoutPopup">Adicionar Atletas</router-link>
            <router-link to="/editRoster" @click="showHideLogoutPopup">Editar Atletas</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<style scoped>
.login-popup, .logout-popup {
    background-color:var(--green-main);
    display: flex;
    flex-direction: column;
    width: 10vw;
    position: fixed;
    top: 75px;
    right: 0;
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
    margin-right: 14vw;
    padding: 35px 0;
}

.navbar-container-buttons {
    display: flex;
    align-items: center;
}

.navbar-button {
    display: flex;
    align-items: center;
    padding: 35px 36px;
    height: 55px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.5s ease-out;
}

.active .navbar-button {
    background: var(--green-hover);
}

.navbar-button:hover {
    background: var(--green-hover);
}

.container-home-image {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 14vw;
}

.search-navbar {
    width: 20px;
    height: 20px;
}

.logo-navbar {
    width: 45px;
    height: 51px;
    margin: 0 1.5vw;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--green-main);
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;
}
</style>
