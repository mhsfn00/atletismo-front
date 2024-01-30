<script setup>
// import { storeToRefs } from 'pinia';
import { usePostsStore } from '../stores/PostsStore.js';
import { onMounted } from 'vue';

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
                    <router-link class="link-nostyling" :to="{path:`post/${postsStore.mainPost.id}`}">
                        <img src="https://i.postimg.cc/3rPNQbXw/Leagueof-Legends-LCK-Spring2024-Team-Player-Roster-Hanwha-Life-Esports2-1024x576.jpg" class="post-image">
                    </router-link>
                </div>
                <div class="secondary-posts-container">
                    <div v-for="(post, index) in postsStore.secondaryPosts" :key="index" class="secondary-post-card">
                        <router-link class="link-nostyling" :to="{path:`post/${post.id}`}">
                            <img src="https://i.postimg.cc/3rPNQbXw/Leagueof-Legends-LCK-Spring2024-Team-Player-Roster-Hanwha-Life-Esports2-1024x576.jpg" class="post-image">
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="extra-posts-container">
                <div v-for="(post, index) in postsStore.extraPosts" :key="index" class="extra-post-card">
                    <router-link class="link-nostyling" :to="{path:`post/${post.id}`}">
                        <img src="https://i.postimg.cc/3rPNQbXw/Leagueof-Legends-LCK-Spring2024-Team-Player-Roster-Hanwha-Life-Esports2-1024x576.jpg" class="post-image">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-post-card {
    width: 66%;
    border-radius: 5px;
}

.secondary-post-card {
    width: 100%;
    border-radius: 5px;
    height: 29vh;
}

.extra-post-card {
    width: 100%;
    border-radius: 5px;
    height: 100%;
}

.posts-container {
    display: flex;
    flex-direction: column;
    /* height: 86vh; */
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
    border-radius: 5px;
}

@media screen and (max-width: 1366px) {
    
}
</style>