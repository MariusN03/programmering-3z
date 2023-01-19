<script>
	let names = ['Brian', 'John', 'Abdurahman']

	let people = [
		{
			"name":"Mikkel",
			"surname":"Hansen",      
			"role":"kanon arm"
		},
		{
			"name":"Lars",
			"surname":"Tengstedt",      
			"role":"underbukser"
		}
	]

	let cocktail;
	const getCocktail = () => {
		fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
			.then(res => res.json())
			.then(json => {

				cocktail = json.drinks[0]
				console.log(cocktail)
			})
	}

	let savedCocktails = []

	const saveCocktail = () => {
		savedCocktails = [...savedCocktails, cocktail]
		console.log(savedCocktails)
	}

	const deleteCocktail = (i) => {
		console.log('sletter ' + i)
		savedCocktails.splice(i,1)
		savedCocktails = savedCocktails
	}
</script>

<main>
	<ul>
		{#each names as name, index}
			<li>Nummer {index} i listen, hedder {name} </li>
		{/each}     
	</ul>

    <ul>
		{#each people as p, index}
		  <div class="person">
			<h1>{p.name}</h1>
			<p>{p.surname} - role: {p.role}</p>
		  </div>
		{/each}     
	</ul>


	{#if cocktail}
	<div class="cocktail">
		<div class="description">
			<h2>{cocktail.strDrink}</h2>
			<p>{cocktail.strInstructions}</p>
		</div>
		<img src="{cocktail.strDrinkThumb}" alt="">
	</div>
	{/if}
	<button on:click={getCocktail}>Another one</button>
	<button on:click={saveCocktail}>Save</button>
	<ul>
		{#each savedCocktails as item, index}
		<div class="cocktail" on:click={()=>{cocktail = item}}>
			<div class="description">
				<h2>{item.strDrink}</h2>
				<p>{item.strInstructions}</p>
			</div>
			<img src="{item.strDrinkThumb}" alt="">
			<button on:click={ ()=> deleteCocktail(index)}>slet</button>
		</div>
		{/each}
	</ul>
</main>

<style>

	.cocktail{
		display:grid;
		grid-template-columns: 2fr 1fr;
		width:50vw;
		box-shadow: 1rem 1rem 2rem .5rem black; 
				/* x akse, y akse, blur, spredning, farve */
	}
	.cocktail img{
		width:100%;
		height:100%;
		object-fit: cover; /* fyld rammen med billedet så godt som muligt */
	} 
	.cocktail .description{
		padding:1rem;
	}
</style>