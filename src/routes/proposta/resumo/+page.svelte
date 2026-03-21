<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import PropostaResumo from '$lib/content/proposta-resumo.md';
	import Zap from '@lucide/svelte/icons/zap';
	import FileText from '@lucide/svelte/icons/file-text';
</script>

<svelte:head>
	<title>A Proposta (Resumo) — InfraLivre</title>
	<meta name="description" content="Versão resumida da proposta do InfraLivre para um marco jurídico do software livre no Brasil." />
	<meta property="og:title" content="A Proposta (Resumo) — InfraLivre" />
</svelte:head>

<Section class="pb-8">
	<div class="mx-auto max-w-3xl text-center">	
		<h1 class="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-950 dark:text-zinc-50">
			A Solução em 1 Minuto
		</h1>
		<p class="mt-6 text-xl leading-8 text-muted-foreground">
			Garantir segurança, sustentabilidade jurídica e proteção aos mantenedores. Sem amarras corporativas inaplicáveis aos bens de infraestrutura digital comuns.
		</p>
		
		<!-- Controle de Versão (Toggle) -->
		<div class="mx-auto mt-10 flex max-w-fit items-center rounded-full border border-zinc-200 bg-zinc-100/50 p-1.5 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/50">
			<a 
				href="/proposta" 
				class="group flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
			>
				<FileText class="size-4 transition-transform group-hover:scale-110 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
				Proposta Completa
			</a>
			<a 
				href="/proposta/resumo" 
				class="group flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition-all dark:bg-zinc-800 dark:text-zinc-50"
			>
				<Zap class="size-4 text-amber-500 transition-transform group-hover:scale-110" />
				Resumo (1 a 2 min)
			</a>
		</div>
	</div>
</Section>

<ProseLayout class="pt-2">
	<div class="prose-zinc max-w-none rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 dark:prose-invert sm:p-12">
		<PropostaResumo />
	</div>
</ProseLayout>

<CallToAction
	title="O Marco Legal precisa de você"
	description="Reconhece o valor desta proposta? Não deixe as ideias apenas no papel. Junte-se ao movimento e apoie a transformação."
	href="/apoio"
	label="Faça Parte e Apoie"
/>
