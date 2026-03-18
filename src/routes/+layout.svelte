<script lang="ts">
	import '../app.css';
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-dvh flex-col bg-background text-foreground">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
