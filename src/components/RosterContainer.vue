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
    document.getElementById('womensRoster').style.backgroundColor = "var(--verde-main)";
    document.getElementById('womensRoster').style.filter = "brightness(1)";
    document.getElementById('mensRoster').style.backgroundColor = "var(--laranja-main)";
    document.getElementById('mensRoster').style.filter = "brightness(1.5)";
}

function selectMensRoster() {
    currentRoster.value = 'men';
    document.getElementById('womensRoster').style.backgroundColor = "var(--laranja-main)";
    document.getElementById('womensRoster').style.filter = "brightness(1.5)";
    document.getElementById('mensRoster').style.backgroundColor = "var(--verde-main)";
    document.getElementById('mensRoster').style.filter = "brightness(1.0)";
}
</script>

<template>
    <div class="page-container">
        <div class="button-container">
            <button class="button womens-roster" @click="selectWomensRoster" id="womensRoster">Feminino</button>
            <button class="button mens-roster" @click="selectMensRoster" id="mensRoster">Masculino</button>
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
                                {{ athlete.height }} cm / {{ athlete.weight }} kg / {{ athlete.events }}
                            </div>
                            <div class="name">
                                {{ athlete.name }}
                            </div>
                        </div>
                    </div>
                    <div class="right-side">
                        {{ athlete.year }}º Ano
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
                    <div class="left-side">
                        <img class="athlete-picture" :src="`${athlete.pictureLink || defaultPictureLink}`" />
                        <div class="attributes-name">
                            <div class="attributes">
                                {{ athlete.height }} cm / {{ athlete.weight }} kg / {{ athlete.events }}
                            </div>
                            <div class="name">
                                {{ athlete.name }}
                            </div>
                        </div>
                    </div>
                    <div class="right-side">
                        {{ athlete.year }}º Ano
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.athlete-card {
    color: gray;
    font-weight: bold;
}

.right-side {
    padding: 20px;
}

.name {
    font-size: 28px;
}

.attributes-name {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
}

.button {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    font-size: 16px;
    width: auto;
    height: auto;
    padding: 5px 15px 5px 15px;
}

.mens-roster {
    background-color: var(--laranja-main);
    filter: brightness(1.3);
}

.womens-roster {
    background-color: var(--verde-main);
}

.left-side {
    display: flex;
    flex-direction: row;
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
    border: 2px solid var(--verde-main);
    border-radius: 0 3px 3px 3px;
}
</style>