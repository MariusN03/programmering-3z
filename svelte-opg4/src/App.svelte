<script>
	let counter = 0
	let juiceImage
	let juices = ['orange', 'apple', 'banana', 'ginger', 'tropical']
	$: if(counter >= juices.length) counter = 0
	$: fetch("https://api.giphy.com/v1/gifs/search?api_key=u4QsbdJ55v6W3irNyXGgT0Hg3O6W7jSK&limit=1&q=" + juices[counter])
		.then(res => res.json())
		.then(json => {
			console.log(json.data)
			juiceImage = json.data[0].images.original.url
			console.log(juiceImage)
			})
</script>

<main>
	<img class='juiceIMG' src="{juiceImage}" alt="">
	<button on:click={()=>{
		counter = counter + 1
		}}>Knappa</button>
	
</main>

<style>

main{
	display: grid;
	place-items: center;
}

.juiceIMG{
    width:10rem;
    height:10rem;
    object-fit: cover;
    border-radius: 50%;
}
</style>