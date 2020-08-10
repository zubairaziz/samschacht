<script>
    export let pageTitle;
    export let pageDescription;
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{pageTitle} | Sam Schacht</title>
    <meta name="title" content={`${pageTitle} | Sam Schacht`} />
    <meta
        name="description"
        content={pageDescription ? pageDescription : "Sam Schacht's personal website."} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.samschacht.com" />
    <meta property="og:title" content={`${pageTitle} | Sam Schacht`} />
    <meta
        property="og:description"
        content={pageDescription ? pageDescription : "Sam Schacht's personal website."} />
    <meta
        property="og:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.samschacht.com" />
    <meta property="twitter:title" content={`${pageTitle} | Sam Schacht`} />
    <meta
        property="twitter:description"
        content={pageDescription ? pageDescription : "Sam Schacht's personal website."} />
    <meta
        property="twitter:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
</svelte:head>
