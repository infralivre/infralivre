<script lang="ts">
	import Container from './Container.svelte';
	import Github from '@lucide/svelte/icons/github';
	import Network from '@lucide/svelte/icons/network';
	import ExternalLink from '@lucide/svelte/icons/external-link';
</script>

<footer class="relative overflow-hidden border-t border-border bg-background/95 pb-8 pt-16 backdrop-blur-sm">
	<div class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(150,150,150,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(150,150,150,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,#000_70%,transparent_100%)] opacity-20 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]"></div>

	<Container class="relative z-10">
		<div class="grid gap-12 lg:grid-cols-12">
			<!-- Brand -->
			<div class="flex flex-col gap-4 lg:col-span-5">
				<a href="/" class="group flex items-center gap-2.5">
					<div class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
						<Network class="size-5" />
					</div>
					<span class="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
						InfraLivre
					</span>
				</a>
				<p class="mt-2 max-w-sm text-balance text-sm leading-relaxed text-muted-foreground">
					Defendendo uma Infraestrutura Digital Livre, Aberta e Segura. Porque o alicerce da nossa sociedade conectada pertence a todos nós.
				</p>
			</div>

			<!-- Nav -->
			<div class="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
				<div>
					<h3 class="text-sm font-semibold text-foreground">Conteúdo</h3>
					<nav class="mt-4 flex flex-col gap-3">
						<a href="/artigos" class="group flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
							<span class="transition-transform group-hover:translate-x-1">Artigos</span>
						</a>
						<a href="/manifesto" class="group flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
							<span class="transition-transform group-hover:translate-x-1">Manifesto</span>
						</a>
						<a href="/problema" class="group flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
							<span class="transition-transform group-hover:translate-x-1">O Problema</span>
						</a>
					</nav>
				</div>

				<div>
					<h3 class="text-sm font-semibold text-foreground">Engajamento</h3>
					<nav class="mt-4 flex flex-col gap-3">
						<a href="/proposta" class="group flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
							<span class="transition-transform group-hover:translate-x-1">A Proposta</span>
						</a>
						<a href="/apoio" class="group flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
							<span class="transition-transform group-hover:translate-x-1">Como Apoiar</span>
						</a>
					</nav>
				</div>

				<!-- Links / Social -->
				<div>
					<h3 class="text-sm font-semibold text-foreground">Comunidade</h3>
					<nav class="mt-4 flex flex-col gap-3">
						<a
							href="https://github.com/infralivre/infralivre"
							target="_blank"
							rel="noopener"
							class="group flex w-fit items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
						>
							<Github class="size-3.5" />
							<span>GitHub</span>
							<ExternalLink class="ml-1 size-3 opacity-50" />
						</a>
					</nav>
				</div>
			</div>
		</div>

		<div class="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
			<p class="text-xs text-muted-foreground">
				&copy; {new Date().getFullYear()} InfraLivre. Desenvolvido para a internet aberta.
			</p>
			
			<div class="flex gap-4">
				<a href="https://github.com/infralivre/infralivre/blob/main/LICENSE.md" class="text-xs text-muted-foreground transition-colors hover:text-primary hover:underline">
					Licença
				</a>
				<a href="/artigos" class="text-xs text-muted-foreground transition-colors hover:text-primary hover:underline">
					Privacidade
				</a>
			</div>
		</div>
	</Container>
</footer>
