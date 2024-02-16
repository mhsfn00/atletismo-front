<script setup>
import { useAthletesStore } from '@/stores/AthletesStore';
import { onMounted, ref } from 'vue';

const defaultPictureLink = "//storage.needpix.com/rsynced_images/blank-profile-picture-973460_1280.png";
const athletesStore = useAthletesStore();
const currentRoster = ref('women');

onMounted(async () => {
    await athletesStore.getAthletes();
    console.log("women: ", athletesStore.womensRoster);
    console.log("men: ", athletesStore.mensRoster);
});

function selectWomensRoster() {
    currentRoster.value = 'women';
}

function selectMensRoster() {
    currentRoster.value = 'men';
}
</script>

<template>
    <div class="page-container">
        <div class="button-container">
            <button class="button womens-roster" @click="selectWomensRoster">Feminino</button>
            <button class="button mens-roster" @click="selectMensRoster">Masculino</button>
        </div>
        <div v-if="currentRoster === 'women'" class="roster">
            <div class="roster-picture-container">
                <img class="roster-picture" />
            </div>
            <div class="roster-container">
                <div v-for="(athlete, index) in athletesStore.womensRoster" :key="index" class="athlete-card">
                    <div class="left-side">
                        <img class="athlete-picture" :src="`${athlete.pictureLink || defaultPictureLink}`" />
                        <div class="attributes-name">
                            <div class="attributes">
                                {{ athlete.height }} / {{ athlete.weight }} / {{ athlete.events }}
                            </div>
                            <div class="name">
                                {{ athlete.name }}
                            </div>
                        </div>
                    </div>
                    <div class="right-size">
                        {{ athlete.year }}
                    </div>
                </div>
            </div>
        </div>
        <div v-if="currentRoster === 'men'" class="roster">
            <div class="roster-picture-container">
                <img class="roster-picture" />
            </div>
            <div class="roster-container">
                <div v-for="(athlete, index) in athletesStore.mensRoster" :key="index" class="athlete-card">
                    <img class="athlete-picture" :src="`${athlete.pictureLink || defaultPictureLink}`" />
                    <div class="athlete-info">
                        {{ athlete }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.left-side {
    display: flex;
    flex-direction: row;
}

.button{
    width: auto;
    height: auto;
    padding: 5px;
}

.button-container {
    display: flex;
    align-items: center;
    gap: 5px;
}

.athlete-picture {
    width: 170px;
    height: 170px;
}

.athlete-card {
    display: flex;
    flex-direction: row;
    background-color: rgb(241, 241, 241);
    border: 2px solid var(--laranja-main);
    justify-content: space-between;
}

.roster-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
}

.roster-picture-container {
    height: 86vh;
    border: 3px solid var(--verde-main);
    border-radius: 3px;
}
</style>