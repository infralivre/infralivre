<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import PageHeader from '$lib/components/shared/PageHeader.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import SobreContent from '$lib/content/sobre.md';
</script>

<svelte:head>
	<title>Sobre — InfraLivre</title>
	<meta name="description" content="Conheça o projeto InfraLivre: quem somos, nosso objetivo e como trabalhamos." />
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
