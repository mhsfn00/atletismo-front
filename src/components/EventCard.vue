<script setup>
import { defineProps } from 'vue';

defineProps({
    event: {},
});
</script>

<template>
    <div class="event-container">
        <div class="left-side">
            <img :src="`${event.pictureLink}`" />
            <div class="left-text">
                <div class="date">{{ event.date }}</div>
                <div class="title">{{ event.title }}</div>
            </div>
        </div>
        <div class="middle">
            <div class="middle-text">
                {{ event.city }}, {{ event.state }} / {{ event.location }} 
            </div>
        </div>
        <div class="right-side">
            <a>Mais sobre o evento</a>
        </div>
    </div>
</template>

<style scoped>
.left-text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.left-side {
    display: flex;
    flex-direction: row;
}

.event-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: rgb(234, 234, 234);
}
</style>