## A proposta

O InfraLivre defende a criação de um **Marco Jurídico da Infraestrutura Livre** — um enquadramento legal abrangente que reconheça e proteja software livre, hardware aberto, serviços descentralizados e redes livres como **infraestrutura crítica da sociedade digital**.

A proposta não busca isentar a infraestrutura livre de toda regulação. Busca **corrigir o desalinhamento estrutural** entre norma e realidade técnica documentado na análise do problema — substituindo o modelo implícito de controle centralizado por um enquadramento que reconheça as especificidades do ecossistema aberto e faça a responsabilidade recair **onde há controle real**.

Se implementado, o Marco colocaria o Brasil na **vanguarda mundial do direito da infraestrutura livre** — antecipando-se às adaptações fragmentárias que a União Europeia, os Estados Unidos e outros blocos vêm tentando realizar regulação por regulação, sem um enquadramento unificado.

## Os cinco pilares

A proposta se estrutura em cinco pilares que respondem diretamente às cinco dimensões do problema identificadas.

---

### 1. Reconhecimento jurídico da infraestrutura livre

**Problema que endereça**: dimensão 1 — incerteza jurídica e ausência de marcos claros.

O primeiro passo é **nomear o que se protege**. Hoje, o ordenamento jurídico não possui definição, categoria ou enquadramento que reconheça a infraestrutura livre como fenômeno distinto. Cada regulação a alcança por acidente — como software comercial, como plataforma digital, como operadora de telecomunicações, como fabricante de produto. A ausência de definição é, em si, a causa raiz da incerteza.

#### O que se propõe

- **Definição legal das quatro camadas**: software livre, hardware aberto, serviços descentralizados e redes livres, com reconhecimento de suas licenças características (GPL, MIT, Apache, CERN-OHL, Creative Commons) como instrumentos jurídicos válidos de estruturação do ecossistema
- **Declaração de interesse público**: reconhecimento formal de que a infraestrutura livre constitui **bem comum digital de interesse público**, da qual dependem sistemas governamentais, cadeias produtivas, serviços financeiros e infraestruturas essenciais — tal como o são as estradas, redes elétricas e sistemas de saneamento
- **Reconhecimento da descentralização como modelo legítimo**: a lei deve reconhecer que projetos sem entidade jurídica central, sem sede fixa, sem hierarquia definida e com contribuidores distribuídos globalmente são uma forma **estruturalmente válida** de organização — e não uma irregularidade a ser corrigida
- **Validade de licenças livres**: reconhecimento explícito de que cláusulas de isenção de garantia e responsabilidade presentes em licenças livres (como as *disclaimer* da GPL, MIT e CERN-OHL) são válidas perante o ordenamento brasileiro, respeitados os limites de ordem pública — eliminando a incerteza sobre a interação entre licenças livres e normas como o Código de Defesa do Consumidor

#### O que resolve

Elimina a raiz da incerteza jurídica: não se debate mais se software livre é "produto", se um protocolo federado é "plataforma", se um design aberto é "fabricação", ou se uma rede mesh é "telecomunicação". O marco cria **categorias próprias** com tratamento próprio.

---

### 2. Separação funcional entre criação, operação e uso

**Problema que endereça**: dimensão 2 — responsabilização indevida.

O padrão documentado é claro: o direito confunde autoria com controle, tratando quem criou como se tivesse poder sobre quem opera e quem usa. Esse pilar estabelece a separação que, na infraestrutura livre, é **estrutural e irreversível**.

#### O que se propõe

- **Tipificação tripartite**: reconhecimento jurídico de que criação (escrever código, projetar hardware, desenvolver protocolo, especificar arquitetura de rede), operação (implantar software, fabricar dispositivo, operar instância, manter nó) e uso (executar, utilizar, publicar conteúdo, conectar-se) são atividades **juridicamente distintas** com capacidades e responsabilidades distintas
- **Princípio da responsabilidade vinculada ao controle**: nenhum agente pode ser responsabilizado por atos praticados em camada sobre a qual não possui controle efetivo. Publicar código não gera responsabilidade por sua operação. Projetar hardware não gera responsabilidade por sua fabricação. Operar instância não gera responsabilidade por conteúdo federado de terceiros. Manter nó de rede não gera responsabilidade por tráfego de terceiros
- **Safe harbor para criadores e mantenedores**: proteção jurídica explícita para quem desenvolve, mantém ou publica infraestrutura livre — análoga aos *safe harbors* já existentes para provedores de aplicações de internet (Marco Civil, art. 19), mas estendida a todas as camadas da infraestrutura livre
- **Proteção contra sancionamento de artefatos**: vedação de sanções, bloqueios ou restrições aplicadas a código-fonte, designs, especificações ou protocolos abertos enquanto artefatos — distinguindo-os de serviços operados que os utilizam

