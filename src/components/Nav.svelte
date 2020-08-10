<script>
    import { onMount } from 'svelte';
    import { goto } from '@sapper/app';
    import scrollTo from '../assets/scripts/scrollTo';

    const handleClick = (e) => {
        e.preventDefault();

        const elm = e.target.closest('[data-scroll]');

        let targetSelector = null;

        if (elm) {
            if (elm.dataset.scroll) {
                targetSelector = elm.dataset.scroll;
            } else if (elm.tagName === 'A') {
                targetSelector = elm.hash;
            } else {
                return;
            }
        }

        const target = document.querySelector(targetSelector);

        if (target) {
            scrollTo(target);
        }
    };

    export let segment;
</script>

<style>
    nav {
        @apply bg-white border-b border-gray-400 w-full p-0 fixed;
        font-weight: 300;
        z-index: 999;
    }

    /* clearfix */
    ul {
        @apply flex flex-row flex-no-wrap justify-end;
        &::after {
            @apply block clear-both;
            content: '';
        }
    }

    li {
        @apply inline-block;
    }

    [aria-current] {
        @apply relative inline-block;

        &::after {
            @apply absolute block bg-primary-darker;
            content: '';
            width: calc(100% - 1em);
            height: 2px;
            bottom: -1px;
        }
    }

    a {
        @apply relative block;
        text-decoration: none;
        padding: 1em 0.5em;
        cursor: pointer;

        &:hover {
            &::after {
                @apply absolute block bg-primary;
                content: '';
                width: calc(100% - 1em);
                height: 2px;
                bottom: -1px;
            }
        }
    }
</style>

<nav>
    <div class="container">
        <ul>
            <li>
                <a
                    on:click={segment === undefined ? handleClick : undefined}
                    href="/#about"
                    data-scroll={segment === undefined ? '#about' : undefined}>
                    about
                </a>
            </li>
            <li>
                <a
                    on:click={segment === undefined ? handleClick : undefined}
                    href="/#experience"
                    data-scroll={segment === undefined ? '#experience' : undefined}>
                    experience
                </a>
            </li>
            <li>
                <a
                    on:click={segment === undefined ? handleClick : undefined}
                    href="/#contact"
                    data-scroll={segment === undefined ? '#contact' : undefined}>
                    contact
                </a>
            </li>
            <li>
                <a
                    rel="prefetch"
                    aria-current={segment === 'blog' ? 'page' : undefined}
                    href="blog">
                    blog
                </a>
            </li>
        </ul>
    </div>
</nav>
