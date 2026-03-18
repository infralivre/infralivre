<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';
	import Container from '$lib/layout/Container.svelte';

	interface Props {
		id?: string;
		class?: string;
		children: Snippet;
	}

	let { id, class: className, children }: Props = $props();
</script>

<section {id} class={cn('py-16 md:py-24', className)}>
	<Container>
		{@render children()}
	</Container>
</section>
