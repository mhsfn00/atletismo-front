import { defineStore } from 'pinia';
import axios from 'axios';

export const useAthletesStore = defineStore("AthletesStore", {
    state: () => ({
        femaleRoster: [],

        maleRoster: [],

        currentAthlete: {},
    }),

    actions: {
        async getAthletes(rosterYear) {
            try {
                const url = `/api/athletes/${rosterYear}`;
                const response = await axios.get(url);      

                this.femaleRoster = response.data.find(object => object.sex === "female").athletes;

                this.maleRoster = response.data.find(object => object.sex === "male").athletes;
            } catch (err) {
                console.log(err.response);
            }
        },

        async addAthletes(newAthletes, rosterYear) {
            try {
                const url = `/api/athletes/addAthletes/${rosterYear}`;
                const response = await axios.post(url, newAthletes);

                return (response);
            } catch (err) {
                console.log(err.response);
            }
        }
    }
});