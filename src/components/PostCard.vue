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
            <p :class="['title', {mainTitle: post.mainPost }]">{{ post.title }}</p>
            <p :class="['text-piece', {mainTextPiece: post.mainPost}]">Um pouco do texto</p>
            <div class="author-date">
                <p>Autor / Outra coisa</p>
                <p>Monday, May, 16</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.author-date {
    font-size: 1.2vh;
    display: flex;
    justify-content: space-between;
}

.text-piece {
    font-size: 1.3vh;
    height: 60%;
}
.mainTextPiece {
    font-size: 1.5vh;

}

.title {
    font-size: 1.7vh;
    font-weight: bold;
}
.mainTitle {
    font-size: 2.2vh;
}

.card-container {
    display: flex;
    border-bottom: 2px solid var(--primary-black);
    height: 13vh;
    background-color: var(--primary-white);
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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