<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import PageHeader from '$lib/components/shared/PageHeader.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import PropostaResumo from '$lib/content/proposta-resumo.md';
</script>

<svelte:head>
	<title>Resumo da Proposta — InfraLivre</title>
	<meta name="description" content="Versão resumida da proposta do InfraLivre para um marco jurídico do software livre no Brasil." />
	<meta property="og:title" content="Resumo da Proposta — InfraLivre" />
	<meta property="og:description" content="Versão resumida da proposta para um marco jurídico do software livre no Brasil." />
</svelte:head>

<Section>
	<PageHeader
		title="Resumo da Proposta"
		description="Uma versão curta e direta. Leitura de 1 a 2 minutos."
	/>
	<p class="text-sm text-muted-foreground">
		Quer a versão completa? <a href="/proposta" class="underline underline-offset-2 hover:text-foreground">Leia a proposta completa →</a>
	</p>
</Section>

<ProseLayout>
	<PropostaResumo />
</ProseLayout>

<CallToAction
	title="Apoie essa ideia"
	description="O marco legal do software livre precisa de apoio da sociedade para sair do papel."
	href="/apoio"
	label="Saiba como apoiar →"
/>
