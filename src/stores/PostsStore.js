import { defineStore } from 'pinia';
import axios from 'axios';

export const usePostsStore = defineStore("PostsStore", {
    state: () => ({
        posts: [],
    }),

    actions: {
        async getPosts() {
            try {
                const url = '/api/posts';
                const response = await axios.get(url);
                console.log(response.data);
                this.posts = response.data;
            } catch (err) {
                console.log(err.response);
            }
        },
        
    },

    getters: {
        // To be implemented, 
        // Button to load more posts
        // Logic to get the currentPost for PostPage (this way there's no need to make a new request)
    }
});

