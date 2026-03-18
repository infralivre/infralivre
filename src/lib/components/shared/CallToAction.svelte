<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import Container from '$lib/layout/Container.svelte';

	interface Props {
		title: string;
		description?: string;
		href: string;
		label: string;
		class?: string;
	}

	let { title, description, href, label, class: className }: Props = $props();
</script>

<section class={cn('py-16 md:py-24', className)}>
	<Container>
		<div class="rounded-lg border border-border bg-muted p-8 text-center md:p-12">
			<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
			{#if description}
				<p class="mx-auto mt-3 max-w-xl text-muted-foreground">{description}</p>
			{/if}
			<div class="mt-6">
				<Button href={href} variant="default" size="lg">{label}</Button>
			</div>
		</div>
	</Container>
</section>
