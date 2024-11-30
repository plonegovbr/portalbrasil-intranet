# PortalBrasil: Intranet 🚀

[![Built with Cookieplone](https://img.shields.io/badge/built%20with-Cookieplone-0083be.svg?logo=cookiecutter)](https://github.com/plone/cookiecutter-plone/)
[![Black code style](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/ambv/black)
[![Tests](https://github.com/plonegovbr/portalbrasil-intranet/actions/workflows/main.yml/badge.svg)](https://github.com/plonegovbr/portalbrasil-intranet/actions/workflows/main.yml)

Solução de Intranet construída com Plone

## Início Rápido 🏁

### Pré-requisitos ✅

Certifique-se de ter os seguintes itens instalados:

- Python 3.11 🐍
- Node 20 🟩
- pnpm 🧶
- Docker 🐳

### Instalação 🔧

1. Clone o repositório:

```shell
git clone git@github.com:plonegovbr/portalbrasil-intranet.git
cd portalbrasil-intranet
```

2. Instale tanto o Backend quanto o Frontend:

```shell
make install
```

### Inicialize os Servidores 🔥

1. Crie um novo site Plone na primeira execução:

```shell
make backend-create-site
```

2. Inicie o Backend em [http://localhost:8080/](http://localhost:8080/):

```shell
make backend-start
```

3. Em um novo terminal, inicie o Frontend em [http://localhost:3000/](http://localhost:3000/):

```shell
make frontend-start
```

Voilá! Seu site Plone está no ar e funcionando! 🎉

### Implantação Local com Stack 📦

Implemente um ambiente local com `Docker Compose`, incluindo:

- Imagens Docker para Backend e Frontend 🖼️
- Um stack com um roteador Traefik e um banco de dados Postgres 🗃️
- Acessível em [http://portalbrasil-intranet.localhost](http://portalbrasil-intranet.localhost) 🌐

Execute os seguintes comandos:

```shell
make stack-start
make stack-create-site
```

E... pronto! Seu site Plone está rodando localmente! 🚀

## Estrutura do Projeto 🏗️

Este monorepo consiste em três seções distintas: `backend`, `frontend` e `devops`.

- **backend**: Abriga a API e a instalação do Plone, utilizando pip em vez de buildout, e inclui um pacote de políticas chamado plonegovbr.intranet.
- **frontend**: Contém o pacote React (Volto).
- **devops**: Abrange a Stack Docker, playbooks Ansible e configurações de Cache.

### Por que essa Estrutura? 🤔

- Todo o código necessário para rodar o site está contido no repositório (exceto addons existentes para Plone e React).
- Workflows específicos do GitHub são acionados com base em alterações em cada base de código (consulte .github/workflows).
- Facilita a criação de imagens Docker para cada base de código.
- Demonstra a instalação/configuração do Plone sem o uso do buildout.

## Garantia de Qualidade do Código 🧐

Para formatar automaticamente seu código e garantir que ele atenda aos padrões de qualidade, execute:

```shell
make format
```

Os linters podem ser executados individualmente dentro das pastas `backend` ou `frontend`.

## Internacionalização 🌐

Gere arquivos de tradução para Plone e Volto com facilidade:

```shell
make i18n
```

## Créditos e Agradecimentos 🙏

Criado com carinho usando **[Cookieplone (0.7.1)](https://github.com/plone/cookieplone) e [cookiecutter-plone (fee7a07)](https://github.com/plone/cookiecutter-plone/commit/fee7a0706481b17193a86f06cc674017580e0441) em 01-07-2024 18:46:17.428634**. Um agradecimento especial a todos os colaboradores e apoiadores!
