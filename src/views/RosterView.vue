<script setup lang="ts">
import AthleteCard from '../components/AthleteCard.vue';
// Make it default that on Views we pull info from stores
// From Views inward we pass as props
const roster = {
    rosterPicture: '/public/images/defaultPostImage.png',
    athletes: [
        {'name': 'Atleta 1', 'year': 5, 'picture': '/public/images/roster.png'}
    ]
}
</script>

<template>
    <div class="page-container">
        <div class="main-content">
            <img class="image" :src="roster.rosterPicture" />
        </div>
        <div class="secondary-content">
            <AthleteCard :athlete="roster.athletes[0]" />
        </div>
    </div>
</template>

<style scoped>
.secondary-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 35vh;
    overflow: auto;
}

.main-content {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    top: 7vh;
    height: 35vh;
}
</style>