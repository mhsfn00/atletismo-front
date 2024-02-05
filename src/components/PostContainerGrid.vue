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
                    <router-link class="link-nostyling image-container" :to="{path:`post/${postsStore.mainPost.id}`}">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Athletics_%2836099368890%29.jpg/1280px-Athletics_%2836099368890%29.jpg" class="post-image" />
                            <div class="shadow-overlay"></div>
                            <div class="overlay-text">
                                <p class="main-subject-date">{{ "Track and Field | " + postsStore.mainPost.date }}</p>
                                <p class="main-title">{{ postsStore.mainPost.title }}</p>
                            </div>
                    </router-link>
                </div>
                <div class="secondary-posts-container">
                    <div v-for="(post, index) in postsStore.secondaryPosts" :key="index" class="secondary-post-card">
                        <router-link class="link-nostyling image-container" :to="{path:`post/${post.id}`}">
                            <img src="//live.staticflickr.com/5021/5618703271_c8231cfe1c_h.jpg" class="post-image" />
                            <div class="shadow-overlay"></div>
                            <div class="overlay-text">
                                <p class="secondary-subject-date">{{ "Track and Field | " + post.date }}</p>
                                <p class="secondary-title">{{ post.title }}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="extra-posts-container">
                <div v-for="(post, index) in postsStore.extraPosts" :key="index" class="extra-post-card">
                    <router-link class="link-nostyling image-container" :to="{path:`post/${post.id}`}">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/For_athletics.jpg/800px-For_athletics.jpg" class="post-image" />
                        <div class="shadow-overlay"></div>
                        <div class="overlay-text">
                            <p class="secondary-subject-date">{{ "Track and Field | " + post.date }}</p>
                            <p class="secondary-title">{{ post.title }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image-container:hover {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, black 100%);
    height: 100%;
    border-radius: 3px;
}

.shadow-overlay {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, black 100%);
    position: absolute;
    width: 100%;
    height: 40%;
    bottom: 0;
    border-radius: 3px;
}

.main-subject-date {
    font-size: 20px;
}

.main-title {
    font-size: 30px;
}

.secondary-title {
    font-size: 25px;

}

.secondary-subject-date {
    font-size: 15px;
}

.overlay-text {
    position: absolute;
    left: 2%;
    bottom: 5%;
    font-weight: bold;
}

.image-container {
    position: relative;
    color: white;
    display: flex;
    width: 100%;
    height: 100%;
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