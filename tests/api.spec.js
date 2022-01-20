import { reviewsApi } from '../src/svelte/api.js';

const reviews = [{
    "id": "1",
    "name": "abc1",
    "email": "abc1@gmail.com",
    "review": "xyz1",
    "created_at": "2022-01-18 13:00:00"
}]

beforeEach(() => {
    fetch.resetMocks();
});
    
test('testing get request :: response, call execution, url, headers, body, and method type', async () => {
    fetch.mockResponseOnce(JSON.stringify(reviews));

    const data = await reviewsApi('GET', null);
    expect(data).toEqual(reviews);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/reviews', {
        method: 'GET',
        body: null,
        headers: {
            'Content-type': 'application/json'
        }
    });
});

const newEntry = {
    "id": "2",
    "name": "abc2",
    "email": "abc2@gmail.com",
    "review": "xyz2",
    "created_at": "2022-01-19 13:00:00"
};

test('testing post request :: response, call execution, url, headers, body, and method type', async () => {
    fetch.mockResponseOnce(JSON.stringify(newEntry));

    const data = await reviewsApi('POST', newEntry);
    expect(data).toEqual(newEntry);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/reviews', {
        method: 'POST',
        body: newEntry,
        headers: {
            'Content-type': 'application/json'
        }
    });
});
