<script lang="ts">
	import { slide } from 'svelte/transition';
	import Section from '$lib/components/shared/Section.svelte';
	import ShareButtons from '$lib/components/shared/ShareButtons.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import Star from '@lucide/svelte/icons/star';
	import Github from '@lucide/svelte/icons/github';
	import MessageSquareQuote from '@lucide/svelte/icons/message-square-quote';
	import Share2 from '@lucide/svelte/icons/share-2';
	import Users from '@lucide/svelte/icons/users';
	import Target from '@lucide/svelte/icons/target';
	import Compass from '@lucide/svelte/icons/compass';
	import Handshake from '@lucide/svelte/icons/handshake';
	import GitPullRequest from '@lucide/svelte/icons/git-pull-request';
	import Heart from '@lucide/svelte/icons/heart';
	import Megaphone from '@lucide/svelte/icons/megaphone';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import CircleDollarSign from '@lucide/svelte/icons/circle-dollar-sign';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';

	let showPix = $state(false);
</script>

<svelte:head>
	<title>Como Apoiar — InfraLivre</title>
	<meta name="description" content="Saiba como apoiar o InfraLivre na construção de um marco jurídico adequado para a infraestrutura livre no Brasil." />
	<meta property="og:title" content="Como Apoiar — InfraLivre" />
	<meta property="og:description" content="Saiba como apoiar a construção de um marco jurídico adequado para a infraestrutura livre no Brasil." />
</svelte:head>

<!-- Hero -->
<Section>
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			A força do <span class="text-primary">InfraLivre</span> é você
		</h1>
		<p class="mt-6 text-xl leading-8 text-muted-foreground">
			Apoiar não exige conhecimento técnico ou jurídico avançado. A maior parte do impacto vem de como o tema é pautado e compartilhado pela comunidade. Todo avanço começa no debate público.
		</p>
	</div>

	<div class="mt-8 flex justify-center">
		<ShareButtons title="Como Apoiar o InfraLivre" description="A maior parte do impacto vem de como o tema é pautado e compartilhado pela comunidade." />
	</div>

	<div class="mt-12 mx-auto max-w-5xl">
		<img
			src="/images/02.webp"
			alt="Ilustração mostrando diversas formas de apoiar o InfraLivre e a comunidade de tecnologia participando de debates públicos."
			class="w-full rounded-2xl border border-border bg-muted/30 object-cover shadow-2xl"
			width="1456"
			height="816"
			loading="eager"
		/>
	</div>
</Section>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- FORMA 1: Visibilidade -->
<!-- ═══════════════════════════════════════════════════════════ -->
<Section class="pt-0">
	<div class="mx-auto max-w-5xl">
		<div class="flex items-center gap-4 mb-8">
			<div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400">
				<Star class="size-5" />
			</div>
			<div>
				<span class="text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">Forma 1</span>
				<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Dê visibilidade</h2>
			</div>
		</div>

		<p class="mb-8 max-w-2xl text-lg text-muted-foreground">
			O primeiro passo é o mais simples e um dos mais importantes: mostrar que você apoia. Uma estrela no repositório e um follow nas redes sociais amplificam o alcance do projeto e sinalizam relevância.
		</p>

		<div class="grid gap-6 sm:grid-cols-2">
			<!-- GitHub Star -->
			<Card.Root class="group relative overflow-hidden border-amber-200 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-lg dark:border-amber-900 dark:hover:border-amber-500/30">
				<div class="absolute inset-0 bg-linear-to-br from-amber-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-amber-950/30"></div>
				<Card.Header class="relative z-10">
					<Github class="mb-3 size-7 text-muted-foreground transition-all duration-300 group-hover:text-amber-600 dark:group-hover:text-amber-400" />
					<Card.Title class="text-lg transition-colors group-hover:text-amber-700 dark:group-hover:text-amber-300">Estrela no GitHub</Card.Title>
				</Card.Header>
				<Card.Content class="relative z-10">
					<p class="mb-4 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
						Dê uma estrela no repositório oficial. Isso aumenta a visibilidade do projeto nas buscas e mostra à comunidade que há demanda real.
					</p>
					<a
						href="https://github.com/infralivre/infralivre"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-50 transition-all hover:scale-105 active:scale-95 dark:bg-zinc-100 dark:text-zinc-950"
					>
						<Star class="size-4" />
						Dar Estrela
						<ArrowRight class="size-3.5 transition-transform group-hover:translate-x-1" />
					</a>
				</Card.Content>
			</Card.Root>

			<!-- Redes Sociais -->
			<Card.Root class="group relative overflow-hidden border-amber-200 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-lg dark:border-amber-900 dark:hover:border-amber-500/30">
				<div class="absolute inset-0 bg-linear-to-br from-amber-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-amber-950/30"></div>
				<Card.Header class="relative z-10">
					<Users class="mb-3 size-7 text-muted-foreground transition-all duration-300 group-hover:text-amber-600 dark:group-hover:text-amber-400" />
					<Card.Title class="text-lg transition-colors group-hover:text-amber-700 dark:group-hover:text-amber-300">Siga nas redes sociais</Card.Title>
				</Card.Header>
				<Card.Content class="relative z-10">
					<p class="mb-4 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
						Siga e impulsione postagens das pessoas e entidades à frente da iniciativa. Isso fura a bolha inicial e garante volume crítico de apoio e visibilidade.
					</p>
					<a
						href="https://github.com/infralivre"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium transition-all hover:scale-105 active:scale-95 dark:border-zinc-700"
					>
						Acompanhe o projeto
						<ArrowRight class="size-3.5 transition-transform group-hover:translate-x-1" />
					</a>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</Section>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- FORMA 2: Ação -->
