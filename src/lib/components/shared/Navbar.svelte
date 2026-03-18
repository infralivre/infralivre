<script lang="ts">
	import { page } from '$app/state';
	import { cn } from '$lib/utils.js';

	interface NavItem {
		href: string;
		label: string;
	}

	interface Props {
		items: readonly NavItem[];
		class?: string;
		onNavigate?: () => void;
	}

	let { items, class: className, onNavigate }: Props = $props();

	function isActive(href: string): boolean {
		const path = page.url.pathname;
		return href === '/' ? path === '/' : path.startsWith(href);
	}
</script>

<nav class={cn('flex items-center gap-1', className)}>
	{#each items as { href, label }}
		<a
			{href}
			onclick={onNavigate}
			class="rounded-md px-3 py-2 text-sm font-medium transition-colors
				{isActive(href)
				? 'bg-accent text-accent-foreground'
				: 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}"
		>
			{label}
		</a>
	{/each}
</nav>
