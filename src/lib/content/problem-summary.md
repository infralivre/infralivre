## O problema

A infraestrutura digital contemporânea depende, em todas as suas camadas, de arquiteturas livres e abertas: **software livre** (Linux, Apache, PostgreSQL), **hardware aberto** (RISC-V, Arduino, CERN-OHL), **serviços abertos** (Mastodon, Matrix, PeerTube, Nextcloud, GitLab CE), **redes livres** (Freifunk, Guifi.net, Meshtastic) e **dados abertos** (OpenStreetMap, Wikidata, Common Voice, LLaMA, BLOOM, Stable Diffusion — incluindo modelos abertos de IA, tratados como dados). Mais de 90% dos softwares modernos dependem de componentes abertos. Juntas, essas cinco camadas constituem **infraestrutura crítica da sociedade digital**.

## O desalinhamento

A legislação parte de uma premissa implícita: a existência de um agente com controle sobre o sistema, sua operação e seus usuários. Esse modelo funciona para plataformas centralizadas e fabricantes com cadeia de controle definida. Ele **não descreve a infraestrutura livre**.

Na infraestrutura livre, quem cria não controla quem opera, e quem opera não controla quem usa. Publicar **não equivale a operar**. Projetar **não equivale a fabricar**. Hospedar **não equivale a controlar**.

Ainda assim, normas vêm sendo aplicadas de forma indistinta, atribuindo a criadores, operadores e empresas que mantêm infraestrutura livre responsabilidades que **pressupõem um controle que não existe**.

## As cinco dimensões do problema

O desalinhamento entre norma e realidade técnica se manifesta em cinco eixos convergentes:

1. **Incerteza jurídica** — disputas de PI paralisam o software (SCO v. Linux, Oracle v. Google), licenças de hardware nunca foram testadas em tribunal, operadores de serviços abertos não sabem qual jurisdição os alcança, redes comunitárias existem em limbo regulatório, status jurídico de datasets e modelos de IA abertos é indeterminado (proteção sui generis vs. domínio público, pesos de IA entre obra e dado)
2. **Responsabilização indevida** — desenvolvedores criminalizados por código publicado (Tornado Cash), projetistas tratados como fabricantes (CRA), operadores de instâncias notificados por conteúdo federado (NetzDG), voluntários de redes Wi-Fi processados por atos de terceiros (Störerhaftung), litigância predatória de *patent trolls* contra fundações (GNOME v. Rothschild), cláusulas genéricas de cessão de PI que alcançam contribuições fora do escopo de trabalho, compiladores de datasets responsabilizados por erros de downstream, provedores de modelos abertos de IA enquadrados como fornecedores de alto risco (EU AI Act)
3. **Obrigações incompatíveis** — varredura obrigatória em código aberto (Chat Control), prazos corporativos impostos a voluntários (NIS2), moderação centralizada exigida de redes federadas (DSA), interceptação em redes mesh sem ponto central, bloqueio colateral de infraestrutura livre por ações de DNS/IP contra terceiros (Roskomnadzor/Telegram), remoção de repositórios por notificação extrajudicial (youtube-dl/DMCA), direito ao apagamento incompatível com datasets distribuídos, rastreabilidade de dados de treinamento de IA impossível em escala, anonimização perfeita como exigência inatingível
4. **Barreiras operacionais** — app stores como gatekeepers, certificação de hardware proibitiva, requisitos de estrutura jurídica para operar serviços abertos, licenciamento de espectro que impede redes mesh de escalar, concentração de capacidade computacional para treinamento de IA em big tech, custos de hospedagem e distribuição de datasets sem incentivos ou isenções, dados governamentais abertos com implementação fragmentada e inconsistente
5. **Fragilidade econômica** — tributação que penaliza importação de componentes e operação de serviços abertos, editais que exigem CNPJ e excluem projetos comunitários, inexistência de figura jurídica para projetos descentralizados e transnacionais, menos de 5% dos projetos críticos com financiamento suficiente, sobrecarga de mantenedores e empresas que sustentam o ecossistema, ausência de incentivos fiscais para curadoria de datasets e treinamento comunitário de modelos de IA

## A distinção que o direito ignora

No centro do problema está a ausência de separação entre papéis que, na infraestrutura livre, são estruturalmente independentes:

- **Criação** — quem escreve código, projeta hardware, desenvolve protocolos, especifica arquiteturas de rede, compila datasets ou treina modelos de IA
- **Operação** — quem implanta software, fabrica dispositivos, opera instâncias, mantém nós, hospeda e distribui dados
- **Uso** — quem executa, utiliza, publica conteúdo, se conecta, consulta dados ou treina sobre eles

Em modelos centralizados comerciais, esses papéis se sobrepõem. Na infraestrutura livre, são **separados por design** — e nenhum agente possui controle sobre os demais.

## As consequências

Os efeitos já são visíveis: instâncias Mastodon fechadas por impossibilidade regulatória, nós Freifunk desativados por medo de responsabilização, ataques como XZ Utils e Log4Shell explorando a exaustão de mantenedores, fragmentação jurisdicional de redes federadas, concentração crescente em fornecedores proprietários, bloqueios colaterais de IP e DNS que derrubam infraestrutura livre, remoção de repositórios de código por notificação extrajudicial, litigância predatória consumindo recursos de fundações e projetos, contribuidores que deixam de participar por receio de cláusulas de cessão de PI, e concentração da camada de IA e dados em poucas corporações que controlam modelos, datasets e capacidade computacional.

Se o enquadramento não for adaptado, as tendências convergem para erosão da base de mantenedores, aumento de superfície de ataque, consolidação de dependência proprietária, perda de soberania tecnológica e concentração irreversível da capacidade de produção e distribuição de conhecimento e IA.

## O ponto central

> **Não se pode exigir controle onde ele não existe.**

A infraestrutura livre precisa de tratamento jurídico adequado à sua realidade técnica e organizacional. Isso não significa privilégio. Significa **correção de enquadramento** — fazer a responsabilidade recair onde há controle real, e não sobre quem cria, projeta ou compartilha infraestrutura aberta — seja contribuidor individual, projeto comunitário ou empresa cujo modelo é construído sobre essa infraestrutura.

A adaptação normativa não é opcional. É uma **condição necessária para preservar a integridade da infraestrutura digital contemporânea**.
