<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import PageHeader from '$lib/components/shared/PageHeader.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import ManifestoResumo from '$lib/content/manifesto-resumo.md';
</script>

<svelte:head>
	<title>Resumo do Manifesto — InfraLivre</title>
	<meta name="description" content="Versão resumida do manifesto InfraLivre. Leitura rápida sobre por que o Brasil precisa de um marco legal para software livre." />
</svelte:head>

<Section>
	<PageHeader
		title="Resumo do Manifesto"
		description="Uma versão curta e direta do nosso manifesto. Leitura de 1 a 2 minutos."
	/>
	<p class="text-sm text-muted-foreground">
		Quer a versão completa? <a href="/manifesto" class="underline underline-offset-2 hover:text-foreground">Leia o manifesto completo →</a>
	</p>
</Section>

<ProseLayout>
	<ManifestoResumo />
</ProseLayout>
