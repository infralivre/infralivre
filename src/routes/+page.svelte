<script lang="ts">
	import Hero from '$lib/components/shared/Hero.svelte';
	import Section from '$lib/components/shared/Section.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import Shield from '@lucide/svelte/icons/shield';
	import Server from '@lucide/svelte/icons/server';
	import Sprout from '@lucide/svelte/icons/sprout';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import BookOpen from '@lucide/svelte/icons/book-open';
</script>

<svelte:head>
	<title>InfraLivre — O Marco Jurídico do Software Livre no Brasil</title>
	<meta name="description" content="Iniciativa da sociedade civil pela construção de um marco jurídico que proteja o software livre e de código aberto no Brasil." />
	<meta property="og:title" content="InfraLivre — O Marco Jurídico do Software Livre" />
	<meta property="og:description" content="Protegendo quem desenvolve a infraestrutura digital do nosso país." />
</svelte:head>

<!-- 1. Hero — Punchline direto sobre O QUE É o projeto -->
<Hero
	title="O Marco Jurídico do Software Livre"
	subtitle="O InfraLivre é uma iniciativa da sociedade civil para proteger mantenedores, dar segurança jurídica às empresas e preservar a base da infraestrutura digital do Brasil."
>
	<Button href="/proposta" variant="default" size="lg">
		Conheça a proposta
		<ArrowRight class="ml-2 size-4" />
	</Button>
	<Button href="/manifesto" variant="outline" size="lg">
		<BookOpen class="mr-2 size-4" />
		Ler o manifesto
	</Button>
</Hero>

<!-- 2. Imagem destacada do Hero para um DOM mais limpo e visual ampliado -->
<div class="mx-auto max-w-5xl px-4 pb-16 sm:px-6 md:pb-24">
	<img
		src="/images/01.webp"
		alt="Ilustração mostrando colaboração no ecossistema open source"
		class="w-full rounded-2xl border border-border bg-muted/30 object-cover shadow-2xl"
		width="1456"
		height="816"
		loading="eager"
	/>
</div>

<!-- 3. Strip de impacto (Z-pattern) -->
<section class="border-t border-border bg-muted/50 py-10 md:py-14">
	<div class="mx-auto max-w-5xl px-4 sm:px-6">
		<div class="grid gap-8 text-center sm:grid-cols-3">
			<div class="group animate-[fadeUp_0.5s_ease_both] rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:shadow-xl hover:shadow-emerald-500/20">
				<p class="text-3xl font-bold tracking-tight text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:text-emerald-400 sm:text-4xl">90%+</p>
				<p class="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">dos servidores web rodam software livre</p>
			</div>
			<div class="group animate-[fadeUp_0.5s_ease_0.15s_both] rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-amber-500/60 hover:bg-amber-500/10 hover:shadow-xl hover:shadow-amber-500/20">
				<p class="text-3xl font-bold tracking-tight text-amber-600 transition-transform duration-300 group-hover:scale-110 dark:text-amber-400 sm:text-4xl">73%</p>
				<p class="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">dos mantenedores relatam burnout (esgotamento)</p>
			</div>
			<div class="group animate-[fadeUp_0.5s_ease_0.3s_both] rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-red-500/60 hover:bg-red-500/10 hover:shadow-xl hover:shadow-red-500/20">
				<p class="text-3xl font-bold tracking-tight text-red-600 transition-transform duration-300 group-hover:scale-110 dark:text-red-400 sm:text-4xl">0</p>
				<p class="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">leis adequadas à realidade do FOSS no Brasil</p>
			</div>
		</div>
	</div>
</section>

<!-- 4. Contexto da infraestrutura -->
<Section id="contexto" class="border-t border-border">
	<div class="max-w-3xl">
		<span class="text-sm font-semibold uppercase tracking-wider text-primary">A Base</span>
		<h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">A Infraestrutura Invisível</h2>
		<p class="mt-4 text-lg text-muted-foreground">
			Antes de propor regras, precisamos entender o que estamos protegendo. Software livre (código aberto) não é um nicho técnico: é o motor produtivo que viabiliza o Android, a computação em nuvem, a inteligência artificial e a economia digital.
		</p>
		<p class="mt-4 text-lg text-muted-foreground">
			Você usa seus componentes diariamente. Todo grande serviço privado funciona em cima de uma imensa malha colaborativa pública.
		</p>
		<div class="mt-8">
			<Button href="/artigos/software-livre" variant="outline" class="h-10 px-5">
				Entenda seu impacto na sociedade
				<ArrowRight class="ml-2 size-4" />
			</Button>
		</div>
	</div>
</Section>

