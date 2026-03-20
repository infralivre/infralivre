<script lang="ts">
	import { page } from '$app/state';
	import Container from './Container.svelte';
	import ThemeToggle from '$lib/components/shared/ThemeToggle.svelte';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import Github from '@lucide/svelte/icons/github';
	import Star from '@lucide/svelte/icons/star';
	import Blocks from '@lucide/svelte/icons/blocks'; // Importando ícone de marca

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

<header class="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md transition-colors dark:border-zinc-800/80 dark:bg-zinc-950/80" style="view-transition-name: site-header;">
	<Container>
		<div class="flex h-16 items-center justify-between">
			<!-- Logo Repaginada -->
			<a href="/" class="group flex items-center gap-2.5 text-lg font-bold tracking-tight transition-colors hover:text-primary">
				<div class="flex size-8 items-center justify-center rounded-lg bg-zinc-900 text-zinc-50 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-lg dark:bg-zinc-100 dark:text-zinc-900">
					<Blocks class="size-4" />
				</div>
				<span class="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent dark:from-white dark:to-zinc-400">
					InfraLivre
				</span>
			</a>

			<div class="flex items-center gap-1 md:gap-2">
				<!-- Desktop nav -->
				<nav class="hidden items-center gap-1 md:flex">
					{#each navLinks as { href, label }}
						<a
							{href}
							aria-current={isActive(href) ? 'page' : undefined}
							class="relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50
								{isActive(href)
								? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 font-semibold'
								: ''}"
						>
							{label}
						</a>
					{/each}
				</nav>

				<div class="mx-2 hidden h-5 w-px bg-border md:block"></div>

				<!-- GitHub CTA (Desktop) repaginado com efeitos de hover -->
				<a
					href="https://github.com/infralivre/infralivre"
					target="_blank"
					rel="noopener"
					class="group/gh hidden items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-semibold text-zinc-900 shadow-sm transition-all duration-300 hover:scale-105 hover:border-amber-400 hover:bg-gradient-to-r hover:from-white hover:to-amber-50 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-amber-500/50 dark:hover:from-zinc-950 dark:hover:to-amber-950/30 dark:hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] md:flex"
				>
					<Github class="size-4 transition-transform duration-300 group-hover/gh:-rotate-12" />
					<span>Apoie com uma</span>
					<div class="flex items-center justify-center rounded-full bg-amber-100 p-0.5 dark:bg-amber-900/40">
						<Star class="size-3.5 text-amber-500 transition-all duration-300 group-hover/gh:scale-[1.5] group-hover/gh:rotate-[15deg] group-hover/gh:text-amber-400 group-hover/gh:drop-shadow-[0_0_6px_rgba(245,158,11,1)] group-hover/gh:brightness-110" fill="currentColor" />
					</div>
				</a>

				<!-- Theme toggle -->
				<div class="ml-1">
					<ThemeToggle />
				</div>

				<!-- Mobile toggle -->
				<button
					bind:this={toggleRef}
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:hidden"
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
				class="border-t border-border pb-6 pt-4 md:hidden animate-[fadeUp_0.2s_ease_both]"
			>
				<div class="space-y-1">
					{#each navLinks as { href, label }}
						<a
							{href}
							onclick={closeMobile}
							aria-current={isActive(href) ? 'page' : undefined}
							class="block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200
								{isActive(href)
								? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 font-semibold'
								: 'text-muted-foreground hover:bg-zinc-50 hover:pl-6 hover:text-zinc-900 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-50'}"
						>
							{label}
						</a>
					{/each}
				</div>

				<!-- Mobile GitHub CTA -->
				<a
					href="https://github.com/infralivre/infralivre"
					target="_blank"
					rel="noopener"
					onclick={closeMobile}
					class="group/gh mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 text-base font-semibold text-amber-900 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:shadow-md hover:shadow-amber-500/10 dark:text-amber-100"
				>
					<Github class="size-5 transition-transform duration-300 group-hover/gh:-rotate-12" />
					<span>Apoie com uma</span>
					<Star class="size-5 animate-[pulse_2s_ease-in-out_infinite] text-amber-500 transition-all duration-300 group-hover/gh:scale-[1.3] group-hover/gh:rotate-[15deg] group-hover/gh:text-amber-400 group-hover/gh:drop-shadow-[0_0_8px_rgba(245,158,11,1)]" fill="currentColor" />
					<span>no GitHub</span>
				</a>
			</nav>
		{/if}
	</Container>
</header>
