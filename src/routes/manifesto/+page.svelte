<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import ShareButtons from '$lib/components/shared/ShareButtons.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import ManifestoContent from '$lib/content/manifesto-content.md';
	import FileText from '@lucide/svelte/icons/file-text';
	import Zap from '@lucide/svelte/icons/zap';
</script>

<svelte:head>
	<title>Manifesto — InfraLivre</title>
	<meta name="description" content="O manifesto do InfraLivre: por que o Brasil precisa de um marco jurídico adequado para a infraestrutura livre." />
	<meta property="og:title" content="Manifesto — InfraLivre" />
	<meta property="og:description" content="Por que o Brasil precisa de um marco jurídico adequado para a infraestrutura livre." />
</svelte:head>

<Section class="pb-10">
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-950 dark:text-zinc-50">
			Manifesto InfraLivre
		</h1>
		<p class="mt-6 text-xl leading-8 text-muted-foreground">
			Por que o ordenamento jurídico atual asfixia quem constrói e mantém a verdadeira infraestrutura digital do Brasil? Uma carta aberta à sociedade e aos legisladores.
		</p>
		
		<!-- Controle de Versão (Toggle) -->
		<div class="mx-auto mt-10 flex max-w-fit items-center rounded-full border border-zinc-200 bg-zinc-100/50 p-1.5 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/50">
			<a 
				href="/manifesto" 
				class="group flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition-all dark:bg-zinc-800 dark:text-zinc-50"
			>
				<FileText class="size-4 text-primary transition-transform group-hover:scale-110" />
				Leitura Completa
			</a>
			<a 
				href="/manifesto/resumo" 
				class="group flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
			>
				<Zap class="size-4 transition-transform group-hover:scale-110 group-hover:text-amber-500" />
				Resumo (1 min)
			</a>
		</div>
	</div>

	<div class="mx-auto mt-12 max-w-5xl">
		<img
			src="/images/04.webp"
			alt="Ilustração mostrando um labirinto complexo representando o emaranhado jurídico que a infraestrutura livre enfrenta no Brasil."
			class="w-full rounded-2xl border border-zinc-200 bg-zinc-50 object-cover shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
			width="1456"
			height="816"
			loading="eager"
		/>
	</div>
</Section>

<div class="mx-auto flex max-w-3xl justify-center px-4 pb-8">
	<ShareButtons title="Manifesto InfraLivre" description="Por que o ordenamento jurídico atual asfixia quem constrói a infraestrutura digital do Brasil." />
</div>

<ProseLayout class="pt-0">
	<div class="prose-zinc max-w-none dark:prose-invert">
		<ManifestoContent />
	</div>
</ProseLayout>

<div class="mx-auto flex max-w-3xl justify-center px-4 pb-8">
	<ShareButtons title="Manifesto InfraLivre" description="Por que o ordenamento jurídico atual asfixia quem constrói a infraestrutura digital do Brasil." />
</div>

<CallToAction
	title="A raiz da questão"
	description="O manifesto não é um lamento, é um chamado à realidade técnica. Entenda cada ponto de risco do atual sistema."
	href="/problema"
	label="Ler a Análise do Problema"
/>