#### Precedente jurídico consolidado

Esse pilar não inova sem fundamento. Reflete princípio já consagrado no caso [Sony v. Universal (Betamax)](https://en.wikipedia.org/wiki/Sony_Corp._of_America_v._Universal_City_Studios,_Inc.) — quem fabrica ferramenta de uso geral com usos substancialmente legítimos não é responsável por usos ilícitos de terceiros — e refinado em [MGM v. Grokster](https://en.wikipedia.org/wiki/MGM_Studios,_Inc._v._Grokster,_Ltd.), que distingue fornecer ferramenta de **induzir ativamente** seu uso ilícito.

#### O que resolve

Impede que desenvolvedores sejam criminalizados por código publicado (caso Tornado Cash), projetistas sejam tratados como fabricantes (caso CRA), operadores de instâncias sejam responsabilizados por conteúdo federado (caso NetzDG), e voluntários de redes sejam processados por atos de terceiros (caso Störerhaftung). A responsabilidade recai sobre **quem efetivamente possui e exerce controle**.

---

### 3. Princípio da compatibilidade arquitetural

**Problema que endereça**: dimensão 3 — obrigações regulatórias estruturalmente incompatíveis.

Não basta proteger quem cria e separar os papéis. É necessário impedir que regulações futuras imponham obrigações que **pressupõem arquiteturas que não existem** em sistemas abertos e descentralizados. Este pilar funciona como uma **cláusula de blindagem estrutural**: um teste de compatibilidade que toda regulação deve passar antes de incidir sobre infraestrutura livre.

#### O que se propõe

- **Teste de viabilidade arquitetural**: toda obrigação regulatória aplicável a infraestrutura livre deve ser submetida a avaliação de exequibilidade técnica. Obrigações que pressuponham controle centralizado, ponto único de enforcement ou capacidade de restrição de uso em arquiteturas abertas são **presumidamente incompatíveis** e devem ser adaptadas ou afastadas
- **Vedação de obrigações estruturalmente impossíveis**: proibição explícita de exigências como: varredura de conteúdo em código-fonte aberto e compilável pelo usuário; moderação centralizada de redes federadas; interceptação em redes mesh sem ponto central de roteamento; bloqueio de firmware em hardware projetado para ser aberto; cadastro de "assinantes" em redes de acesso livre
- **Proibição de imposição de DRM e bloqueio de firmware**: vedação de exigências regulatórias que obriguem a infraestrutura livre a incorporar mecanismos de restrição de uso, bloqueio de firmware ou gerenciamento de direitos digitais que contradigam sua natureza aberta
- **Proteção à pesquisa de segurança**: reconhecimento explícito de que ferramentas de auditoria, engenharia reversa e pesquisa de vulnerabilidades em infraestrutura livre constituem **atividade de interesse público** e não podem ser enquadradas como violação de medidas de proteção tecnológica
- **Cláusula de adaptação regulatória**: quando uma regulação setorial (telecomunicações, proteção de dados, segurança cibernética, proteção ao consumidor) incidir sobre infraestrutura livre, seus requisitos devem ser interpretados e aplicados de forma compatível com a arquitetura descentralizada — admitindo **meios alternativos de conformidade** equivalentes em resultado, ainda que distintos em método

#### O que resolve

Impede que futuras legislações — como Chat Control, NIS2, DMCA §1201, RED, exigências de interceptação em redes mesh, ou quaisquer regulações que se baseiem no paradigma centralizado — atinjam a infraestrutura livre com obrigações inexequíveis. A cláusula de adaptação também protege contra regulações ainda não concebidas, criando segurança jurídica **prospectiva**.

---

### 4. Regime regulatório proporcional e não discriminatório

**Problema que endereça**: dimensão 4 — barreiras operacionais e restrições de acesso.

Mesmo onde a lei não proíbe a infraestrutura livre, o desenho regulatório favorece sistematicamente modelos centralizados e comerciais. Este pilar cria um princípio de **neutralidade regulatória**: a regulação não pode, por sua estrutura, discriminar contra modelos abertos e comunitários.

#### O que se propõe

- **Proporcionalidade regulatória**: obrigações de conformidade, registro, relatórios e certificação devem ser **proporcionais à escala, natureza e finalidade** do agente regulado. Projetos comunitários, operadores voluntários e redes não comerciais não podem ser submetidos aos mesmos requisitos dimensionados para plataformas com bilhões de usuários e equipes de compliance
- **Distribuição de software sem intermediários obrigatórios**: garantia de que a distribuição de software livre não pode ser condicionada à aprovação por lojas de aplicativos ou gatekeepers proprietários. Direito de sideloading, compilação local e distribuição direta como **formas legítimas de distribuição**
- **Certificação acessível para hardware aberto**: criação de regime simplificado de homologação e certificação para dispositivos de hardware aberto fabricados em pequenos lotes, com custo proporcional à escala — incluindo modalidades de autocertificação para projetos educacionais e comunitários
- **Reconhecimento de redes comunitárias como categoria distinta**: redes livres não são operadoras de telecomunicações. Criação de enquadramento regulatório próprio que reconheça redes comunitárias, redes mesh e redes experimentais como categoria distinta, com obrigações proporcionais à sua natureza não comercial e comunitária — incluindo acesso a faixas de espectro adequadas e potências que permitam cobertura real
- **Mandato de padrões abertos na administração pública**: exigência de que sistemas, dados e serviços digitais adquiridos, contratados ou operados pela administração pública utilizem **padrões abertos e interoperáveis** — prevenindo vendor lock-in e garantindo que o ecossistema livre possa competir em igualdade de condições
- **Interoperabilidade como direito**: plataformas e serviços digitais dominantes devem ser obrigados a manter **interfaces abertas e documentadas** que permitam interoperabilidade com alternativas livres e descentralizadas

#### O que resolve

Remove as barreiras estruturais documentadas: app stores como gatekeepers, certificação proibitiva, licenciamento desproporcional de telecom, requisitos de estrutura jurídica para operar serviços, e limites de espectro que impedem redes comunitárias de alcançar seu potencial. A regulação passa a ser **proporcional ao poder real do agente regulado**.

---

### 5. Sustentabilidade e fomento do ecossistema

**Problema que endereça**: dimensão 5 — fragilidade econômica, tributação, ausência de financiamento, falta de figura jurídica e insustentabilidade operacional.

Os quatro pilares anteriores protegem a infraestrutura livre de danos regulatórios. Este pilar cria as **condições positivas** para que ela prospere — reconhecendo que infraestrutura crítica requer investimento público e politicas de fomento, não apenas ausência de obstáculos.

#### O que se propõe

##### Figura jurídica adequada

- **Criação de uma nova modalidade de pessoa jurídica**: o **Projeto de Infraestrutura Livre (PIL)** — uma figura jurídica **de propósito específico**, desenhada exclusivamente para representar projetos de infraestrutura livre e aberta. O PIL não é uma entidade de uso geral como uma ME, EPP ou associação: ele existe para e pelo projeto livre que representa, com acoplamento direto entre a figura jurídica e a infraestrutura que ela protege

**Natureza e requisitos do PIL:**

- **Vinculação obrigatória à infraestrutura livre**: para constituir e manter um PIL, o projeto deve operar sob licenças livres e abertas reconhecidas (GPL, MIT, Apache, CERN-OHL, Creative Commons ou equivalentes). O PIL existe *porque* a infraestrutura é livre — se a infraestrutura deixar de ser livre, o PIL perde sua razão jurídica. Essa vinculação é constitutiva, não acessória
- **Finalidade exclusivamente comunitária e sem fins lucrativos**: o PIL é vedado de exercer atividade comercial. Sua finalidade é representar o projeto, conectar seus contribuidores e voluntários, receber financiamento público e doações, firmar convênios, participar de editais e licitações, emitir recibos e atender requisitos regulatórios que pressupõem personalidade jurídica. Se do projeto surgir interesse comercial, os envolvidos devem constituir **pessoa jurídica separada** (ME, EPP, LTDA, S/A) para suprir essas demandas — que são incompatíveis com o PIL
- **Separação patrimonial e de responsabilidade**: o PIL cria uma **camada jurídica própria** entre o projeto e as pessoas físicas e jurídicas que o mantêm. Os mantenedores, voluntários e contribuidores não respondem pessoalmente pelas obrigações do PIL, e o PIL não se confunde com o patrimônio pessoal de seus participantes. Essa separação é o mecanismo central de proteção: a responsabilidade que hoje recai diretamente sobre pessoas físicas que mantêm infraestrutura livre passa a ser absorvida pela entidade
- **CNPJ próprio**: o PIL possui CNPJ e satisfaz, por si só, toda exigência legal de personalidade jurídica que recaia sobre projetos de infraestrutura livre — eliminando a necessidade de constituir associação, fundação, cooperativa ou empresa para cumprir obrigações formais
- **Constituição simplificada e praticamente gratuita**: sem patrimônio mínimo, sem exigência de assembleia presencial, sem necessidade de cartório, sem custos de registro significativos. Governança adaptada a contribuidores distribuídos e assíncronos, com custos de manutenção mínimos ou nulos. O PIL deve ser tão simples de constituir quanto abrir um repositório — porque a barreira de entrada deve ser proporcional à natureza do ecossistema que ele protege

**Regime de voluntariado do PIL:**

- O PIL pode formalizar a relação com seus contribuidores como **trabalho voluntário**, nos termos da [Lei do Voluntariado (Lei 9.608/98)](https://www.planalto.gov.br/ccivil_03/leis/l9608.htm), afastando a caracterização de vínculo empregatício. A contribuição a projetos de infraestrutura livre — desenvolvimento de código, revisão de designs, operação de instâncias, manutenção de nós de rede — constitui atividade não remunerada de finalidade cívica, educacional, científica ou de assistência tecnológica
- O PIL emite **termos de adesão voluntária** que protegem tanto o projeto quanto o contribuidor, sanando a insegurança trabalhista que hoje impede projetos de aceitar contribuições regulares sem risco de reclamação
- Voluntários do PIL podem receber reembolso de despesas comprovadas (hospedagem de servidores, aquisição de componentes, deslocamento) sem que isso configure remuneração ou desvirtue o caráter voluntário

**Por que o PIL é uma figura inédita:**

Não existe, no direito mundial, uma figura jurídica projetada especificamente para infraestrutura livre. Associações, fundações e cooperativas foram desenhadas para outros contextos e carregam requisitos incompatíveis (patrimônio, assembleia, atividade econômica). Empresas pressupõem fins lucrativos. O PIL é o **meio-termo estrutural** que faltava: oferece personalidade jurídica, separação patrimonial, proteção trabalhista via voluntariado e capacidade de interagir com o sistema jurídico — sem impor custos, burocracia ou premissas organizacionais que o ecossistema livre não pode cumprir. É uma figura **acoplada à natureza da infraestrutura que protege**, e por isso funciona onde as demais falham.

- **Regime de custódia fiscal** (*fiscal sponsorship*): reconhecimento legal da figura de **organização custodiante** que possa abrigar administrativamente múltiplos projetos de infraestrutura livre — oferecendo personalidade jurídica, capacidade tributária e estrutura de prestação de contas sem exigir que cada projeto constitua PIL ou entidade própria. Útil para projetos em estágio inicial ou que não justifiquem constituição individual
- **Dispensa de personalidade jurídica como condição de existência**: nenhum projeto de infraestrutura livre pode ser obrigado a constituir pessoa jurídica **simplesmente por existir, publicar código, operar infraestrutura ou receber contribuições**. A personalidade jurídica não é pré-requisito para a atividade livre em si. No entanto, para **acessar mecanismos do poder público** — editais, convênios, licitações, financiamento governamental, benefícios fiscais —, o projeto deve formalizar-se por meio de **PIL, custódia fiscal ou pessoa jurídica convencional**. Essa exigência não é barreira: o PIL foi desenhado para ser praticamente gratuito e instantâneo, e a custódia fiscal permite acesso sem constituição própria. O que se veda é a exigência de formas jurídicas incompatíveis (associação, fundação, empresa) como condição exclusiva
- **Reconhecimento de projetos transnacionais**: mecanismo que permita a projetos globais sem sede ou jurisdição única obter **reconhecimento jurídico parcial** no Brasil para fins específicos (recebimento de recursos, participação em editais, cumprimento regulatório pontual) sem exigir constituição integral de pessoa jurídica brasileira, onde fica permitido uso do PIL ou reconhecimento por um custodiante fiscal e vedado obrigação, caso projeto nao tenha ações concretas no país (por exemplo, voluntarios)

##### Regime tributário diferenciado

- **Isenção ou redução de tributos de importação** sobre componentes, kits e equipamentos destinados a projetos de infraestrutura livre comprovadamente educacionais, comunitários ou de interesse público — distinguindo importação comunitária de importação comercial
- **Isenção de tributação sobre serviços digitais** para operadores voluntários de instâncias federadas e serviços descentralizados sem fins lucrativos
- **Extensão de incentivos fiscais de inovação** (Lei do Bem, Lei de Informática e seus sucessores na Reforma Tributária) a projetos de infraestrutura livre, mediante critérios adaptados à sua organização — admitindo **PIL e custódia fiscal** como formas válidas de acesso, sem exigência de formas jurídicas tradicionais (associação, fundação, empresa) como condição exclusiva
- **Isenção de carga tributária de telecomunicações** para redes comunitárias de pequeno porte sem fins lucrativos

##### Mecanismos de financiamento

- **Fundo Nacional de Infraestrutura Livre**: criação de mecanismo público de financiamento direto a projetos de infraestrutura livre em todas as quatro camadas — inspirado no [EU Sovereign Tech Fund](https://en.wikipedia.org/wiki/EU_Sovereign_Tech_Fund) e no [NLnet Foundation](https://nlnet.nl/), mas com acesso simplificado compatível com a realidade de projetos comunitários
- **Adaptação de editais de CT&I**: editais do [CNPq](https://www.gov.br/cnpq/), [FINEP](http://www.finep.gov.br/), [FAPESP](https://fapesp.br/) e equivalentes estaduais devem incluir **modalidades acessíveis a projetos de infraestrutura livre**, aceitando **PIL e custódia fiscal** como formas válidas de personalidade jurídica para participação — sem exigência de vínculo institucional tradicional, e admitindo contribuição técnica como contrapartida
- **Preferência em licitações públicas**: critérios de pontuação técnica em licitações de software, hardware e infraestrutura digital que valorizem soluções baseadas em infraestrutura livre — com vedação de exigências contratuais que excluam projetos comunitários na prática (suporte 24/7 obrigatório, garantias bancárias, SLA corporativo) quando proporcionalmente desnecessárias
- **Incentivo à adoção governamental**: programas governamentais de adoção e contribuição ativa a projetos de infraestrutura livre — não apenas como consumidores, mas como **contribuintes e mantenedores** do ecossistema que utilizam

#### O que resolve

Rompe o ciclo vicioso documentado na seção 5 do problema: tributação → ausência de financiamento → impossibilidade de formalização → sobrecarga → burnout → abandono → vulnerabilidades → mais regulação → mais custos. O pilar ataca **todas as frentes simultaneamente** — tributação, financiamento, formalização e sustentabilidade — porque são interdependentes.

---

## Alcance e efeito sistêmico

O Marco não regula apenas software. Ele cria **segurança jurídica transversal** para as quatro camadas da infraestrutura livre — software, hardware, serviços e redes — e para os três papéis estruturais — criação, operação e uso.

| Pilar | Dimensão do problema | Efeito |
|-------|---------------------|--------|
| 1. Reconhecimento jurídico | Incerteza jurídica | Elimina a raiz: define, nomeia, categoriza |
| 2. Separação funcional | Responsabilização indevida | Vincula responsabilidade a controle real |
| 3. Compatibilidade arquitetural | Obrigações incompatíveis | Blinda contra regulação inexequível |
| 4. Regime proporcional | Barreiras operacionais | Remove discriminação estrutural |
| 5. Sustentabilidade e fomento | Fragilidade econômica | Cria condições positivas para o ecossistema |

Juntos, os cinco pilares não apenas corrigem os problemas documentados — eles criam uma **estrutura jurídica resiliente** que protege a infraestrutura livre contra regulações futuras que repitam os mesmos padrões de desalinhamento.

## Posicionamento internacional

Nenhum país possui, atualmente, um marco jurídico unificado para a infraestrutura livre. O que existe são adaptações fragmentárias:

- a UE fez exceções pontuais no CRA e reconheceu redes comunitárias no EECC  
- os EUA possuem jurisprudência favorável (Betamax, Grokster, Bernstein) mas nenhuma legislação protetiva unificada  
- a Alemanha reformou a Störerhaftung após anos de dano ao ecossistema  
- a Espanha reconheceu a Guifi.net como caso individual, não como categoria  
- o México concedeu exceções pontuais para a Rhizomatica  

Um Marco Jurídico da Infraestrutura Livre posicionaria o Brasil como o **primeiro país a tratar o problema de forma sistêmica e proativa** — não reagindo regulação por regulação, mas estabelecendo princípios que se aplicam transversalmente a toda a infraestrutura livre, presente e futura.

## Estado atual

A proposta legislativa está sendo desenvolvida em repositório separado, de forma aberta e colaborativa. O projeto encontra-se em fase de estruturação e consolidação.

Sugestões, revisões e propostas podem ser feitas via *issues* e *pull requests*.

## Princípio fundamental

> **Não se pode exigir controle onde ele não existe.**

A infraestrutura livre — software, hardware, serviços e redes — deve ser reconhecida como **bem comum digital de interesse público**.

Essa definição não é simbólica. Ela fundamenta um regime jurídico que protege quem constrói, fomenta quem mantém e regula com precisão quem efetivamente controla.

A adaptação normativa não é opcional. É uma **condição necessária para preservar a integridade da infraestrutura digital contemporânea**.
