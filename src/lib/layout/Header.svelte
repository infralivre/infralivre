<script lang="ts">
	import { page } from '$app/state';
	import Container from './Container.svelte';
	import ThemeToggle from '$lib/components/shared/ThemeToggle.svelte';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import Github from '@lucide/svelte/icons/github';
	import Star from '@lucide/svelte/icons/star';

	const navLinks = [
		{ href: '/', label: 'Início' },
		{ href: '/software-livre', label: 'Software Livre' },
		{ href: '/manifesto', label: 'Manifesto' },
		{ href: '/problema', label: 'Problema' },
		{ href: '/proposta', label: 'Proposta' },
		{ href: '/apoio', label: 'Apoio' }
	] as const;

	let mobileOpen = $state(false);
	let menuRef = $state<HTMLElement | null>(null);
	let toggleRef = $state<HTMLButtonElement | null>(null);

	function isActive(href: string): boolean {
		const path = page.url.pathname;
		return href === '/' ? path === '/' : path.startsWith(href);
	}

	function closeMobile() {
		mobileOpen = false;
		toggleRef?.focus();
	}

	function handleMenuKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			closeMobile();
		}
	}
</script>

<header class="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
	<Container>
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="text-lg font-semibold tracking-tight">InfraLivre</a>

			<div class="flex items-center gap-1">
				<!-- Desktop nav -->
				<nav class="hidden items-center gap-1 md:flex">
					{#each navLinks as { href, label }}
						<a
							{href}
							aria-current={isActive(href) ? 'page' : undefined}
							class="rounded-md px-3 py-2 text-sm font-medium transition-colors
								{isActive(href)
								? 'bg-accent text-accent-foreground'
								: 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}"
						>
							{label}
						</a>
					{/each}
				</nav>

				<!-- GitHub CTA -->
				<a
					href="https://github.com/infralivre/infralivre"
					target="_blank"
					rel="noopener"
					class="ml-2 hidden items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-all hover:border-foreground/20 hover:shadow-md md:inline-flex"
				>
					<Github class="size-3.5" />
					<span>Apoie com uma</span>
					<Star class="size-3 fill-amber-400 text-amber-400" />
				</a>

				<!-- Theme toggle -->
				<ThemeToggle />

				<!-- Mobile toggle -->
				<button
					bind:this={toggleRef}
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground md:hidden"
					onclick={() => (mobileOpen = !mobileOpen)}
					aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
					aria-expanded={mobileOpen}
					aria-controls="mobile-menu"
				>
					{#if mobileOpen}
						<X class="size-5" />
					{:else}
						<Menu class="size-5" />
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile nav -->
		{#if mobileOpen}
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<nav
				id="mobile-menu"
				bind:this={menuRef}
				onkeydown={handleMenuKeydown}
				class="border-t border-border pb-4 pt-2 md:hidden"
			>
				{#each navLinks as { href, label }}
					<a
						{href}
						onclick={closeMobile}
						aria-current={isActive(href) ? 'page' : undefined}
						class="block rounded-md px-3 py-2 text-sm font-medium transition-colors
							{isActive(href)
							? 'bg-accent text-accent-foreground'
							: 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}"
					>
						{label}
					</a>
				{/each}
				<a
					href="https://github.com/infralivre/infralivre"
					target="_blank"
					rel="noopener"
					onclick={closeMobile}
					class="mt-2 flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-all hover:border-foreground/20 hover:shadow-sm"
				>
					<Github class="size-4" />
					<span>Apoie com uma</span>
					<Star class="size-3.5 fill-amber-400 text-amber-400" />
					<span>no GitHub</span>
				</a>
			</nav>
		{/if}
	</Container>
</header>
