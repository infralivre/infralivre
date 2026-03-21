<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import ShareButtons from '$lib/components/shared/ShareButtons.svelte';
	import ProblemaResumo from '$lib/content/problema-resumo.md';
	import Zap from '@lucide/svelte/icons/zap';
	import FileText from '@lucide/svelte/icons/file-text';
</script>

<svelte:head>
	<title>O Problema (Resumo) — InfraLivre</title>
	<meta name="description" content="Leia em 1 minuto o resumo de por que a atual legislação brasileira é um risco ao ecossistema da Infraestrutura Livre." />
	<meta property="og:title" content="O Problema (Resumo) — InfraLivre" />
</svelte:head>

<Section class="pb-8">
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-950 dark:text-zinc-50">
			O Risco em 1 Minuto
		</h1>
		<p class="mt-6 text-xl leading-8 text-muted-foreground">
			Leis corporativas esmagando criadores individuais. Um resumo do dilema existencial para a neutralidade tecnológica e a inovação no Brasil.
		</p>
		
		<!-- Controle de Versão (Toggle) -->
		<div class="mx-auto mt-10 flex max-w-fit items-center rounded-full border border-zinc-200 bg-zinc-100/50 p-1.5 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/50">
			<a 
				href="/problema" 
				class="group flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
			>
				<FileText class="size-4 transition-transform group-hover:scale-110 group-hover:text-red-600 dark:group-hover:text-red-400" />
				Análise Completa
			</a>
			<a 
				href="/problema/resumo" 
				class="group flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition-all dark:bg-zinc-800 dark:text-zinc-50"
			>
				<Zap class="size-4 text-amber-500 transition-transform group-hover:scale-110" />
				Resumo (1 min)
			</a>
		</div>
	</div>
</Section>

<div class="mx-auto flex max-w-3xl justify-center px-4 pb-8">
	<ShareButtons title="O Problema (Resumo)" description="Leis corporativas esmagando criadores individuais. Um resumo do dilema existencial da infraestrutura livre." />
</div>

<ProseLayout class="pt-2">
	<div class="prose-zinc max-w-none rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 dark:prose-invert sm:p-12">
		<ProblemaResumo />
	</div>
</ProseLayout>

<div class="mx-auto flex max-w-3xl justify-center px-4 pb-8">
	<ShareButtons title="O Problema (Resumo)" description="Leis corporativas esmagando criadores individuais. Um resumo do dilema existencial da infraestrutura livre." />
</div>

<CallToAction
	title="Temos uma proposta"
	description="Conheça o marco jurídico que o InfraLivre defende para resolver esses problemas."
	href="/proposta"
	label="Veja a proposta →"
/>
