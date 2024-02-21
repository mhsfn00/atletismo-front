import { defineStore } from 'pinia';
import axios from 'axios';

export const usePostsStore = defineStore("PostsStore", {
    state: () => ({
        // All posts loaded at the home page (starting with six)
        posts: [], 

        // First post
        mainPost: {},

        // Secondary posts (posts on the right side of the main post)
        secondaryPosts: [],

        // Three extra (also load more button)
        extraPosts: [],
        
        // PostPage
        currentPost: {},
    }),

    actions: {
        async getPosts() { // Gets the first 6 posts, the post tagged as main, and the 5 newest (logic in the back).
            try {
                const url = '/api/posts';
                const response = await axios.get(url);
                this.posts = response.data;
                this.mainPost = this.posts.slice(0, 1)[0];
                this.secondaryPosts = this.posts.slice(1, 3);
                this.extraPosts = this.posts.slice(3, 6);
            } catch (err) {
                console.log(err.response);
            }
        },
        
        async getPostWithId (postId) {
            try { 
                const url = `/api/posts/${postId}`;
                const response = await axios.get(url);
                this.currentPost = response.data;
            } catch (err) {
                console.log(err.response);
            }
        },

        async editPostWithId (modifiedPost) {
            try {
                const postId = modifiedPost.id;
                const url = `/api/posts/${postId}/editPost`;
                const response = await axios.post(url, modifiedPost);

                return response.data;   
            } catch (err) {
                console.log(err.response);
            }
        }
    },
});