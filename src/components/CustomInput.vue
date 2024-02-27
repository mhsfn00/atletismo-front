<script setup>
import { defineProps, defineModel } from 'vue';

const inputValue = defineModel();

defineProps ({
    id: String,
    text: String,
});
</script>

<template>
<div class="input-container">
    <label class="input-label" :for="id">{{ text }}</label> 
    <span class="input-span">
        <input class="input-actual" :id="id" v-model="inputValue" />
    </span>
</div>
</template>

<style scoped>
.input-actual:focus {
    outline: none;
    border: 2px solid var(--orange-hover);
    border-radius: 3px;
}

.input-actual {
    width: 100%;
    border: 0;
    height: 30px;
    font-size: medium;
    padding-left: 5px;
}

.input-label {
    float: left;
    padding: 4px;
}

.input-span {
    display: flex;
    overflow: hidden;
}

.input-container {
    width: 100%;
    background: #f3f2f2;
    border: 2px solid #f3f2f2;
    border-radius: 6px;
}
</style>