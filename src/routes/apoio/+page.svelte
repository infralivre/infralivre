<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import PageHeader from '$lib/components/shared/PageHeader.svelte';
	import GitHubCta from '$lib/components/shared/GitHubCta.svelte';
	import ShareButtons from '$lib/components/shared/ShareButtons.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import MessageSquareQuote from '@lucide/svelte/icons/message-square-quote';
	import Share2 from '@lucide/svelte/icons/share-2';
	import Users from '@lucide/svelte/icons/users';
	import Target from '@lucide/svelte/icons/target';
	import Compass from '@lucide/svelte/icons/compass';
	import Handshake from '@lucide/svelte/icons/handshake';
	import GitPullRequest from '@lucide/svelte/icons/git-pull-request';
</script>

<svelte:head>
	<title>Como Apoiar — InfraLivre</title>
	<meta name="description" content="Saiba como apoiar o InfraLivre na construção de um marco jurídico adequado para a infraestrutura livre no Brasil." />
	<meta property="og:title" content="Como Apoiar — InfraLivre" />
	<meta property="og:description" content="Saiba como apoiar a construção de um marco jurídico adequado para a infraestrutura livre no Brasil." />
</svelte:head>

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

<Section class="pt-0">
	<div class="mx-auto max-w-2xl text-center mb-12">
		<span class="text-sm font-semibold uppercase tracking-wider text-primary">Plano de Ação</span>
		<h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">7 formas concretas de contribuir</h2>
		<p class="mt-4 text-lg text-muted-foreground">Siga as diretrizes abaixo para direcionar o debate com seriedade, sem cair em polarizações destrutivas.</p>
	</div>

	<div class="mx-auto max-w-5xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		<Card.Root class="group border-violet-300 dark:border-violet-900 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-lg dark:hover:border-violet-500/30">
			<Card.Header>
				<MessageSquareQuote class="mb-3 size-7 text-muted-foreground transition-all duration-300 group-hover:text-violet-500" />
				<Card.Title class="text-lg transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400">1. Fale sobre o tema</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
					Traga o assunto para o debate. Exponha a insegurança jurídica e explique como a falta de regras claras ameaça empresas, desenvolvedores e infraestruturas do país.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root class="group border-red-300 dark:border-red-900 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-lg dark:hover:border-red-500/30">
			<Card.Header>
				<Share2 class="mb-3 size-7 text-muted-foreground transition-all duration-300 group-hover:text-red-500" />
				<Card.Title class="text-lg transition-colors group-hover:text-red-600 dark:group-hover:text-red-400">2. Compartilhe com base</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
					Utilize conteúdos oficiais: manifesto, explicações e análises. Compartilhe links diretos para firmar a argumentação e contornar fake news ou distorções.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root class="group border-cyan-300 dark:border-cyan-900 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:border-cyan-500/30">
			<Card.Header>
				<Users class="mb-3 size-7 text-muted-foreground transition-all duration-300 group-hover:text-cyan-500" />
				<Card.Title class="text-lg transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">3. Acompanhe o projeto</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
					Siga e impulsione postagens das pessoas e entidades à frente da iniciativa. Isso fura a bolha inicial e garante volume crítico de apoio e visibilidade.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root class="group border-amber-300 dark:border-amber-900 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 dark:hover:border-amber-500/30">
			<Card.Header>
				<Target class="mb-3 size-7 text-muted-foreground transition-all duration-300 group-hover:text-amber-500" />
				<Card.Title class="text-lg transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-400">4. Mantenha o foco na proposta</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
					Argumentos "contra instituições" minam consensos. A defesa deve ser <strong>construtiva, educacional e propositiva</strong>, não reativa ou raivosa.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root class="group border-blue-300 dark:border-blue-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:border-blue-500/30">
			<Card.Header>
				<Compass class="mb-3 size-7 text-muted-foreground transition-all duration-300 group-hover:text-blue-500" />
				<Card.Title class="text-lg transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">5. Direcione a discussão</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
					Enfoque na especificidade do ecossistema e nos perigos de regulações generalistas. Ao propor a lei apropriada, resolve-se a maioria das distorções de forma eficiente.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root class="group border-emerald-300 dark:border-emerald-900 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:border-emerald-500/30">
			<Card.Header>
				<Handshake class="mb-3 size-7 text-muted-foreground transition-all duration-300 group-hover:text-emerald-500" />
				<Card.Title class="text-lg transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">6. Construa pontes</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
					Isto não é um tema ideológico. O problema aflige governos, autarquias e bancos. Aja com pragmatismo, use dados objetivos e acolha questionamentos civis.
				</p>
			</Card.Content>
		</Card.Root>

		<!-- Card de contribuição tem peso maior -->
		<Card.Root class="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:col-span-2 lg:col-span-3 border-zinc-300 dark:border-zinc-700 hover:border-zinc-950 dark:hover:border-zinc-100">
			<div class="absolute inset-0 bg-gradient-to-r from-zinc-100 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-zinc-900/50"></div>
			<Card.Header class="relative z-10 flex flex-row items-center gap-4 space-y-0 pb-2">
				<div class="rounded-lg bg-zinc-950 p-2.5 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950">
					<GitPullRequest class="size-6" />
				</div>
				<div>
					<Card.Title class="text-xl">7. Contribua Diretamente (GitHub)</Card.Title>
				</div>
			</Card.Header>
			<Card.Content class="relative z-10 pt-2">
				<p class="text-base text-muted-foreground transition-colors group-hover:text-foreground">
					Sua vivência não precisa ser técnica. Revisões de texto, traduções, cases de uso, formatações e propostas são cruciais. Venha para o repositório oficial, abra <em class="font-semibold">Issues</em> e envie <em class="font-semibold">Pull Requests</em>.
				</p>
			</Card.Content>
		</Card.Root>
	</div>
</Section>

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

<GitHubCta />
