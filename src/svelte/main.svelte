<script>
    import { onMount } from 'svelte';
    
    import Review from './review.svelte';
    import FeedbackForm from './form.svelte';
    
    import { loading, sortByStore, sortedStore } from './store.js'
    import customStore from './store';

    console.log("Main svelte component");
    onMount(async () => {
        await customStore.getReviews();
    })   
</script>

<div class="layout-column">
    <FeedbackForm />

    <br>
    
    <label>
      <span>Reviews Sort By</span>
      <select name="sort-list" id="sort-list" bind:value={$sortByStore}>
        <option value="created_at">Created At</option>
        <option value="name">Name</option>
      </select>
    </label>
    
    {#if !$loading}    
        <ul>
            {#each $sortedStore as review}
                <li><Review {review} /></li>
            {/each}
        </ul>
    {:else}
        <p>Loading...</p>
    {/if}
</div>
  