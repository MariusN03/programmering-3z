<script>
    export let number, toggle
</script>

<main class={toggle ? '' : 'hide'}>
    {number}
</main>

<style>
    main{
        position:absolute;
        right:1rem;
        bottom:1rem;
    }

    .hide{
        visibility: hidden;
    }

</style>