<script>
	let name = "Kent Nielsen";
	let text = "";
	let val = '';
	let discoKent = false;
	let godt = Math.random(1)
	
</script>

<main>
	<div>	
		<h2>Navn:</h2>
		<input type="text" bind:value={name}>
		<h1 id="kent">Hello {name}!</h1>
		<h1>{name} kan { godt > .5 ? 'godt' : 'ikke' } lide {text}</h1>
		<input type="text" bind:value={val} placeholder="skriv her...">
		<button on:click={()=>{text = val; val = ''}}>OK!</button>
	</div>

	<div>	
		<button id="Dkent" on:click={()=>discoKent = !discoKent}>{name} disco!</button>
	</div>


</main>

{#if discoKent == true}
	<div id="partyparty"></div>
	{console.log('fest?')} 
{/if} 

<style>
	:global(body){
		background-color: black;
		overflow: hidden;
		
	}

	#partyparty {
		background-image: url("https://i.pinimg.com/originals/bc/52/ac/bc52ac9b9a742c4e255977e191461319.gif");
		background-size: cover;
		position: fixed;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}

	main {
		text-align: center;
		color: white;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		display: grid;
		grid-template-rows: 1fr 1fr;
		gap: 10vh;
	}

	#Dkent:hover {
		background-color: hotpink;
		color: white;
		border: 0;
		transform: scale(110%);
	}

	button:hover {
		cursor: pointer;
	}



	#kent {
		color: lightgreen;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>