<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import ShareButtons from '$lib/components/shared/ShareButtons.svelte';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Clock from '@lucide/svelte/icons/clock';
</script>

<svelte:head>
	<title>Artigos — InfraLivre</title>
	<meta name="description" content="Artigos educativos sobre software livre, direito digital e infraestrutura aberta. Entenda os fundamentos por trás do movimento InfraLivre." />
	<meta property="og:title" content="Artigos — InfraLivre" />
	<meta property="og:description" content="Artigos educativos sobre software livre, direito digital e infraestrutura aberta." />
</svelte:head>

<Section class="pb-10">
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-950 dark:text-zinc-50">
			Artigos
		</h1>
		<p class="mt-6 text-xl leading-8 text-muted-foreground">
			Textos fundamentais para compreender o ecossistema do software livre, seus desafios jurídicos e por que ele é infraestrutura crítica da sociedade.
		</p>
	</div>
</Section>

<Section class="pt-0">
	<div class="mx-auto max-w-4xl">
		<div class="grid gap-6">
			<!-- Artigo: Software Livre -->
			<a
				href="/artigos/software-livre"
				class="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-zinc-300 hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 sm:flex-row"
			>
				<div class="relative h-48 w-full overflow-hidden sm:h-auto sm:w-72 sm:min-h-[220px]">
					<img
						src="/images/05.webp"
						alt="Ilustração sobre software livre e código aberto"
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						loading="lazy"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent sm:bg-gradient-to-r"></div>
				</div>
				<div class="flex flex-1 flex-col justify-center p-6 sm:p-8">
					<div class="flex items-center gap-3 text-xs text-muted-foreground">
						<span class="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-2 py-0.5 font-medium text-sky-700 dark:border-sky-900/50 dark:bg-sky-950/30 dark:text-sky-400">
							Fundamentos
						</span>
						<span class="inline-flex items-center gap-1">
							<Clock class="size-3" />
							~15 min de leitura
						</span>
					</div>
					<h2 class="mt-3 text-xl font-bold text-zinc-900 transition-colors group-hover:text-sky-700 dark:text-zinc-50 dark:group-hover:text-sky-400 sm:text-2xl">
						Software Livre e de Código Aberto
					</h2>
					<p class="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
						O que é, onde está no seu dia a dia, como se organiza e por que ele é essencial para a infraestrutura digital moderna. Uma introdução completa ao ecossistema FOSS.
					</p>
					<div class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 transition-all group-hover:gap-2.5 dark:text-sky-400">
						Ler artigo
						<ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
					</div>
				</div>
			</a>
		</div>

		<p class="mt-12 text-center text-sm text-muted-foreground">
			Novos artigos serão publicados conforme o projeto avança.
		</p>
	</div>
</Section>

<CallToAction
	title="Já conhece o problema?"
	description="Software livre é infraestrutura — mas a lei brasileira ainda não reconhece isso. Entenda o risco."
	href="/problema"
	label="Entenda o Problema"
/>
