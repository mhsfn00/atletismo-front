<script setup>

</script>

<template>
    <div  class="page-container">
        <div class="roster-picture-container">
            <img class="roster-picture" />
        </div>
        <div class="roster-container">
            <div class="athlete-card">
                <img class="athlete-picture" src="//storage.needpix.com/rsynced_images/blank-profile-picture-973460_1280.png" />
                <div class="athlete-info">
                    height: weight: year: 
                </div>
            </div>
            <div class="athlete-card">
                <img class="athlete-picture" src="//storage.needpix.com/rsynced_images/blank-profile-picture-973460_1280.png" />
                <div class="athlete-info">
                    height: weight: year: 
                </div>
            </div>
            <div class="athlete-card">
                <img class="athlete-picture" src="//storage.needpix.com/rsynced_images/blank-profile-picture-973460_1280.png" />
                <div class="athlete-info">
                    height: weight: year: 
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .athlete-picture {
        width: 170px;
        height: 170px;
    }

    .athlete-card {
        display: flex;
        flex-direction: row;
        background-color: rgb(206, 206, 206);
    }

    .roster-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 10px;
    }

    .roster-picture-container {
        height: 86vh;
        background-color: var(--verde-main);
        border-radius: 3px;
    }
</style>