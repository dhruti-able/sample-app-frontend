export async function reviewsApi(method, params = null) {
    const body = params ? params : null;
    try {
        // fetch the reviews
        const response = await fetch('http://localhost:3000/reviews', {
            method,
            body,
            headers: {
                'Content-type': 'application/json'
            }
        });
        const data = await response.json();
        
        return data;
    }
    catch(err) {
        console.error(err);
        return null;
    }
};
