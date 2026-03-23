## Sistemas operacionais

Um sistema operacional é o conjunto de programas que faz o computador funcionar de forma utilizável. Ele atua como uma ponte entre o hardware (processador, memória, disco, dispositivos) e os programas que usamos no dia a dia.

Sem um sistema operacional, um computador é apenas um conjunto de peças eletrônicas. É o sistema operacional que permite abrir programas, salvar arquivos, conectar à internet e interagir com tudo de forma organizada.

Existem diferentes famílias de sistemas operacionais. Algumas das mais conhecidas são:

- Sistemas baseados no kernel Linux kernel, usados em diversas distribuições Linux
- Sistemas da família Berkeley Software Distribution (BSD), como FreeBSD e OpenBSD
- O Microsoft Windows, amplamente usado em desktops
- O macOS, da Apple, baseado em tecnologias do Unix

Cada um desses sistemas organiza o funcionamento do computador de forma própria, com diferentes objetivos, modelos de desenvolvimento e níveis de abertura do código.

No contexto do software livre, o mais relevante é que alguns desses sistemas permitem estudar, modificar e redistribuir seu código, enquanto outros são fechados e controlados por empresas.

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
