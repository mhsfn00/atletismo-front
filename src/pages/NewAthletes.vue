<script setup>
const defaultPictureLink = "//storage.needpix.com/rsynced_images/blank-profile-picture-973460_1280.png";

const newPersons = [
    {
        pictureLink: '',
        name: '',
        height: '',
        weight: '',
        events: '',
        year: '',
        city: '',
        state: '',
        highschool: ''
    }
];
</script>

<template>
    <div class="page-container">
        <div class="person-card" v-for="(person, index) in newPersons" :key="index">
            <div class="input-container">
                <label class="input-label" for="pictureLink">Link para foto</label> 
                <span class="input-span">
                    <input class="input-actual" v-model="newPersons[index].pictureLink" id="pictureLink" />
                </span>
            </div>
            <div class="person-info">
                <div class="picture-container">
                    <img class="person-picture" :src="`${defaultPictureLink}`" />
                </div>
                <div class="attributes-container">
                    <div class="input-container">
                        <labe class="input-label" for="personsName">Nome</labe>
                        <span class="input-span">
                            <input class="input-actual" v-model="newPersons[index].name" id="personsName" />
                        </span>
                    </div>
                    <div class="input-container">
                        <labe class="input-label" for="personsHeight">Altura</labe>
                        <span class="input-span">
                            <input class="input-actual" v-model="newPersons[index].height" id="personsHeight" />
                        </span>
                    </div>
                    <div class="input-container">
                        <labe class="input-label" for="personsWeight">Peso</labe>
                        <span class="input-span">
                            <input class="input-actual" v-model="newPersons[index].weight" id="personsWeight" />
                        </span>
                    </div>
                    <div class="input-container">
                        <labe class="input-label" for="personsEvents">Provas</labe>
                        <span class="input-span">
                            <input class="input-actual" v-model="newPersons[index].events" id="personsEvents" />
                        </span>
                    </div>
                </div>
                <div class="info-container">
                    <div class="input-container">
                        <labe class="input-label" for="personsYear">Ano</labe>
                        <span class="input-span">
                            <input class="input-actual" v-model="newPersons[index].year" id="personsYear" />
                        </span>
                    </div>
                    <div class="input-container">
                        <labe class="input-label" for="personsCity">Cidade</labe>
                        <span class="input-span">
                            <input class="input-actual" v-model="newPersons[index].city" id="personsCity" />
                        </span>
                    </div>
                    <div class="input-container">
                        <labe class="input-label" for="personsEvents">Estado</labe>
                        <span class="input-span">
                            <input class="input-actual" v-model="newPersons[index].state" id="personsState" />
                        </span>
                    </div>
                    <div class="input-container">
                        <labe class="input-label" for="personsHighschool">Ensino</labe>
                        <span class="input-span">
                            <input class="input-actual" v-model="newPersons[index].highschool" id="personsHighschool" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="button-container">
            <button class="button action">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="plus-sign">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0
                    17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<style scoped>
.button {
    width: 8vw;
}

.button-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.plus-sign {
    width: 80%;
    height:70%;
}

.person-card {
    display: flex;
    flex-direction: column;
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
    margin-left: 20px;
    cursor: pointer;
}
</style>