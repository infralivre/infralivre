<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';
	import Container from '$lib/layout/Container.svelte';

	interface Props {
		title: string;
		subtitle?: string;
		class?: string;
		children?: Snippet;
	}

	let { title, subtitle, class: className, children }: Props = $props();
</script>

<section class={cn('py-20 md:py-32', className)}>
	<Container class="flex flex-col items-center text-center">
		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{title}</h1>
		{#if subtitle}
			<p class="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">{subtitle}</p>
		{/if}
		{#if children}
			<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
				{@render children()}
			</div>
		{/if}
	</Container>
</section>
