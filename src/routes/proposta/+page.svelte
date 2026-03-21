<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import ProseLayout from '$lib/layout/ProseLayout.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import PropostaContent from '$lib/content/proposta.md';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import Zap from '@lucide/svelte/icons/zap';
	import FileText from '@lucide/svelte/icons/file-text';
</script>

<svelte:head>
	<title>A Proposta — InfraLivre</title>
	<meta name="description" content="Conheça a proposta do InfraLivre: um marco jurídico com seis pilares para proteger o software livre no Brasil." />
	<meta property="og:title" content="A Proposta — InfraLivre" />
	<meta property="og:description" content="Um marco jurídico com seis pilares para proteger o software livre no Brasil." />
</svelte:head>

<Section class="pb-10">
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-950 dark:text-zinc-50">
			O Marco Legal do Software Livre
		</h1>
		<p class="mt-6 text-xl leading-8 text-muted-foreground">
			Garantindo segurança, previsibilidade e sustentabilidade jurídica para desenvolvedores, empresas e para toda a infraestrutura baseada no software livre que move o Brasil.
		</p>
		
		<!-- Controle de Versão (Toggle) -->
		<div class="mx-auto mt-10 flex max-w-fit items-center rounded-full border border-zinc-200 bg-zinc-100/50 p-1.5 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/50">
			<a 
				href="/proposta" 
				class="group flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition-all dark:bg-zinc-800 dark:text-zinc-50"
			>
				<FileText class="size-4 text-emerald-600 transition-transform group-hover:scale-110 dark:text-emerald-400" />
				Proposta Completa
			</a>
			<a 
				href="/proposta/resumo" 
				class="group flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
			>
				<Zap class="size-4 transition-transform group-hover:scale-110 group-hover:text-amber-500" />
				Resumo (1 a 2 min)
			</a>
		</div>
	</div>

	<div class="mx-auto mt-12 max-w-5xl">
		<img
			src="/images/06.webp"
			alt="Ilustração mostrando diversas pessoas colaborando em projetos de software livre e de código aberto, representando a comunidade global de desenvolvedores."
			class="w-full rounded-2xl border border-zinc-200 bg-zinc-50 object-cover shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
			width="1456"
			height="816"
			loading="eager"
		/>
	</div>
</Section>

<ProseLayout class="pt-0">
	<div class="prose-zinc max-w-none dark:prose-invert">
		<PropostaContent />
	</div>
</ProseLayout>

<CallToAction
	title="O Marco Legal precisa de você"
	description="Reconhece o valor desta proposta? Não deixe as ideias apenas no papel. Junte-se ao movimento e apoie a transformação."
	href="/apoio"
	label="Faça Parte e Apoie"
/>
