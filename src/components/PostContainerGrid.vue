<script setup>
import { usePostsStore } from '../stores/PostsStore.js';
import { onMounted } from 'vue';
import PostThumbnail from '@/components/PostThumbnail.vue';

const postsStore = usePostsStore();

onMounted(async () => {
    await postsStore.getPosts(); // async await so i can see console.log 's (some sort of loading overlay in the future)
});
</script>

<template>
    <div class="page-container">
        <div class="posts-container">
            <div class="main-posts-container">
                <div class="main-post-card">
                    <PostThumbnail :post="postsStore.mainPost" :mainPost="true" />
                </div>
                <div class="secondary-posts-container">
                    <div v-for="(post, index) in postsStore.secondaryPosts" :key="index" class="secondary-post-card">
                        <PostThumbnail :post="post" />
                    </div>
                </div>
            </div>
            <div class="extra-posts-container">
                <div v-for="(post, index) in postsStore.extraPosts" :key="index" class="extra-post-card">
                    <PostThumbnail :post="post" />
                </div>
            </div>
        </div>
        <div class="button-container">
            <button class="button">
                MAIS HISTÓRIAS
            </button>
        </div>
    </div>
</template>

<style scoped>
.button {
    background-color: var(--green-main);
    border-radius: 3px;
    text-align: center;
    text-wrap: nowrap;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding: 20px 50px;
}

.button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1vh 0;
}

.main-post-card {
    width: 66%;
    border-radius: 3px;
}

.secondary-post-card {
    width: 100%;
    border-radius: 3px;
    height: 29vh;
}

.extra-post-card {
    width: 100%;
    border-radius: 3px;
    height: 100%;
}

.posts-container {
    display: flex;
    flex-direction: column;
    margin: 0px 60px;
    gap: 2vh;
}

.extra-posts-container {
    display: flex;
    flex-direction: row;
    gap: 2%;
    height: 29vh;
}

.secondary-posts-container {
    display: flex;
    flex-direction: column;
    width: 32%;
    gap: 2vh;
}

.main-posts-container {
    display: flex;
    flex-direction: row;
    gap: 2%;
    height: 60vh;
}

.post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px;
    position: relative;
    z-index: -1;
}

@media screen and (max-width: 1366px) {
    
}
</style>