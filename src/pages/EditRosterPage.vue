<script setup>
import NonAuthWarning from '@/components/NonAuthWarning.vue';
import { useUsersStore } from '@/stores/UsersStore';
import { useRosterStore } from '@/stores/RosterStore';
import { onMounted, ref } from 'vue';
import PersonCard from '@/components/PersonCard.vue';

const usersStore = useUsersStore();
const rosterStore = useRosterStore();
const rosterYears = ref([]);
const thisYear = new Date().getFullYear();

onMounted(async () => {
    rosterYears.value = await rosterStore.getRosters();
    await rosterStore.getRoster(thisYear);
});
</script>

<template>
    <div v-if="usersStore.loggedUser" class="page-container">
        <div class="roster-select-container">
            <label for="roster">Rol</label>
            <select id="roster" name="roster">
                <option v-for="(year, index) in rosterYears" :key="index">{{ year }}</option>
            </select>
        </div>
        <div class="roster-container">
            <div class="female roster">
                Masculino
                <br />
                <br />
                <PersonCard v-for="(athlete, index) in rosterStore.currentRoster.female" :key="index" :person="athlete" :user="usersStore.loggedUser" />
            </div>
            <div class="male roster">
                Feminino
                <br />
                <br />
                <PersonCard v-for="(athlete, index) in rosterStore.currentRoster.male" :key="index" :person="athlete" :user="usersStore.loggedUser" />
            </div>
        </div>
    </div>
    <NonAuthWarning v-else />
</template>

<style scoped>
.roster {
    width: 45%;
    max-width: 45%;
}

.roster-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.roster-select-container {
    display: flex; 
    gap: 15px;
    justify-content: center;
}
</style>