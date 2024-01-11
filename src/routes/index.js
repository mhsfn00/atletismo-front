import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import NotFound from '../pages/NotFound.vue';
import CoachesPage from '../pages/CoachesPage.vue';
import RosterPage from '../pages/RosterPage.vue';
import PostPage from '../pages/PostPage.vue';
import NewPostPage from '../pages/NewPostPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/roster', component: RosterPage },
    { path: '/coaches', component: CoachesPage },
    { path: '/post/:postId', component: PostPage },
    { path: '/newPost', component: NewPostPage },
    { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;