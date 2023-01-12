<script>
	let animals = [
		{'name': 'Bjarke'},
		{'name': 'Fnatmide'},
		{'name': 'Snoop Dogg'},
		{'name': 'Thomas'},
		{'name': 'Hund'},
		{'name': 'Karkelak'},
		{'name': 'Kat'},
		{'name': 'Goblin'},
		{'name': 'Muldvarpe'},
		{'name': 'Penisorm'}
	]

</script>

<main>
	<div class="header">
		<h1>Sjove dyr</h1>
	</div>
	<div class="animals">
		{#each animals as n}
			<div class="animal">{n.name}</div>
		{/each}
	</div>
</main>

<style>
	.header{
		background-color: plum;
		text-align: center;
		padding: 1rem;
		color: white;
	}

	main{
		width: 100vw;
	}

	.animals{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		place-items: center;
		padding: 1rem;
		gap: 1rem;
	}

	.animal{
		height: 200px;
		width: 200px;
		border: 2px solid black;
		border-radius: 50%;
		display: grid;
		place-items: center;
	}
</style>