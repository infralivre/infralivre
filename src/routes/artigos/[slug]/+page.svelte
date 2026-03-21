<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import ShareButtons from '$lib/components/shared/ShareButtons.svelte';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Clock from '@lucide/svelte/icons/clock';
	import User from '@lucide/svelte/icons/user';

	let { data } = $props();
	let artigo = $derived(data.artigo);
	let Content = $derived(data.content);
</script>

<svelte:head>
	<title>{artigo.title} — InfraLivre</title>
	<meta name="description" content={artigo.ogDescription} />
	<meta property="og:title" content="{artigo.title} — InfraLivre" />
	<meta property="og:description" content={artigo.ogDescription} />
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

		<div class="flex items-center justify-center gap-3 text-xs text-muted-foreground flex-wrap">
			<span class="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 font-bold uppercase tracking-wider text-sky-700 dark:border-sky-900/50 dark:bg-sky-950/30 dark:text-sky-400">
				<BookOpen class="size-3" />
				{artigo.category}
			</span>
			<span class="inline-flex items-center gap-1">
				<Clock class="size-3" />
				{artigo.readTime}
			</span>
		</div>

		<h1 class="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-950 dark:text-zinc-50">
			{artigo.title}
		</h1>
		<p class="mt-6 text-xl leading-8 text-muted-foreground">
			{artigo.description}
		</p>

		{#if artigo.authors && artigo.authors.length > 0}
			<div class="mt-8 flex items-center justify-center gap-6">
				{#each artigo.authors as author}
					<div class="flex items-center gap-3">
						{#if author.photo}
							<img
								src={author.photo}
								alt={author.name}
								class="size-10 flex-shrink-0 rounded-full object-cover border border-zinc-200 dark:border-zinc-700"
							/>
						{:else}
							<div class="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
								<User class="size-5" />
							</div>
						{/if}
						<div class="text-left">
							<p class="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{author.name}</p>
							<p class="text-xs text-muted-foreground">Autor</p>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>

	<div class="mx-auto mt-12 max-w-5xl">
		<img
			src={artigo.image}
			alt={artigo.imageAlt}
			class="w-full rounded-2xl border border-zinc-200 bg-zinc-50 object-cover shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
			width="1456"
			height="816"
			loading="eager"
		/>
	</div>
</Section>

<div class="mx-auto flex max-w-3xl justify-center px-4 pb-8">
	<ShareButtons title={artigo.title} description={artigo.ogDescription} />
</div>

<ProseLayout class="pt-0">
	<div class="prose-zinc max-w-none dark:prose-invert">
		<Content />
	</div>
</ProseLayout>

<div class="mx-auto flex max-w-3xl justify-center px-4 pb-8">
	<ShareButtons title={artigo.title} description={artigo.ogDescription} />
</div>

<CallToAction
	title={artigo.cta.title}
	description={artigo.cta.description}
	href={artigo.cta.href}
	label={artigo.cta.label}
/>
