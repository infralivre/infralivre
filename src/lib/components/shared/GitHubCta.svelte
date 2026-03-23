<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import Star from '@lucide/svelte/icons/star';
	import Container from '$lib/layout/Container.svelte';

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();
</script>

<section class={cn('py-16 md:py-24', className)}>
	<Container>
		<div class="group relative overflow-hidden flex flex-col items-center gap-4 rounded-2xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/10 dark:border-zinc-800 dark:from-zinc-900/50 dark:to-zinc-950 dark:hover:border-amber-500/30 md:p-12">
			
			<!-- Efeito de brilho de fundo no hover -->
			<div class="absolute inset-0 bg-amber-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
			
			<div class="relative z-10 flex size-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 shadow-inner">
				<Star class="size-8 animate-[pulse_2s_ease-in-out_infinite] text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.7)] transition-all duration-300 group-hover:scale-125 group-hover:text-amber-400 group-hover:drop-shadow-[0_0_20px_rgba(245,158,11,1)] group-hover:brightness-110" fill="currentColor" />
			</div>
			
			<h2 class="relative z-10 mt-2 text-2xl font-bold tracking-tight sm:text-3xl transition-colors duration-300 group-hover:text-amber-600 dark:group-hover:text-amber-400">Apoie com uma Estrela</h2>
			<p class="relative z-10 mx-auto max-w-xl text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
				O InfraLivre é um projeto aberto e dirigido pela comunidade. Dar uma estrela no repositório ajuda a aumentar a
				visibilidade da iniciativa e a atrair mais braços para a causa.
			</p>
			
			<div class="relative z-10 mt-4">
				<Button
					href="https://github.com/infralivre/infralivre"
					target="_blank"
					rel="noopener"
					class="group/btn gap-2 bg-zinc-900 text-zinc-50 transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-zinc-800 hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-900 hover:dark:text-zinc-100 dark:hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] font-semibold"
					size="lg"
				>
					<Star class="size-4 animate-[pulse_2s_ease-in-out_infinite] text-amber-400 transition-all duration-300 group-hover/btn:scale-[1.5] group-hover/btn:rotate-[15deg] group-hover/btn:text-amber-300 group-hover/btn:drop-shadow-[0_0_16px_rgba(245,158,11,1)]" fill="currentColor" />
					Star no GitHub
				</Button>
			</div>
		</div>
	</Container>
</section>
