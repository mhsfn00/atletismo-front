import { defineStore } from 'pinia';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const useUsersStore = defineStore("UsersStore", {
    state: () => ({
        loggedUser: null,
        userIdentityLetter: '',
    }),

    actions: {
        async login(email, password) {
            const auth = getAuth();

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    this.loggedUser = user;
                    this.userIdentityLetter = user.email.charAt(0).toUpperCase();
                    alert("Login Succesfull"); 
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    alert("Login Failed");
                });    
        },

        async logout() {
            const auth = getAuth();

            signOut(auth).
                then(() =>  {
                    this.loggedUser = null;
                    alert("Logout successful");
                })
                .catch((error) => {
                    alert ("Something went wrong when signing out");
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log (errorCode, errorMessage);
                });
        } 
    }
})