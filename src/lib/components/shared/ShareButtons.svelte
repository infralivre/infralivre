<script lang="ts">
	import { page } from '$app/state';
	import { cn } from '$lib/utils.js';
	import Share2 from '@lucide/svelte/icons/share-2';
	import Link from '@lucide/svelte/icons/link';
	import Check from '@lucide/svelte/icons/check';

	interface Props {
		title?: string;
		description?: string;
		class?: string;
	}

	let { title, description, class: className }: Props = $props();

	let copied = $state(false);
	let canNativeShare = $state(false);

	$effect(() => {
		canNativeShare = typeof navigator !== 'undefined' && !!navigator.share;
	});

	function getUrl(): string {
		return `https://infralivre.org${page.url.pathname}`;
	}

	function shareTwitter() {
		const text = title ? `${title} — InfraLivre` : 'InfraLivre';
		const url = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(getUrl())}`;
		window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400');
	}

	function shareLinkedIn() {
		const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getUrl())}`;
		window.open(url, '_blank', 'noopener,noreferrer,width=600,height=600');
	}

    function shareBluesky() {
		const text = title ? `${title} — InfraLivre\n${getUrl()}` : getUrl();
		const url = `https://bsky.app/intent/compose?text=${encodeURIComponent(text)}`;
		window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400');
	}

	function shareFacebook() {
		const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getUrl())}`;
		window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400');
	}

	function shareWhatsApp() {
		const text = title ? `${title} — InfraLivre\n${getUrl()}` : getUrl();
		const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
		window.open(url, '_blank', 'noopener,noreferrer');
	}

	function shareTelegram() {
		const url = `https://t.me/share/url?url=${encodeURIComponent(getUrl())}&text=${encodeURIComponent(title ? `${title} — InfraLivre` : 'InfraLivre')}`;
		window.open(url, '_blank', 'noopener,noreferrer');
	}

    function shareSignal() {
		const text = title ? `${title} — InfraLivre\n${getUrl()}` : getUrl();
		const url = `https://signal.me/#p/?text=${encodeURIComponent(text)}`;
		window.open(url, '_blank', 'noopener,noreferrer');
	}

	

	async function copyLink() {
		try {
			await navigator.clipboard.writeText(getUrl());
			copied = true;
			setTimeout(() => (copied = false), 2000);
		} catch {
			// Fallback for older browsers
			const input = document.createElement('input');
			input.value = getUrl();
			document.body.appendChild(input);
			input.select();
			document.execCommand('copy');
			document.body.removeChild(input);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		}
	}

	async function nativeShare() {
		try {
			await navigator.share({
				title: title ? `${title} — InfraLivre` : 'InfraLivre',
				text: description || '',
				url: getUrl()
			});
		} catch {
			// User cancelled or error — ignore
		}
	}

	const btnBase = 'inline-flex items-center justify-center rounded-full p-2.5 transition-all duration-200 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';
</script>

