<script>
    import { onMount } from "svelte";
    import Review from './review.svelte';
    import FeedbackForm from './form.svelte';
    import moment from "moment";

    console.log("Main svelte component");

    let selected = 'name';
    let sortByName = true;
    let reviews;
    
    onMount(async () => {
    await fetch(`http://localhost:3000/reviews`)
        .then(r => r.json())
        .then(data => {
            if(sortByName) reviews = data.sort((a,b) => {return Number(a.name) - Number(b.name)});
            else reviews = data.sort((a, b) => {return Number(moment(a.created_at).valueOf()) - Number(moment(b.created_at).valueOf())});
        });
    })

    function reviewListUpdate() {
        sortByName = (selected === 'name');
        if(sortByName) reviews = reviews.sort((a,b) => {return Number(a.name) - Number(b.name)});
        else reviews = reviews.sort((a, b) => {return Number(moment(a.created_at).valueOf()) - Number(moment(b.created_at).valueOf())});
    }
</script>

<div class="layout-column">
    <FeedbackForm />

    <br>
    
    <label>
      <span>Reviews Sort By</span>
      <select name="sort-list" id="sort-list" bind:value={selected} on:change={reviewListUpdate}>
        <option value="created_at">Created At</option>
        <option value="name">Name</option>
      </select>
    </label>

    {#if reviews}    
        <ul>
            {#if sortByName}
                Name
            {:else }
                Created
            {/if}

            {#each reviews as review}
                <li><Review {review} /></li>
            {/each}
        </ul>
    {:else}
        <p>Loading...</p>
    {/if}
</div>
  