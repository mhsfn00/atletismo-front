<script setup>
import { usePostsStore } from '../stores/PostsStore.js';
import { onMounted } from 'vue';

const postsStore = usePostsStore();

onMounted(async () => {
    await postsStore.getPosts(); // async await so i can see console.log 's (some sort of loading overlay in the future)
    console.log(postsStore.mainPosts);
    console.log(postsStore.extraPosts);
});
</script>

<template>
    <!-- <div class="page-container">
        <div class="posts-container">
            <div v-for="(post, index) in posts" :key="index" :class="`post${index} common`">
                <router-link class="link-nostyling" :to="{path:`post/${post.id}`}">
                    <img class="post-image" :src="`https://lh3.google.com/u/0/d/${post.imageId}`" />
                </router-link>
            </div>
        </div>
    </div>  -->
    <div class="page-container">
        <div class="posts-container">
            <!-- <div v-for="(post, index) in postsStore.posts" :key="index" :class="`post${index} common`">
                <div v-if="index < 3" class="main-posts-container">
                    <div v-if="index == 0" class="main-post-card">
                        <img class="post-image" src='https://i.postimg.cc/3rPNQbXw/Leagueof-Legends-LCK-Spring2024-Team-Player-Roster-Hanwha-Life-Esports2-1024x576.jpg' />
                    </div>
                    <div v-else class="secondary-posts-container">
                        <div class="extra-post-card">
                            <img class="post-image" src='https://i.postimg.cc/3rPNQbXw/Leagueof-Legends-LCK-Spring2024-Team-Player-Roster-Hanwha-Life-Esports2-1024x576.jpg' />
                        </div>
                    </div>
                </div>
                <div v-else class="extra-posts" style="display: none;">
                    <div class="extra-post-card">
                        <img class="post-image" src='https://i.postimg.cc/3rPNQbXw/Leagueof-Legends-LCK-Spring2024-Team-Player-Roster-Hanwha-Life-Esports2-1024x576.jpg' />
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<style scoped>
.secondary-posts-container {
    display: flex;
    flex-direction: row;
}

.main-posts-container {
    display: flex;
    flex-direction: column;
}

.common {
    border-radius: 4px;
    border: 2px solid blue;
    margin: 5px;
}

.posts-container {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: center;
}

.post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media screen and (max-width: 1366px) {
    
}
</style>