<!-- ═══════════════════════════════════════════════════════════ -->
<Section class="pt-0">
	<div class="mx-auto max-w-5xl">
		<div class="flex items-center gap-4 mb-8">
			<div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-400">
				<Megaphone class="size-5" />
			</div>
			<div>
				<span class="text-sm font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">Forma 2</span>
				<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Aja pela causa</h2>
			</div>
		</div>

		<p class="mb-8 max-w-2xl text-lg text-muted-foreground">
			O debate público precisa de direção. Siga estas diretrizes para pautar o tema com seriedade, sem cair em polarizações destrutivas.
		</p>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<Card.Root class="group border-violet-200 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-lg dark:border-violet-900 dark:hover:border-violet-500/30">
				<Card.Header>
					<MessageSquareQuote class="mb-3 size-7 text-muted-foreground transition-all duration-300 group-hover:text-violet-500" />
					<Card.Title class="text-lg transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400">Fale sobre o tema</Card.Title>
				</Card.Header>
				<Card.Content>
					<p class="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
						Traga o assunto para o debate. Exponha a insegurança jurídica e explique como a falta de regras claras ameaça empresas, desenvolvedores e infraestruturas do país.
					</p>
				</Card.Content>
			</Card.Root>

			<Card.Root class="group border-violet-200 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-lg dark:border-violet-900 dark:hover:border-violet-500/30">
				<Card.Header>
					<Share2 class="mb-3 size-7 text-muted-foreground transition-all duration-300 group-hover:text-violet-500" />
					<Card.Title class="text-lg transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400">Compartilhe com base</Card.Title>
				</Card.Header>
				<Card.Content>
					<p class="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
						Utilize conteúdos oficiais: manifesto, explicações e análises. Compartilhe links diretos para firmar a argumentação e contornar fake news ou distorções.
					</p>
				</Card.Content>
			</Card.Root>

			<Card.Root class="group border-violet-200 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-lg dark:border-violet-900 dark:hover:border-violet-500/30">
				<Card.Header>
					<Target class="mb-3 size-7 text-muted-foreground transition-all duration-300 group-hover:text-violet-500" />
					<Card.Title class="text-lg transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400">Mantenha o foco</Card.Title>
				</Card.Header>
				<Card.Content>
					<p class="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
						Argumentos "contra instituições" minam consensos. A defesa deve ser <strong>construtiva, educacional e propositiva</strong>, não reativa ou raivosa.
					</p>
				</Card.Content>
			</Card.Root>

			<Card.Root class="group border-violet-200 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-lg dark:border-violet-900 dark:hover:border-violet-500/30">
				<Card.Header>
					<Compass class="mb-3 size-7 text-muted-foreground transition-all duration-300 group-hover:text-violet-500" />
					<Card.Title class="text-lg transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400">Direcione a discussão</Card.Title>
				</Card.Header>
				<Card.Content>
					<p class="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
						Enfoque na especificidade do ecossistema e nos perigos de regulações generalistas. Ao propor a lei apropriada, resolve-se a maioria das distorções.
					</p>
				</Card.Content>
			</Card.Root>

			<Card.Root class="group border-violet-200 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-lg dark:border-violet-900 dark:hover:border-violet-500/30">
				<Card.Header>
					<Handshake class="mb-3 size-7 text-muted-foreground transition-all duration-300 group-hover:text-violet-500" />
					<Card.Title class="text-lg transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400">Construa pontes</Card.Title>
				</Card.Header>
				<Card.Content>
					<p class="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
						Isto não é um tema ideológico. O problema aflige governos, autarquias e bancos. Aja com pragmatismo, use dados objetivos e acolha questionamentos civis.
					</p>
				</Card.Content>
			</Card.Root>

			<Card.Root class="group border-violet-200 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-lg dark:border-violet-900 dark:hover:border-violet-500/30">
				<Card.Header>
					<Heart class="mb-3 size-7 text-muted-foreground transition-all duration-300 group-hover:text-violet-500" />
					<Card.Title class="text-lg transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400">Apoie com integridade</Card.Title>
				</Card.Header>
				<Card.Content>
					<p class="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
						A maturidade de como este projeto for apresentado influenciará se ele será aprovado ou esquecido. Aja com responsabilidade e seriedade.
					</p>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</Section>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- FORMA 3: Trabalho -->
