<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import ShareButtons from '$lib/components/shared/ShareButtons.svelte';
	import { articles } from '$lib/content/artigos/index.js';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Clock from '@lucide/svelte/icons/clock';
	import User from '@lucide/svelte/icons/user';
	import Box from '@lucide/svelte/icons/box';
	import Server from '@lucide/svelte/icons/server';
	import Wifi from '@lucide/svelte/icons/wifi';
	import Cpu from '@lucide/svelte/icons/cpu';
	import Layers from '@lucide/svelte/icons/layers';

	type FilterType = 'all' | 'software' | 'service' | 'network' | 'hardware';
	let activeFilter = $state<FilterType>('all');

	let filteredArticles = $derived(
		activeFilter === 'all' 
			? articles 
			: articles.filter(a => 
					a.infrastructureType === activeFilter || 
					(activeFilter === 'software' && !a.infrastructureType)
			  )
	);

	const filters = [
		{ id: 'all', title: 'Visão Geral', icon: Layers },
		{ id: 'software', title: 'Software Aberto', icon: Box },
		{ id: 'service', title: 'Serviços Descentralizados', icon: Server },
		{ id: 'network', title: 'Redes Livres', icon: Wifi },
		{ id: 'hardware', title: 'Hardware Aberto', icon: Cpu }
	] as const;

	function getTypeConfig(type?: string) {
		switch(type) {
			case 'service': return { icon: Server, label: 'Serviço', class: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20' };
			case 'network': return { icon: Wifi, label: 'Rede', class: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/20' };
			case 'hardware': return { icon: Cpu, label: 'Hardware', class: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20' };
			case 'software':
			default: return { icon: Box, label: 'Software', class: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20' };
		}
	}
</script>

<svelte:head>
	<title>Artigos — InfraLivre</title>
	<meta name="description" content="Artigos educativos sobre infraestrutura livre e direito digital. Entenda os fundamentos por trás do movimento InfraLivre." />
	<meta property="og:title" content="Artigos — InfraLivre" />
	<meta property="og:description" content="Artigos educativos sobre infraestrutura livre e direito digital." />
</svelte:head>

<Section class="pb-10">
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-950 dark:text-zinc-50">
			Artigos
		</h1>
		<p class="mt-6 text-xl leading-8 text-muted-foreground">
			Textos fundamentais para compreender o ecossistema da infraestrutura livre, seus desafios jurídicos e por que ela é infraestrutura crítica da sociedade.
		</p>
	</div>

	<div class="mt-8 flex justify-center">
		<ShareButtons title="Artigos — InfraLivre" description="Artigos educativos sobre infraestrutura livre e direito digital." />
	</div>
</Section>

<Section class="pt-0">
	<div class="mx-auto max-w-5xl">
		<!-- Navegação Igualitária (Filtros) -->
		<div class="mb-12 flex flex-wrap justify-center gap-3">
			{#each filters as { id, title, icon: Icon }}
				<button
					onclick={() => activeFilter = id}
					class="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all
					{activeFilter === id 
						? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 shadow-md scale-105' 
						: 'border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50'}"
				>
					<Icon class="size-4" />
					{title}
				</button>
			{/each}
		</div>

		<!-- Grade Unificada de Artigos -->
		<div class="grid gap-6 md:grid-cols-2">
			{#each filteredArticles as article (article.slug)}
				{@const typeConfig = getTypeConfig(article.infrastructureType)}
				{@const Icon = typeConfig.icon}
				<a
					href="/artigos/{article.slug}"
					class="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-zinc-300 hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
				>
					<div class="relative h-48 w-full overflow-hidden sm:h-56">
						<img
							src={article.image}
							alt={article.imageAlt}
							class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent"></div>
						
						<!-- Badge do Tipo de Infraestrutura -->
						<div class="absolute left-4 top-4">
							<span class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold backdrop-blur-md {typeConfig.class}">
								<Icon class="size-3.5" />
								{typeConfig.label}
							</span>
						</div>
					</div>

					<div class="flex flex-1 flex-col p-6">
						<div class="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
							{#if article.authors && article.authors.length > 0}
								<span class="inline-flex items-center gap-1.5 font-medium text-zinc-700 dark:text-zinc-300">
									{#each article.authors as author}
										{#if author.photo}
											<img src={author.photo} alt={author.name} class="size-5 rounded-full object-cover ring-1 ring-zinc-200 dark:ring-zinc-800" />
										{:else}
											<div class="flex size-5 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
												<User class="size-3" />
											</div>
										{/if}
									{/each}
									{article.authors.map(a => a.name).join(', ')}
								</span>
							{/if}
							<span class="ml-auto inline-flex items-center gap-1">
								<Clock class="size-3" />
								{article.readTime}
							</span>
						</div>

						<h3 class="mb-2 text-xl font-bold text-zinc-900 transition-colors group-hover:text-primary dark:text-zinc-50">
							{article.title}
						</h3>
						
						<p class="mb-6 text-sm leading-relaxed text-muted-foreground line-clamp-3">
							{article.description}
						</p>

						<div class="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
							Ler o artigo completo
							<ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
						</div>
					</div>
				</a>
			{/each}
		</div>

		<!-- Estado Vazio para Filtro Específico -->
		{#if filteredArticles.length === 0}
			{@const currentFilter = filters.find(f => f.id === activeFilter)}
			<div class="mx-auto mt-12 flex max-w-lg flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-300 bg-zinc-50/50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/20 animate-in fade-in zoom-in duration-300">
				{#if currentFilter}
					{@const FilterIcon = currentFilter.icon}
					<div class="mb-4 flex size-16 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
						<FilterIcon class="size-8" />
					</div>
					<h3 class="text-xl font-bold text-zinc-900 dark:text-zinc-100">
						Construindo {currentFilter.title}...
					</h3>
					<p class="mt-3 text-muted-foreground">
						Ainda não publicamos artigos específicos sobre este pilar da infraestrutura livre, mas ele é parte essencial do nosso trabalho. Em breve teremos novidades.
					</p>
					<button onclick={() => activeFilter = 'all'} class="mt-6 text-sm font-medium text-primary hover:underline">
						Ver todos os artigos
					</button>
				{/if}
			</div>
		{/if}
	</div>
</Section>

<CallToAction
	title="Percebe o problema?"
	description="A infraestrutura livre é complexa e vital — mas a lei brasileira ainda não reconhece isso. Entenda o risco."
	href="/problema"
	label="Entenda o Problema"
	class="border-t border-zinc-800"
/>
