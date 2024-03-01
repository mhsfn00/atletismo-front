<script setup>
import GrayInput from '@/components/GrayInput.vue';
import { ref } from 'vue';
import { useUsersStore } from '@/stores/UsersStore';
import { useRosterStore } from '@/stores/RosterStore';
import NonAuthWarning from '@/components/NonAuthWarning.vue';
import AlertConfirm from '@/components/AlertConfirm.vue';

const usersStore = useUsersStore();
const rosterStore = useRosterStore();
const defaultPictureLink = "//storage.needpix.com/rsynced_images/blank-profile-picture-973460_1280.png";
const showAlertConfirm = ref(false);
const emptyAthlete = {
    pictureLink: '',
    name: '',
    height: '',
    weight: '',
    events: '',
    year: '',
    city: '',
    state: '',
    highschool: '',
    sex: '',
}

const athletes = ref([
    {
        pictureLink: '',
        name: 'Atleta 4',
        height: '180',
        weight: '75',
        events: '110m com Barreiras',
        year: '2',
        city: 'Maringá',
        state: 'Paraná',
        highschool: 'Ensino Médio',
        sex: 'female'
    },
    {
        pictureLink: '',
        name: 'Atleta 5',
        height: '188',
        weight: '78',
        events: 'Aaaa',
        year: '5',
        city: 'Maringá',
        state: 'Paraná',
        highschool: 'Ensino Médio',
        sex: 'male'
    }
]);

const newPersons = ref([emptyAthlete]);

function addEmptyPerson() {
    newPersons.value.push(emptyAthlete);
}

function deletePerson(index) {
    newPersons.value.splice(index, 1);
}

async function confirmAthletes() {
    const rosterYear = '2024';
    const response = await rosterStore.addAthletes(athletes.value, rosterYear);
    const results = response.data;
    
    if (!(results.femaleResult.modifiedCount && results.maleResult.modifiedCount)) {
        console.log("female: ", results.femaleResult);
        console.log("male: ", results.maleResult);
        alert("Ao menos um atleta não foi inserido, checar log")
    } else {
        alert("Todos os atletas foram inseridos");
    }

    showAlertConfirm.value = false;
}
</script>

<template>
    <div v-if="usersStore.loggedUser" class="page-container">
        <div class="person-card" v-for="(person, index) in newPersons" :key="index">
            <GrayInput :id="'pictureLink'" :text="'Link para a foto'" />
            <div class="person-info">
                <div class="picture-container">
                    {{ index + 1 }}
                    <img class="person-picture" :src="`${defaultPictureLink}`" />
                </div>
                <div class="attributes-container">
                    <GrayInput :id="'name'" :text="'Nome'" v-model="newPersons[index].name" />
                    <GrayInput :id="'height'" :text="'Altura'" v-model="newPersons[index].height" />
                    <GrayInput :id="'eeight'" :text="'Peso'" v-model="newPersons[index].weight" />
                    <GrayInput :id="'events'" :text="'Provas'" v-model="newPersons[index].events" />
                    <div class="radio-container">
                        <span for=""><input type="radio" name="sex" value="female" v-model="newPersons[index].sex" />Feminino</span>
                        <span for=""><input type="radio" name="sex" value="male" v-model="newPersons[index].sex" />Masculino</span>
                    </div>
                </div>
                <div class="info-container">
                    <GrayInput id="'year'" :text="'Ano'" v-model="newPersons[index].year" />
                    <GrayInput id="'city'" :text="'Cidade'" v-model="newPersons[index].city" />
                    <GrayInput id="'state'" :text="'Estado'" v-model="newPersons[index].state" />
                    <GrayInput id="'highschool'" :text="'Ensino'" v-model="newPersons[index].highschool" />
                    <div class="delete-button-container">
                        <button class="delete button cancel" @click="deletePerson(index)">x</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="button-container">
            <button class="button action" @click="addEmptyPerson()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="plus-sign">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0
                    17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
            </button>
            <button class="button confirm" @click="showAlertConfirm=true;">
                Confirmar
            </button>
        </div>
    </div>
    <NonAuthWarning v-else />
    <AlertConfirm v-if="showAlertConfirm" @confirm="confirmAthletes" @cancel="showAlertConfirm=false;"
    :message="'Deseja confirmar os atletas?'" />
</template>

<style scoped>
.radio-container {
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 5px;
    gap: 15px;
}

.delete-button-container {
    display: flex;
    justify-content: right;
    padding: 5px 0;
}

.confirm {
    width: 8vw;
    height: 4vh;
}

.cancel {
    height: 3vh;
}

.action {
    width: 8vw;
    height: 4vh;
}

.button-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    gap: 10px;
}

.plus-sign {
    width: 80%;
    height:50%;
}

.person-card {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    background: #f3f2f2;
}

.info-container {
    display: flex;
    flex-direction: column;
}

.attributes-container {
    display: flex;
    flex-direction: column;
}

.picture-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.person-info {
    display: grid;
    grid-template-columns: 15% 43% 42%;
}

.person-picture {
    width: 80px;
    height: 100px;
    align-self: center;
    cursor: pointer;
}
</style>