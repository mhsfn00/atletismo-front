<script setup>
import { defineProps } from 'vue';

defineProps({
    event: {},
});
</script>

<template>
    <div class="event-container">
        <div class="left-side">
            <img class="event-picture" :src="`${event.pictureLink}`" />
            <div class="left-text">
                <div class="date">{{ event.date }} (Day)</div>
                <div class="title">{{ event.title }}</div>
            </div>
        </div>
        <div class="middle">
            <div class="middle-text">
                {{ event.city }}, {{ event.state }} / {{ event.location }} 
            </div>
        </div>
        <div class="right-side">
            <a class="link-nostyling" href="">Mais sobre o evento</a>
        </div>
    </div>
</template>

<style scoped>
.title {
    font-size: xx-large;
}

.date {
    font-size:small;
}

.event-picture {
    height: 100px;
    width: 80px;
}

.left-text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 40px;
}

.left-side {
    display: flex;
    flex-direction: row;
}

.event-container {
    display: grid;
    grid-template-columns: 44% 32% 24%;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: rgb(234, 234, 234);
    color: gray;
    font-weight: bold;
    gap: 10px;
}

.link-nostyling {
    text-decoration: underline;
}
</style>