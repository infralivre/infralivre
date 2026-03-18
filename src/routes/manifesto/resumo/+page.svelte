<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import PageHeader from '$lib/components/shared/PageHeader.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import ManifestoResumo from '$lib/content/manifesto-resumo.md';
</script>

<svelte:head>
	<title>Resumo do Manifesto — InfraLivre</title>
	<meta name="description" content="Versão resumida do manifesto InfraLivre sobre a necessidade de um marco jurídico para software livre no Brasil." />
	<meta property="og:title" content="Resumo do Manifesto — InfraLivre" />
	<meta property="og:description" content="Versão resumida do manifesto sobre a necessidade de um marco jurídico para software livre no Brasil." />
</svelte:head>

<Section>
	<PageHeader
		title="Resumo do Manifesto"
		description="Uma versão curta e direta do manifesto. Leitura de 1 a 2 minutos."
	/>
	<p class="text-sm text-muted-foreground">
		Quer a versão completa? <a href="/manifesto" class="underline underline-offset-2 hover:text-foreground">Leia o manifesto completo →</a>
	</p>
</Section>

<ProseLayout>
	<ManifestoResumo />
</ProseLayout>

<CallToAction
	title="Entenda o contexto"
	description="Veja em detalhes o problema jurídico que afeta o software livre no Brasil."
	href="/problema"
	label="O problema →"
/>
