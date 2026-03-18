<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import PageHeader from '$lib/components/shared/PageHeader.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import ProblemaContent from '$lib/content/problema.md';
</script>

<svelte:head>
	<title>O Problema — InfraLivre</title>
	<meta name="description" content="Entenda o problema jurídico estrutural que afeta o software livre no Brasil e por que precisamos de um marco jurídico adequado." />
	<meta property="og:title" content="O Problema — InfraLivre" />
	<meta property="og:description" content="O problema jurídico estrutural que afeta o software livre no Brasil." />
</svelte:head>

<Section>
	<PageHeader
		title="O Problema"
		description="Por que a ausência de um marco jurídico adequado para software livre é um risco crescente."
	/>
</Section>

<ProseLayout>
	<ProblemaContent />
</ProseLayout>

<CallToAction
	title="Temos uma proposta"
	description="Conheça o marco legal que o InfraLivre defende para resolver esses problemas."
	href="/proposta"
	label="Veja a proposta →"
/>
