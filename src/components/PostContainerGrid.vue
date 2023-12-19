<script setup>
import { posts } from '../temp-data';
</script>

<template>
    <div class="post-container">
        <router-link to="/post/1" class="main post">
            <img class="main-post-image" :src=posts[0].image alt="logo" />
        </router-link>
        <router-link to="/post/2" class="secondary post one">
            {{ posts[1].id }}
        </router-link>
        <router-link to="/post/3" class="secondary post two">
            {{ posts[2].id }}
        </router-link>
        <router-link to="/post/4" class="secondary post three">
            {{ posts[3].id }}
        </router-link>
        <router-link to="/post/5" class="secondary post four">
            {{ posts[4].id }}
        </router-link>
        <router-link to="/post/6" class="secondary post five">
            {{ posts[5].id }}
        </router-link>
    </div>  
</template>

<style scoped>
    .main-post-image {
        width: 260px;
        height: 300px;
    }

    .post-container {
        display: grid;
        padding: 0 10vw;
        gap: 20px;
        align-items: center;
        justify-content: center;
    }
    
    .main {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    .post {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: var(--verde-main); */
        border: 1px solid black;
        border-radius: 6px;
    }

    .secondary {
        width: 28vw;
        height: 12vw;
    }

    .one {
        display: flex;
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .two {
        display: flex;
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    .three {
        display: flex;
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 3;
        grid-row-end: 4;
    }

    .four {
        display: flex;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
    }

    .five {
        display: flex;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 4;
    }
</style>