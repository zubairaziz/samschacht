<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`blog.json`)
            .then((r) => r.json())
            .then((posts) => {
                return { posts };
            });
    }
</script>

<script>
    import SiteMeta from '../../components/SiteMeta.svelte';

    export let posts;
</script>

<style>
    ul {
        margin: 0 0 1em 0;
        line-height: 1.5;
    }
</style>

<SiteMeta pageTitle={`Blog`} />

<div class="container">
    <h1>Blog Posts</h1>

    <ul>
        {#each posts as post}
            <li>
                <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
            </li>
        {/each}
    </ul>
</div>
