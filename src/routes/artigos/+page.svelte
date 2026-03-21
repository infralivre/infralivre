<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import ShareButtons from '$lib/components/shared/ShareButtons.svelte';
	import { artigos } from '$lib/content/artigos/index.js';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Clock from '@lucide/svelte/icons/clock';
	import User from '@lucide/svelte/icons/user';
	import Box from '@lucide/svelte/icons/box';
	import Server from '@lucide/svelte/icons/server';
	import Wifi from '@lucide/svelte/icons/wifi';
	import Cpu from '@lucide/svelte/icons/cpu';

	const groups = [
		{
			id: 'software',
			title: 'Software Livre',
			icon: Box,
			description: 'Aplicações, bibliotecas e sistemas operacionais de código aberto.',
			items: artigos.filter(a => a.infrastructureType === 'software' || !a.infrastructureType)
		},
		{
			id: 'serviço',
			title: 'Serviços Abertos',
			icon: Server,
			description: 'Plataformas descentralizadas, federadas e serviços de infraestrutura pública.',
			items: artigos.filter(a => a.infrastructureType === 'serviço')
		},
		{
			id: 'rede',
			title: 'Rede Livre',
			icon: Wifi,
			description: 'Protocolos distribuídos e provedores comunitários de conexão.',
			items: artigos.filter(a => a.infrastructureType === 'rede')
		},
		{
			id: 'hardware',
			title: 'Hardware Aberto',
			icon: Cpu,
			description: 'Desenhos e especificações físicas abertas para reprodução em máquina.',
			items: artigos.filter(a => a.infrastructureType === 'hardware')
		}
	];
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
	<div class="mx-auto max-w-4xl space-y-16">
		{#each groups as { id, title, icon: Icon, description, items } (id)}
			<div>
				<div class="mb-6 flex items-center gap-3 border-b border-zinc-200 pb-4 dark:border-zinc-800">
					<div class="flex size-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
						<Icon class="size-5" />
					</div>
					<div>
						<h2 class="text-2xl font-bold tracking-tight">{title}</h2>
						<p class="text-sm text-muted-foreground">{description}</p>
					</div>
				</div>

				{#if items.length > 0}
					<div class="grid gap-6">
						{#each items as artigo (artigo.slug)}
							<a
								href="/artigos/{artigo.slug}"
								class="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-zinc-300 hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 sm:flex-row"
							>
								<div class="relative h-48 w-full overflow-hidden sm:h-auto sm:w-72 sm:min-h-[220px]">
									<img
										src={artigo.image}
										alt={artigo.imageAlt}
										class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										loading="lazy"
									/>
									<div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent sm:bg-gradient-to-r"></div>
								</div>
								<div class="flex flex-1 flex-col justify-center p-6 sm:p-8">
									<div class="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
										<span class="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-2 py-0.5 font-medium text-sky-700 dark:border-sky-900/50 dark:bg-sky-950/30 dark:text-sky-400">
											{artigo.category}
										</span>
										{#if artigo.authors && artigo.authors.length > 0}
											<span class="inline-flex items-center gap-1.5">
												{#each artigo.authors as author}
													{#if author.photo}
														<img src={author.photo} alt={author.name} class="size-4 rounded-full object-cover" />
													{:else}
														<User class="size-3" />
													{/if}
												{/each}
												{artigo.authors.map(a => a.name).join(', ')}
											</span>
										{/if}
										<span class="inline-flex items-center gap-1">
											<Clock class="size-3" />
											{artigo.readTime}
										</span>
									</div>
									<h3 class="mt-3 text-xl font-bold text-zinc-900 transition-colors group-hover:text-sky-700 dark:text-zinc-50 dark:group-hover:text-sky-400 sm:text-2xl">
										{artigo.title}
									</h3>
									<p class="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
										{artigo.description}
									</p>
									<div class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 transition-all group-hover:gap-2.5 dark:text-sky-400">
										Ler artigo
										<ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
									</div>
								</div>
							</a>
						{/each}
					</div>
				{:else}
					<div class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/50 py-12 text-center dark:border-zinc-800 dark:bg-zinc-900/20">
						<Icon class="mb-3 size-8 text-muted-foreground/50" />
						<h3 class="text-lg font-medium text-zinc-900 dark:text-zinc-100">Nenhum artigo disponível ainda</h3>
						<p class="mt-1 text-sm text-muted-foreground max-w-[250px] mx-auto">Em breve publicaremos materiais sobre {title.toLowerCase()}.</p>
					</div>
				{/if}
			</div>
		{/each}

		<p class="mt-12 text-center text-sm text-muted-foreground">
			Novos artigos e categorias serão publicados conforme o projeto avança.
		</p>
	</div>
</Section>

<CallToAction
	title="Já conhece o problema?"
	description="Software livre é infraestrutura — mas a lei brasileira ainda não reconhece isso. Entenda o risco."
	href="/problema"
	label="Entenda o Problema"
/>
