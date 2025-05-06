<script setup lang="ts">
defineProps({
    post: { type: Object, default: () => ({}) }
})
</script>

<template>
    <div :class="['card-container', { mainCardCont: post.mainPost }]">
        <div :class="['image-container', { mainImageCont: post.mainPost }]">
            <img :class="['image', { mainImage: !post.mainPost }]" :src="post.imageAddress">
        </div>
        <div :class="['text-container', { mainTextCont: post.mainPost }]">
            <p>{{ post.title }}</p>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    border-bottom: 2px solid var(--primary-black);
    height: 13vh;
}
.mainCardCont {
    flex-direction: column;
    height: 40vh;
}

.image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 0;
}
.mainImage {
    border-radius: 7px;
}

.text-container {
    height: 86%;
    width: 56%;
    padding: 2%;
}
.mainTextCont {
    height: 35%;
    width: 96%;
}

.image-container {
    width: 40%;
    padding: 2%;
}
.mainImageCont {
    width: 100%;
    height: 65%;
    padding: 0;
}
</style>