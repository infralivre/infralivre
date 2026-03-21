<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import SoftwareLivreContent from '$lib/content/artigos/software-livre/software-livre.md';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Clock from '@lucide/svelte/icons/clock';
</script>

<svelte:head>
	<title>Software Livre e de Código Aberto — InfraLivre</title>
	<meta name="description" content="Entenda o que é software livre e de código aberto (FOSS), como ele funciona, onde está presente no dia a dia e por que ele é essencial para a sociedade." />
	<meta property="og:title" content="Software Livre e de Código Aberto — InfraLivre" />
	<meta property="og:description" content="O que é software livre, como funciona e por que é essencial para a infraestrutura digital moderna." />
</svelte:head>

<Section class="pb-10">
	<div class="mx-auto max-w-3xl text-center">
		<a
			href="/artigos"
			class="group mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
		>
			<ArrowLeft class="size-3.5 transition-transform group-hover:-translate-x-0.5" />
			Todos os artigos
		</a>

		<div class="flex items-center justify-center gap-3 text-xs text-muted-foreground">
			<span class="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 font-bold uppercase tracking-wider text-sky-700 dark:border-sky-900/50 dark:bg-sky-950/30 dark:text-sky-400">
				<BookOpen class="size-3" />
				Fundamentos
			</span>
			<span class="inline-flex items-center gap-1">
				<Clock class="size-3" />
				~15 min de leitura
			</span>
		</div>

		<h1 class="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-950 dark:text-zinc-50">
			Software Livre e de Código Aberto
		</h1>
		<p class="mt-6 text-xl leading-8 text-muted-foreground">
			Uma introdução ao modelo de desenvolvimento que sustenta a infraestrutura digital do mundo — o que é, onde está, como se organiza e por que importa.
		</p>
	</div>

	<div class="mx-auto mt-12 max-w-5xl">
		<img
			src="/images/05.webp"
			alt="Ilustração representando o ecossistema colaborativo do software livre e de código aberto."
			class="w-full rounded-2xl border border-zinc-200 bg-zinc-50 object-cover shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
			width="1456"
			height="816"
			loading="eager"
		/>
	</div>
</Section>

<ProseLayout class="pt-0">
	<div class="prose-zinc max-w-none dark:prose-invert">
		<SoftwareLivreContent />
	</div>
</ProseLayout>

<CallToAction
	title="E qual é o problema?"
	description="Apesar de sua importância, o software livre não possui um enquadramento jurídico adequado no Brasil. Entenda o risco."
	href="/problema"
	label="Entenda o Problema"
/>
