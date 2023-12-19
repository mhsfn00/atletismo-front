<script setup>
// This file works as a main file, with the nav bar and the routing.
// From here each imported component is a page;
// Simple routing copied from the vue docs;
</script>

<template>
    <div>
        <ul class="navbar">
            <router-link to="/" class="container-home-image link-nostyling">
                <img class="logo-navbar" src='https://drive.google.com/uc?export=view&id=1etG4XZKAcdPVg7tRjhpPTrRBp4ZYWdmS' alt="logo" />
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
            <a href='/' class="link-nostyling">
                <div class="navbar-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5
                        12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7
                        40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144
                        144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                    </svg>
                </div>
            </a>
        </ul>
        <router-view></router-view>
    </div>
</template>

<style scoped>
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

.navbar-button:hover {
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
