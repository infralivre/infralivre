<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import PageHeader from '$lib/components/shared/PageHeader.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import ManifestoContent from '$lib/content/manifesto.md';
</script>

<svelte:head>
	<title>Manifesto — InfraLivre</title>
	<meta name="description" content="O manifesto do InfraLivre: por que o Brasil precisa de um marco legal para o software livre." />
</svelte:head>

<Section>
	<PageHeader
		title="Manifesto"
		description="Por que o Brasil precisa de um marco legal para o software livre."
	/>
	<p class="text-sm text-muted-foreground">
		Versão resumida disponível: <a href="/manifesto/resumo" class="underline underline-offset-2 hover:text-foreground">Leia o resumo →</a>
	</p>
</Section>

<ProseLayout>
	<ManifestoContent />
</ProseLayout>
