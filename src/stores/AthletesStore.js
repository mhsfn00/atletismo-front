import { defineStore } from 'pinia';
import axios from 'axios';

export const useAthletesStore = defineStore("AthletesStore", {
    state: () => ({
        femaleRoster: [],

        maleRoster: [],

        currentAthlete: {},
    }),

    actions: {
        async getAthletes() {
            try {
                const url = '/api/athletes';
                const response = await axios.get(url);      

                this.femaleRoster = response.data.find(object => object.sex === "female").athletes;

                this.maleRoster = response.data.find(object => object.sex === "male").athletes;
            } catch (err) {
                console.log(err.response);
            }
        },

        async addAthletes(newAthletes) {
            try {
                const url = '/api/athletes/addAthletes';
                const response = await axios.post(url, newAthletes);

                return (response);
            } catch (err) {
                console.log(err.response);
            }
        }
    }
});