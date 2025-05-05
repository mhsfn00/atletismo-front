<script setup lang="ts">
import PostCard from '/src/components/PostCard.vue';
</script>

<template>
    <div class="page-container">
        <PostCard 
            :post="{
                'mainPost': true,
                'imageAddress': '/public/images/defaultPostImage.png',
                'title': 'Titulo post 1'
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
                'title': 'Titulo post 4'
            }" 
        />
    </div>
</template>

<style scoped>

</style>