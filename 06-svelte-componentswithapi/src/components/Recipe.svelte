<script>
    // Henter variabel recipe fra App.svelte
    export let recipe
</script>

<!-- Indsætter titel og billede til recipe -->
<main style = 'background-image: url({recipe.strMealThumb});'>
    <h1>{recipe.strMeal}</h1>

</main>


<style>
    main{
        height: 400px;
        width: 100%;
        display: grid;
        place-items: center;
        font-weight: 100;
        color: white;
    }
</style>