<script>
	import Menuitem from "./components/Menuitem.svelte";
	import Frontpage from "./components/Frontpage.svelte";
	import FindCocktail from "./components/FindCocktail.svelte";
	import SavedCocktails from "./components/SavedCocktails.svelte";

	let menu = ['frontpage', 'find cocktail', 'saved cocktails']
	let activePage = menu[0]
</script>

<header>
	{#each menu as item}
		<Menuitem bind:activePage={activePage} title = {item}/>
	{/each}
</header>

<main>
	{#if activePage == menu[0]}
		<Frontpage />
	{:else if activePage == menu[1]}
		<FindCocktail />
	{:else if activePage == menu[2]}
		<SavedCocktails />
	{/if}
</main>

<style>
:global(*, body){
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

	header {
		display: grid;
		height: 10vh;
		grid-auto-flow: column;
		place-items: center;
	}


	main {
		display: grid;
		place-items: center;
	}

</style>