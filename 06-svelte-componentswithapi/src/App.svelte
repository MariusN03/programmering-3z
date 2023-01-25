<script>
	// Importerer Recipe komponent
	import Recipe from "./components/Recipe.svelte";
	let query
	let recipes = []
	// Fetcher fra query reaktivt
	$: fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+ query)
		.then(res => res.json())
		.then(json => {
			// error control
			if(json.meals)recipes = json.meals
		})
</script>
<header>
	<div class="query">
		<!-- Input til query -->
		<input type="text" bind:value={query}>
	</div>

</header>

<main>
	<!-- Map alt i JSON fra fetch -->
	{#each recipes as recipe}
		<Recipe {recipe} />
	{/each}

</main>

<style>
	header{
		display: grid;
		grid-auto-flow: column;
		place-items: center;
		padding: 1rem;
		background-color: lightgreen;
		margin-bottom: .5rem;
	}

	main{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		place-items: center;
		gap: .5rem
	}
</style>