<script>
    console.log("form svelte component");

    let name, email, review;

    function validateForm() {
        console.log("validate form function");
        // TODO: form validations
    }

    async function submitForm(){
        // validations
        validateForm();

        // save the response
        await fetch('http://localhost:3000/reviews', {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
			body: JSON.stringify({
                id: "6",
				name: name,
				email: email,
                review: review,
                created_at: "2021-01-19 12:00:00"
			})
		})
        
    }
</script>

<form on:submit|preventDefault={submitForm}>
    <label>
        <span>Name</span>
        <input name="name" type="text" required bind:value={name}>
    </label>
        
    <label>
        <span>Email</span>
        <input name="email" type="email" required bind:value={email}>
    </label>
        
    <label>
        <span>Review</span>
        <textarea name="review" rows="1" required bind:value={review}></textarea>
    </label>
	
    <button type="submit">
		Submit
	</button>
</form>