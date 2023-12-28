import { defineStore } from 'pinia';
import axios from 'axios';
// import { isProxy, toRaw } from 'vue';

export const usePostsStore = defineStore("PostsStore", {
    state: () => ({
        posts: [],
        currentPost: {},
    }),

    actions: {
        async getPosts() {
            try {
                const url = '/api/posts';
                const response = await axios.get(url);
                this.posts = response.data;
            } catch (err) {
                console.log(err.response);
            }
        },
        
        async getPostWithId (postId) {
            try { 
                const url = `api/post/${postId}`;
                const response = await axios.get(url);
                this.currentPost = response.data;
            } catch (err) {
                console.log(err.response);
            }
        },
    },

    getters: {
        // To be implemented, 
        // Button to load more posts
    }
});

