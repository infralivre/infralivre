<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import ShareButtons from '$lib/components/shared/ShareButtons.svelte';
	import ManifestoResumo from '$lib/content/manifesto-resumo.md';
	import FileText from '@lucide/svelte/icons/file-text';
	import Zap from '@lucide/svelte/icons/zap';
</script>

<svelte:head>
	<title>Resumo do Manifesto — InfraLivre</title>
	<meta name="description" content="Versão resumida do manifesto InfraLivre sobre a necessidade de um marco jurídico para a infraestrutura livre no Brasil." />
	<meta property="og:title" content="Resumo do Manifesto — InfraLivre" />
	<meta property="og:description" content="Versão resumida do manifesto sobre a necessidade de um marco jurídico para a infraestrutura livre no Brasil." />
</svelte:head>

<Section class="pb-10">
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-950 dark:text-zinc-50">
			O Manifesto em 1 minuto
		</h1>
		<p class="mt-6 text-xl leading-8 text-muted-foreground">
			Os pontos cruciais da nossa carta aberta à sociedade. A essência do porquê precisamos agir agora para proteger a inovação brasileira.
		</p>
		
		<!-- Controle de Versão (Toggle) Invertido -->
		<div class="mx-auto mt-10 flex max-w-fit items-center rounded-full border border-zinc-200 bg-zinc-100/50 p-1.5 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/50">
			<a 
				href="/manifesto" 
				class="group flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
			>
				<FileText class="size-4 transition-transform group-hover:scale-110 group-hover:text-primary" />
				Leitura Completa
			</a>
			<a 
				href="/manifesto/resumo" 
				class="group flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition-all dark:bg-zinc-800 dark:text-zinc-50"
			>
				<Zap class="size-4 text-amber-500 transition-transform group-hover:scale-110" />
				Resumo (1 min)
			</a>
		</div>
	</div>
</Section>

<div class="mx-auto flex max-w-3xl justify-center px-4 pb-8">
	<ShareButtons title="Manifesto InfraLivre (Resumo)" description="Os pontos cruciais da carta aberta à sociedade, em 1 minuto." />
</div>

<ProseLayout class="pt-0">
	<div class="prose-zinc max-w-none rounded-2xl border border-amber-500/20 bg-amber-50/50 p-6 sm:p-10 dark:border-amber-500/10 dark:bg-amber-950/10 dark:prose-invert">
		<ManifestoResumo />
	</div>
</ProseLayout>

<div class="mx-auto flex max-w-3xl justify-center px-4 pb-8">
	<ShareButtons title="Manifesto InfraLivre (Resumo)" description="Os pontos cruciais da carta aberta à sociedade, em 1 minuto." />
</div>

<CallToAction
	title="A raiz da questão"
	description="O manifesto não é um lamento, é um chamado à realidade técnica. Entenda cada ponto de risco do atual sistema."
	href="/problema"
	label="Ler a Análise do Problema"
/>
