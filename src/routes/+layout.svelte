<script lang="ts">
	import '../app.css';
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<meta property="og:site_name" content="InfraLivre" />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<a href="#conteudo" class="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg focus:ring-2 focus:ring-ring">
	Pular para o conteúdo
</a>

<div class="flex min-h-dvh flex-col bg-background text-foreground">
	<Header />
	<main id="conteudo" class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
