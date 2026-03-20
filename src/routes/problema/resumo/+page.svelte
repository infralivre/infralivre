<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import PageHeader from '$lib/components/shared/PageHeader.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import ProblemaResumo from '$lib/content/problema-resumo.md';
</script>

<svelte:head>
	<title>Resumo do Problema — InfraLivre</title>
	<meta name="description" content="Versão resumida do problema jurídico que afeta o software livre no Brasil." />
	<meta property="og:title" content="Resumo do Problema — InfraLivre" />
	<meta property="og:description" content="Versão resumida do problema jurídico que afeta o software livre no Brasil." />
</svelte:head>

<Section>
	<PageHeader
		title="Resumo do Problema"
		description="Uma versão curta e direta. Leitura de 1 a 2 minutos."
	/>
	<p class="text-sm text-muted-foreground">
		Quer a versão completa? <a href="/problema" class="underline underline-offset-2 hover:text-foreground">Leia a análise completa →</a>
	</p>
</Section>

<ProseLayout>
	<ProblemaResumo />
</ProseLayout>

<CallToAction
	title="Temos uma proposta"
	description="Conheça o marco jurídico que o InfraLivre defende para resolver esses problemas."
	href="/proposta"
	label="Veja a proposta →"
/>
