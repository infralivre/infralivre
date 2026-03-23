# A lacuna jurídica da infraestrutura livre e aberta

## Contexto

A infraestrutura digital contemporânea depende, em todas as suas camadas, de arquiteturas livres e abertas.

**Software livre** — sistemas operacionais como o [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel), servidores como [Apache HTTP Server](https://httpd.apache.org/) e [Nginx](https://nginx.org/), bancos de dados como [PostgreSQL](https://www.postgresql.org/), linguagens de programação e bibliotecas — constitui a base sobre a qual praticamente toda a economia digital opera. Segundo a [Linux Foundation](https://www.linuxfoundation.org/) e o [Open Source Security Foundation (OpenSSF)](https://openssf.org/), mais de 90% dos softwares modernos dependem, direta ou indiretamente, de componentes abertos.

**Hardware aberto** — arquiteturas como [RISC-V](https://riscv.org/), plataformas como [Arduino](https://www.arduino.cc/) e [Raspberry Pi](https://www.raspberrypi.org/), designs publicados sob [CERN Open Hardware Licence](https://ohwr.org/cernohl) e iniciativas como o [Open Compute Project](https://www.opencompute.org/) — possibilita que dispositivos sejam projetados, auditados e fabricados sem dependência de fornecedores proprietários.

**Serviços descentralizados** — protocolos federados como [ActivityPub](https://www.w3.org/TR/activitypub/) (base do [Mastodon](https://joinmastodon.org/)), [Matrix](https://matrix.org/) e [XMPP](https://xmpp.org/), além de plataformas como [PeerTube](https://joinpeertube.org/) e [Nextcloud](https://nextcloud.com/) — permitem que comunicação, colaboração e publicação de conteúdo funcionem sem controle centralizado.

**Redes livres** — redes comunitárias como [Freifunk](https://freifunk.net/) e [Guifi.net](https://guifi.net/), protocolos mesh como [Meshtastic](https://meshtastic.org/), infraestruturas de IoT baseadas em [LoRaWAN](https://lora-alliance.org/about-lorawan/) e firmwares como [OpenWrt](https://openwrt.org/) — fornecem conectividade onde operadoras comerciais não chegam e garantem autonomia operacional sobre a infraestrutura de rede.

Essas quatro camadas não são setores periféricos. Juntas, constituem a **infraestrutura crítica da sociedade digital** — da qual dependem sistemas governamentais, cadeias produtivas, serviços financeiros, infraestruturas de saúde e mecanismos de participação democrática.

Apesar dessa centralidade, os ordenamentos jurídicos — o brasileiro e muitos outros — não foram concebidos para lidar com as características estruturais desse ecossistema:

- desenvolvimento distribuído e global, sem sede ou jurisdição única  
- ausência de comando central ou hierarquia definida  
- participação voluntária, assíncrona e descentralizada  
- impossibilidade prática de controle sobre o uso final  
- inexistência de relação direta entre quem cria, quem opera e quem usa  

O resultado é um cenário crescente de **insegurança jurídica sistêmica** que atinge todas as camadas simultaneamente.

---

## O problema estrutural

A legislação parte de uma premissa implícita: a existência de um agente identificável com controle sobre o sistema, sua operação e seus usuários. Esse modelo é compatível com plataformas centralizadas, prestadores de serviço e fabricantes com cadeia de controle definida. Ele **não descreve o funcionamento da infraestrutura livre**.

Na infraestrutura livre, quem cria não controla quem opera, e quem opera não controla quem usa. O código é clonado de repositórios, o design é fabricado por terceiros, o serviço é operado por instâncias independentes, a rede é formada por nós autônomos. Publicar **não equivale a operar**. Projetar **não equivale a fabricar**. Hospedar **não equivale a controlar**.

Essa separação estrutural entre criação, operação e uso é reconhecida pelas próprias licenças do ecossistema — como a [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.html), a [MIT](https://opensource.org/license/mit/) e a [CERN-OHL](https://ohwr.org/cernohl) — que explicitamente negam garantias e responsabilidades sobre usos posteriores.

Ainda assim, normas vêm sendo aplicadas de forma indistinta, atribuindo a criadores e operadores voluntários responsabilidades que **pressupõem um controle que eles não possuem e não podem possuir**.

O desalinhamento se manifesta em cinco dimensões convergentes:

1. **Incerteza jurídica** — ausência de marcos claros gera litígios, efeito supressor e retração do ecossistema  
2. **Responsabilização indevida** — a lei atinge quem criou ou publicou, não quem efetivamente controla  
3. **Obrigações incompatíveis** — regulações impõem exigências que presumem arquiteturas centralizadas  
4. **Barreiras operacionais** — requisitos de conformidade, certificação e licenciamento favorecem modelos corporativos  
5. **Fragilidade econômica** — tributação, ausência de financiamento, impossibilidade de formalização e sobrecarga de mantenedores comprometem a sustentabilidade  

Cada uma dessas dimensões é documentada com evidências na seção a seguir.  

---

## Evidência histórica do problema

Esse desalinhamento não é recente. Ele acompanha o ecossistema livre há décadas!

### 1. Incerteza jurídica e disputas estruturais sobre infraestrutura livre

A história da infraestrutura livre é pontuada por disputas jurídicas que revelam a incompatibilidade entre modelos regulatórios tradicionais e o funcionamento real do ecossistema aberto. Essa incerteza não se limita ao software — ela atravessa **todas as quatro camadas**: software livre, hardware aberto, serviços descentralizados e redes livres.

#### Software livre

##### Propriedade intelectual e licenciamento

Um caso emblemático foi o processo [SCO Group, Inc. v. Novell, Inc.](https://en.wikipedia.org/wiki/SCO_Group,_Inc._v._Novell,_Inc.) (2004–2010), em que a SCO alegou ser detentora de direitos sobre partes do código do Linux e processou empresas que o utilizavam. Mesmo sem comprovação das alegações centrais, o processo gerou **anos de incerteza sobre o uso empresarial do Linux**, com efeitos colaterais em toda a cadeia de adoção corporativa de software livre.

De forma similar, a disputa [Oracle America, Inc. v. Google LLC](https://en.wikipedia.org/wiki/Google_LLC_v._Oracle_America,_Inc.) (2010–2021) levantou questões fundamentais sobre interoperabilidade e reutilização de APIs — temas centrais para o funcionamento de ecossistemas tecnológicos abertos. O caso só foi resolvido pela Suprema Corte dos EUA após mais de uma década, consolidando o entendimento de *fair use* para APIs, mas deixando claro que a ausência de marcos claros gera litígios prolongados e custosos.

A [Software Freedom Conservancy](https://sfconservancy.org/) e a [Free Software Foundation (FSF)](https://www.fsf.org/) documentam que disputas envolvendo a [GPL](https://www.gnu.org/licenses/gpl-3.0.html) e outras licenças copyleft continuam frequentes, muitas vezes porque empresas incorporam código livre em produtos proprietários sem cumprir as obrigações da licença, ou porque regulações tratam software livre como se fosse software comercial tradicional.

##### Exportação, criptografia e controle de publicação

O software livre historicamente enfrentou conflitos com leis de controle de exportação. O caso [Bernstein v. United States](https://en.wikipedia.org/wiki/Bernstein_v._United_States) (1995–1999) foi pioneiro ao estabelecer que **código-fonte é forma de expressão protegida** pela Primeira Emenda. Daniel Bernstein havia sido proibido de publicar código criptográfico por regulações do [EAR (Export Administration Regulations)](https://www.bis.gov/ear) dos EUA, que classificavam criptografia como munição.

Embora esse entendimento tenha sido parcialmente incorporado à jurisprudência americana, variações dessas restrições persistem em outros países. A [Wassenaar Arrangement](https://www.wassenaar.org/) — acordo multilateral de controle de exportação — inclui softwares de vigilância e criptografia em suas listas, o que pode afetar indiretamente a publicação de ferramentas livres de segurança.

A [Electronic Frontier Foundation (EFF)](https://www.eff.org/issues/coders) mantém documentação ativa sobre como legislações de controle de exportação, vigilância e cibersegurança podem atingir desenvolvedores de software livre, mesmo quando a publicação é feita em repositórios abertos e acessíveis globalmente.

##### Responsabilidade civil e ausência de garantias

No âmbito da responsabilidade civil, o software livre opera sob um princípio explícito: licenças como a [GPL](https://www.gnu.org/licenses/gpl-3.0.html), [MIT](https://opensource.org/license/mit/), [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) e [BSD](https://opensource.org/license/bsd-2-clause/) incluem cláusulas de *disclaimer* que negam garantias e responsabilidades sobre o uso do software.

No entanto, marcos regulatórios de proteção ao consumidor — como o [Código de Defesa do Consumidor (CDC)](https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm) no Brasil — podem ser interpretados de forma a responsabilizar quem distribuiu o software, mesmo quando a distribuição é gratuita e sem relação comercial. A [Free Software Foundation Europe (FSFE)](https://fsfe.org/) aponta que a interação entre licenças livres e legislações nacionais de proteção ao consumidor é uma das áreas de **maior insegurança jurídica** para o ecossistema.

Estudos da [Open Source Initiative (OSI)](https://opensource.org/) e da [Linux Foundation](https://www.linuxfoundation.org/research) indicam que, em diversas jurisdições, não há clareza sobre se a cláusula de isenção de garantia de uma licença livre prevalece sobre normas locais de proteção ao consumidor — especialmente quando o software é incorporado em produtos comerciais por terceiros.

#### Hardware aberto

##### Licenciamento e propriedade intelectual

Diferentemente do software, onde licenças como GPL e MIT possuem décadas de jurisprudência, o **licenciamento de hardware aberto é juridicamente imaturo**. A [CERN Open Hardware Licence (CERN-OHL)](https://ohwr.org/cernohl) — nas suas variantes permissiva, fracamente recíproca e fortemente recíproca — foi publicada apenas em 2011, com a versão 2.0 datando de 2020. Não há casos judiciais significativos testando sua validade ou escopo em tribunais.

A [Open Source Hardware Association (OSHWA)](https://www.oshwa.org/) aponta que a própria definição de "obra derivada" em hardware é ambígua: se alguém modifica um esquemático publicado sob CERN-OHL-S (fortemente recíproca) e fabrica o produto, **em que ponto as obrigações de reciprocidade se aplicam?** A resposta varia conforme a jurisdição e não foi testada em litígio.

Além disso, o ecossistema de hardware aberto é vulnerável a **patent trolls**. Designs publicados abertamente podem ser reivindicados por entidades que registram patentes sobre implementações similares. A [RISC-V Foundation](https://riscv.org/) enfrenta esse desafio: enquanto a ISA é aberta, implementações específicas podem ser alvo de disputas patentárias. A [Open Invention Network (OIN)](https://www.openinventionnetwork.com/) oferece proteção cruzada de patentes para software Linux, mas **não existe mecanismo equivalente consolidado para hardware aberto**.

##### Certificação, conformidade e controles de exportação

Produtos eletrônicos exigem certificações de segurança e conformidade — [marcação CE](https://ec.europa.eu/growth/single-market/ce-marking_en) na UE, [FCC](https://www.fcc.gov/) nos EUA, [ANATEL](https://www.gov.br/anatel/) no Brasil. Quando um projetista publica um design aberto de um transceptor de rádio ou uma placa com componentes de RF, **quem é responsável pela certificação?** O projetista original não controla quem fabrica, com quais componentes ou em qual frequência o dispositivo será operado.

A [OSHWA](https://www.oshwa.org/2023/02/17/open-source-hardware-and-the-eu-cra/) documenta que marcos regulatórios de conformidade de produto presumem uma cadeia fabricante-distribuidor-consumidor que simplesmente **não existe** no modelo aberto. A publicação de um design não é uma colocação de produto no mercado, mas é frequentemente tratada como tal.

No âmbito de controles de exportação, designs de chips — incluindo arquiteturas abertas como [RISC-V](https://riscv.org/) — podem ser alcançados pelas restrições do [CHIPS and Science Act](https://www.congress.gov/bill/117th-congress/house-bill/4346) (EUA) e pelos controles de exportação de semicondutores impostos ao longo de 2022–2024. A [Wassenaar Arrangement](https://www.wassenaar.org/) também cobre tecnologias de semicondutores, criando **incerteza sobre se a publicação aberta de designs de chips constitui "exportação" de tecnologia controlada**.

#### Serviços descentralizados

##### Indefinição jurisdicional

Serviços federados como [Mastodon](https://joinmastodon.org/), [Matrix](https://matrix.org/) e [PeerTube](https://joinpeertube.org/) operam através de instâncias distribuídas em múltiplas jurisdições. Um usuário na França pode interagir com conteúdo hospedado na Alemanha, replicado em um servidor no Brasil, através de um protocolo desenvolvido nos EUA. A questão de **qual legislação se aplica** — e a quem — permanece largamente indefinida.

O [Regulamento Geral de Proteção de Dados (GDPR)](https://gdpr.eu/) da UE ilustra essa incerteza: quando um operador de instância Mastodon na Alemanha federa com instâncias fora da UE, ele é o "controlador de dados" do conteúdo federado que transita pelo seu servidor? Deve firmar acordos de processamento de dados com cada instância federada? A [European Data Protection Board (EDPB)](https://edpb.europa.eu/) não emitiu orientações específicas para serviços federados, deixando operadores voluntários em **limbo jurídico**.

A [Article 19](https://www.article19.org/) e o [CDT](https://cdt.org/) documentam que a ausência de enquadramento jurídico para serviços distribuídos cria um cenário onde operadores conservadores simplesmente bloqueiam toda federação com instâncias de fora do seu bloco regulatório — **fragmentando a rede e anulando o propósito da descentralização**.

##### Status jurídico do operador voluntário

Na maioria das jurisdições, não existe uma categoria jurídica adequada para o operador voluntário de infraestrutura pública digital. Um administrador de instância Matrix não é um "provedor de serviços de telecomunicações", não é uma "plataforma digital" nos termos do [DSA](https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package), e não é um "provedor de aplicações de internet" nos termos do [Marco Civil da Internet (Lei 12.965/14)](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm) — mas pode ser enquadrado em qualquer uma dessas categorias dependendo da interpretação.

Relatórios da [Internet Society (ISOC)](https://www.internetsociety.org/) apontam que essa indefinição cria uma assimetria perversa: operadores voluntários assumem riscos jurídicos equivalentes aos de plataformas comerciais, mas sem nenhuma das suas capacidades financeiras ou legais para lidar com esses riscos.

#### Redes livres

##### Status regulatório ambíguo

Redes comunitárias ocupam um **espaço regulatório indefinido** entre telecomunicações e uso pessoal. A [Lei Geral de Telecomunicações (Lei 9.472/97)](https://www.planalto.gov.br/ccivil_03/leis/l9472.htm) no Brasil define telecomunicações de forma ampla o suficiente para alcançar redes comunitárias, mas sem reconhecê-las como categoria distinta. Uma rede [Meshtastic](https://meshtastic.org/) ou um ponto de acesso [Freifunk](https://freifunk.net/) pode ser interpretado como serviço de telecomunicações, como rede privada, ou como uso pessoal de espectro não licenciado — dependendo de quem interpreta.

Na UE, o [Código Europeu de Comunicações Eletrônicas (EECC)](https://digital-strategy.ec.europa.eu/en/policies/eu-electronic-communications-code) reconheceu em 2018 a existência de redes comunitárias como categoria distinta — mas a transposição para legislações nacionais é desigual. A [Association for Progressive Communications (APC)](https://www.apc.org/en/pubs/community-networks-and-spectrum) documenta que, em 2024, menos da metade dos Estados-membros da UE havia transposto disposições específicas para redes comunitárias.

No Brasil, a [ANATEL](https://www.gov.br/anatel/) avançou com categorias como o [SCM de pequeno porte](https://www.gov.br/anatel/pt-br/regulado/outorga/servico-de-comunicacao-multimidia-scm), mas os requisitos continuam desproporcionais para organizações comunitárias sem CNPJ ou contabilidade formal.

##### Licenciamento de espectro e publicação de especificações

A publicação de especificações de protocolos de rádio e designs de antena também enfrenta incerteza jurídica. Dispositivos de rádio definido por software ([SDR](https://en.wikipedia.org/wiki/Software-defined_radio)) podem ser reconfigurados para operar em faixas não autorizadas. A [FCC](https://www.fcc.gov/) nos EUA tem historicamente exigido que firmwares de roteadores sejam bloqueados para impedir modificação de parâmetros de rádio — posição que conflita diretamente com o princípio de software livre.

Em 2015, a FCC propôs regras que teriam efetivamente **proibido firmware de código aberto em roteadores Wi-Fi**. A campanha [Save WiFi](https://www.savewifi.org/) — coordenada pela [Free Software Foundation (FSF)](https://www.fsf.org/campaigns/wifi), [OpenWrt](https://openwrt.org/), [Software Freedom Law Center (SFLC)](https://softwarefreedom.org/) e outros — conseguiu que a regra final distinguisse entre software do rádio e software do sistema operacional, mas a tensão estrutural permanece: **reguladores de espectro e defensores de software livre operam com premissas incompatíveis** sobre controle de dispositivos.

A [Dynamic Spectrum Alliance](https://dynamicspectrumalliance.org/) aponta que modelos de espectro compartilhado e dinâmico poderiam resolver essa tensão, mas a regulação atual em praticamente todas as jurisdições ainda opera sob o paradigma de alocação fixa e dispositivos certificados de fábrica.

#### O padrão transversal

Em todas as camadas, o padrão se repete: **a ausência de marcos jurídicos específicos para infraestrutura livre gera incerteza que funciona como barreira**. Não é necessário que a lei proíba — basta que não esclareça, para que o risco jurídico desincentive a participação.

- no software, disputas de PI e licenciamento duram décadas e geram efeito sistêmico  
- no hardware, licenças não testadas, patent trolls e ambiguidade sobre certificação travam o ecossistema  
- nos serviços, a indefinição jurisdicional e a ausência de categorias adequadas para operadores voluntários fragmentam a rede  
- nas redes, o limbo entre telecomunicações e uso pessoal impede a escalabilidade de modelos comunitários  

Essas disputas demonstram como **interpretações jurídicas desalinhadas com a realidade técnica podem gerar efeitos sistêmicos duradouros** — não apenas para as partes envolvidas, mas para todo o ecossistema que depende de segurança jurídica para operar.

---

### 2. Responsabilização indevida: quando a lei atinge quem não controla

O padrão é recorrente em todas as camadas da infraestrutura livre: o sistema jurídico atribui responsabilidade a quem criou, projetou ou publicou — e não a quem operou ou usou. A confusão entre **autoria** e **controle** é o núcleo do problema.

#### Software livre

O caso mais emblemático é o de [Alexey Pertsev](https://en.wikipedia.org/wiki/Alexey_Pertsev), desenvolvedor do [Tornado Cash](https://en.wikipedia.org/wiki/Tornado_Cash). Pertsev foi preso na Holanda em agosto de 2022 e condenado em maio de 2024 a mais de 5 anos de prisão por lavagem de dinheiro — não por ter operado o serviço ou realizado transações, mas por ter escrito e publicado o código de um *smart contract* autônomo.

O tribunal holandês equiparou **publicação de código** a **operação de serviço financeiro**. Se consolidado como precedente, esse entendimento ameaça qualquer desenvolvedor que publique ferramentas que possam ser usadas para fins ilícitos por terceiros.

Nos Estados Unidos, o [Office of Foreign Assets Control (OFAC)](https://ofac.treasury.gov/) sancionou os endereços de *smart contract* do Tornado Cash, tratando código imutável como entidade sancionável. A [Coin Center](https://www.coincenter.org/) processou o Departamento do Tesouro argumentando que sancionar código autônomo viola a Primeira Emenda.

A [Electronic Frontier Foundation (EFF)](https://www.eff.org/deeplinks/2023/04/code-speech-and-tornado-cash) e a [Sentinel Alliance](https://www.sentinelalliance.org/defend-opensource-developers) documentam um número crescente de casos em que contribuidores de software livre são investigados, ameaçados ou processados por usos de suas ferramentas que eles não controlam e não podem controlar.

#### Hardware aberto

O ecossistema de hardware aberto — [RISC-V](https://riscv.org/), [Arduino](https://www.arduino.cc/), [Open Compute Project](https://www.opencompute.org/), [CERN Open Hardware Licence](https://ohwr.org/cernohl) — enfrenta o mesmo padrão com agravantes físicos: quando um engenheiro publica o design de uma placa ou chip sob licença aberta, qualquer pessoa pode fabricá-lo, modificá-lo e distribuí-lo. O projetista original não controla a qualidade da fabricação por terceiros nem possui relação de fornecedor-consumidor com quem fabrica.

O [Cyber Resilience Act (CRA)](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act) na UE tornou-se o caso central. Tal como originalmente proposto, o CRA criava obrigações de segurança e conformidade que poderiam recair sobre o projetista original de um design aberto — tratando-o como "fabricante" de produtos que ele nem sequer produziu.

A [Open Source Hardware Association (OSHWA)](https://www.oshwa.org/) alertou que exigências de certificação e rastreabilidade são incompatíveis com o modelo aberto. A [RISC-V Foundation](https://riscv.org/about/) destacou que confundir uma arquitetura de conjunto de instruções (ISA) aberta com o produto final ameaça diretamente o modelo. A [Eclipse Foundation](https://eclipse-foundation.blog/2023/01/03/a-closer-look-at-the-european-cyber-resilience-act/), a [Linux Foundation Europe](https://linuxfoundation.eu/cyber-resilience-act) e a [Apache Software Foundation](https://news.apache.org/entry/save-open-source/the-eu-s-cyber-resilience-act-is-an-attack-on-the-open-source-ecosystem) emitiram alertas de que, sem isenções explícitas, o CRA responsabilizaria mantenedores e projetistas abertos por vulnerabilidades em produtos que eles nem sequer fabricaram.

O [caso do NLnet Labs](https://blog.nlnetlabs.nl/open-source-software-vs-the-eu-cyber-resilience-act/) gerou mobilização significativa e levou a alterações no texto final do CRA — mas o episódio demonstrou a vulnerabilidade estrutural do ecossistema a regulações que não distinguem entre projeto e produção.

#### Serviços descentralizados

Operadores de instâncias de serviços federados também enfrentam responsabilização desproporcional. Na Alemanha, administradores de instâncias [Mastodon](https://joinmastodon.org/) já foram notificados por autoridades por conteúdo publicado por usuários de outras instâncias que apenas federaram com a sua — conteúdo que o operador não publicou, não moderou e, em muitos casos, sequer sabia existir.

O caso da [Fediverse e o NetzDG](https://netzpolitik.org/) (lei alemã de moderação de redes, precursora do DSA) ilustra o problema: a legislação exigia que "provedores de redes sociais" removessem conteúdo ilegal em 24 horas, sob pena de multas milionárias. Quando aplicada a instâncias Mastodon operadas por voluntários com poucos usuários, a obrigação era não apenas desproporcional — era **estruturalmente impossível**, pois o operador de uma instância não tem controle sobre conteúdo que chega via federação.

A [Article 19](https://www.article19.org/) e o [Center for Democracy & Technology (CDT)](https://cdt.org/area-of-focus/platform-oversight/) documentam que esse enquadramento — tratar cada instância como se fosse uma plataforma centralizada — cria **responsabilidade sem poder de ação**, violando um princípio básico de qualquer regulação proporcional.

Relatórios da [Internet Society (ISOC)](https://www.internetsociety.org/) apontam que a aplicação indistinta de obrigações de moderação a serviços federados levou ao fechamento voluntário de instâncias na Alemanha, França e Áustria por operadores que não tinham condições jurídicas ou financeiras de cumprir as exigências — reduzindo, paradoxalmente, a diversidade e a descentralização da internet.

#### Redes livres

Na esfera das redes livres, a responsabilização recai sobre operadores comunitários de infraestrutura de conectividade. O caso mais documentado é o da [Freifunk](https://freifunk.net/) na Alemanha, onde operadores voluntários de nós Wi-Fi abertos foram processados sob a doutrina de [Störerhaftung](https://de.wikipedia.org/wiki/St%C3%B6rerhaftung) (responsabilidade do perturbador) — que atribuía ao operador de uma rede a responsabilidade por atos ilícitos praticados por terceiros que a utilizassem.

Durante anos, voluntários da Freifunk receberam notificações extrajudiciais e ameaças de processos por infrações de direitos autorais cometidas por usuários anônimos em seus pontos de acesso. Isso levou muitos operadores a **desativarem seus nós** por medo de responsabilidade pessoal. Somente em 2017, com a reforma do [Telemediengesetz (TMG)](https://www.gesetze-im-internet.de/tmg/), a Alemanha reconheceu que operadores de redes Wi-Fi abertas não deveriam ser responsabilizados por conteúdo de terceiros — mas o dano ao ecossistema já estava feito, e a proteção ainda é considerada insuficiente pela comunidade.

Na Espanha, a rede [Guifi.net](https://guifi.net/) enfrentou desafios regulatórios ao ser enquadrada como operadora de telecomunicações, mesmo sendo uma rede comunitária sem fins lucrativos. A resolução exigiu anos de negociação com a [Comisión del Mercado de las Telecomunicaciones (CMT)](https://www.cnmc.es/) até que um enquadramento específico fosse reconhecido.

No México, a [Rhizomatica](https://www.rhizomatica.org/) — que opera redes de telefonia celular comunitária em regiões indígenas — só conseguiu operar legalmente após obter uma concessão experimental do [Instituto Federal de Telecomunicaciones (IFT)](http://www.ift.org.mx/) em 2014, um processo que levou anos de advocacy. A maioria das comunidades que necessitam de conectividade não tem acesso a esse tipo de exceção regulatória.

#### O padrão estrutural

Em todas as camadas, o padrão se repete:

- alguém cria, projeta ou opera uma infraestrutura aberta  
- terceiros utilizam essa infraestrutura para fins ilícitos ou geram impactos não previstos  
- o sistema jurídico responsabiliza o criador ou operador comunitário, não quem efetivamente praticou o ato  
- a distinção entre **autoria/projeto**, **operação** e **uso** é ignorada  

Relatórios da [Human Rights Foundation](https://hrf.org/) destacam que ferramentas de privacidade e criptografia — muitas delas software livre — são essenciais para ativistas, jornalistas e dissidentes em regimes autoritários. Criminalizar ou responsabilizar quem constrói essas ferramentas não elimina os usos ilícitos (que migram para alternativas), mas **remove proteções de quem mais depende delas**.

A [Open Source Security Foundation (OpenSSF)](https://openssf.org/) e a [Linux Foundation](https://www.linuxfoundation.org/research) alertam que este padrão, se não for corrigido legislativamente, tende a:

- acelerar o abandono de projetos sensíveis (criptografia, privacidade, redes mesh, hardware aberto)  
- concentrar o desenvolvimento em jurisdições mais permissivas, fragmentando o ecossistema  
- inviabilizar redes comunitárias e serviços federados operados por voluntários  

---

### 3. Obrigações regulatórias estruturalmente incompatíveis

Além da incerteza jurídica (seção 1) e da responsabilização indevida (seção 2), há um terceiro problema estrutural: regulações que impõem obrigações **arquiteturalmente impossíveis de cumprir** em sistemas abertos e descentralizados. Não se trata de a lei não saber a quem atribuir a obrigação — é que a obrigação em si presume uma capacidade de controle que **não existe na arquitetura**.

#### Software livre

A proposta europeia de [Chat Control](https://www.patrick-breyer.de/en/posts/chat-control/) (regulamento contra abuso sexual infantil, revisado em 2024) ilustra o problema: exige varredura automática de conteúdo em mensagens privadas, incluindo comunicações criptografadas ponta a ponta. Para protocolos abertos de mensageria — como os utilizados por [Matrix](https://matrix.org/), [XMPP](https://xmpp.org/) e implementações do [Signal Protocol](https://signal.org/docs/) — isso é **estruturalmente inviável**: qualquer usuário pode compilar o código-fonte, modificar o cliente e ignorar a varredura. A obrigação cria uma falsa sensação de conformidade sem impactar quem efetivamente distribui conteúdo ilícito.

A [Diretiva NIS2](https://digital-strategy.ec.europa.eu/en/policies/nis2-directive) impõe prazos de notificação de incidentes (24 horas para alerta inicial, 72 horas para relatório detalhado) e exigências de gestão de vulnerabilidades a "entidades essenciais". Quando infraestruturas críticas dependem de componentes de software livre mantidos por voluntários distribuídos em múltiplos fusos horários, esses prazos são **incompatíveis com a realidade operacional** do ecossistema. A [OpenSSF](https://openssf.org/) alerta que impor cronogramas corporativos a mantenedores voluntários apenas acelera o abandono de projetos.

O [DMCA §1201](https://www.law.cornell.edu/uscode/text/17/1201) (anti-circumvenção) proíbe contornar medidas de proteção tecnológica. Ferramentas de código aberto para auditoria de segurança, engenharia reversa e pesquisa de vulnerabilidades — práticas centrais para a segurança do ecossistema — podem ser enquadradas como violação. O [Coders' Rights Project](https://www.eff.org/issues/coders) da EFF documenta como pesquisadores de segurança são ameaçados por leis que criminalizam ferramentas que eles desenvolvem abertamente para fortalecer a infraestrutura digital.

#### Hardware aberto

A [EU Radio Equipment Directive (RED)](https://ec.europa.eu/growth/sectors/electrical-engineering/radio-equipment-directive_en), com seus atos delegados em discussão, exige que fabricantes de dispositivos com capacidade de rádio garantam que **apenas software "conforme" execute no hardware**. Essa exigência conflita diretamente com o princípio de hardware aberto: se o projetista publica esquemáticos e firmware sob licença livre, ele não pode — e não deve — impedir que terceiros instalem software alternativo.

Em 2015, a [FCC](https://www.fcc.gov/) propôs regras que teriam efetivamente **bloqueado firmware de código aberto em roteadores Wi-Fi**, exigindo que fabricantes impedissem modificações. A campanha [Save WiFi](https://www.savewifi.org/) — coordenada pela [FSF](https://www.fsf.org/campaigns/wifi), [OpenWrt](https://openwrt.org/) e [SFLC](https://softwarefreedom.org/) — conseguiu que a regra final diferenciasse software de rádio e software do sistema operacional. Mas a tensão estrutural permanece: **reguladores de espectro pressupõem controle de firmware que o modelo aberto rejeita por princípio**.

Obrigações de [DRM](https://en.wikipedia.org/wiki/Digital_rights_management) criam um problema análogo. Projetos de hardware aberto que interagem com conteúdo protegido (ex.: interfaces HDMI com [HDCP](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection)) enfrentam barreiras legais mesmo quando o design em si é aberto — porque a lei proíbe a construção de dispositivos que não implementem restrições de acesso impostas por terceiros.

#### Serviços descentralizados

Legislações de moderação de conteúdo como o [Digital Services Act (DSA)](https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package) e o [PL 2630/2020](https://www.camara.leg.br/propostas-legislativas/2256735) no Brasil impõem obrigações de remoção rápida, transparência algorítmica, identificação de usuários e relatórios periódicos de moderação. Essas exigências foram concebidas para plataformas centralizadas como Meta, X (Twitter) ou YouTube.

Para redes federadas — [Mastodon](https://joinmastodon.org/), [Bluesky](https://bsky.social/), [Matrix](https://matrix.org/), [Lemmy](https://join-lemmy.org/) — a arquitetura torna essas obrigações **estruturalmente impossíveis**: o protocolo ([ActivityPub](https://www.w3.org/TR/activitypub/), [AT Protocol](https://atproto.com/)) é aberto e não pode ser "moderado" em si; cada instância opera independentemente; não há entidade central com controle sobre o fluxo de conteúdo. Como alerta a [EFF](https://www.eff.org/deeplinks/2023/04/platforms-are-not-protocols): **confundir plataformas com protocolos gera regulação que pode banir arquiteturas descentralizadas**.

O [GDPR](https://gdpr.eu/) impõe o direito ao apagamento de dados pessoais. Em redes federadas, quando um usuário solicita exclusão em sua instância, suas publicações podem ter sido replicadas por centenas de instâncias independentes via federação. A obrigação de apagamento é **tecnicamente impossível de cumprir** pelo operador original em toda a rede — e não há mecanismo no protocolo para forçar exclusão em servidores de terceiros.

Leis de verificação de idade — como o [UK Online Safety Act](https://www.legislation.gov.uk/ukpga/2023/50/enacted) — exigem "garantia de idade" para serviços acessíveis a menores. Um servidor Matrix operado por voluntários **não pode implementar** os mesmos mecanismos de verificação de uma plataforma comercial com milhões de usuários e equipes dedicadas de compliance.

A [FSFE](https://fsfe.org/activities/dma/dma.en.html) aponta que regulações digitais europeias continuam falhando em acomodar modelos não centralizados. Relatórios da [Article 19](https://www.article19.org/) e do [CDT](https://cdt.org/area-of-focus/platform-oversight/) documentam como obrigações desenhadas para modelos centralizados criam **barreiras de entrada insuperáveis** para projetos comunitários e federados.

#### Redes livres

Regulações de telecomunicações exigem capacidades de **interceptação lícita** (*lawful interception*) em redes de comunicação. Redes mesh — como [Meshtastic](https://meshtastic.org/), [AREDN](https://www.arednmesh.org/) e [Freifunk](https://freifunk.net/) — não possuem ponto central de roteamento onde a interceptação possa ser implementada. Exigir essa capacidade em protocolos mesh equivale a exigir que sejam **redesenhados para não serem mesh** — anulando sua razão de existir.

Regulações brasileiras exigem identificação de "assinantes" de serviços de telecomunicações ([Lei 9.472/97](https://www.planalto.gov.br/ccivil_03/leis/l9472.htm)). Pontos de acesso abertos e redes mesh comunitárias **não possuem "assinantes"** — qualquer pessoa dentro do alcance pode se conectar. Impor cadastro prévio transforma uma rede aberta em rede fechada.

A [Diretiva de Retenção de Dados](https://en.wikipedia.org/wiki/Data_Retention_Directive) da UE (invalidada pelo TJUE em 2014, mas com equivalentes nacionais persistentes) exigia registro de metadados de comunicações. Operadores comunitários de redes abertas não possuem infraestrutura corporativa de logging — e implementá-la desnaturaria o modelo comunitário.

A [Internet Society (ISOC)](https://www.internetsociety.org/) e a [APC](https://www.apc.org/) documentam que obrigações de telecomunicações projetadas para operadoras comerciais, quando aplicadas a redes comunitárias, **não apenas são desproporcionais — são estruturalmente incompatíveis** com o modelo aberto.

#### O padrão transversal

Em todas as camadas, o problema é o mesmo: a regulação não apenas erra o alvo (seção 2) ou gera incerteza (seção 1) — ela impõe obrigações que são **arquiteturalmente impossíveis de cumprir**, independentemente de quem as assuma.

- no software, varredura obrigatória em código aberto é contornável por definição  
- no hardware, bloqueio de firmware contradiz o princípio do modelo aberto  
- nos serviços, moderação centralizada é impossível em redes federadas  
- nas redes, interceptação e identificação anulam a arquitetura mesh  

O resultado é que a regulação, ao não distinguir entre sistemas centralizados e descentralizados, cria uma **incompatibilidade estrutural** que, na prática, inviabiliza ou criminaliza arquiteturas abertas.

---

### 4. Barreiras operacionais e restrições de acesso à infraestrutura aberta

Mesmo onde a lei não proíbe explicitamente a infraestrutura livre, o desenho regulatório cria **tetos operacionais e barreiras de acesso** que impedem que ela alcance seu potencial técnico demonstrado. Não se trata de responsabilização indevida ou de obrigações impossíveis, mas de **escolhas regulatórias que favorecem sistematicamente modelos centralizados e comerciais** em detrimento de alternativas abertas e comunitárias.

#### Software livre

A distribuição de software é cada vez mais intermediada por lojas de aplicativos (*app stores*) com políticas proprietárias de revisão, comissões sobre receita e restrições de conteúdo. A Apple [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) e a Google Play historicamente restringiram a distribuição de aplicativos que não passassem por seus processos de aprovação. Embora o [Digital Markets Act (DMA)](https://digital-strategy.ec.europa.eu/en/policies/digital-markets-act) da UE tenha obrigado a Apple a permitir *sideloading*, a maioria das jurisdições não possui regulação equivalente — concentrando a distribuição em gatekeepers corporativos.

Sistemas operacionais exigem cada vez mais **assinatura digital de binários** (*code signing*). Embora haja benefícios de segurança, certificados de assinatura possuem custo financeiro e exigem identidade organizacional. Software livre compilado pelo próprio usuário dispara alertas de segurança, e projetos comunitários que distribuem binários enfrentam friction desproporcional. O resultado é uma **assimetria estrutural**: fornecedores comerciais com infraestrutura de assinatura são favorecidos, enquanto a distribuição aberta é tratada como suspeita por padrão.

Restrições de interoperabilidade — APIs proprietárias, formatos fechados, protocolos não documentados — criam [vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) que regulações começam a abordar (DMA, interoperabilidade no Brasil), mas cuja aplicação é lenta. A [Free Software Foundation Europe (FSFE)](https://fsfe.org/activities/os/) e a [Document Foundation](https://www.documentfoundation.org/) documentam como a ausência de mandatos efetivos de padrões abertos mantém a dependência de ecossistemas proprietários em governos e empresas.

#### Hardware aberto

Dispositivos de rádio para redes comunitárias — antenas, gateways [LoRaWAN](https://lora-alliance.org/about-lorawan/), roteadores mesh — operam em faixas ISM (*Industrial, Scientific and Medical*) com **severas restrições de potência e ciclo de trabalho**:

- no Brasil, a [ANATEL](https://www.gov.br/anatel/) limita potência na faixa de 915 MHz e impõe restrições de *duty cycle* ([Resolução nº 680/2017](https://informacoes.anatel.gov.br/legislacao/resolucoes/2017/936-resolucao-680))  
- na UE, a faixa de 868 MHz possui limites de *duty cycle* de 1% em certas sub-bandas, restringindo comunicação contínua  
- nos EUA, a [FCC Part 15](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15) permite mais potência, mas ainda proíbe níveis que permitiriam redes resilientes  

Essas limitações fazem sentido técnico para evitar interferência em faixas compartilhadas, mas **não foram pensadas para redes comunitárias organizadas**, onde a coordenação entre nós poderia permitir potências maiores sem impacto adverso. Relatórios da [Dynamic Spectrum Alliance](https://dynamicspectrumalliance.org/) e da [ITU](https://www.itu.int/en/ITU-R/study-groups/rsg1/Pages/default.aspx) indicam que o uso compartilhado e dinâmico do espectro é tecnicamente viável, mas **a regulação não acompanhou essa evolução**.

O custo de **certificação e homologação** é proibitivo para projetos comunitários. Homologar um único modelo de dispositivo na [ANATEL](https://www.gov.br/anatel/) custa milhares de reais. Fabricantes comerciais amortizam esse custo em milhões de unidades; projetos de hardware aberto fabricados em pequenos lotes, não. Certificações equivalentes na UE ([marcação CE](https://ec.europa.eu/growth/single-market/ce-marking_en)) e nos EUA ([FCC](https://www.fcc.gov/)) seguem a mesma lógica. O resultado é uma **barreira de escala invertida**: quanto menor o projeto, maior o custo relativo de conformidade.

O acesso a **componentes especializados** também é restrito por design. Chips de RF, FPGAs avançados e MCUs especializados frequentemente exigem quantidades mínimas de compra, NDAs para acesso a datasheets e canais de distribuição fechados voltados para fabricantes comerciais. A [OSHWA](https://www.oshwa.org/) documenta como projetistas de hardware aberto enfrentam barreiras para integrar componentes cujas especificações não podem ser publicadas abertamente — criando uma **incompatibilidade entre o modelo aberto e a cadeia de suprimentos comercial**.

#### Serviços descentralizados

Operar serviços digitais exige cada vez mais **estrutura jurídica formal**: entidade legal constituída, representante designado, endereço registrado. O [DSA](https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package) exige que provedores estabeleçam um "ponto único de contacto" e nomeiem representante legal nas jurisdições onde operam. Para operadores voluntários de instâncias [Mastodon](https://joinmastodon.org/) ou [PeerTube](https://joinpeertube.org/), essas exigências transformam um ato de contribuição comunitária em **empreendimento regulatório**.

Requisitos de **localização de dados** fragmentam o modelo federado. Quando uma legislação exige que dados de cidadãos nacionais sejam armazenados no país (como discutido no contexto do [PL 2630/2020](https://www.camara.leg.br/propostas-legislativas/2256735) e na [LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)), redes federadas que replicam conteúdo entre instâncias em múltiplas jurisdições **não podem cumprir sem desnaturar a federação**.

Diversas jurisdições exigem **registro de "plataformas digitais"** acima de certos limiares de usuários. As definições são frequentemente amplas o suficiente para capturar serviços federados operados por voluntários. A [Internet Society (ISOC)](https://www.internetsociety.org/) aponta que requisitos de registro, relatórios obrigatórios e designação de representantes legais criam uma **barreira burocrática desproporcional** que desincentiva a operação descentralizada — e, paradoxalmente, empurra usuários de volta para plataformas centralizadas que possuem recursos para atender a essas exigências.

#### Redes livres

Em muitos países, operar uma rede que fornece conectividade a terceiros exige **licença de operadora de telecomunicações**, mesmo para redes comunitárias sem fins lucrativos:

- no Brasil, a [Lei Geral de Telecomunicações (Lei 9.472/97)](https://www.planalto.gov.br/ccivil_03/leis/l9472.htm) define telecomunicações de forma ampla, enquadrando redes comunitárias como prestadoras de serviço  
- a [ANATEL](https://www.gov.br/anatel/) avançou com o [SCM de pequeno porte](https://www.gov.br/anatel/pt-br/regulado/outorga/servico-de-comunicacao-multimidia-scm), mas os requisitos continuam complexos para organizações sem CNPJ  
- na UE, o [Código Europeu de Comunicações Eletrônicas](https://digital-strategy.ec.europa.eu/en/policies/eu-electronic-communications-code) reconhece redes comunitárias, mas a transposição para legislações nacionais varia significativamente  

A [APC](https://www.apc.org/en/pubs/community-networks-and-spectrum) documenta que políticas de espectro projetadas para grandes operadoras **excluem sistematicamente modelos comunitários**. A [ISOC](https://www.internetsociety.org/issues/community-networks/) aponta que redes comunitárias são essenciais para conectividade em áreas rurais e marginalizadas, mas enfrentam barreiras regulatórias que as impedem de escalar.

Na prática, isso significa que:

- redes mesh que poderiam fornecer **conectividade de emergência** operam em potências artificialmente baixas  
- projetos como [Meshtastic](https://meshtastic.org/) são limitados a poucos quilômetros quando poderiam cobrir dezenas  
- redes comunitárias como as da [Rhizomatica](https://www.rhizomatica.org/) só operam por meio de exceções regulatórias conquistadas após anos  
- no Brasil, iniciativas de conectividade rural enfrentam um labirinto burocrático desproporcional  

A [Web Foundation](https://webfoundation.org/) e a [Alliance for Affordable Internet (A4AI)](https://a4ai.org/) documentam que, em países em desenvolvimento, o custo de conectividade permanece proibitivo justamente onde redes comunitárias seriam a solução — mas onde a regulação as torna inviáveis.

#### O padrão transversal

Em todas as camadas, o resultado é o mesmo: **o desenho regulatório favorece estruturalmente quem já é grande, estabelecido e centralizado**.

- no software, a distribuição é intermediada por gatekeepers, e code signing penaliza projetos comunitários  
- no hardware, certificação e acesso a componentes criam barreiras de escala invertidas  
- nos serviços, requisitos de estrutura jurídica e localização de dados desincentivam operação voluntária  
- nas redes, licenciamento de telecom e limites de espectro impedem que alternativas comunitárias escalem  

Essas barreiras não precisam criminalizar a infraestrutura aberta para suprimí-la. Basta que tornem **mais fácil, mais barato e menos arriscado usar e operar alternativas proprietárias** — e o resultado é o mesmo: concentração tecnológica, dependência estrutural e exclusão de modelos comunitários.

---

### 5. Fragilidade econômica do ecossistema: tributação, financiamento, jurídico e sustentabilidade

A infraestrutura livre enfrenta um problema econômico estrutural que se manifesta em frentes interdependentes: **tributação desproporcional**, **ausência de modelos de financiamento adequados**, **inexistência de figura jurídica compatível** e **insustentabilidade operacional** dos projetos. Juntas, essas frentes criam uma pressão econômica que atravessa todas as camadas do ecossistema.

#### Tributação transversal

A tributação não afeta apenas uma camada da infraestrutura livre — ela incide, direta ou indiretamente, sobre **todas as quatro**: software livre, serviços descentralizados, redes livres e hardware aberto.

**Hardware aberto**: no Brasil, o [Imposto de Importação](https://www.gov.br/receitafederal/pt-br) sobre componentes pode ultrapassar 60% do valor do produto em importações por pessoas físicas e pequenos projetos. A [Lei de Informática (Lei 8.248/91)](https://www.planalto.gov.br/ccivil_03/leis/l8248.htm) concede incentivos fiscais, mas voltados para empresas com processo produtivo básico (PPB), excluindo projetos comunitários e educacionais. O [IPI](https://www.gov.br/receitafederal/pt-br) e demais tributos indiretos atingem a cadeia inteira. Isso encarece projetos com [Arduino](https://www.arduino.cc/) ou [Raspberry Pi](https://www.raspberrypi.org/), inviabiliza prototipagem com [FPGAs](https://en.wikipedia.org/wiki/Field-programmable_gate_array) e [RISC-V](https://riscv.org/), e prejudica iniciativas de reparo — princípio central do [Right to Repair](https://repair.eu/).

**Redes livres**: equipamentos de rádio (antenas, gateways LoRa, roteadores mesh) são importados com alta tributação. O custo de um gateway [LoRaWAN](https://lora-alliance.org/about-lorawan/) ou roteador [OpenWrt](https://openwrt.org/) pode dobrar após impostos. A carga tributária sobre telecomunicações — ICMS, PIS, COFINS e taxas regulatórias — pode ultrapassar 40% da receita ([Anatel](https://www.gov.br/anatel/), [Telebrasil](https://www.telebrasil.org.br/)). Quando aplicada a redes comunitárias de pequeno porte, é desproporcional e inviabilizadora.

**Serviços descentralizados**: operar instâncias [Mastodon](https://joinmastodon.org/), [Matrix](https://matrix.org/) ou [PeerTube](https://joinpeertube.org/) implica custos de hosting, domínio e certificados. A tributação sobre serviços digitais não distingue plataformas comerciais lucrativas de servidores comunitários mantidos por voluntários. Propostas no âmbito da [Reforma Tributária (EC 132/2023)](https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm) criam incerteza sobre como serviços federados sem modelo comercial serão enquadrados. A [Internet Society (ISOC)](https://www.internetsociety.org/) e a [Access Now](https://www.accessnow.org/) alertam que tributação indistinta pode ser uma barreira à descentralização da internet.

**Software livre**: embora o software em si não seja diretamente tributado (por ser distribuído livremente), a cadeia em torno dele é afetada — servidores de compilação, CDNs, mirrors, serviços de suporte e integração. Incentivos como a [Lei do Bem (Lei 11.196/05)](https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11196.htm) raramente são acessíveis a projetos comunitários ou mantenedores individuais. A [Open Source Initiative (OSI)](https://opensource.org/) e relatórios da [Nesta](https://www.nesta.org.uk/) documentam que políticas fiscais de incentivo à inovação falham sistematicamente em incluir modelos abertos, tratando inovação como sinônimo de P&D corporativo.

A [OECD](https://www.oecd.org/tax/tax-policy/) reconhece que políticas tributárias geram distorções quando não consideram modelos abertos. A [World Bank](https://www.worldbank.org/) e a [UNCTAD](https://unctad.org/topic/science-technology-and-innovation) apontam que países com alta tributação sobre componentes e serviços digitais reduzem sua capacidade de participar da cadeia global de inovação. A [Open Source Hardware Association (OSHWA)](https://www.oshwa.org/) reforça que a ausência de distinção entre importação comercial e importação educacional/comunitária cria uma **barreira de acesso que concentra a inovação em países com manufatura local subsidiada**.

#### Financiamento inadequado

Além da tributação, o ecossistema sofre com a **ausência de modelos de financiamento** adequados à sua organização e escala.

A maior parte da infraestrutura livre é mantida por indivíduos ou pequenas equipes que não possuem estrutura jurídica compatível com os mecanismos tradicionais de fomento público ou privado:

- **editais governamentais** de ciência, tecnologia e inovação — como os do [CNPq](https://www.gov.br/cnpq/), [FINEP](http://www.finep.gov.br/) e [FAPESP](https://fapesp.br/) no Brasil — exigem vínculo institucional, CNPJ, contrapartidas e prestação de contas que são incompatíveis com projetos mantidos por contribuidores voluntários distribuídos globalmente  
- **programas de venture capital e aceleradoras** buscam retorno financeiro e propriedade intelectual — premissas opostas ao licenciamento aberto  
- **licitações públicas** de software no Brasil frequentemente exigem garantias, suporte formal e responsabilidade contratual que excluem projetos comunitários, favorecendo fornecedores proprietários que empacotam componentes abertos  

Internacionalmente, iniciativas como o [EU Sovereign Tech Fund](https://en.wikipedia.org/wiki/EU_Sovereign_Tech_Fund), o [Open Technology Fund (OTF)](https://www.opentech.fund/) e o [NLnet Foundation](https://nlnet.nl/) representam avanços ao financiar diretamente projetos de infraestrutura aberta. No entanto, esses programas são exceções e **não existe equivalente brasileiro ou latino-americano significativo**.

A [Ford Foundation](https://www.fordfoundation.org/work/learning/research-reports/roads-and-bridges-the-unseen-labor-behind-our-digital-infrastructure/) publicou o relatório *Roads and Bridges*, que compara a infraestrutura livre à infraestrutura viária: **todos dependem dela, mas ninguém se sente responsável por mantê-la**. O estudo documenta como a ausência de financiamento público adequado coloca em risco a estabilidade de componentes dos quais governos e corporações dependem diariamente.

Plataformas como [GitHub Sponsors](https://github.com/sponsors), [Open Collective](https://opencollective.com/) e [Liberapay](https://liberapay.com/) oferecem mecanismos de doação direta, mas estudos da [NumFOCUS](https://numfocus.org/) e do [Tidelift](https://tidelift.com/about/lifter-survey) indicam que **menos de 5% dos projetos críticos de software livre recebem financiamento suficiente** para manter ao menos um desenvolvedor em tempo integral. A grande maioria opera na base do voluntariado.

Para as demais camadas — hardware aberto, redes comunitárias e serviços federados — o problema é ainda mais agudo, pois envolvem custos operacionais contínuos (equipamento, hospedagem, energia, manutenção física) que não se resolvem com doações esporádicas.

#### Ausência de figura jurídica adequada

Mesmo quando um projeto comunitário deseja se formalizar — seja para acessar editais, firmar convênios, receber doações com nota fiscal ou simplesmente cumprir exigências regulatórias que pressupõem um [CNPJ](https://www.gov.br/receitafederal/pt-br) —, os caminhos disponíveis impõem barreiras desproporcionais à sua realidade.

**Associação ou ONG**: requer estatuto social, ata de fundação, diretoria eleita, assembleia de sócios, inscrição em cartório e escrituração contábil regular. Custos de constituição e manutenção (contador, declarações anuais, obrigações acessórias) podem ultrapassar a capacidade financeira de um projeto mantido por voluntários. A obtenção de títulos como [OSCIP](https://www.gov.br/economia/pt-br) ou [CEBAS](https://www.gov.br/saude/pt-br) — que dão acesso a incentivos fiscais — adiciona camadas de burocracia e exigências de governança que pressupõem estrutura organizacional permanente.

**Fundação**: exige patrimônio mínimo, aprovação do Ministério Público, conselho curador e prestação de contas periódica ao MP. É um modelo pensado para organizações com dotação patrimonial, não para projetos que operam com orçamento zero ou próximo de zero.

**Cooperativa**: exige mínimo de sócios (7 no Brasil, conforme [Lei 5.764/71](https://www.planalto.gov.br/ccivil_03/leis/l5764.htm)), assembleia, conselho fiscal, registro na [OCB](https://www.ocb.org.br/) e cumprimento de obrigações trabalhistas e tributárias próprias. O modelo pressupõe atividade econômica conjunta — premissa que não se aplica a contribuidores assíncronos distribuídos globalmente.

**Microempresa (MEI/ME)**: a figura do [MEI](https://www.gov.br/empresas-e-negocios/pt-br/empreendedor) é individual e limitada por faturamento e atividades permitidas — não comporta a natureza coletiva e não comercial da maioria dos projetos. Abrir uma ME ou EPP implica custos contábeis mensais, tributação sobre faturamento e responsabilidade civil do titular.

Internacionalmente, modelos como a [fiscal sponsorship](https://en.wikipedia.org/wiki/Fiscal_sponsorship) nos EUA — onde organizações como a [Software Freedom Conservancy](https://sfconservancy.org/) ou a [Open Collective Foundation](https://opencollective.com/foundation) oferecem pessoa jurídica "guarda-chuva" para projetos — atenuam parcialmente o problema. Na Europa, a [Commons Conservancy](https://commonsconservancy.org/) cumpre papel similar. No Brasil e na América Latina, **não existe mecanismo equivalente consolidado**.

O problema se agrava radicalmente em **projetos descentralizados e transnacionais**. Um protocolo federado como [ActivityPub](https://www.w3.org/TR/activitypub/), uma rede mesh como [Freifunk](https://freifunk.net/) ou um design de hardware publicado sob [CERN-OHL](https://ohwr.org/project/cernohl/wikis/Documents/CERN-OHL-version-2) não possui sede, jurisdição única nem grupo fixo de responsáveis. **Não existe figura jurídica — em nenhum ordenamento — projetada para representar um projeto global, sem hierarquia, sem patrimônio e sem fronteira jurisdicional definida.** Exigir personalidade jurídica como pré-requisito regulatório é, nesses casos, exigir algo que é estruturalmente impossível.

Essa lacuna cria um dilema circular: regulações exigem pessoa jurídica → a formalização é inacessível ou impossível → o projeto opera na informalidade → a regulação o trata como irregular ou o exclui de mecanismos de fomento. O resultado é o mesmo: **concentração em favor de quem já possui estrutura corporativa**.

#### Sustentabilidade operacional

A combinação de tributação excessiva, financiamento inadequado e falta de figura jurídica plausível, gera uma crise de sustentabilidade documentada e mensurável.

Relatórios da [Snyk](https://snyk.io/blog/2024-open-source-security-report-slowing-progress-and-new-challenges-for/), da [Linux Foundation](https://www.linuxfoundation.org/research/) e da [Open Source Initiative (OSI)](https://opensource.org/) apontam:

- alta dependência global de software aberto  
- baixa remuneração de mantenedores  
- concentração de responsabilidade em poucos indivíduos  

O incidente do [Log4Shell (Log4j)](https://en.wikipedia.org/wiki/Log4Shell) evidenciou que componentes críticos usados por milhares de empresas podiam ser mantidos por equipes de uma ou duas pessoas, sem remuneração. O caso do [XZ Utils](https://en.wikipedia.org/wiki/XZ_Utils_backdoor) demonstrou que a exaustão de mantenedores pode ser **explorada em ataques sofisticados** à cadeia de suprimentos.

Pesquisa recente aponta que **73% dos desenvolvedores relatam burnout e 60% consideraram abandonar projetos** ([Developer Tech](https://www.developer-tech.com/news/open-source-developer-burnout-fuels-supply-chain-risks/)). Análises do [Open Source Pledge](https://opensourcepledge.com/blog/burnout-in-open-source-a-structural-problem-we-can-fix-together/) e do [The New Stack](https://thenewstack.io/open-source-needs-younger-maintainers-how-can-it-get-them/) documentam:

- burnout sistêmico de mantenedores  
- dificuldade de renovação geracional  
- risco crescente de abandono de projetos críticos  

A [OpenSSF](https://openssf.org/blog/2026/01/21/preserving-open-source-sustainability-while-advancing-cybersecurity-compliance/) alerta que exigências regulatórias mal estruturadas agravam o problema, pois criam "custos de conformidade" que excluem pequenos mantenedores. Evidências acadêmicas reforçam: projetos frequentemente dependem de poucos mantenedores, e sua saída pode levar ao abandono ou degradação do sistema ([arXiv study](https://arxiv.org/abs/1906.08058)).

#### O ciclo vicioso

A tributação encarece a operação. A ausência de financiamento impede a profissionalização. A falta de figura jurídica exclui do fomento público e do cumprimento regulatório. A sobrecarga leva ao burnout. O burnout leva ao abandono. O abandono gera vulnerabilidades. As vulnerabilidades justificam mais regulação. A regulação impõe mais custos. O ciclo se retroalimenta.

O resultado é que a tributação, a ausência de financiamento, a impossibilidade de formalização e a insustentabilidade operacional operam como um fator de **concentração tecnológica transversal**: estimulam o consumo de soluções proprietárias, penalizam a construção aberta e comunitária, e ignoram a especificidade econômica de modelos não comerciais em todas as camadas da infraestrutura livre.

---

## Diagnóstico: a lacuna estrutural

As cinco dimensões documentadas — incerteza jurídica, responsabilização indevida, obrigações incompatíveis, barreiras operacionais e fragilidade econômica — não são problemas isolados. São **manifestações de uma mesma falha de enquadramento**: o ordenamento jurídico opera com um modelo implícito de controle centralizado que não corresponde à realidade da infraestrutura livre.

### A distinção que o direito ignora

No centro do problema está a ausência de separação clara entre papéis que, na infraestrutura livre, são estruturalmente independentes:

| Papel | Software | Hardware | Serviços | Redes |
|-------|----------|----------|----------|-------|
| **Criação** | quem escreve código | quem projeta o design | quem desenvolve o protocolo | quem especifica a arquitetura |
| **Operação** | quem implanta e mantém | quem fabrica e distribui | quem opera a instância | quem mantém os nós |
| **Uso** | quem executa o software | quem utiliza o dispositivo | quem publica e consome conteúdo | quem se conecta |

Em modelos centralizados, esses papéis frequentemente se sobrepõem: quem cria a plataforma também a opera e controla o uso. Na infraestrutura livre, eles são **separados por design** — e nenhum agente possui controle sobre os demais.

Quando o direito não reconhece essa separação, ele:

- atribui ao criador responsabilidades que pressupõem controle sobre a operação (seção 2)  
- impõe obrigações que pressupõem arquitetura centralizada (seção 3)  
- cria barreiras moldadas para estruturas corporativas (seção 4)  
- aplica tributação que ignora a natureza não comercial (seção 5)  

### Fundamento jurídico: ferramentas de uso geral

Há precedentes consolidados para o tratamento diferenciado de ferramentas com usos substancialmente legítimos.

No caso [Sony Corp. of America v. Universal City Studios, Inc. (Betamax)](https://en.wikipedia.org/wiki/Sony_Corp._of_America_v._Universal_City_Studios,_Inc.), a Suprema Corte dos EUA decidiu que a fabricação de uma tecnologia com usos substancialmente legítimos não gera responsabilidade por usos indevidos realizados por terceiros.

Em [MGM Studios, Inc. v. Grokster, Ltd.](https://en.wikipedia.org/wiki/MGM_Studios,_Inc._v._Grokster,_Ltd.), a Corte refinou essa doutrina ao distinguir entre **fornecer uma ferramenta de uso geral** e **induzir ativamente seu uso ilícito**.

Essas decisões refletem um princípio jurídico consolidado: quem fabrica uma ferramenta de uso geral não é responsabilizado pelos usos ilícitos feitos por terceiros, salvo indução direta.

### Por que a infraestrutura livre agrava o problema

A infraestrutura livre torna a aplicação desse princípio simultaneamente **mais necessária e mais complexa**, porque suas características estruturais amplificam a separação entre criação, operação e uso:

- **Replicabilidade ilimitada**: código, designs e especificações são informação que pode ser copiada indefinidamente — ao contrário de um videocassete (Betamax), não há cadeia de distribuição rastreável  
- **Modificabilidade aberta**: terceiros podem alterar código, redesenhar hardware e reconfigurar protocolos após a publicação — o criador original não controla nem conhece as variantes que circulam  
- **Distribuição descentralizada**: não há ponto central de controle — software é clonado de repositórios, hardware é fabricado por terceiros, serviços são operados independentemente, redes são formadas por nós autônomos  
- **Materialidade variável**: a mesma lacuna jurídica se manifesta em artefatos imateriais (código, protocolos) e materiais (placas, antenas, dispositivos), exigindo enquadramento que transcenda a distinção entre produto e informação  

Organizações como a [EFF](https://www.eff.org/issues/coders) alertam que confundir criação com controle gera efeitos supressores sobre inovação e liberdade de expressão. A [OpenSSF](https://openssf.org/) e a [Linux Foundation](https://www.linuxfoundation.org/research) reforçam que o ecossistema opera sem controle centralizado, inviabilizando a atribuição de responsabilidades típicas de operadores ou prestadores de serviço.

O resultado é uma **distorção regulatória transversal**: a norma incide sobre quem criou ou compartilhou, e não sobre quem efetivamente possui capacidade de controle.

---

## Consequências da inação

As cinco seções anteriores documentam um ecossistema sob pressão em múltiplas frentes simultâneas. A questão não é se haverá consequências, mas **em que velocidade e escala** elas se manifestarão.

### O que já está acontecendo

As evidências apresentadas mostram que os efeitos não são hipotéticos:

- **Abandono e retração**: instâncias Mastodon fechadas na Alemanha, França e Áustria por impossibilidade regulatória (seção 2); nós Freifunk desativados por medo de responsabilização (seção 2); mantenedores abandonando projetos por burnout e sobrecarga (seção 5)  
- **Ataques à cadeia de suprimentos**: o incidente XZ Utils demonstrou que a exaustão de mantenedores pode ser explorada em ataques sofisticados (seção 5); o Log4Shell revelou a fragilidade de componentes críticos mantidos por equipes mínimas  
- **Fragmentação jurisdicional**: operadores de serviços federados bloqueando federação cross-border por incerteza regulatória (seção 1); redes comunitárias inviabilizadas por labirintos burocráticos (seção 4)  
- **Concentração tecnológica**: barreiras de conformidade que favorecem fornecedores proprietários (seção 4); tributação que penaliza construção aberta (seção 5); regulação que empurra usuários de volta para plataformas centralizadas (seção 4)  

### O que tende a se agravar

Se o enquadramento regulatório não for adaptado, as tendências documentadas convergem para:

- **erosão acelerada da base de mantenedores**: regulações como NIS2 e CRA criam custos de conformidade que excluem voluntários, ao mesmo tempo em que a ausência de financiamento impede profissionalização — estreitando o funil de contribuição  
- **aumento de superfície de ataque**: projetos abandonados ou sub-mantidos se tornam vetores de vulnerabilidade em cadeias de produção que dependem deles — e a regulação atual não distingue entre mantenedor ativo e componente órfão  
- **consolidação de dependência proprietária**: cada barreira regulatória, tributária ou operacional que atinge a infraestrutura livre beneficia indiretamente fornecedores proprietários que possuem escala e estrutura jurídica para absorver esses custos  
- **perda de soberania tecnológica**: países que tributam a construção aberta e não financiam infraestrutura livre ampliam sua dependência de ecossistemas proprietários estrangeiros — exatamente o oposto do que políticas de soberania digital pretendem alcançar  

Relatório da [Linux Foundation](https://www.linuxfoundation.org/blog/the-state-of-open-source-software-in-2025) confirma que a maioria das organizações **não possui estruturas adequadas para lidar com sua dependência** de componentes abertos. A [European Commission](https://digital-strategy.ec.europa.eu/en/policies/open-source-software) já reconhece a infraestrutura livre como estratégica — mas iniciativas como o [EU Sovereign Tech Fund](https://en.wikipedia.org/wiki/EU_Sovereign_Tech_Fund) são exceções pontuais, não política sistêmica.

### O princípio incontornável

Não se trata de preferência política ou de concessão de privilégios. Trata-se de uma limitação estrutural:

> **Não se pode exigir controle onde ele não existe.**

Reconhecer juridicamente a especificidade da infraestrutura livre configura:

- correção de enquadramento normativo  
- aumento de precisão regulatória  
- maior eficácia das normas que, hoje, incidem sobre agentes sem poder de ação  

---

## Conclusão

A infraestrutura livre — software, hardware aberto, serviços descentralizados e redes livres — não é um modelo alternativo de desenvolvimento. É **infraestrutura crítica da sociedade digital**, da qual dependem sistemas governamentais, cadeias produtivas, serviços financeiros e infraestruturas essenciais.

O que as evidências demonstram é um **desalinhamento estrutural entre norma e realidade técnica** que se manifesta em cinco eixos convergentes:

1. **Incerteza jurídica** que desincentiva a participação  
2. **Responsabilização indevida** que atinge quem cria, e não quem controla  
3. **Obrigações incompatíveis** que pressupõem arquiteturas centralizadas  
4. **Barreiras operacionais** que favorecem modelos comerciais e proprietários  
5. **Fragilidade econômica** que inviabiliza a sustentabilidade do ecossistema  

Esse desalinhamento não melhora a regulação, não aumenta a segurança e não atinge os agentes com poder real de controle. Ao contrário — **penaliza quem constrói a base tecnológica, fragiliza o ecossistema e concentra poder em fornecedores proprietários**.

A adaptação normativa, portanto, não é opcional.

É uma **condição necessária para preservar a integridade da infraestrutura digital contemporânea**.
