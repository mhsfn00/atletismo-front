<script setup>
import { defineProps } from 'vue';
import EventCard from '@/components/EventCard.vue';

defineProps({
    season: Number,
});

const event = {
    pictureLink: 'https://i.postimg.cc/B8cLkWyq/LOGO-PRETA.png',
    title: 'Event 1',
    city: 'Maringá',
    state: 'PR',
    location: 'Pista de atletismo da UEM',
    date: 'YYYY/MM/DD',
}
</script>

<template>
    <div class="page-container">
        <p class="season">Temporada {{ season }}</p>
        <EventCard :event="event" />
    </div>
</template>

<style scoped>
.season {
    margin-bottom: 10px;
    background-color: lightgray;
    padding: 10px;
}
</style>