<script lang="ts">
	import { cn } from '$lib/utils.js';

	interface Props {
		title: string;
		description?: string;
		class?: string;
	}

	let { title, description, class: className }: Props = $props();
</script>

<div class={cn('pb-8 md:pb-12', className)}>
	<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
	{#if description}
		<p class="mt-3 max-w-2xl text-lg text-muted-foreground">{description}</p>
	{/if}
</div>
