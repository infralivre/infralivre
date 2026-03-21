## O que é software livre e de código aberto?

**Software livre e de código aberto** é o software cujo código-fonte pode ser acessado, estudado, modificado e redistribuído. Em inglês, é comum o uso da sigla **FOSS**, de *Free and Open Source Software*.

Na prática, isso significa que o funcionamento interno do programa não fica escondido atrás de uma barreira jurídica e técnica controlada por uma única empresa. Pessoas, universidades, cooperativas, fundações, órgãos públicos e empresas podem examinar o código, adaptá-lo às suas necessidades e contribuir com melhorias.

Esse ponto é decisivo. Quando o código é fechado, o usuário depende da boa vontade, da continuidade e das prioridades do fornecedor. Quando o código é livre, o conhecimento técnico permanece disponível e reaproveitável. O software deixa de ser apenas um produto e passa a ser também uma infraestrutura comum, sobre a qual outras pessoas constroem novas ferramentas.

## Software livre e código aberto são a mesma coisa?

Na prática, os dois termos costumam apontar para o mesmo universo de programas com código acessível, licenças abertas e possibilidade de modificação e redistribuição. Mas eles não nasceram com a mesma ênfase.

**Software livre** destaca a questão das liberdades do usuário e da comunidade. O foco está no direito de usar, estudar, modificar e compartilhar. Já **código aberto** enfatiza mais o modelo de desenvolvimento, colaboração e transparência técnica.

Em outras palavras, muitas vezes estamos falando dos mesmos projetos, mas por lentes diferentes.

- quando se fala em **software livre**, a ênfase está em liberdade, autonomia e direitos
- quando se fala em **código aberto**, a ênfase costuma estar em abertura do código, governança e modelo de desenvolvimento

Essa distinção importa porque nem toda conversa sobre “código aberto” destaca com a mesma clareza as liberdades que estão no centro da tradição do software livre. Por isso, ao falar de FOSS, é útil deixar explícito que não se trata apenas de poder olhar o código, mas também de poder usá-lo, modificá-lo e redistribuí-lo.

## As quatro liberdades

O conceito de software livre é tradicionalmente descrito por quatro liberdades fundamentais:

1. **Liberdade de usar** o software para qualquer finalidade
2. **Liberdade de estudar** como ele funciona e adaptá-lo
3. **Liberdade de redistribuir** cópias
4. **Liberdade de melhorar** o software e publicar essas melhorias

Essas liberdades não tratam apenas de preço. Um programa pode até ser gratuito e ainda assim não ser livre. O ponto central é a autonomia. O usuário, a organização ou a comunidade não ficam presos a uma caixa-preta tecnológica.

## Onde ele está no seu dia a dia

Quem não trabalha com tecnologia costuma imaginar o software livre como algo distante, quase artesanal, usado apenas por programadores em ambientes técnicos. A realidade é o oposto. O software livre está espalhado por toda a vida digital contemporânea.

