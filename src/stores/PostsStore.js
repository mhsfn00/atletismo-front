import { defineStore } from 'pinia';
import axios from 'axios';

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
                console.log(response.data);
                this.posts = response.data;
            } catch (err) {
                console.log(err.response);
            }
        },
        
        getPostWithId (postId) {
            const postIdString = postId.toString();
            this.posts.forEach(post => {
                const { id } = post;
                console.log(id);
                console.log(postIdString);
                if (postIdString === id){
                    console.log("found", post);
                    this.currentPost = post;
                    console.log(this.currentPost);
                }
            });
        }
    },

    getters: {
        // To be implemented, 
        // Button to load more posts
    }
});

