import { get } from "svelte/store";
import { loading, reviews, nameSorted, timeSorted } from '../src/svelte/store.js'

test('testing initial store states :: loading state :: true', () => {
    expect(get(loading)).toEqual(true);
});

test('testing initial store states :: reviews state :: empty array', () => {
    expect(get(reviews)).toEqual([]);
});

test('testing initial store states :: nameSorted state :: empty array', () => {
    expect(get(nameSorted)).toEqual([]);
});

test('testing initial store states :: timeSorted state :: empty array', () => {
    expect(get(timeSorted)).toEqual([]);
});
