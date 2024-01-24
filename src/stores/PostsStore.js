import { defineStore } from 'pinia';
import axios from 'axios';

export const usePostsStore = defineStore("PostsStore", {
    state: () => ({
        // All posts loaded at the home page (starting with six)
        posts: [],  

        // PostPage
        currentPost: {},
    }),

    actions: {
        async getPosts() { // Gets the first 6 posts, the post tagged as main, and the 5 newest (logic in the back).
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

        async editPostWithId (modifiedPost) {
            try {
                const url = `api/editPost`;
                const response = await axios.post(url, modifiedPost);

                return response.data;   
            } catch (err) {
                console.log(err.response);
            }
        }
    },

    getters: {
        // To be implemented, 
        // Button to load more posts
    }
});

