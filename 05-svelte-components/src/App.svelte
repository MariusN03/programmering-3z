<script>
	import Recipe from "./components/Recipe.svelte";
	let recipes = ['pasta bolognaise', 'sild', 'pasta med sild', 'cognacsovs', 'peber']
</script>

<header>
	<h1>web components</h1>
</header>
<main>
	{#each recipes as title, index}
		<Recipe {title} {index}/>
	{/each}
</main>

<style>
	h1{
		color: hotpink;
		text-transform: uppercase;
		font-weight: 100;
	}
	main{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: .4rem;
	}
</style>