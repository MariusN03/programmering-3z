<script>
    import Page from "./Page.svelte";
    export let title, index
    let toggle = true
</script>

<main>
    <h1>
        {title}

    </h1>

    <button on:click={()=>toggle = !toggle}> {toggle ? 'hide' : 'show'} number</button>
    
    <Page number={index} toggle={toggle}/>
</main>

<style>
    main{
        min-width:20rem;
        height:20rem;
        padding:1rem;
        border:1px solid lightblue;
        border-radius: 1rem;
        position: relative;
    }

    
</style>