<!-- ═══════════════════════════════════════════════════════════ -->
<Section class="pt-0">
	<div class="mx-auto max-w-5xl">
		<div class="flex items-center gap-4 mb-8">
			<div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
				<GitPullRequest class="size-5" />
			</div>
			<div>
				<span class="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Forma 3</span>
				<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Contribua com trabalho</h2>
			</div>
		</div>

		<Card.Root class="group relative overflow-hidden border-emerald-200 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl dark:border-emerald-900 dark:hover:border-emerald-500/30">
			<div class="absolute inset-0 bg-linear-to-r from-emerald-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-emerald-950/30"></div>
			<Card.Header class="relative z-10 flex flex-row items-center gap-4 space-y-0 pb-2">
				<div class="rounded-lg bg-emerald-600 p-2.5 text-white dark:bg-emerald-500 dark:text-zinc-950">
					<GitPullRequest class="size-6" />
				</div>
				<div>
					<Card.Title class="text-xl">Contribua diretamente no GitHub</Card.Title>
				</div>
			</Card.Header>
			<Card.Content class="relative z-10 pt-2">
				<p class="mb-6 max-w-2xl text-base text-muted-foreground transition-colors group-hover:text-foreground">
					Sua vivência não precisa ser técnica. Revisões de texto, traduções, cases de uso, formatações e propostas jurídicas são cruciais. Venha para o repositório oficial, abra <em class="font-semibold">Issues</em> e envie <em class="font-semibold">Pull Requests</em>.
				</p>
				<a
					href="https://github.com/infralivre/infralivre"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 active:scale-95 dark:bg-emerald-500 dark:text-zinc-950"
				>
					<Github class="size-4" />
					Ir para o Repositório
					<ArrowRight class="size-3.5 transition-transform group-hover:translate-x-1" />
				</a>
			</Card.Content>
		</Card.Root>
	</div>
</Section>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- FORMA 4: Doação financeira -->
<!-- ═══════════════════════════════════════════════════════════ -->
<Section class="pt-0">
	<div class="mx-auto max-w-5xl">
		<div class="flex items-center gap-4 mb-8">
			<div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
				<CircleDollarSign class="size-5" />
			</div>
			<div>
				<span class="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Forma 4</span>
				<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Doação financeira</h2>
			</div>
		</div>

		<Card.Root class="relative overflow-hidden border-zinc-200 dark:border-zinc-800">
			<Card.Header>
				<Card.Title class="text-lg text-muted-foreground">Em breve</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="max-w-2xl text-base leading-relaxed text-muted-foreground">
					O InfraLivre ainda está em fase de consolidação. Neste momento, o projeto prioriza as <strong class="text-foreground">três primeiras formas de apoio</strong> — visibilidade, ação e contribuição direta — por entender que a base comunitária, a maturidade do debate e o trabalho colaborativo são pré-requisitos para qualquer financiamento sustentável.
				</p>
				<p class="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
					Quando o projeto atingir a maturidade necessária, esta seção será habilitada com canais oficiais de doação. Enquanto isso, sua estrela, seu compartilhamento e sua voz valem mais do que qualquer valor financeiro.
				</p>

				<div class="mt-6 border-t border-dashed border-zinc-200 pt-6 dark:border-zinc-800">
					<button
						onclick={() => showPix = !showPix}
						class="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-zinc-400 hover:text-foreground active:scale-95 dark:border-zinc-700 dark:hover:border-zinc-600"
					>
						<ChevronDown class="size-4 transition-transform duration-200 {showPix ? 'rotate-180' : ''}" />
						Mesmo assim, quero contribuir financeiramente
					</button>

					{#if showPix}
						<div class="mt-6 flex flex-col items-center gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50" transition:slide>
							<p class="text-sm text-muted-foreground text-center max-w-md">
								Se deseja contribuir mesmo nesta fase inicial, utilize o PIX abaixo. Toda contribuição será destinada exclusivamente à manutenção e divulgação do projeto.
							</p>
							<div class="flex flex-col items-center gap-3 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-800">
								<img
									src="/images/pix-qrcode.png"
									alt="QR Code PIX para doação ao InfraLivre"
									class="size-48 rounded"
									width="192"
									height="192"
								/>
								<span class="text-xs font-mono text-muted-foreground select-all">infralivre@proton.me</span>
							</div>
							<p class="text-xs text-muted-foreground/60">
								Doações são voluntárias e não geram vínculo, obrigação ou contrapartida.
							</p>
						</div>
					{/if}
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</Section>

<!-- Fechamento -->
<section class="border-t border-border bg-emerald-500/5 py-16 dark:bg-emerald-950/20">
	<div class="mx-auto max-w-3xl text-center px-4 sm:px-6">
		<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-emerald-900 dark:text-emerald-100">
			Oportunidade e Responsabilidade
		</h2>
		<p class="mt-6 text-lg tracking-wide text-emerald-800/80 dark:text-emerald-200/70">
			O <strong>InfraLivre</strong> busca proteção, previsibilidade e escalabilidade para nossa infraestrutura.
			A maturidade de como este projeto for apresentado aos parlamentares e sociedade influenciará se ele vai ser aprovado ou esquecido.
			Apoiar com integridade e responsabilidade faz o projeto avançar.
		</p>
	</div>
</section>
