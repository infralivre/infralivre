<script lang="ts">
	import Sun from '@lucide/svelte/icons/sun';
	import Moon from '@lucide/svelte/icons/moon';

	let dark = $state(false);

	$effect(() => {
		const stored = localStorage.getItem('theme');
		if (stored === 'dark' || (!stored && matchMedia('(prefers-color-scheme: dark)').matches)) {
			dark = true;
		}
		sync();
	});

	function toggle() {
		dark = !dark;
		localStorage.setItem('theme', dark ? 'dark' : 'light');
		sync();
	}

	function sync() {
		document.documentElement.classList.toggle('dark', dark);
	}
</script>

<button
	type="button"
	onclick={toggle}
	class="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
	aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'}
>
	{#if dark}
		<Sun class="size-[1.125rem]" />
	{:else}
		<Moon class="size-[1.125rem]" />
	{/if}
</button>
