import { writable, derived } from 'svelte/store';
import sortBy from 'lodash/sortBy'

export const loading = writable(true);
export const reviews = writable([]);
export const nameSorted = derived(reviews, (reviews) => sortBy(reviews, 'name'));
export const timeSorted = derived(reviews, (reviews) => sortBy(reviews, 'created_at'))

