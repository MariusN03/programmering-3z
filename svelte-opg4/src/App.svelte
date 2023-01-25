<script>
	let counter = 0
	let stoneImage
	let stones = ['diamond', 'ruby gem', 'emerald', 'sapphire', 'amethyst stone']
	$: if(counter >= stones.length) counter = 0
	$: fetch("https://api.giphy.com/v1/gifs/search?api_key=u4QsbdJ55v6W3irNyXGgT0Hg3O6W7jSK&limit=1&q=" + stones[counter])
		.then(res => res.json())
		.then(json => {
			console.log(json.data)
			stoneImage = json.data[0].images.original.url
			console.log(stoneImage)
			})
</script>

<main>
	<div class="box">
		<img id='juiceIMG' src="{stoneImage}" alt="">
	<br>
		<button on:click={()=>{
			counter = counter + 1
			}}>$$$</button>

	</div>
	
</main>

<style>

	:global(body){
		margin: 0;
		padding: 0;
	}

main{
	height: 100vh;
	display: grid;
	place-items: center;
	background-color: black;
}

.box{
	display: grid;
	place-items: center;
}

#juiceIMG{
    width:10rem;
    height:10rem;
    object-fit: cover;
}
</style>