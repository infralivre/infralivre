<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import CallToAction from '$lib/components/shared/CallToAction.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import Shield from '@lucide/svelte/icons/shield';
	import Server from '@lucide/svelte/icons/server';
	import Sprout from '@lucide/svelte/icons/sprout';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Box from '@lucide/svelte/icons/box';
	import Wifi from '@lucide/svelte/icons/wifi';
	import Cpu from '@lucide/svelte/icons/cpu';
</script>

<svelte:head>
	<title>InfraLivre — O Marco Jurídico da Infraestrutura Livre no Brasil</title>
	<meta name="description" content="Iniciativa da sociedade civil pela construção de um marco jurídico que proteja o software livre, hardware aberto, serviços descentralizados e redes livres no Brasil." />
	<meta property="og:title" content="InfraLivre — O Marco Jurídico da Infraestrutura Livre" />
	<meta property="og:description" content="Protegendo quem desenvolve a infraestrutura digital do nosso país." />
</svelte:head>

<!-- 1. Hero — Punchline direto sobre O QUE É o projeto -->
<div class="relative overflow-hidden bg-zinc-950 text-zinc-50 dark:bg-black">
	<div class="py-16 sm:py-24 lg:py-32">
		<div class="mx-auto max-w-5xl px-4 text-center sm:px-6">
			<h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
				O Marco Jurídico da <br/><span class="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Infraestrutura Livre</span>
			</h1>
			<p class="mx-auto mt-6 max-w-3xl text-xl leading-8 text-zinc-300 sm:text-2xl">
				Visualize a internet, seu banco, o controle de tráfego, o posto de saúde. <strong>Tudo está conectado.</strong> 
				Sustentado por uma malha pública construída por milhares de voluntários. Contudo, leis feitas para o controle corporativo estão esmagando as próprias pessoas e fundações que nos mantêm online.
			</p>
			
			<div class="mt-10 flex flex-wrap items-center justify-center gap-4">
				<a href="/proposta" class="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-8 transition-colors">
					A Proposta Definitiva
					<ArrowRight class="ml-2 size-5" />
				</a>
				<a href="#anatomia" class="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-50 font-medium px-8 backdrop-blur-sm transition-colors">
					O que estamos defendendo?
				</a>
			</div>
		</div>
	</div>
</div>

<!-- 3. Strip de impacto (Z-pattern) -->
<section class="border-t border-border bg-muted/50 py-10 md:py-14">
	<div class="mx-auto max-w-5xl px-4 sm:px-6">
		<div class="grid gap-8 text-center sm:grid-cols-3">
			<div class="group animate-[fadeUp_0.5s_ease_both] rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:shadow-xl hover:shadow-emerald-500/20">
				<p class="text-3xl font-bold tracking-tight text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:text-emerald-400 sm:text-4xl">90%+</p>
				<p class="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">da web roda sobre software e infraestrutura livre</p>
			</div>
			<div class="group animate-[fadeUp_0.5s_ease_0.15s_both] rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-amber-500/60 hover:bg-amber-500/10 hover:shadow-xl hover:shadow-amber-500/20">
				<p class="text-3xl font-bold tracking-tight text-amber-600 transition-transform duration-300 group-hover:scale-110 dark:text-amber-400 sm:text-4xl">73%</p>
				<p class="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">dos mantenedores relatam burnout (esgotamento)</p>
			</div>
			<div class="group animate-[fadeUp_0.5s_ease_0.3s_both] rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-red-500/60 hover:bg-red-500/10 hover:shadow-xl hover:shadow-red-500/20">
				<p class="text-3xl font-bold tracking-tight text-red-600 transition-transform duration-300 group-hover:scale-110 dark:text-red-400 sm:text-4xl">0</p>
				<p class="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">leis adequadas à realidade tecnológica aberta no Brasil</p>
			</div>
		</div>
	</div>
</section>

