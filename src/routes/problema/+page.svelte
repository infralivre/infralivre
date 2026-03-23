<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import ShareButtons from '$lib/components/shared/ShareButtons.svelte';
	import ProblemContent from '$lib/content/problem-content.md';
	import AlertTriangle from '@lucide/svelte/icons/alert-triangle';
	import Zap from '@lucide/svelte/icons/zap';
	import FileText from '@lucide/svelte/icons/file-text';
</script>

<svelte:head>
	<title>O Problema — InfraLivre</title>
	<meta name="description" content="Entenda o problema jurídico estrutural que afeta a infraestrutura livre no Brasil e por que precisamos de um marco jurídico adequado." />
	<meta property="og:title" content="O Problema — InfraLivre" />
	<meta property="og:description" content="O problema jurídico estrutural que afeta a infraestrutura livre no Brasil." />
</svelte:head>

<Section class="pb-10">
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-950 dark:text-zinc-50">
			Regulando o alvo errado
		</h1>
		<p class="mt-6 text-xl leading-8 text-muted-foreground">
			Leis construídas para megacorporações centralizadas estão sendo aplicadas de forma indiscriminada contra ecossistemas abertos, colocando em risco não apenas indivíduos, mas a resiliência da nossa infraestrutura.
		</p>
		
		<!-- Controle de Versão (Toggle) -->
		<div class="mx-auto mt-10 flex max-w-fit items-center rounded-full border border-zinc-200 bg-zinc-100/50 p-1.5 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/50">
			<a 
				href="/problema" 
				class="group flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition-all dark:bg-zinc-800 dark:text-zinc-50"
			>
				<FileText class="size-4 text-red-600 transition-transform group-hover:scale-110 dark:text-red-400" />
				Análise Completa
			</a>
			<a 
				href="/problema/resumo" 
				class="group flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
			>
				<Zap class="size-4 transition-transform group-hover:scale-110 group-hover:text-amber-500" />
				Resumo (1 min)
			</a>
		</div>
	</div>

	<div class="mx-auto mt-12 max-w-5xl">
		<img
			src="/images/03.webp"
			alt="Ilustração mostrando um labirinto complexo representando o emaranhado jurídico que a infraestrutura livre enfrenta no Brasil."
			class="w-full rounded-2xl border border-zinc-200 bg-zinc-50 object-cover shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
			width="1456"
			height="816"
			loading="eager"
		/>
	</div>
</Section>

<div class="mx-auto flex max-w-3xl justify-center px-4 pb-8">
	<ShareButtons title="O Problema" description="Leis construídas para megacorporações sendo aplicadas contra ecossistemas abertos no Brasil." />
</div>

<ProseLayout class="pt-0">
	<div class="prose-zinc max-w-none dark:prose-invert">
			<ProblemContent />
	</div>
</ProseLayout>

<div class="mx-auto flex max-w-3xl justify-center px-4 pb-8">
	<ShareButtons title="O Problema" description="Leis construídas para megacorporações sendo aplicadas contra ecossistemas abertos no Brasil." />
</div>

<CallToAction
	title="Temos uma solução viável"
	description="Não basta reclamar, é preciso construir. Conheça as bases estruturais do marco legal que desenhamos para solucionar essa lacuna."
	href="/proposta"
	label="Conheça a Proposta de Lei"
/>
