<script>
    export let title
    export let index
</script>

<main>
		<h1>{title}</h1>
        <div class="number">
            {index}

        </div>
</main>

<style>
    main{
        display: grid;
        place-items: center;
        height: 400px;
        width: 400px;
        border: 1px solid hotpink;
        position: relative;
    }
    h1{
        font-weight: 100;
    }
    .number{
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        height: 2rem;
        width: 2rem;
        background-color: black;
        color: white;
        display: grid;
        place-items: center;
        border-radius: 50%;
    }
</style>