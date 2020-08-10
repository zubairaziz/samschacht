<script>
    import Nav from '../components/Nav.svelte';
    import Stylesheet from '../components/Stylesheet.svelte';

    export let segment;
</script>

<style>
    main {
        @apply relative bg-white;
        padding-top: 60px;
        box-sizing: border-box;
    }
</style>

<Stylesheet />

<Nav {segment} />

<main>
    <slot />
</main>
