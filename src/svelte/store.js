import { writable, derived } from 'svelte/store';
import sortBy from 'lodash/sortBy'
import { reviewsApi } from './api.js';
    
export const loading = writable(true);

const reviews = writable([]);

const customStore = {
    subscribe: reviews.subscribe,
    getReviews: async () => {
        const response = await reviewsApi('GET', null);
        if(response && response.length) {
            reviews.update((entries) => [
                ...entries, ...response
            ])
        }
    },
    addReview: async (params) => {
        const response = await reviewsApi('POST', params);
        if(response) {
            reviews.update((entries) => [
                ...entries, response
            ])
        }
    }
}

export default customStore;
export const nameSorted = derived(reviews, (reviews) => sortBy(reviews, 'name'));
export const timeSorted = derived(reviews, (reviews) => sortBy(reviews, 'created_at'))