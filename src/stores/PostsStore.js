import { defineStore } from 'pinia';
import axios from 'axios';

export const usePostsStore = defineStore("PostsStore", {
    state: () => ({
        // PostContainerGrid
        mainPost: {}, // Biggest image, main post.
        secondaryPosts: [], // Two secondary posts to the right of the main post.
        extraPosts: [], // All the posts at the bottom, starting with three.

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
                this.mainPost = this.posts[0]; // First one is always the main post.
                this.secondaryPosts = this.posts.slice(1, 3); // From here it follows the order of insertion (most recent).
                this.extraPosts = this.posts.slice(3); // Extra is the last three (will be used with "load more posts").
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