<!-- 5. O Problema realçado -->
<Section id="problema" class="border-t border-border bg-muted/20">
	<div class="max-w-3xl">
		<span class="text-sm font-semibold uppercase tracking-wider text-destructive">O Risco Atual</span>
		<h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Regulando o alvo errado</h2>
		
		<div class="my-8 rounded-lg border-l-4 border-amber-500 bg-amber-500/10 p-5 text-amber-900 dark:text-amber-200">
			<p class="text-lg font-medium leading-relaxed">
				O direito brasileiro hoje não separa o desenvolvedor de software livre de uma corporação centralizada.
			</p>
		</div>

		<p class="text-lg text-muted-foreground">
			Ao aplicar diretrizes de grandes corporações (Big Techs) sob o desenvolvimento comunitário, o Estado obriga contribuidores voluntários a vigiar usos sobre os quais não possuem poder técnico, capacidade financeira ou controle de governança.
			<br>
			Exigir o impossível apenas aumenta o inchaço burocrático e gera processos abusivos.
		</p>
		<div class="mt-8">
			<Button href="/problema" variant="default" class="h-10 px-5">
				Análise completa do problema
				<ArrowRight class="ml-2 size-4" />
			</Button>
		</div>
	</div>
</Section>

<!-- 6. Argumentação visual -->
<Section id="importancia" class="border-t border-border">
	<div class="max-w-2xl">
		<span class="text-sm font-semibold uppercase tracking-wider text-primary">Por que agir agora?</span>
		<h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">A inércia debilita os sistemas</h2>
		<p class="mt-3 text-lg text-muted-foreground">
			O acúmulo de leis que visam proteger tudo, não protege a sociedade; favorece sim a concentração de poder e a estagnação da inovação. O software livre é um ecossistema vivo, onde a burocracia é o vírus que mata a colaboração.
		</p>
	</div>
	<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		<Card.Root class="group relative overflow-hidden border-blue-500/20 bg-blue-500/5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 dark:border-blue-500/20 dark:bg-blue-500/10 dark:hover:border-blue-500/40">
			<div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100"></div>
			<Card.Header class="relative z-10">
				<Shield class="mb-3 size-8 text-blue-600 transition-all duration-300 group-hover:scale-110 dark:text-blue-400" />
				<Card.Title class="text-blue-700 transition-colors duration-300 dark:text-blue-300">Segurança aos Contribuidores</Card.Title>
			</Card.Header>
			<Card.Content class="relative z-10">
				<p class="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
					Desenvolvedores requerem fronteiras jurídicas compreensíveis onde a responsabilidade convirja perfeitamente com a governança prática.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root class="group relative overflow-hidden border-indigo-500/20 bg-indigo-500/5 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/20 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:hover:border-indigo-500/40">
			<div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100"></div>
			<Card.Header class="relative z-10">
				<Server class="mb-3 size-8 text-indigo-600 transition-all duration-300 group-hover:scale-110 dark:text-indigo-400" />
				<Card.Title class="text-indigo-700 transition-colors duration-300 dark:text-indigo-300">Estabilidade de Serviços</Card.Title>
			</Card.Header>
			<Card.Content class="relative z-10">
				<p class="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
					Ferramentas vitais aos bancos, saúde e serviços estatais não contam com planos B imediatos. Preservá-las abertas é uma questão de defesa.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root class="group relative overflow-hidden border-emerald-500/20 bg-emerald-500/5 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/20 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:hover:border-emerald-500/40">
			<div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100"></div>
			<Card.Header class="relative z-10">
				<Sprout class="mb-3 size-8 text-emerald-600 transition-all duration-300 group-hover:scale-110 dark:text-emerald-400" />
				<Card.Title class="text-emerald-700 transition-colors duration-300 dark:text-emerald-300">Sustentabilidade Comunitária</Card.Title>
			</Card.Header>
			<Card.Content class="relative z-10">
				<p class="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
					Projetos fundamentais definham por esgotamento de equipes. Diminuir o peso regulatório permite a colaboração se erguer.
				</p>
			</Card.Content>
		</Card.Root>
	</div>
</Section>

<!-- 7. Inversão drástica: The Ultimate CTA -->
<section class="border-t border-zinc-800 bg-zinc-950 py-20 text-center text-zinc-50 dark:border-zinc-200 dark:bg-zinc-50 dark:text-zinc-950">
	<div class="mx-auto max-w-3xl px-4 sm:px-6">
		<p class="text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">O que defendemos</p>
		<h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
			Um Marco focado em competência e realidade viável
		</h2>
		<p class="mt-5 text-lg text-zinc-300 dark:text-zinc-600 sm:text-xl">
			Os <strong class="font-semibold text-white dark:text-black">5 Pilares do InfraLivre</strong> estabelecem 
			defesas, princípios e reconhecimentos que protegem os times de ponta contra exigências insanas.
		</p>
		
		<div class="mt-10 flex flex-wrap items-center justify-center gap-4">
			<a
				href="/proposta"
				class="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-base font-semibold text-zinc-950 shadow-sm transition-all hover:bg-zinc-200 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-800"
			>
				Ver a Proposta Completa
				<ArrowRight class="ml-2 size-5" />
			</a>
			<a
				href="/apoio"
				class="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-800 bg-transparent px-8 text-base font-medium transition-colors hover:bg-zinc-900 dark:border-zinc-300 dark:hover:bg-zinc-100"
			>
				Quero Somar Forças
			</a>
		</div>
	</div>
</section>
