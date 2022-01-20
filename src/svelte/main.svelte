<script>
    import { onMount } from 'svelte';
    
    import Review from './review.svelte';
    import FeedbackForm from './form.svelte';
    
    import { loading, reviews, nameSorted, timeSorted } from './store.js'
    import { reviewsApi } from './api.js';
    
    console.log("Main svelte component");

    let sortBy = 'name';

    onMount(async () => {
        const existingEntries = new Set($reviews.map((e) => {
            return e.id;
        }));

        let response = await reviewsApi('GET', null);
        if(response && response.length) {
            // filter the existing data
            response = response.filter((e) => {
                return !existingEntries.has(e.id);
            })

            $reviews = [...$reviews, ...response];
            $loading = false;
        }
    })   
</script>

<div class="layout-column">
    <FeedbackForm />

    <br>
    
    <label>
      <span>Reviews Sort By</span>
      <select name="sort-list" id="sort-list" bind:value={sortBy}>
        <option value="created_at">Created At</option>
        <option value="name">Name</option>
      </select>
    </label>

    {#if !$loading}    
        <ul>
            {#if (sortBy === 'name')}
                {#each $nameSorted as review}
                    <li><Review {review} /></li>
                {/each}
            {:else}
                {#each $timeSorted as review}
                    <li><Review {review} /></li>
                {/each}
            {/if}
        </ul>
    {:else}
        <p>Loading...</p>
    {/if}
</div>
  