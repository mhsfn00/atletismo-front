<script setup>
import { useRosterStore } from '@/stores/RosterStore';
import { onMounted, ref } from 'vue';
import { changeBackgroundColor } from '@/helpers/helpers';
import PersonCard from '@/components/PersonCard.vue';

const rosterStore = useRosterStore();
const currentRoster = ref('female');

onMounted(async () => {
    const rosterYear = '2024';
    await rosterStore.getRoster(rosterYear);
});

function selectRoster(rosterName) {
    currentRoster.value = rosterName;
    const oppositeName = rosterName === 'male' ? 'female' : 'male';

    changeBackgroundColor('var(--orange-hover)', `${rosterName}Roster`);
    changeBackgroundColor('var(--green-hover)', `${oppositeName}Roster`);
}
</script>

<template>
    <div class="secondary-navbar">
        <div class="secondary-navbar-button female-roster" 
        @click="selectRoster('female')" id="femaleRoster">
            Feminino
        </div>
        <div class="secondary-navbar-button male-roster" 
        @click="selectRoster('male')" id="maleRoster">
            Masculino
        </div>
    </div>
    <div class="page-container">
        <div v-if="currentRoster === 'female'" class="roster">
            <div class="roster-picture-container">
                <img class="roster-picture" />
            </div>
            <div class="roster-container">
                <PersonCard v-for="(athlete, index) in rosterStore.currentRoster.female" :key="index" :person="athlete" />
            </div>
        </div>
        <div v-if="currentRoster === 'male'" class="roster">
            <div class="roster-picture-container">
                <img class="roster-picture" />
            </div>
            <div class="roster-container">
                <PersonCard v-for="(athlete, index) in rosterStore.currentRoster.male" :key="index" :person="athlete" />
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

.male-roster {
    background-color: var(--green-hover);
}

.female-roster {
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