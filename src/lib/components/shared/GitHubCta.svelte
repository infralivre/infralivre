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
		<div class="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-8 text-center md:p-12">
			<Star class="size-8 text-muted-foreground" />
			<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Apoie no GitHub</h2>
			<p class="mx-auto max-w-xl text-muted-foreground">
				O InfraLivre é um projeto aberto. Dar uma estrela no repositório ajuda a aumentar a
				visibilidade da iniciativa e a atrair mais contribuidores.
			</p>
			<Button
				href="https://github.com/infralivre/infralivre"
				target="_blank"
				rel="noopener"
				variant="default"
				size="lg"
			>
				<Star class="size-4" />
				Dar uma estrela no GitHub
			</Button>
		</div>
	</Container>
</section>
