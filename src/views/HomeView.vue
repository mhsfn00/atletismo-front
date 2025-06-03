<script setup lang="ts">
import PostCard from '../components/PostCard.vue';
</script>

<template>
    <div class="page-container">
        <div class="main-content">
            <PostCard 
                :post="{
                    'mainPost': true,
                    'imageAddress': '/public/images/defaultPostImage.png',
                    'title': 'Titulo post 1'
                }" 
            />
        </div>
        <div class="secondary-content">
            <PostCard 
                :post="{
                    'mainPost': false,
                    'imageAddress': '/public/images/defaultPostImage.png',
                    'title': 'Titulo post 2'
                }" 
            />
            <PostCard 
                :post="{
                    'mainPost': false,
                    'imageAddress': '/public/images/defaultPostImage.png',
                    'title': 'Titulo post 3'
                }" 
            />
            <PostCard 
                :post="{
                    'mainPost': false,
                    'imageAddress': '/public/images/defaultPostImage.png',
                    'title': 'Titulo post 4'
                }" 
            />
            <PostCard 
                :post="{
                    'mainPost': false,
                    'imageAddress': '/public/images/defaultPostImage.png',
                    'title': 'Titulo post 2'
                }" 
            />
            <PostCard 
                :post="{
                    'mainPost': false,
                    'imageAddress': '/public/images/defaultPostImage.png',
                    'title': 'Titulo post 3'
                }" 
            />
            <PostCard 
                :post="{
                    'mainPost': false,
                    'imageAddress': '/public/images/defaultPostImage.png',
                    'title': 'Titulo post 3'
                }" 
            />
            <PostCard 
                :post="{
                    'mainPost': false,
                    'imageAddress': '/public/images/defaultPostImage.png',
                    'title': 'Titulo post 3'
                }" 
            />
            <PostCard 
                :post="{
                    'mainPost': false,
                    'imageAddress': '/public/images/defaultPostImage.png',
                    'title': 'Titulo post 3'
                }" 
            />
        </div>
    </div>
</template>

<style scoped>
.secondary-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 40vh;
    overflow: auto;
}

.main-content {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    top: 7vh;
}
</style>