<div class={cn('flex flex-wrap items-center justify-center gap-1', className)}>
	<span class="mr-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">Compartilhar</span>
	
	<!-- X / Twitter -->
	<button 
		onclick={shareTwitter} 
		class="{btnBase} text-muted-foreground hover:text-zinc-900 hover:bg-zinc-100 dark:hover:text-zinc-50 dark:hover:bg-zinc-800"
		aria-label="Compartilhar no X (Twitter)"
		title="Compartilhar no X"
	>
		<svg class="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
	</button>

	<!-- LinkedIn -->
	<button 
		onclick={shareLinkedIn} 
		class="{btnBase} text-muted-foreground hover:text-[#0A66C2] hover:bg-blue-50 dark:hover:bg-blue-950/30"
		aria-label="Compartilhar no LinkedIn"
		title="Compartilhar no LinkedIn"
	>
		<svg class="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
	</button>

    <!-- Facebook -->
	<button 
		onclick={shareFacebook} 
		class="{btnBase} text-muted-foreground hover:text-[#1877F2] hover:bg-blue-50 dark:hover:bg-blue-950/30"
		aria-label="Compartilhar no Facebook"
		title="Compartilhar no Facebook"
	>
		<svg class="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.092.044 1.545.098v3.156h-1.219c-1.31 0-1.743.63-1.743 1.844v2.46h2.898l-.498 3.667h-2.4v8.148C18.62 22.92 22.167 18.084 22.167 12.527c0-5.93-4.573-10.734-10.146-10.734S1.875 6.597 1.875 12.527c0 4.902 3.258 9.04 7.726 10.351.105.026.21-.04.21-.151l.29-1.036z"/></svg>
	</button>

    <!-- Bluesky -->
	<button 
		onclick={shareBluesky} 
		class="{btnBase} text-muted-foreground hover:text-[#0085FF] hover:bg-blue-50 dark:hover:bg-blue-950/30"
		aria-label="Compartilhar no Bluesky"
		title="Compartilhar no Bluesky"
	>
		<svg class="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.59 3.513 6.182 3.2-4.574.654-8.675 2.242-5.471 7.886 3.535 5.236 5.887.158 6.665-2.333.553-1.77.801-3.602.801-3.602s.248 1.832.801 3.602c.778 2.491 3.13 7.569 6.665 2.333 3.203-5.644-.897-7.232-5.471-7.886 2.591.313 5.397-.573 6.182-3.2.246-.829.624-5.789.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.3-1.664-.62-4.3 1.24C14.046 4.747 11.087 8.686 12 10.8z"/></svg>
	</button>

	<!-- WhatsApp -->
	<button 
		onclick={shareWhatsApp} 
		class="{btnBase} text-muted-foreground hover:text-[#25D366] hover:bg-green-50 dark:hover:bg-green-950/30"
		aria-label="Compartilhar no WhatsApp"
		title="Compartilhar no WhatsApp"
	>
		<svg class="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
	</button>

	<!-- Telegram -->
	<button 
		onclick={shareTelegram} 
		class="{btnBase} text-muted-foreground hover:text-[#26A5E4] hover:bg-sky-50 dark:hover:bg-sky-950/30"
		aria-label="Compartilhar no Telegram"
		title="Compartilhar no Telegram"
	>
		<svg class="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
	</button>

	<!-- Signal -->
	<button 
		onclick={shareSignal} 
		class="{btnBase} text-muted-foreground hover:text-[#3A76F0] hover:bg-blue-50 dark:hover:bg-blue-950/30"
		aria-label="Compartilhar no Signal"
		title="Compartilhar no Signal"
	>
		<svg class="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 2.917 1.043 5.59 2.775 7.67l-.924 3.405 3.52-.916A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.636 16.375c-.236.666-1.385 1.312-1.907 1.35-.522.04-1.005.248-3.396-.707-2.88-1.15-4.673-4.108-4.814-4.298-.14-.19-1.15-1.533-1.15-2.924s.728-2.074.986-2.356c.258-.282.565-.353.753-.353.188 0 .376.002.54.01.174.008.407-.066.637.487.236.565.8 1.953.87 2.094.07.14.118.306.023.496-.094.19-.14.306-.282.472-.14.166-.297.37-.424.496-.14.142-.287.296-.123.58.164.283.728 1.2 1.563 1.945 1.074.957 1.98 1.254 2.263 1.394.282.14.447.118.612-.07.164-.19.706-.824.895-1.107.188-.282.376-.235.636-.14.258.093 1.644.776 1.926.917.282.14.47.212.54.33.07.117.07.682-.166 1.348z"/></svg>
	</button>

	<!-- Copiar link -->
	<button 
		onclick={copyLink} 
		class="{btnBase} {copied ? 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/30' : 'text-muted-foreground hover:text-zinc-900 hover:bg-zinc-100 dark:hover:text-zinc-50 dark:hover:bg-zinc-800'}"
		aria-label={copied ? 'Link copiado!' : 'Copiar link'}
		title={copied ? 'Link copiado!' : 'Copiar link'}
	>
		{#if copied}
			<Check class="size-4" />
		{:else}
			<Link class="size-4" />
		{/if}
	</button>

	<!-- Native Share (mobile) -->
	{#if canNativeShare}
		<button 
			onclick={nativeShare} 
			class="{btnBase} text-muted-foreground hover:text-zinc-900 hover:bg-zinc-100 dark:hover:text-zinc-50 dark:hover:bg-zinc-800 sm:hidden"
			aria-label="Compartilhar"
			title="Compartilhar"
		>
			<Share2 class="size-4" />
		</button>
	{/if}
</div>
