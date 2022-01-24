<script>
    import { loading } from './store.js'
    import customStore from './store';
    import moment from 'moment';
    import { v4 as uuidv4 } from 'uuid';
       
    console.log("form svelte component");

    let name, email, review;

    function validateForm() {
        console.log("validate form function");
        // TODO: form validations
    }

    async function submitForm(){
        console.log('submit form')
        // validations
        validateForm();

        await customStore.addReview(JSON.stringify({
            id: uuidv4(),
            name: name,
            email: email,
            review: review,
            created_at: moment().format('YYYY-MM-DD HH:mm:ss')
        }));
    }
</script>

<form on:submit|preventDefault={submitForm}>
    <label>
        <span>Name</span>
        <input id="feedback-form-name" name="name" type="text" required bind:value={name}>
    </label>
        
    <label>
        <span>Email</span>
        <input id="feedback-form-email" name="email" type="email" required bind:value={email}>
    </label>
        
    <label>
        <span>Review</span>
        <textarea id="feedback-form-review" name="review" rows="1" required bind:value={review}></textarea>
    </label>
	
    <button type="submit">
		Submit
	</button>
</form>