<script>
	import Recipe from "./components/Recipe.svelte";
	let recipes = ['pasta bolognaise', 'potato pizza', 'macncheese', 'spaghgetti carbonara']	


</script>

<main>
	{#each recipes as title, index}
		<Recipe {title} {index}/>
	{/each}
</main>

<style>
:global(*, body){
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

	main {
		display: grid;
		place-items: center;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap:1rem;
	}

</style>