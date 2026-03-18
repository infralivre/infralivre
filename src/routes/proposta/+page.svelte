<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import PageHeader from '$lib/components/shared/PageHeader.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import PropostaContent from '$lib/content/proposta.md';
</script>

<svelte:head>
	<title>A Proposta — InfraLivre</title>
	<meta name="description" content="Conheça a proposta do InfraLivre para um marco legal do software livre no Brasil." />
</svelte:head>

<Section>
	<PageHeader
		title="A Proposta"
		description="Um marco legal para garantir a adoção sustentável de software livre na administração pública brasileira."
	/>
</Section>

<ProseLayout>
	<PropostaContent />
</ProseLayout>

<CallToAction
	title="Apoie essa ideia"
	description="O marco legal do software livre precisa de apoio da sociedade para sair do papel."
	href="/apoio"
	label="Saiba como apoiar →"
/>
