<script>
    export let title
    export let activePage    
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main 
    class={activePage == title ? 'active' : ''}
    on:click={()=>activePage=title}
>
    {title}
</main>

<style>

    main{
        cursor: pointer;
        transition: .1s ease-in-out all;
        border-bottom-width: 0;
        padding-bottom: .3rem;
    }
    .active {
        border-bottom: 3px solid black;
        border-bottom-width: 100%;
    }

</style>