Quando alguém abre um site no navegador, há uma grande chance de que esse site esteja rodando em um servidor [Linux](https://kernel.org/), servido por [Nginx](https://nginx.org/) ou [Apache](https://httpd.apache.org/), usando [PostgreSQL](https://www.postgresql.org/), [MariaDB](https://mariadb.org/) ou [Redis](https://redis.io/), com partes da aplicação escritas em linguagens como [Python](https://www.python.org/), [PHP](https://www.php.net/), JavaScript, [Go](https://go.dev/) ou Java.

Mesmo que o produto final seja uma plataforma bilionária e fechada ao público, boa parte da infraestrutura por baixo dele foi construída com componentes livres.

No celular acontece algo parecido. O [Android](https://source.android.com/) se apoia no kernel Linux. Em casa, no trabalho e na escola, pessoas usam diariamente softwares livres sem perceber. Eles aparecem, por exemplo:

- no navegador, com [Firefox](https://www.mozilla.org/firefox/) e motores abertos da web
- no escritório, com [LibreOffice](https://www.libreoffice.org/) abrindo textos, planilhas e apresentações
- no consumo de mídia, com [VLC](https://www.videolan.org/vlc/) reproduzindo praticamente qualquer formato
- na criação de conteúdo, com [OBS Studio](https://obsproject.com/), [Audacity](https://www.audacityteam.org/), [GIMP](https://www.gimp.org/), [Inkscape](https://inkscape.org/) e [Blender](https://www.blender.org/)
- na web, com [WordPress](https://wordpress.org/) sustentando uma parte enorme dos sites do mundo
- em equipamentos invisíveis, como roteadores, smart TVs, caixas eletrônicos e terminais de autoatendimento

O ponto importante para quem está fora da área técnica é este: software livre não é um nicho alternativo fora do sistema. Ele é parte estrutural do sistema.

## O que de fato é o Linux

Para muita gente, “Linux” parece ser o nome de um sistema operacional completo, como se fosse equivalente direto de Windows ou macOS. Isso é compreensível, mas simplifica demais a realidade.

Em sentido estrito, **Linux é o kernel**. O kernel é o núcleo do sistema operacional, a camada que conversa com o hardware e organiza recursos essenciais.

É ele que lida com:

- memória e processos
- dispositivos e periféricos
- sistema de arquivos
- permissões de acesso
- rede e comunicação com o hardware

Quando um programa precisa acessar disco, internet, placa de vídeo, teclado, câmera ou memória, esse acesso passa, direta ou indiretamente, pelo kernel.

Só que ninguém usa apenas um kernel. Para existir um sistema utilizável, é preciso somar muitas outras peças. É necessário ter ferramentas de terminal, bibliotecas básicas, compiladores, instaladores, gerenciadores de pacotes, serviços de rede, interface gráfica, drivers, codecs, navegadores, editores de texto, aplicativos e camadas de configuração. O que as pessoas normalmente chamam de “Linux” no desktop é, na prática, uma composição de projetos.

Por isso faz mais sentido pensar em Linux como um **ecossistema de sistemas baseados no kernel Linux**. Cada sistema monta esse conjunto de peças de uma forma específica.

## Distribuições, ambientes e aplicativos

É aqui que entram as **distribuições Linux**, ou **distros**. Uma distribuição é uma forma organizada de empacotar o kernel Linux junto com milhares de outros componentes para entregar um sistema pronto para instalar e usar. [Ubuntu](https://ubuntu.com/), [Debian](https://www.debian.org/), [Fedora](https://fedoraproject.org/), [Arch Linux](https://archlinux.org/), [openSUSE](https://www.opensuse.org/), [Mint](https://linuxmint.com/) e [Pop!_OS](https://pop.system76.com/) são exemplos conhecidos. Elas compartilham muitos componentes, mas diferem em objetivos, estabilidade, frequência de atualização, políticas de segurança, ferramentas de configuração e experiência de uso.

De forma simples, uma distro escolhe e organiza:

- qual versão do kernel usar
- quais bibliotecas e ferramentas básicas incluir
- como instalar e atualizar programas
- quais padrões de segurança e suporte oferecer
- qual experiência de uso entregar

Algumas distribuições priorizam estabilidade e previsibilidade, algo importante para servidores e órgãos públicos. Outras priorizam novidades e ciclos rápidos. Algumas buscam facilitar a vida de iniciantes. Outras assumem um usuário mais técnico. Em todos os casos, há um trabalho de curadoria, integração e manutenção que vai muito além de “pegar um código da internet”.

No ambiente gráfico acontece algo semelhante. Muita gente fala de Linux como se houvesse uma única aparência visual, mas isso não existe. Há diversos **ambientes gráficos** e **gerenciadores de janelas**, como [GNOME](https://www.gnome.org/), [KDE Plasma](https://kde.org/plasma-desktop/), [Xfce](https://xfce.org/), [Cinnamon](https://projects.linuxmint.com/cinnamon/) e outros. Eles determinam aparência, fluxo de trabalho, menus, painel, notificações, configurações e experiência geral do usuário. Uma mesma base de sistema pode parecer completamente diferente dependendo dessa camada.

Acima disso estão os aplicativos. O usuário abre [Firefox](https://www.mozilla.org/firefox/), [LibreOffice](https://www.libreoffice.org/), [OBS Studio](https://obsproject.com/), [Thunderbird](https://www.thunderbird.net/), [GIMP](https://www.gimp.org/), [VLC](https://www.videolan.org/vlc/) ou outro programa e interage com a parte visível da pilha. A maior parte das pessoas não vê o restante, mas ele continua ali, sustentando tudo.

## O Software Livre por de tras da Web

Uma forma didática de entender o universo FOSS é observar a cadeia inteira que torna possível uma ação aparentemente simples, como abrir um site no navegador.

Quando o navegador faz uma requisição, ele usa pilhas de rede, criptografia, certificados, bibliotecas de compressão e renderização. Do outro lado, o site pode estar hospedado em Linux, atrás de [Nginx](https://nginx.org/), com aplicação em [Node.js](https://nodejs.org/), Python, PHP ou Java, consultando [PostgreSQL](https://www.postgresql.org/) ou [MariaDB](https://mariadb.org/), armazenando dados em sistemas distribuídos, rodando em containers geridos por [Kubernetes](https://kubernetes.io/), tudo isso sobre servidores físicos ou virtuais cuja operação também depende fortemente de software livre.

Ou seja, entre o clique do usuário e a página carregada existe uma longa sequência de projetos interdependentes. O software livre opera exatamente assim: em camadas que se apoiam mutuamente. Um projeto fornece base para outro, que por sua vez viabiliza dezenas de outros acima dele. Esse reaproveitamento é uma das grandes razões pelas quais a inovação aberta consegue escalar globalmente.

## Linguagens, bibliotecas e infraestrutura

Outro ponto que costuma passar despercebido é que o software livre não é formado apenas por aplicativos finais. O ecossistema também inclui linguagens, compiladores, bibliotecas, frameworks e ferramentas de infraestrutura sem as quais a indústria de software moderna simplesmente não existiria na forma atual.

Linguagens como **[Python](https://www.python.org/)**, **[PHP](https://www.php.net/)**, **[Ruby](https://www.ruby-lang.org/)**, **[Go](https://go.dev/)** e ecossistemas como o de **JavaScript** dependem intensamente de implementações abertas, bibliotecas abertas e ferramentas abertas. Compiladores e toolchains como **[GCC](https://gcc.gnu.org/)**, **[Clang/LLVM](https://llvm.org/)** e muitos assemblers, linkers e depuradores são software livre. Bancos como **[PostgreSQL](https://www.postgresql.org/)** e **[MariaDB](https://mariadb.org/)**, servidores como **[Apache](https://httpd.apache.org/)** e **[NGINX](https://nginx.org/)**, plataformas como **[Docker](https://www.docker.com/)**, **[Kubernetes](https://kubernetes.io/)**, **[Git](https://git-scm.com/)**, **[OpenSSH](https://www.openssh.com/)**, **[OpenSSL](https://www.openssl.org/)** e incontáveis bibliotecas menores compõem a base do funcionamento cotidiano da internet e da computação corporativa.

O resultado é um ecossistema em que até empresas que vendem produtos proprietários dependem, em maior ou menor grau, do trabalho aberto de comunidades globais.

## Como a área se organiza na prática

Para quem está de fora, pode parecer improvável que algo tão grande funcione sem um comando único. Mas o ecossistema FOSS não é desorganizado. Ele é **descentralizado**. Isso é diferente.

Cada projeto tem sua própria forma de coordenação. Em geral, ele se organiza em uma ou mais destas formas:

- projetos controlados por fundações
- projetos mantidos por pequenos grupos com forte legitimidade técnica
- projetos com presença marcante de empresas patrocinadoras
- projetos quase inteiramente comunitários
- arranjos híbridos, com comunidade e empresas dividindo responsabilidades

Há projetos com conselhos formais, votações, roadmaps públicos, revisão obrigatória por pares e regras detalhadas para aceitar mudanças. Há outros mais enxutos, centrados na liderança de mantenedores experientes.

Em quase todos os casos existe uma distinção entre papéis:

- **usuários**, que relatam problemas e sugerem melhorias
- **contribuidores**, que enviam correções, documentação, traduções ou novas funcionalidades
- **revisores**, que analisam qualidade, compatibilidade, segurança e impacto técnico
- **mantenedores**, que decidem o que entra, quando entra e como o projeto preserva consistência ao longo do tempo

Esse processo costuma acontecer em repositórios públicos, listas de discussão, fóruns, chats, conferências e sistemas de acompanhamento de tarefas. Em vez de depender de decisões invisíveis tomadas em salas fechadas, boa parte da deliberação técnica fica registrada de forma pública e auditável.

## Empresas, fundações e comunidade

O software livre não é feito apenas por voluntários isolados, e também não é um espaço dominado apenas por gigantes corporativos. O ecossistema mistura várias formas de organização.

Existem empresas cuja atividade principal gira em torno de software livre, como **[Red Hat](https://www.redhat.com/)**, **[Canonical](https://canonical.com/)**, **[SUSE](https://www.suse.com/)**, **[Collabora](https://www.collabora.com/)**, **[Automattic](https://automattic.com/)**, **[GitLab](https://about.gitlab.com/)** e muitas consultorias, cooperativas e prestadoras de serviço menores.

Elas costumam atuar com:

- suporte técnico
- hospedagem e operação
- integração e customização
- certificação e treinamento
- versões empresariais de ferramentas abertas

Existem também fundações e entidades sem fins lucrativos com papel crucial de coordenação, proteção institucional, captação de recursos e organização de governança. Entre as mais conhecidas estão a **[Free Software Foundation](https://www.fsf.org/)**, a **[Open Source Initiative](https://opensource.org/)**, a **[Linux Foundation](https://www.linuxfoundation.org/)**, a **[Mozilla Foundation](https://foundation.mozilla.org/)**, a **[Apache Software Foundation](https://www.apache.org/)**, a **[Document Foundation](https://www.documentfoundation.org/)**, a **[GNOME Foundation](https://foundation.gnome.org/)**, a **[KDE e.V.](https://ev.kde.org/)**, a **[Python Software Foundation](https://www.python.org/psf/)** e a **[Blender Foundation](https://www.blender.org/about/foundation/)**.

Ao lado disso há milhares de grupos informais e semi-informais: coletivos locais, comunidades de tradução, mantenedores independentes, grupos de usuários Linux, administradores de pacotes, moderadores de fóruns, pessoas que cuidam de documentação e gente que mantém uma biblioteca pequena usada por milhões sem que quase ninguém saiba seu nome.

Esse mosaico é parte da força e também da complexidade do setor. Não existe uma única porta de entrada, uma única ideologia operacional ou um único modelo institucional. Há projetos liderados por empresas. Há projetos protegidos por fundações. Há projetos radicalmente comunitários. Há arranjos híbridos.

## Governança não é detalhe, é infraestrutura social

Quando se fala em governança de software livre, não se trata apenas de burocracia. Governança define como conflitos são resolvidos, como decisões técnicas são tomadas, quem tem permissão para publicar novas versões, como vulnerabilidades são tratadas, como contribuições são avaliadas e de que forma o projeto evita depender excessivamente de uma única pessoa ou empresa.

Em um projeto pequeno, a governança pode ser simples e baseada na confiança entre poucas pessoas. Em projetos críticos, usados por governos, bancos, hospitais, universidades e provedores de nuvem, a governança tende a ser mais estruturada. Pode haver comitês técnicos, regras formais de liberação, equipes de segurança, políticas de suporte de longo prazo e processos de eleição ou nomeação.

Isso ajuda a desfazer um preconceito comum. Software livre não é sinônimo de improviso. Muitas vezes, ele é precisamente o contrário: um ambiente em que processos técnicos e institucionais ficam mais explícitos porque precisam funcionar em público e entre organizações diferentes.

## Software livre vs. software proprietário

| Aspecto | Software Livre | Software Proprietário |
|---|---|---|
| Código-fonte | Aberto e acessível | Fechado e protegido |
| Controle | Distribuído entre comunidades, fundações ou empresas | Concentrado em uma empresa ou grupo restrito |
| Licenciamento | Licenças abertas como [GPL](https://www.gnu.org/licenses/gpl-3.0.html), [MIT](https://opensource.org/licenses/MIT), [Apache](https://www.apache.org/licenses/LICENSE-2.0) | Licenças restritivas e contratos privados |
| Modificação | Permitida conforme a licença | Em geral proibida ou severamente limitada |
| Auditoria | Pode ser feita por terceiros | Depende do fornecedor |
| Continuidade | Pode ser continuada por outros atores | Pode ser interrompida pelo controlador |
| Dependência | Reduz risco de aprisionamento tecnológico | Aumenta risco de *vendor lock-in* |

Isso não significa que todo software livre seja automaticamente melhor que todo software proprietário. A diferença central está no regime de acesso, controle e continuidade. O software livre cria condições mais favoráveis para autonomia coletiva, auditoria, reaproveitamento e preservação do conhecimento técnico.

## Por que o software livre importa

O software livre importa porque sustenta a soberania tecnológica de países, empresas, escolas, universidades e comunidades. Quem depende apenas de sistemas fechados perde capacidade de auditar, adaptar e compreender a própria infraestrutura digital.

Ele importa, em especial, por quatro razões.

1. **Autonomia tecnológica**

Permite auditar, adaptar e manter sistemas sem depender totalmente de um fornecedor específico.

2. **Capacidade econômica local**

Em vez de pagar apenas pelo direito de usar uma caixa-preta, organizações podem investir em suporte, adaptação, formação de equipes, interoperabilidade e desenvolvimento local.

3. **Educação e formação**

Estudantes e profissionais podem aprender a partir de sistemas reais, amplamente usados, em vez de apenas consumir interfaces prontas.

4. **Inovação em rede**

Um avanço feito em uma biblioteca pode beneficiar navegadores, aplicativos, serviços em nuvem, sistemas embarcados e plataformas científicas ao mesmo tempo.

Esse efeito multiplicador é uma das características mais poderosas do ecossistema.

## O desafio da sustentabilidade

Apesar de seu alcance, o software livre enfrenta fragilidades reais. Muitos componentes críticos são mantidos por equipes pequenas ou até por indivíduos. Há projetos usados por milhões de pessoas que operam com poucos recursos, pouco reconhecimento público e alta carga de responsabilidade.

Esse é um paradoxo estrutural do setor. O mundo digital depende profundamente de software livre, mas nem sempre remunera, protege ou valoriza quem o mantém.

Na prática, isso aparece em problemas como:

- financiamento irregular
- excesso de responsabilidade concentrada em poucas pessoas
- baixa visibilidade pública dos mantenedores
- captura de valor por empresas sem retorno proporcional à manutenção
- insegurança jurídica e institucional

Além da sustentabilidade financeira, existe o problema do reconhecimento social. O usuário comum utiliza diariamente software livre sem saber que ele existe. E, quando ouve falar do tema, muitas vezes imagina um universo pequeno, experimental ou amador. Essa percepção está errada. O que existe é um ecossistema mundial, altamente complexo, que funciona de fato e sustenta parte central da vida digital contemporânea.

## Por que isso precisa ficar claro para devs e para o público em geral

Entender software livre não é importante apenas para programadores. É importante para qualquer pessoa que queira compreender como funciona a infraestrutura digital que organiza trabalho, comunicação, educação, entretenimento, ciência e administração pública.

Para quem é desenvolvedor, essa compreensão mostra que programar hoje quase sempre significa trabalhar sobre uma herança coletiva gigantesca. Para o público em geral, ela revela que a tecnologia do cotidiano não nasce apenas dentro de grandes empresas. Existe um universo colaborativo real, global e funcional, feito por comunidades, fundações, universidades, pequenas empresas, coletivos e grandes organizações que cooperam, disputam rumos, compartilham código e constroem camadas sucessivas de infraestrutura comum.

Esse universo não é perfeito. Ele enfrenta conflitos, escassez, disputas políticas, problemas de governança e desafios jurídicos. Ainda assim, ele existe, escala e entrega resultados concretos há décadas. Entender isso é essencial para abandonar a ideia de que o software livre é uma curiosidade de nicho. Na prática, ele é uma das bases do mundo digital.

## O desafio atual

Se o software livre é infraestrutura, então ele também precisa de reconhecimento institucional compatível com sua importância. Isso envolve financiamento, educação, políticas públicas, modelos de contratação, segurança para mantenedores e um ambiente regulatório que compreenda sua natureza específica.

Leis pensadas exclusivamente para o mercado de software proprietário nem sempre capturam a lógica distribuída, colaborativa e transnacional do FOSS. Quando aplicadas sem nuance, podem criar insegurança justamente para quem mantém bens digitais de interesse coletivo.

É exatamente esse tipo de lacuna que o **InfraLivre** busca enfrentar: contribuir para a construção de um marco jurídico e institucional capaz de reconhecer a realidade do software livre, proteger quem o desenvolve e fortalecer a infraestrutura digital aberta da qual a sociedade já depende, mesmo quando ainda não percebe isso com clareza.
