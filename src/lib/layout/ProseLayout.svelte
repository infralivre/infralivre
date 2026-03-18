<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';
	import Container from '$lib/layout/Container.svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className, children }: Props = $props();
</script>

<Container class={cn('py-8 md:py-12', className)}>
	<div class="prose">
		{@render children()}
	</div>
</Container>
