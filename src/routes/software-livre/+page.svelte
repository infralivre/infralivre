<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import PageHeader from '$lib/components/shared/PageHeader.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import SoftwareLivreContent from '$lib/content/software-livre.md';
</script>

<svelte:head>
	<title>Software Livre e de Código Aberto — InfraLivre</title>
	<meta name="description" content="Entenda o que é software livre e de código aberto (FOSS), como ele funciona, onde está presente no dia a dia e por que ele é essencial para a sociedade." />
	<meta property="og:title" content="Software Livre e de Código Aberto — InfraLivre" />
	<meta property="og:description" content="O que é software livre, como funciona e por que é essencial para a infraestrutura digital moderna." />
</svelte:head>

<Section>
	<PageHeader
		title="Software Livre e de Código Aberto"
		description="Uma introdução ao modelo de desenvolvimento que sustenta a infraestrutura digital do mundo."
	/>
</Section>

<ProseLayout>
	<SoftwareLivreContent />
</ProseLayout>

<CallToAction
	title="E qual é o problema?"
	description="Apesar de sua importância, o software livre não possui hoje um enquadramento jurídico adequado no Brasil."
	href="/problema"
	label="Entenda o problema →"
/>
