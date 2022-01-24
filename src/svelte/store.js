import { writable, derived } from 'svelte/store';
import sortBy from 'lodash/sortBy'
import { reviewsApi } from './api.js';
    
export const loading = writable(false);
export const sortByStore = writable('name');
const reviews = writable([]);

const customStore = {
    subscribe: reviews.subscribe,
    getReviews: async () => {
        loading.update((value) => {
            !value;
        });

        const response = await reviewsApi('GET', null);
        if(response && response.length) {
            reviews.update((entries) => [
                ...entries, ...response
            ]);
        }

        loading.update((value) => {
            !value;
        });
    },
    addReview: async (params) => {
        loading.update((value) => {
            !value;
        });

        const response = await reviewsApi('POST', params);
        if(response) {
            reviews.update((entries) => [
                ...entries, response
            ]);
        }

        loading.update((value) => {
            !value;
        });
    }
}

export default customStore;
export const sortedStore = derived([reviews, sortByStore], (values) => sortBy(values[0], values[1]));