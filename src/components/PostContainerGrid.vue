<script setup>
import { usePostsStore } from '../stores/PostsStore.js';
import { onMounted } from 'vue';

const postsStore = usePostsStore();

onMounted(async () => {
    await postsStore.getPosts(); // async await so i can see console.log 's (some sort of loading overlay in the future)
    console.log(postsStore.mainPost);
    console.log(postsStore.secondaryPosts);
    console.log(postsStore.extraPosts);
});
</script>

<template>
    <div class="page-container">
        <div class="posts-container">
            <div class="main-posts-container">
                <!-- <div class="main-post-card">
                    {{ postsStore.mainPost }}
                </div>
                <div class="secondary-posts-container">
                    <div v-for="postsStore.secondaryPosts" class="secondary-post-card">
                        {{ postsStore.secondaryPosts }}
                    </div>
                </div>
            </div>
            <div class="extra-posts-container">
                <div v-for="postsStore.extraPosts">
                    {{ postsStore.extraPosts }}
                </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media screen and (max-width: 1366px) {
    
}
</style>