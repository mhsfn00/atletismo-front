<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    message: String,
});

const emits = defineEmits([
    'confirm',
    'cancel',
]);
</script>

<template>
    <div class="alert-confirm-page">
        <div class="popup">
            <div class="info-container">
                <p class="text">{{ props.message }}</p>
                <div class="button-container">
                    <button class="button cancel" @click="emits('cancel')">Cancelar</button>
                    <button class="button confirm" @click="emits('confirm')">Confirmar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
}

.popup  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4vh;
}

.button {
    padding: 8px 10px;
    width: 8vw;
    height: auto;
}

.popup {
    background: white;
    border: 2px solid var(--orange-hover);
    border-radius: 5px;
}

.info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 50px;
    gap: 4vh;
}

.alert-confirm-page {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(150, 150, 150, 0.4);
    z-index: 5;
}
</style>