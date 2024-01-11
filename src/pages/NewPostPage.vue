<script setup>
import { defineProps } from 'vue';

const props = defineProps ({
    loggedUser: null 
});

</script>

<template>
    <div v-if="props.loggedUser">
        <p>Logged in as {{ props.loggedUser.email }}</p>
    </div>
    <div v-else>
        <h1>Login needed</h1>
    </div>
</template>

<style scoped>

</style>