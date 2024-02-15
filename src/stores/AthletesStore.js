import { defineStore } from 'pinia';
import axios from 'axios';

export const useAthletesStore = defineStore("AthletesStore", {
    state: () => ({
        womensRoster: [],

        mensRoster: [],

        currentAthlete: {},
    }),

    actions: {
        async getAthletes() {
            try {
                const url = '/api/athletes';
                const response = await axios.get(url);      

                const women = response.data.find(object => object.sex === "women").athletes;
                this.womensRoster = women;

                const men = response.data.find(object => object.sex === "men").athletes;
                this.mensRoster = men;
            } catch (err) {
                console.log(err.response);
            }
        }
    }
});