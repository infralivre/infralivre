<script lang="ts">
	import { page } from '$app/state';
	import Container from './Container.svelte';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';

	const navLinks = [
		{ href: '/', label: 'Início' },
		{ href: '/manifesto', label: 'Manifesto' },
		{ href: '/problema', label: 'Problema' },
		{ href: '/proposta', label: 'Proposta' },
		{ href: '/apoio', label: 'Apoio' }
	] as const;

	let mobileOpen = $state(false);

	function isActive(href: string): boolean {
		const path = page.url.pathname;
		return href === '/' ? path === '/' : path.startsWith(href);
	}

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<header class="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
	<Container>
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="text-lg font-bold tracking-tight">InfraLivre</a>

			<!-- Desktop nav -->
			<nav class="hidden items-center gap-1 md:flex">
				{#each navLinks as { href, label }}
					<a
						{href}
						class="rounded-md px-3 py-2 text-sm font-medium transition-colors
							{isActive(href)
							? 'bg-accent text-accent-foreground'
							: 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}"
					>
						{label}
					</a>
				{/each}
			</nav>

			<!-- Mobile toggle -->
			<button
				type="button"
				class="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground md:hidden"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
				aria-expanded={mobileOpen}
			>
				{#if mobileOpen}
					<X class="size-5" />
				{:else}
					<Menu class="size-5" />
				{/if}
			</button>
		</div>

		<!-- Mobile nav -->
		{#if mobileOpen}
			<nav class="border-t border-border pb-4 pt-2 md:hidden">
				{#each navLinks as { href, label }}
					<a
						{href}
						onclick={closeMobile}
						class="block rounded-md px-3 py-2 text-sm font-medium transition-colors
							{isActive(href)
							? 'bg-accent text-accent-foreground'
							: 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}"
					>
						{label}
					</a>
				{/each}
			</nav>
		{/if}
	</Container>
</header>
