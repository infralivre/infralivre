<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import PageHeader from '$lib/components/shared/PageHeader.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import ManifestoContent from '$lib/content/manifesto.md';
</script>

<svelte:head>
	<title>Manifesto — InfraLivre</title>
	<meta name="description" content="O manifesto do InfraLivre: por que o Brasil precisa de um marco jurídico adequado para o software livre." />
	<meta property="og:title" content="Manifesto — InfraLivre" />
	<meta property="og:description" content="Por que o Brasil precisa de um marco jurídico adequado para o software livre." />
</svelte:head>

<Section>
	<PageHeader
		title="Manifesto"
		description="Por que o Brasil precisa de um marco jurídico adequado para o software livre."
	/>
	<p class="text-sm text-muted-foreground">
		Versão resumida disponível: <a href="/manifesto/resumo" class="underline underline-offset-2 hover:text-foreground">Leia o resumo →</a>
	</p>
	<img
		src="/images/04.webp"
		alt="Ilustração mostrando um labirinto complexo representando o emaranhado jurídico que o software livre enfrenta no Brasil, simbolizando os desafios legais e burocráticos que dificultam o desenvolvimento e uso do software livre."
		class="mt-8 w-full rounded-lg border border-border"
		width="1456"
		height="816"
		loading="eager"
	/>
</Section>

<ProseLayout>
	<ManifestoContent />
</ProseLayout>

<CallToAction
	title="Entenda o contexto"
	description="Veja em detalhes o problema jurídico que afeta o software livre no Brasil."
	href="/problema"
	label="O problema →"
/>
