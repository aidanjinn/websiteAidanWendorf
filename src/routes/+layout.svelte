<!-- +layout.svelte -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
    import '$lib/styles/style.scss';
    import { fade } from 'svelte/transition';

    export let data;
</script>

<Header />
<!-- The rest of the HTML here -->

{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}

<Footer />