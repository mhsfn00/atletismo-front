<script setup lang="ts">
defineProps({
    athlete: { type: Object, default: () => ({}) }
});
</script>

<template>
    <div class="card-container">
        <div class="picture-container">
            <img class="image" :src="athlete.picture" />
        </div>
        <div class="info-container">
            {{ athlete.name }}
            {{ athlete.year }}
        </div>
    </div>
</template>

<style scoped>
.info-container {
    width: 75%;
    margin: 7px;
    border: solid 2px black;
}

.picture-container {
    width: 25%;
    margin: 7px;
    border: solid 2px black;
}

.card-container {
    display: flex;
    width: 100%;
    height: 12vh;
}
</style>