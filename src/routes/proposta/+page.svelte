<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import PageHeader from '$lib/components/shared/PageHeader.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import PropostaContent from '$lib/content/proposta.md';
</script>

<svelte:head>
	<title>A Proposta — InfraLivre</title>
	<meta name="description" content="Conheça a proposta do InfraLivre: um marco jurídico com seis pilares para proteger o software livre no Brasil." />
	<meta property="og:title" content="A Proposta — InfraLivre" />
	<meta property="og:description" content="Um marco jurídico com seis pilares para proteger o software livre no Brasil." />
</svelte:head>

<Section>
	<PageHeader
		title="A Proposta"
		description="Um marco jurídico para garantir segurança, previsibilidade e sustentabilidade do software livre no Brasil."
	/>
	<p class="text-sm text-muted-foreground">
		Versão resumida disponível: <a href="/proposta/resumo" class="underline underline-offset-2 hover:text-foreground">Leia o resumo →</a>
	</p>
	<img
		src="/images/06.webp"
		alt="Ilustração mostrando diversas pessoas colaborando em projetos de software livre e de código aberto, representando a comunidade global de desenvolvedores e usuários que contribuem para o ecossistema do software livre."
		class="mt-8 w-full rounded-lg border border-border"
		width="1456"
		height="816"
		loading="eager"
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
