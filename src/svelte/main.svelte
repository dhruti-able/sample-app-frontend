<script>
    import { onMount } from 'svelte';
    
    import Review from './review.svelte';
    import FeedbackForm from './form.svelte';
    
    import { loading, nameSorted, timeSorted } from './store.js'
    import customStore from './store';

    console.log("Main svelte component");

    let sortBy = 'name';

    onMount(async () => {
        await customStore.getReviews();
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
  