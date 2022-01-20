<script>
    console.log("Review component");
    export let review;
</script>

<article>
    <h4>{review.name} :: {review.email}</h4>
    <p>{review.review} :: {review.created_at}</p>
</article>