<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import Container from '$lib/layout/Container.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Network from '@lucide/svelte/icons/network';

	interface Props {
		title: string;
		description?: string;
		href?: string;
		label?: string;
		class?: string;
		children?: import('svelte').Snippet;
	}

	let { title, description, href, label, class: className, children }: Props = $props();
</script>

<section class={cn('relative overflow-hidden py-24 md:py-32', className)}>
	<!-- Fundo escuro com gradiente sutil e borda luminescente -->
	<div class="pointer-events-none absolute inset-0 bg-zinc-950">
		<div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
	</div>

	<Container class="relative z-10">
		<div class="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
			<div class="mb-6 flex size-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-inner backdrop-blur-sm">
				<Network class="size-6 text-zinc-300" />
			</div>
			
			<span class="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary/80 dark:text-primary">
				A Infraestrutura é Viva. Faça parte dela.
			</span>

			<h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
				{title}
			</h2>
			
			{#if description}
				<p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
					{description}
				</p>
			{/if}
			
			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
				{#if children}
					{@render children()}
				{:else if href && label}
					<Button {href} size="lg" class="h-12 w-full gap-2 rounded-full px-8 text-base shadow-xl sm:w-auto">
						{label}
						<ArrowRight class="size-4" />
					</Button>
				{/if}
				{#if !children}
				<p class="mt-4 text-xs font-medium text-zinc-500 sm:ml-4 sm:mt-0">
					A sociedade depende da sua ação.
				</p>
				{/if}
			</div>
			{#if children}
				<p class="mt-8 text-xs font-medium text-zinc-500">
					A sociedade depende da sua ação.
				</p>
			{/if}
		</div>
	</Container>
</section>