<!-- 4. Contexto da infraestrutura & Blocos (Arco 2) -->
<Section id="anatomia" class="border-t border-border">
	<div class="mx-auto max-w-3xl text-center">
		<span class="text-sm font-semibold uppercase tracking-wider text-primary">A Base</span>
		<h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">A Anatomia da Infraestrutura</h2>
		<p class="mt-4 text-lg text-muted-foreground">
			Você usa esses componentes diariamente de forma invisível. O "InfraLivre" existe porque não estamos defendendo apenas linhas de código paradas, mas <strong>ecossistemas produtivos vivos repartidos em quatro pilares da tecnologia livre.</strong>
		</p>
	</div>

	<div class="mx-auto mt-16 max-w-5xl grid gap-8 md:grid-cols-2">
		<!-- Software -->
		<div class="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
			<div class="mb-4 flex size-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
				<Box class="size-6 transition-transform group-hover:scale-110 group-hover:rotate-6" />
			</div>
			<h3 class="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">Software Aberto</h3>
			<p class="text-muted-foreground">
				Bibliotecas, frameworks e sistemas operacionais (como Linux) que compõem 90% dos servidores modernos. Milhões de contribuintes escrevem o código base que permite que a internet sequer funcione.
			</p>
		</div>

		<!-- Serviço -->
		<div class="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
			<div class="mb-4 flex size-12 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400">
				<Server class="size-6 transition-transform group-hover:scale-110 group-hover:rotate-6" />
			</div>
			<h3 class="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">Serviços Descentralizados</h3>
			<p class="text-muted-foreground">
				Plataformas hospedadas de forma federada onde a comunidade governa e opera os servidores — evitando monopólios digitais e promovendo redes sociais onde você é dono dos seus próprios dados.
			</p>
		</div>

		<!-- Rede -->
		<div class="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
			<div class="mb-4 flex size-12 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400">
				<Wifi class="size-6 transition-transform group-hover:scale-110 group-hover:-rotate-6" />
			</div>
			<h3 class="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">Redes Livres</h3>
			<p class="text-muted-foreground">
				Protocolos de conexão autônomos e malhas comunitárias de internet (mesh networks) construídas para conectar áreas remotas. Infraestruturas onde a estabilidade dependa dos participantes, não de provedores privados corporativos.
			</p>
		</div>

		<!-- Hardware -->
		<div class="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
			<div class="mb-4 flex size-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
				<Cpu class="size-6 transition-transform group-hover:scale-110 group-hover:-rotate-6" />
			</div>
			<h3 class="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">Hardware Aberto</h3>
			<p class="text-muted-foreground">
				Diagramas de circuitos, placas, chips (como RISC-V) e impressões 3D com propriedades livres. Significa ter o direito a reparar seus próprios bens e impulsionar a educação científica democratizada além das restrições de patentes.
			</p>
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
				O direito brasileiro hoje não separa o desenvolvedor de arquiteturas abertas da entidade corporativa centralizada.
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
			O acúmulo de leis que visam proteger tudo, não protege a sociedade; favorece sim a concentração de poder e a estagnação da inovação. A infraestrutura livre é um ecossistema vivo, onde a burocracia desajustada é o vírus que mata a colaboração de softwares, hardwares ou redes abertas.
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
<CallToAction
	title="Um Marco focado em competência e realidade viável"
	description="Os 5 Pilares do InfraLivre estabelecem defesas, princípios e reconhecimentos que protegem os times de ponta contra exigências regulatórias insanas."
	class="border-t border-zinc-800"
>
	<Button href="/proposta" size="lg" class="h-12 w-full gap-2 rounded-full px-8 text-base shadow-xl sm:w-auto">
		Ver a Proposta Completa
		<ArrowRight class="size-4" />
	</Button>
	<Button href="/apoio" variant="outline" size="lg" class="h-12 w-full gap-2 rounded-full border-zinc-700 bg-zinc-900/50 px-8 text-base text-zinc-300 hover:bg-zinc-800 hover:text-white sm:w-auto">
		Quero Somar Forças
	</Button>
</CallToAction>
