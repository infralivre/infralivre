<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import PageHeader from '$lib/components/shared/PageHeader.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import GitHubCta from '$lib/components/shared/GitHubCta.svelte';
	import SobreContent from '$lib/content/sobre.md';
</script>

<svelte:head>
	<title>Sobre — InfraLivre</title>
	<meta name="description" content="Conheça o InfraLivre: uma iniciativa pela construção de um marco jurídico adequado para o software livre no Brasil." />
	<meta property="og:title" content="Sobre — InfraLivre" />
	<meta property="og:description" content="Uma iniciativa pela construção de um marco jurídico adequado para o software livre no Brasil." />
</svelte:head>

<Section>
	<PageHeader
		title="Sobre o InfraLivre"
		description="Conheça o projeto, nosso objetivo e como trabalhamos."
	/>
</Section>

<ProseLayout>
	<SobreContent />
</ProseLayout>

<CallToAction
	title="Conheça o manifesto"
	description="Leia o manifesto completo e entenda em profundidade a necessidade de um marco jurídico."
	href="/manifesto"
	label="Leia o manifesto →"
/>

<GitHubCta />
