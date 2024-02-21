<script setup>
import { useAthletesStore } from '@/stores/AthletesStore';
import { onMounted, ref } from 'vue';
import { changeBackgroundColor } from '@/helpers/helpers';
import PersonCard from '@/components/PersonCard.vue';

const athletesStore = useAthletesStore();
const currentRoster = ref('women');

onMounted(async () => {
    await athletesStore.getAthletes();
});

function selectRoster(rosterName) {
    currentRoster.value = rosterName;
    const oppositeName = rosterName === 'men' ? 'women' : 'men';

    changeBackgroundColor('var(--orange-hover)', `${rosterName}sRoster`);
    changeBackgroundColor('var(--green-hover)', `${oppositeName}sRoster`);
}
</script>

<template>
    <div class="secondary-navbar">
        <div class="secondary-navbar-button womens-roster" 
        @click="selectRoster('women')" id="womensRoster">
            Feminino
        </div>
        <div class="secondary-navbar-button mens-roster" 
        @click="selectRoster('men')" id="mensRoster">
            Masculino
        </div>
    </div>
    <div class="page-container">
        <div v-if="currentRoster === 'women'" class="roster">
            <div class="roster-picture-container">
                <img class="roster-picture" />
            </div>
            <div class="roster-container">
                <PersonCard v-for="(athlete, index) in athletesStore.womensRoster" :key="index" :person="athlete" />
            </div>
        </div>
        <div v-if="currentRoster === 'men'" class="roster">
            <div class="roster-picture-container">
                <img class="roster-picture" />
            </div>
            <div class="roster-container">
                <PersonCard v-for="(athlete, index) in athletesStore.mensRoster" :key="index" :person="athlete" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.secondary-navbar-button {
    display: flex;
    align-items: center;
    padding: 0px 36px;
    height: 45px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: background 0.5s ease-out;
}

.secondary-navbar {
    display: flex;
    justify-content: center;
    background-color: var(--green-hover);
    margin: 0 12vw;
    border-radius: 0px 0px 10px 10px;
}

.mens-roster {
    background-color: var(--green-hover);
}

.womens-roster {
    background-color: var(--orange-hover);
}

.roster-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
}

.roster-picture-container {
    height: 86vh;
    border: 1px solid var(--green-main);
    border-radius: 3px;
}
</style>