import { defineStore } from 'pinia';
import axios from 'axios';

export const useRosterStore = defineStore("RosterStore", {
    state: () => ({
        currentRoster: {
            female: [],

            male: [],
        },

        currentAthlete: {},
    }),

    actions: {
        async getRoster(rosterYear) {
            try {
                const url = `/api/roster/getRoster/${rosterYear}`;
                const response = await axios.get(url);

                this.currentRoster.female = response.data.female;
                this.currentRoster.male = response.data.male;
            } catch (err) {
                console.log(err.response);
            }
        },

        async addAthletes(newAthletes, rosterYear) {
            try {
                const url = `/api/roster/addAthletes/${rosterYear}`;
                const response = await axios.post(url, newAthletes);

                return (response);
            } catch (err) {
                console.log(err.response);
            }
        },

        async getRosters() {
            try {
                const url = '/api/roster/getRosters';
                const response = await axios.get(url);

                return (response.data);
            } catch (err) {
                console.log(err.response);
            }
        }
    }
});