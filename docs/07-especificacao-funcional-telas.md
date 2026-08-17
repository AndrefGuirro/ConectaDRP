# Documento 07
# Especificação Funcional das Telas (Front-end)

**Projeto:** ConectaDRP

**Versão:** 1.0

**Status:** Documento Oficial de Desenvolvimento

---

# Objetivo

Este documento define todas as telas do sistema ConectaDRP, especificando seu comportamento, componentes visuais, navegação, regras de interface, estados dos elementos e integração com os serviços do sistema.

Este documento servirá como referência oficial para o desenvolvimento do Front-end em React + Vite utilizando Bootstrap 5, permitindo que qualquer desenvolvedor implemente toda a interface do sistema sem necessidade de interpretações adicionais.

---

# Padrões Gerais de Interface

## Framework

React 19

Vite

Bootstrap 5

Bootstrap Icons

React Router

Supabase JS

---

## Layout

Mobile First.

Todo componente deverá funcionar inicialmente em smartphones.

Posteriormente expandir para tablets.

Por último desktop.

---

## Breakpoints

Extra Small

Até 575px

---

Small

576 até 767px

---

Medium

768 até 991px

---

Large

992 até 1199px

---

Extra Large

Acima de 1200px

---

## Fonte

Bootstrap padrão.

Fallback.

Arial

Sans Serif

---

## Ícones

Bootstrap Icons.

Não utilizar imagens para representar ações simples.

---

## Botões

Botão Primário

Cor principal do sistema.

---

Botão Secundário

Cinza Bootstrap.

---

Botão de Perigo

Vermelho.

---

Botão de Sucesso

Verde.

---

Botão Desabilitado

Cinza claro.

---

## Feedback Visual

Toda operação deverá informar ao usuário:

Carregando.

Sucesso.

Erro.

Aviso.

Confirmação.

---

Utilizar Toasts Bootstrap.

Nunca utilizar alertas do navegador.

---

## Confirmações

Toda operação destrutiva deverá utilizar Modal Bootstrap.

Jamais utilizar.

confirm()

---

## Carregamentos

Sempre utilizar Spinner Bootstrap.

Nenhuma tela poderá permanecer aparentemente travada.

---

## Erros

Toda mensagem deverá ser amigável.

Exemplo.

❌ Errado

```
Erro SQL 500.
```

✔ Correto

```
Não foi possível concluir sua solicitação.

Tente novamente em alguns instantes.
```

---

# Estrutura Geral das Telas

O sistema será composto pelos seguintes módulos.

Tela Inicial

Pesquisa de Colegas

Pesquisa de Grupos

Cadastro

Editar Cadastro

Criar Grupo

Editar Grupo

Área Administrativa

Dashboard

Cadastros

Logs

Configurações

---

# Navegação

A navegação será realizada utilizando.

React Router.

Sem recarregar páginas.

Todas as rotas públicas deverão permanecer acessíveis sem autenticação.

As rotas administrativas deverão exigir autenticação via Supabase.

---

# Estrutura Visual

Cada página possuirá obrigatoriamente.

Navbar

Conteúdo

Rodapé

---

Navbar fixa superior.

Rodapé fixo inferior apenas em dispositivos móveis quando necessário.

---

# Identidade Visual

## Logotipo

ConectaDRP

---

## Slogan

Conectando colegas estudantes da UNIVESP para Projetos Integradores e TCC.

O ensino é a distância.

O estudo pode ser bem perto de você.

---

## Paleta Principal

Azul

Cor institucional.

---

Branco

Fundo principal.

---

Cinza claro

Cards.

---

Verde

Ações positivas.

---

Vermelho

Ações críticas.

---

## Estilo

Visual moderno.

Leve.

Pouco texto.

Cards.

Bordas arredondadas.

Sombras discretas.

Espaçamento confortável.

Prioridade para usabilidade em celulares.

---

# Estrutura de Pastas do Front-end

```
src/

components/

pages/

layouts/

hooks/

services/

contexts/

routes/

assets/

styles/

utils/
```

---

# Convenção de Componentes

Cada componente deverá possuir.

Arquivo JSX.

Arquivo CSS próprio quando necessário.

Arquivo de testes futuramente.

Exportação padrão.

---

Exemplo.

```
components/

Navbar/

Navbar.jsx

Navbar.css
```

---

# Convenção das Páginas

Cada página ficará em uma pasta própria.

Exemplo.

```
pages/

Home/

Home.jsx

Home.css
```

---

# Lista Oficial das Telas

TP001

Home

---

TP002

Pesquisar Colegas

---

TP003

Pesquisar Grupos

---

TP004

Cadastro

---

TP005

Editar Cadastro

---

TP006

Criar Grupo

---

TP007

Editar Grupo

---

TP008

Painel Administrativo

---

TP009

Dashboard

---

TP010

Gerenciar Colegas

---

TP011

Gerenciar Grupos

---

TP012

Gerenciar Cursos

---

TP013

Gerenciar Eixos

---

TP014

Gerenciar DRPs

---

TP015

Gerenciar Cidades

---

TP016

Logs

---

TP017

Configurações

---

TP018

Login Administrativo

---

TP019

Página 404

---

TP020

Página de Erro



# TP001 - Home

## Objetivo

A Home será a principal porta de entrada do ConectaDRP.

Ela deverá apresentar rapidamente o propósito da plataforma e conduzir o usuário para as duas principais ações do sistema.

- Encontrar colegas.
- Encontrar grupos.

O usuário deverá conseguir compreender a proposta da plataforma em poucos segundos.

---

# Público-alvo

Visitantes.

Colegas da UNIVESP.

Administradores.

---

# Atores

Visitante.

Colega.

Administrador.

---

# Rota

```
/
```

---

# Tipo de Acesso

Público.

Não exige login.

---

# Estrutura Geral

Navbar

↓

Hero

↓

Pesquisa Rápida

↓

Ações Principais

↓

Como Funciona

↓

Benefícios

↓

Perguntas Frequentes

↓

Rodapé

---

# Layout

## Navbar

Itens.

Logo ConectaDRP

Pesquisar Colegas

Pesquisar Grupos

Cadastrar-se

Área Administrativa

---

### Comportamento

Desktop.

Menu horizontal.

---

Mobile.

Menu hamburguer Bootstrap.

---

Navbar fixa no topo.

---

# Hero

Imagem ilustrativa.

Título principal.

Slogan.

Botão primário.

Botão secundário.

---

## Texto Principal

```
Encontre colegas da UNIVESP para seu Projeto Integrador ou TCC.
```

---

## Subtítulo

```
Pesquise estudantes da sua cidade, curso ou DRP e forme grupos rapidamente.

O ensino é a distância.

O estudo pode ser bem perto de você.
```

---

## Botão Primário

```
Encontrar Colegas
```

Destino.

```
/colegas
```

---

## Botão Secundário

```
Encontrar Grupos
```

Destino.

```
/grupos
```

---

# Pesquisa Rápida

Logo abaixo do Hero.

---

Campos.

Cidade

Curso

---

Botão.

```
Pesquisar
```

---

Comportamento.

Ao clicar.

Redirecionar para.

```
/colegas
```

Levando os filtros preenchidos.

---

# Cards Principais

Exibir quatro cards.

---

## Card 01

Ícone.

Pessoa.

Título.

```
Encontrar Colegas
```

Descrição.

```
Localize estudantes próximos para desenvolver Projetos Integradores e TCC.
```

Botão.

```
Pesquisar
```

---

## Card 02

Ícone.

Grupo.

Título.

```
Encontrar Grupos
```

Descrição.

```
Entre em grupos existentes da sua região e acelere sua organização.
```

Botão.

```
Ver Grupos
```

---

## Card 03

Ícone.

Cadastro.

Título.

```
Cadastrar-me
```

Descrição.

```
Faça parte da comunidade ConectaDRP e permita que outros colegas encontrem você.
```

Botão.

```
Quero me cadastrar
```

---

## Card 04

Ícone.

WhatsApp.

Título.

```
Contato Rápido
```

Descrição.

```
Converse diretamente pelo WhatsApp sem burocracia.
```

Botão.

```
Saiba Mais
```

---

# Seção

Como Funciona

---

Título.

```
Como funciona?
```

---

Passo 1.

Cadastre-se.

---

Passo 2.

Pesquise colegas.

---

Passo 3.

Entre em contato.

---

Passo 4.

Monte seu grupo.

---

Cada passo deverá possuir.

Ícone.

Título.

Pequena descrição.

---

# Benefícios

Título.

```
Por que utilizar o ConectaDRP?
```

---

Lista.

Encontrar colegas da mesma cidade.

Encontrar colegas do mesmo curso.

Pesquisar por DRP.

Pesquisar por eixo.

Encontrar grupos prontos.

Criar novos grupos.

Contato direto pelo WhatsApp.

Uso gratuito.

Interface simples.

Compatível com celular.

---

# Perguntas Frequentes

Accordion Bootstrap.

---

Pergunta.

```
Preciso pagar para utilizar?
```

Resposta.

```
Não.

O ConectaDRP é gratuito.
```

---

Pergunta.

```
Preciso instalar algum aplicativo?
```

Resposta.

```
Não.

Pode ser utilizado diretamente pelo navegador.
```

---

Pergunta.

```
Meus dados ficam públicos?
```

Resposta.

```
Somente as informações necessárias para que outros colegas possam encontrá-lo.
```

---

Pergunta.

```
O ConectaDRP cria grupos automaticamente?
```

Resposta.

```
Não.

Ele apenas aproxima estudantes e facilita o acesso aos grupos existentes.
```

---

# Rodapé

Itens.

Logo.

Slogan.

Versão do sistema.

Ano.

Links.

Política de Privacidade.

Termos de Uso.

GitHub.

Contato.

---

Texto.

```
ConectaDRP

Conectando colegas estudantes da UNIVESP para Projetos Integradores e TCC.

O ensino é a distância.

O estudo pode ser bem perto de você.
```

---

# Estados da Tela

Inicial.

---

Carregando.

Spinner Bootstrap.

---

Erro.

Mensagem amigável.

---

Sem conexão.

Exibir aviso.

---

# Responsividade

Desktop.

Layout em quatro colunas.

---

Tablet.

Duas colunas.

---

Celular.

Uma coluna.

Todos os botões ocupando largura total.

---

# Acessibilidade

Utilizar HTML semântico.

Contraste adequado.

Navegação por teclado.

ARIA Labels.

Texto alternativo nas imagens.

Foco visível.

---

# Componentes React

Navbar.

Hero.

QuickSearch.

FeatureCards.

HowItWorks.

Benefits.

FAQ.

Footer.

---

# Serviços Utilizados

CidadeService.

CursoService.

---

# Navegação

Pesquisar Colegas.

```
/colegas
```

---

Pesquisar Grupos.

```
/grupos
```

---

Cadastrar.

```
/cadastro
```

---

Login Administrativo.

```
/admin/login
```

---

# Critérios de Aceitação

A Home deverá carregar em menos de dois segundos em condições normais.

Todos os links deverão funcionar corretamente.

Os botões deverão possuir feedback visual ao passar o mouse e ao toque em dispositivos móveis.

A página deverá atender aos critérios mínimos de acessibilidade WCAG 2.1 nível AA.

A experiência deverá ser otimizada para dispositivos móveis, mantendo perfeita adaptação em tablets e desktops.

A pesquisa rápida deverá redirecionar corretamente os filtros para a tela de pesquisa de colegas.

Nenhum elemento poderá ultrapassar a largura da tela em dispositivos móveis.


# TP002 - Pesquisar Colegas

## Objetivo

Permitir que estudantes da UNIVESP encontrem rapidamente outros colegas para formação de Projetos Integradores e TCC.

A pesquisa deverá priorizar colegas com maior compatibilidade, reduzindo o tempo necessário para formar grupos.

---

# Rota

```
/colegas
```

---

# Tipo de Acesso

Público.

Não exige autenticação.

---

# Atores

Visitante.

Colega.

Administrador.

---

# Estrutura da Página

Navbar

↓

Título da Página

↓

Filtros de Pesquisa

↓

Resumo dos Resultados

↓

Lista de Colegas

↓

Paginação

↓

Rodapé

---

# Cabeçalho

Título.

```
Encontrar Colegas
```

Subtítulo.

```
Pesquise estudantes da UNIVESP utilizando cidade, curso, eixo ou DRP.
```

---

# Área de Filtros

Os filtros deverão permanecer sempre visíveis.

Em celulares deverão ficar empilhados.

Em desktop deverão aparecer em linha.

---

## Campo Cidade

Tipo.

Select pesquisável.

Origem.

Tabela.

```
cidades
```

Obrigatório.

Não.

---

## Campo Curso

Tipo.

Select pesquisável.

Origem.

Tabela.

```
cursos
```

Obrigatório.

Não.

---

## Campo Eixo

Tipo.

Select.

Origem.

Tabela.

```
eixos
```

Obrigatório.

Não.

---

## Campo DRP

Tipo.

Select.

Origem.

Tabela.

```
drps
```

Obrigatório.

Não.

---

## Campo Nome

Tipo.

Input Text.

Placeholder.

```
Digite parte do nome...
```

Pesquisa parcial.

Sem diferenciação entre maiúsculas e minúsculas.

---

## Campo

Aceita receber contatos

Tipo.

Checkbox.

Quando marcado.

Exibir apenas colegas que autorizaram contato.

---

## Botão

Pesquisar

Cor primária.

Ícone.

Lupa.

---

## Botão

Limpar

Cor secundária.

Ícone.

Borracha.

Limpar todos os filtros.

---

# Regras de Pesquisa

Caso o usuário informe apenas cidade.

Pesquisar todos os colegas ativos da cidade.

---

Caso informe cidade e curso.

Prioridade máxima.

---

Caso informe cidade e eixo.

Prioridade intermediária.

---

Caso informe somente DRP.

Pesquisar colegas da mesma DRP.

---

Caso informe apenas curso.

Pesquisar em todas as cidades.

---

Caso informe apenas eixo.

Pesquisar em todas as cidades.

---

Caso não informe filtros.

Listar os colegas mais recentemente cadastrados.

---

# Algoritmo de Ordenação

Prioridade 1

Mesmo curso.

Mesma cidade.

---

Prioridade 2

Mesmo eixo.

Mesma cidade.

---

Prioridade 3

Mesmo curso.

Mesma DRP.

---

Prioridade 4

Mesmo eixo.

Mesma DRP.

---

Prioridade 5

Mesmo curso.

Outras cidades.

---

Prioridade 6

Mesmo eixo.

Outras cidades.

---

Dentro da mesma prioridade.

Ordenar por.

Nome.

---

# Resumo da Pesquisa

Acima dos resultados apresentar.

```
Foram encontrados XX colegas.
```

---

Caso nenhum resultado.

```
Nenhum colega encontrado.

Tente alterar os filtros.
```

Apresentar botão.

```
Cadastrar-me
```

---

# Card do Colega

Cada colega será apresentado em Card Bootstrap.

---

## Cabeçalho

Avatar.

Inicial do nome.

---

Nome completo.

---

Cidade.

Estado.

---

Curso.

---

Eixo.

---

DRP.

---

# Corpo

Informações.

Cidade.

Curso.

Eixo.

DRP.

Data de cadastro.

---

Caso permita contato.

Exibir Badge Verde.

```
Aceita Contato
```

---

Caso não permita.

Badge Cinza.

```
Contato Restrito
```

---

# Rodapé do Card

Botão.

```
Conversar no WhatsApp
```

Cor.

Verde.

Ícone WhatsApp.

---

Quando contato estiver restrito.

Botão oculto.

---

# Paginação

Utilizar paginação Bootstrap.

Quantidade padrão.

20 colegas por página.

---

Botões.

Primeira.

Anterior.

Próxima.

Última.

---

Exibir.

```
Página X de Y
```

---

# Estados da Tela

Inicial.

Sem pesquisa.

---

Pesquisando.

Spinner Bootstrap.

Mensagem.

```
Pesquisando colegas...
```

---

Resultados encontrados.

Lista dos Cards.

---

Nenhum resultado.

Mensagem ilustrada.

Botão de cadastro.

---

Erro.

Mensagem amigável.

Botão.

```
Tentar novamente
```

---

Sem conexão.

Mensagem.

```
Verifique sua conexão com a Internet.
```

---

# Responsividade

Desktop.

Filtros em linha.

Cards em duas colunas.

---

Tablet.

Filtros em duas linhas.

Cards em duas colunas.

---

Celular.

Filtros empilhados.

Cards ocupando largura total.

Botões largura 100%.

---

# Componentes React

Navbar.

SearchFilters.

SearchSummary.

ColleagueCard.

Pagination.

Footer.

---

# Hooks

useColleagues.

usePagination.

---

# Serviços

ColleagueService.

CidadeService.

CursoService.

EixoService.

DRPService.

---

# Integração com Supabase

Tabela.

```
colegas
```

Consultar apenas.

```
ativo = true
```

---

Aplicar filtros dinamicamente.

---

Ordenação conforme algoritmo definido.

---

Paginação server-side.

---

# Regras de Interface

Nenhuma pesquisa deverá bloquear a interface.

Filtros deverão permanecer preenchidos após a pesquisa.

O usuário poderá alterar qualquer filtro sem recarregar a página.

Toda pesquisa deverá ser executada assincronamente.

Utilizar Skeleton Loading durante carregamentos superiores a 300 milissegundos.

---

# Critérios de Aceitação

Todos os filtros deverão funcionar individualmente e em conjunto.

Os resultados deverão respeitar rigorosamente o algoritmo de prioridade definido pelo projeto.

A pesquisa deverá retornar apenas colegas ativos.

Colegas que não autorizarem contato não deverão exibir o botão do WhatsApp.

A paginação deverá funcionar corretamente em qualquer quantidade de registros.

A tela deverá permanecer totalmente responsiva em smartphones, tablets e desktops.

O tempo médio de resposta da pesquisa deverá ser inferior a dois segundos em condições normais.

A interface deverá manter a navegação fluida, sem recarregamento completo da página.


# TP003 - Pesquisar Grupos

## Objetivo

Permitir que estudantes encontrem rapidamente grupos de WhatsApp relacionados ao seu Projeto Integrador ou TCC.

A pesquisa deverá priorizar grupos com maior compatibilidade entre cidade, curso, eixo e DRP.

---

# Rota

```
/grupos
```

---

# Tipo de Acesso

Público.

Não exige autenticação.

---

# Atores

Visitante.

Colega.

Administrador.

---

# Estrutura da Página

Navbar

↓

Título

↓

Filtros

↓

Resumo da Pesquisa

↓

Lista de Grupos

↓

Paginação

↓

Rodapé

---

# Cabeçalho

Título.

```
Encontrar Grupos
```

Subtítulo.

```
Encontre grupos de estudantes da UNIVESP para Projetos Integradores e TCC.
```

---

# Área de Filtros

## Cidade

Tipo.

Select pesquisável.

Origem.

Tabela.

```
cidades
```

---

## Curso

Tipo.

Select pesquisável.

Origem.

Tabela.

```
cursos
```

---

## Eixo

Tipo.

Select.

Origem.

Tabela.

```
eixos
```

---

## DRP

Tipo.

Select.

Origem.

Tabela.

```
drps
```

---

## Situação

Tipo.

Select.

Valores.

Todos.

Aceitando novos membros.

Grupo lotado.

---

## Botão

Pesquisar

---

## Botão

Limpar

---

# Regras da Pesquisa

Pesquisar somente grupos ativos.

---

Caso cidade e curso sejam informados.

Prioridade máxima.

---

Caso cidade e eixo sejam informados.

Prioridade intermediária.

---

Caso apenas DRP seja informada.

Pesquisar grupos da mesma DRP.

---

Caso apenas curso seja informado.

Pesquisar em todas as cidades.

---

Caso não exista grupo compatível.

Sugerir criação de um novo grupo.

---

# Algoritmo de Ordenação

Prioridade 1.

Mesmo curso.

Mesma cidade.

---

Prioridade 2.

Mesmo eixo.

Mesma cidade.

---

Prioridade 3.

Mesmo curso.

Mesma DRP.

---

Prioridade 4.

Mesmo eixo.

Mesma DRP.

---

Prioridade 5.

Mesmo curso.

Outras cidades.

---

Prioridade 6.

Mesmo eixo.

Outras cidades.

---

Ordenação secundária.

Maior quantidade de participantes.

---

Ordenação terciária.

Nome do grupo.

---

# Resumo da Pesquisa

Apresentar.

```
XX grupos encontrados.
```

---

Caso nenhum resultado.

```
Nenhum grupo encontrado.

Que tal criar o primeiro grupo da sua região?
```

Botão.

```
Criar Grupo
```

---

# Card do Grupo

Cada grupo será exibido em Card Bootstrap.

---

## Cabeçalho

Ícone.

Grupo.

---

Nome do grupo.

---

Cidade.

Estado.

---

Curso.

---

Eixo.

---

DRP.

---

# Corpo

Descrição.

---

Responsável.

---

Quantidade de membros.

---

Capacidade máxima.

---

Percentual de ocupação.

---

# Indicadores

Badge Verde.

```
Aceitando Novos Membros
```

---

Badge Vermelho.

```
Grupo Lotado
```

---

Badge Cinza.

```
Encerrado
```

(Não deverá aparecer em pesquisas públicas.)

---

# Barra de Ocupação

Progress Bar Bootstrap.

Exemplo.

```
18 de 20 participantes
```

---

Cor.

Verde até 70%.

Amarelo até 90%.

Vermelho acima de 90%.

---

# Rodapé do Card

Botão Primário.

```
Entrar no Grupo
```

Ícone WhatsApp.

---

Caso grupo lotado.

Botão desabilitado.

---

Caso grupo não aceite novos membros.

Botão oculto.

---

# Paginação

20 grupos por página.

---

Botões.

Primeira.

Anterior.

Próxima.

Última.

---

Mostrar.

```
Página X de Y
```

---

# Estados da Tela

Inicial.

---

Pesquisando.

Spinner Bootstrap.

Mensagem.

```
Pesquisando grupos...
```

---

Resultados encontrados.

---

Nenhum resultado.

Ilustração.

Botão.

```
Criar Grupo
```

---

Erro.

Mensagem amigável.

---

Sem conexão.

Aviso de indisponibilidade.

---

# Responsividade

Desktop.

Cards em duas colunas.

---

Tablet.

Duas colunas.

---

Celular.

Uma coluna.

Botões largura total.

Cards empilhados.

---

# Componentes React

Navbar.

SearchFilters.

GroupCard.

SearchSummary.

Pagination.

Footer.

---

# Hooks

useGroups.

usePagination.

---

# Serviços

GroupService.

CidadeService.

CursoService.

EixoService.

DRPService.

---

# Integração com Supabase

Tabela.

```
grupos
```

Consultar apenas.

```
ativo = true
```

---

Aplicar filtros dinamicamente.

---

Paginação server-side.

---

Ordenação conforme algoritmo oficial.

---

# Regras de Interface

Todos os filtros deverão permanecer preenchidos após a pesquisa.

Nenhuma pesquisa deverá recarregar a página.

A atualização dos resultados deverá ocorrer dinamicamente.

Utilizar Skeleton Loading durante consultas superiores a 300 milissegundos.

---

# Critérios de Aceitação

Somente grupos ativos deverão aparecer.

Grupos encerrados nunca poderão ser exibidos.

O algoritmo de ordenação deverá seguir rigorosamente a prioridade definida pelo projeto.

Grupos lotados deverão ser identificados visualmente.

O botão "Entrar no Grupo" somente deverá aparecer quando o grupo aceitar novos participantes.

A barra de ocupação deverá refletir corretamente a quantidade de membros cadastrados.

A pesquisa deverá responder em menos de dois segundos em condições normais.

Toda a tela deverá funcionar corretamente em smartphones, tablets e desktops.

A experiência deverá permanecer totalmente fluida, sem recarregamento completo da página.


# TP004 - Cadastro de Colega

## Objetivo

Permitir que qualquer estudante da UNIVESP realize seu cadastro no ConectaDRP para que possa ser encontrado por outros colegas durante as pesquisas da plataforma.

O processo deverá ser extremamente simples, rápido e totalmente adaptado para utilização em smartphones.

---

# Rota

```
/cadastro
```

---

# Tipo de Acesso

Público.

Não exige autenticação.

---

# Atores

Visitante.

Colega.

---

# Estrutura da Página

Navbar

↓

Título

↓

Texto Explicativo

↓

Formulário de Cadastro

↓

Termos de Uso

↓

Botão Salvar

↓

Mensagem de Confirmação

↓

Rodapé

---

# Cabeçalho

Título.

```
Cadastre-se no ConectaDRP
```

---

Subtítulo.

```
Seu cadastro permitirá que outros colegas da UNIVESP encontrem você para formar grupos de Projetos Integradores e TCC.
```

---

# Formulário

Todos os campos obrigatórios deverão possuir um indicador visual.

```
*
```

---

## Campo

Nome Completo

Tipo.

Input Text.

Obrigatório.

---

Placeholder.

```
Digite seu nome completo
```

---

Quantidade mínima.

5 caracteres.

---

Quantidade máxima.

150 caracteres.

---

Validação.

Não permitir somente números.

Não permitir apenas espaços.

Remover espaços duplicados automaticamente.

Aplicar capitalização automática das palavras.

---

Mensagem de erro.

```
Informe seu nome completo.
```

---

## Campo

Telefone

Tipo.

Input com máscara.

Obrigatório.

---

Formato.

```
(99) 99999-9999
```

---

Armazenamento.

Somente números.

---

Validação.

DDD válido.

11 dígitos.

Número único.

---

Mensagem de erro.

```
Informe um telefone válido.
```

---

Caso telefone já exista.

```
Já existe um cadastro utilizando este telefone.
```

---

## Campo

Cidade

Tipo.

Select pesquisável.

Obrigatório.

---

Origem.

Tabela.

```
cidades
```

---

Pesquisa instantânea.

---

Mensagem de erro.

```
Selecione sua cidade.
```

---

## Campo

Curso

Tipo.

Select pesquisável.

Obrigatório.

---

Origem.

Tabela.

```
cursos
```

---

Após selecionar.

O sistema identificará automaticamente.

Eixo.

---

Mensagem de erro.

```
Selecione seu curso.
```

---

## Campo

DRP

Tipo.

Somente leitura.

---

Preenchimento automático.

Conforme cidade escolhida.

---

Não poderá ser editado.

---

## Campo

Eixo

Tipo.

Somente leitura.

---

Preenchimento automático.

Conforme curso escolhido.

---

Não poderá ser editado.

---

## Campo

Aceito receber contato de outros colegas

Tipo.

Switch Bootstrap.

---

Valor padrão.

Ligado.

---

Descrição.

```
Permitir que outros colegas encontrem meu WhatsApp para contato.
```

---

## Campo

Aceito os Termos de Uso

Tipo.

Checkbox.

Obrigatório.

---

Texto.

```
Li e concordo com os Termos de Uso.
```

---

Link.

```
/termos
```

---

## Campo

Aceito a Política de Privacidade

Tipo.

Checkbox.

Obrigatório.

---

Texto.

```
Li e concordo com a Política de Privacidade.
```

---

Link.

```
/privacidade
```

---

# Botão Principal

Texto.

```
Salvar Cadastro
```

---

Ícone.

Bootstrap Icons.

Person Plus.

---

Cor.

Primária.

---

Enquanto salva.

Desabilitar botão.

Alterar texto para.

```
Salvando...
```

Exibir Spinner Bootstrap.

---

# Botão Secundário

Texto.

```
Cancelar
```

---

Retornar para.

```
Home
```

---

# Validações em Tempo Real

Nome.

---

Telefone.

---

Cidade.

---

Curso.

---

Aceite dos Termos.

---

Aceite da Política.

---

Toda validação deverá ocorrer sem recarregar a página.

---

Campos válidos.

Borda verde.

Ícone de confirmação.

---

Campos inválidos.

Borda vermelha.

Mensagem abaixo do campo.

---

# Máscaras

Telefone.

Automática.

---

Nome.

Remoção de espaços duplicados.

Capitalização automática.

---

# Integração com Supabase

Tabela.

```
colegas
```

---

Inserir.

Nome.

Telefone.

Cidade.

Curso.

DRP.

Eixo.

Permite contato.

Data de criação.

Data da atualização.

Status.

---

Gerar automaticamente.

UUID.

---

Registrar auditoria.

Tabela.

```
logs
```

---

# Mensagem de Sucesso

Exibir Modal Bootstrap.

Título.

```
Cadastro realizado com sucesso!
```

---

Mensagem.

```
Agora outros colegas poderão encontrar você e convidá-lo para participar de Projetos Integradores e TCC.
```

---

Botão.

```
Pesquisar Colegas
```

---

Botão.

```
Voltar para Home
```

---

# Mensagem de Erro

Título.

```
Não foi possível concluir seu cadastro.
```

---

Descrição.

```
Verifique os dados informados e tente novamente.
```

---

Botão.

```
Tentar Novamente
```

---

# Estados da Tela

Inicial.

Formulário vazio.

---

Preenchendo.

Validação em tempo real.

---

Salvando.

Spinner.

---

Cadastro realizado.

Modal de sucesso.

---

Erro.

Mensagem amigável.

---

Sem conexão.

Aviso.

```
É necessário acesso à Internet para concluir seu cadastro.
```

---

# Responsividade

Desktop.

Formulário centralizado.

Largura máxima de 700 pixels.

---

Tablet.

Largura de aproximadamente 90%.

---

Celular.

Campos empilhados.

Botões ocupando toda a largura.

Espaçamento confortável para toque.

---

# Componentes React

Navbar.

RegistrationForm.

InputMask.

CitySelect.

CourseSelect.

TermsModal.

PrivacyModal.

SuccessModal.

Footer.

---

# Hooks

useRegistration.

useValidation.

---

# Serviços

ColleagueService.

CidadeService.

CursoService.

DRPService.

EixoService.

ValidationService.

---

# Regras de Interface

Todos os campos obrigatórios deverão ser claramente identificados.

Os botões deverão permanecer desabilitados enquanto houver envio em andamento.

Nenhum dado deverá ser perdido caso ocorra erro de comunicação.

O foco deverá avançar automaticamente para o próximo campo quando apropriado em dispositivos móveis.

A navegação por teclado deverá funcionar integralmente.

---

# Critérios de Aceitação

Todos os campos obrigatórios deverão ser validados antes do envio.

O telefone deverá ser único.

A cidade deverá preencher automaticamente a DRP.

O curso deverá preencher automaticamente o eixo.

O cadastro deverá ser salvo corretamente no Supabase.

O registro de auditoria deverá ser criado automaticamente.

O usuário deverá receber confirmação visual clara após o cadastro.

A tela deverá atender aos critérios de acessibilidade WCAG 2.1 nível AA.

Toda a experiência deverá ser otimizada para smartphones, tablets e desktops.


# TP005 - Editar Cadastro

## Objetivo

Permitir que um colega mantenha seu cadastro sempre atualizado, garantindo que suas informações permaneçam corretas para futuras pesquisas realizadas por outros estudantes.

A atualização deverá refletir imediatamente em toda a plataforma.

---

# Rota

```
/editar-cadastro
```

---

# Tipo de Acesso

Público.

O acesso será realizado através de um link seguro enviado ao usuário ou outro mecanismo definido pela plataforma.

---

# Atores

Colega.

Administrador.

---

# Estrutura da Página

Navbar

↓

Título

↓

Informações do Cadastro

↓

Formulário

↓

Botões de Ação

↓

Área de Exclusão do Cadastro

↓

Rodapé

---

# Cabeçalho

Título.

```
Editar Cadastro
```

---

Subtítulo.

```
Mantenha suas informações sempre atualizadas para facilitar que outros colegas encontrem você.
```

---

# Carregamento Inicial

Ao abrir a tela.

Consultar cadastro.

Preencher automaticamente todos os campos.

Exibir Spinner durante o carregamento.

---

# Formulário

## Campo

Nome Completo

Tipo.

Input Text.

Obrigatório.

---

Mesmo comportamento da tela de cadastro.

---

## Campo

Telefone

Tipo.

Input com máscara.

Obrigatório.

---

Validação em tempo real.

---

Caso o telefone seja alterado.

Verificar duplicidade imediatamente.

---

## Campo

Cidade

Tipo.

Select pesquisável.

Obrigatório.

---

Ao alterar.

Atualizar automaticamente.

DRP.

---

## Campo

Curso

Tipo.

Select pesquisável.

Obrigatório.

---

Ao alterar.

Atualizar automaticamente.

Eixo.

---

## Campo

DRP

Somente leitura.

Atualização automática.

---

## Campo

Eixo

Somente leitura.

Atualização automática.

---

## Campo

Aceita receber contatos

Switch Bootstrap.

---

## Campo

Data do Cadastro

Somente leitura.

---

## Campo

Última Atualização

Somente leitura.

---

# Botão Principal

Texto.

```
Salvar Alterações
```

---

Ícone.

```
bi-save
```

---

Durante gravação.

Spinner Bootstrap.

Texto.

```
Salvando...
```

---

# Botão Secundário

Texto.

```
Cancelar
```

---

Retornar para Home.

---

# Área de Exclusão

Separar visualmente utilizando Card Bootstrap com borda vermelha.

---

Título.

```
Zona de Perigo
```

---

Texto.

```
Ao excluir seu cadastro você deixará de aparecer nas pesquisas realizadas pelos demais colegas.

Seu histórico permanecerá armazenado apenas para fins administrativos.
```

---

Botão.

```
Excluir Cadastro
```

Cor.

Danger.

---

Ao clicar.

Abrir Modal Bootstrap.

---

Título.

```
Confirmar Exclusão
```

---

Mensagem.

```
Tem certeza que deseja excluir seu cadastro?

Esta ação removerá seu perfil das pesquisas públicas.

Você poderá solicitar reativação posteriormente.
```

---

Botões.

Cancelar.

Excluir Cadastro.

---

# Validações

Nome.

Obrigatório.

---

Telefone.

Obrigatório.

Único.

---

Cidade.

Obrigatória.

---

Curso.

Obrigatório.

---

Consentimentos.

Obrigatórios.

---

# Atualizações Automáticas

Cidade alterada.

↓

Atualizar DRP.

---

Curso alterado.

↓

Atualizar Eixo.

---

Telefone alterado.

↓

Atualizar Link do WhatsApp.

---

Atualizar automaticamente.

```
updated_at
```

---

# Integração com Supabase

Tabela.

```
colegas
```

Operação.

Update.

---

Tabela.

```
logs
```

Registrar.

Atualização.

Exclusão.

---

# Mensagem de Sucesso

Toast Bootstrap.

```
Cadastro atualizado com sucesso.
```

---

Após exclusão.

Modal.

```
Seu cadastro foi removido com sucesso.

Esperamos encontrá-lo novamente em breve.
```

---

Botão.

```
Voltar para Home
```

---

# Mensagens de Erro

Telefone duplicado.

---

Cidade inválida.

---

Curso inválido.

---

Erro de comunicação.

---

Banco indisponível.

---

Todas utilizando mensagens amigáveis.

---

# Estados da Tela

Carregando.

Spinner.

---

Editando.

---

Salvando.

---

Atualizado.

Toast.

---

Erro.

---

Sem conexão.

---

Cadastro excluído.

---

# Responsividade

Desktop.

Formulário centralizado.

---

Tablet.

Campos distribuídos em duas colunas quando possível.

---

Celular.

Campos empilhados.

Botões largura total.

Área de exclusão posicionada ao final da página.

---

# Componentes React

Navbar.

EditRegistrationForm.

CitySelect.

CourseSelect.

DangerZoneCard.

DeleteConfirmationModal.

ToastSuccess.

Footer.

---

# Hooks

useEditRegistration.

useValidation.

---

# Serviços

ColleagueService.

CidadeService.

CursoService.

DRPService.

EixoService.

ValidationService.

---

# Regras de Interface

As alterações deverão ocorrer sem recarregar a página.

O foco deverá permanecer no campo editado após validações.

Todos os campos deverão indicar visualmente alterações ainda não salvas.

Enquanto existir gravação em andamento.

Todos os botões deverão permanecer desabilitados.

A exclusão somente poderá ocorrer após confirmação explícita do usuário.

---

# Critérios de Aceitação

O formulário deverá carregar automaticamente os dados atuais do colega.

A alteração da cidade deverá atualizar automaticamente a DRP.

A alteração do curso deverá atualizar automaticamente o eixo.

A alteração do telefone deverá validar duplicidade imediatamente.

As alterações deverão ser persistidas corretamente no Supabase.

Toda atualização deverá gerar auditoria.

A exclusão deverá utilizar Soft Delete.

O cadastro deverá desaparecer imediatamente das pesquisas públicas após a exclusão.

Toda a tela deverá permanecer totalmente responsiva em smartphones, tablets e desktops.

A experiência deverá atender aos critérios de acessibilidade WCAG 2.1 nível AA.


# TP006 - Criar Grupo

## Objetivo

Permitir que estudantes da UNIVESP criem grupos para Projetos Integradores ou Trabalho de Conclusão de Curso (TCC), facilitando que outros colegas encontrem e ingressem nesses grupos através do ConectaDRP.

A criação deverá ser simples, rápida e totalmente otimizada para dispositivos móveis.

---

# Rota

```
/grupos/novo
```

---

# Tipo de Acesso

Público.

Não exige autenticação.

---

# Atores

Colega.

Administrador.

---

# Estrutura da Página

Navbar

↓

Título

↓

Texto Explicativo

↓

Formulário de Criação

↓

Botões de Ação

↓

Rodapé

---

# Cabeçalho

Título.

```
Criar Novo Grupo
```

---

Subtítulo.

```
Cadastre seu grupo para que outros estudantes da UNIVESP possam encontrá-lo e participar do seu Projeto Integrador ou TCC.
```

---

# Formulário

Todos os campos obrigatórios deverão possuir identificação visual.

```
*
```

---

## Campo

Nome do Grupo

Tipo.

Input Text.

Obrigatório.

---

Quantidade mínima.

5 caracteres.

---

Quantidade máxima.

100 caracteres.

---

Placeholder.

```
Ex.: PI Engenharia da Computação - Presidente Prudente
```

---

Validação.

Não permitir nomes duplicados na mesma cidade para o mesmo curso.

---

Mensagem de erro.

```
Já existe um grupo com este nome.
```

---

## Campo

Descrição

Tipo.

Textarea.

Obrigatório.

---

Quantidade mínima.

20 caracteres.

---

Quantidade máxima.

500 caracteres.

---

Placeholder.

```
Descreva rapidamente o objetivo do grupo.
```

---

## Campo

Responsável pelo Grupo

Tipo.

Input Text.

Obrigatório.

---

Preenchimento automático quando originado a partir do cadastro do colega.

Permitir edição.

---

## Campo

Telefone do Responsável

Tipo.

Input com máscara.

Obrigatório.

---

Formato.

```
(99) 99999-9999
```

---

Validação.

DDD válido.

Número válido.

---

## Campo

Cidade

Tipo.

Select pesquisável.

Obrigatório.

---

Origem.

Tabela.

```
cidades
```

---

Ao selecionar.

Atualizar automaticamente.

DRP.

---

## Campo

Curso

Tipo.

Select pesquisável.

Obrigatório.

---

Origem.

Tabela.

```
cursos
```

---

Ao selecionar.

Atualizar automaticamente.

Eixo.

---

## Campo

DRP

Tipo.

Somente leitura.

---

Preenchimento automático.

---

## Campo

Eixo

Tipo.

Somente leitura.

---

Preenchimento automático.

---

## Campo

Quantidade Máxima de Participantes

Tipo.

Input Number.

Obrigatório.

---

Valor mínimo.

2

---

Valor máximo.

30

---

Valor padrão.

20

---

## Campo

Quantidade Atual de Participantes

Tipo.

Input Number.

---

Valor inicial.

1

Representando o responsável pelo grupo.

---

Não poderá ser maior que a capacidade máxima.

---

## Campo

Link do Grupo WhatsApp

Tipo.

Input URL.

Obrigatório.

---

Aceitar apenas links válidos.

```
https://chat.whatsapp.com/
```

---

Mensagem de erro.

```
Informe um link válido do WhatsApp.
```

---

## Campo

Aceita novos participantes

Tipo.

Switch Bootstrap.

---

Valor padrão.

Ativado.

---

Descrição.

```
Permitir que novos colegas ingressem neste grupo.
```

---

## Campo

Grupo Ativo

Tipo.

Switch.

---

Valor padrão.

Ativado.

---

Utilizado para ocultar temporariamente o grupo das pesquisas.

---

# Botão Principal

Texto.

```
Criar Grupo
```

---

Ícone.

```
bi-people-fill
```

---

Durante gravação.

Desabilitar botão.

Exibir Spinner Bootstrap.

Texto.

```
Criando Grupo...
```

---

# Botão Secundário

Texto.

```
Cancelar
```

---

Retornar para.

```
/grupos
```

---

# Validações em Tempo Real

Nome.

---

Telefone.

---

Cidade.

---

Curso.

---

Capacidade.

---

Quantidade atual.

---

Link do WhatsApp.

---

Todos os campos deverão ser validados imediatamente.

Sem necessidade de envio do formulário.

---

# Regras Automáticas

Selecionar Cidade.

↓

Atualizar DRP.

---

Selecionar Curso.

↓

Atualizar Eixo.

---

Quantidade Atual.

Nunca poderá ultrapassar.

Quantidade Máxima.

---

Grupo recém-criado.

Sempre iniciará.

Ativo.

---

Grupo recém-criado.

Sempre iniciará.

Aceitando novos participantes.

---

# Integração com Supabase

Tabela.

```
grupos
```

Inserir.

UUID.

Nome.

Descrição.

Responsável.

Telefone.

Cidade.

Curso.

DRP.

Eixo.

Capacidade.

Participantes atuais.

Link WhatsApp.

Aceita participantes.

Ativo.

created_at.

updated_at.

---

Registrar auditoria.

Tabela.

```
logs
```

---

# Mensagem de Sucesso

Modal Bootstrap.

Título.

```
Grupo criado com sucesso!
```

---

Mensagem.

```
Seu grupo já está disponível para pesquisa no ConectaDRP.

Agora outros colegas poderão encontrá-lo facilmente.
```

---

Botões.

```
Visualizar Grupo
```

---

```
Pesquisar Grupos
```

---

# Mensagens de Erro

Grupo duplicado.

---

Telefone inválido.

---

Cidade inexistente.

---

Curso inexistente.

---

Link do WhatsApp inválido.

---

Erro de comunicação.

---

Banco indisponível.

---

Todas utilizando mensagens amigáveis.

---

# Estados da Tela

Inicial.

---

Preenchendo formulário.

---

Validando.

---

Criando grupo.

---

Grupo criado.

---

Erro.

---

Sem conexão.

---

# Responsividade

Desktop.

Formulário centralizado.

Largura máxima de 800 pixels.

---

Tablet.

Campos distribuídos em duas colunas quando possível.

---

Celular.

Campos totalmente empilhados.

Botões ocupando toda a largura.

Espaçamento mínimo de 16 pixels entre componentes.

---

# Componentes React

Navbar.

CreateGroupForm.

CitySelect.

CourseSelect.

WhatsappInput.

CapacityInput.

SuccessModal.

Footer.

---

# Hooks

useCreateGroup.

useValidation.

---

# Serviços

GroupService.

CidadeService.

CursoService.

DRPService.

EixoService.

ValidationService.

---

# Regras de Interface

Todas as alterações deverão ocorrer sem recarregar a página.

O botão principal permanecerá desabilitado enquanto existir qualquer erro de validação.

Os campos DRP e Eixo deverão permanecer bloqueados para edição manual.

Durante o salvamento nenhum campo poderá ser alterado.

Caso ocorra falha de comunicação, todos os dados digitados deverão permanecer preenchidos.

---

# Critérios de Aceitação

Todos os campos obrigatórios deverão ser validados antes da criação do grupo.

O sistema deverá impedir grupos duplicados para a mesma cidade e curso.

Cidade deverá atualizar automaticamente a DRP.

Curso deverá atualizar automaticamente o eixo.

O link do WhatsApp deverá ser validado antes da gravação.

Toda criação deverá gerar registro de auditoria.

O grupo deverá aparecer imediatamente nas pesquisas públicas após sua criação.

Toda a experiência deverá funcionar corretamente em smartphones, tablets e desktops.

A tela deverá atender aos critérios de acessibilidade WCAG 2.1 nível AA.


# TP007 - Editar Grupo

## Objetivo

Permitir que o responsável pelo grupo mantenha suas informações sempre atualizadas, garantindo que os demais estudantes encontrem informações corretas sobre disponibilidade, participantes e formas de contato.

---

# Rota

```
/grupos/editar
```

---

# Tipo de Acesso

Público.

O acesso será realizado através de um link seguro enviado ao responsável pelo grupo ou outro mecanismo definido pela plataforma.

Administradores também poderão acessar esta tela.

---

# Atores

Responsável pelo Grupo.

Administrador.

---

# Estrutura da Página

Navbar

↓

Título

↓

Informações do Grupo

↓

Formulário

↓

Botões de Ação

↓

Área de Encerramento

↓

Rodapé

---

# Cabeçalho

Título.

```
Editar Grupo
```

---

Subtítulo.

```
Mantenha as informações do seu grupo sempre atualizadas para facilitar a entrada de novos colegas.
```

---

# Carregamento Inicial

Ao abrir a tela.

Consultar grupo.

Preencher automaticamente todos os campos.

Exibir Spinner Bootstrap durante o carregamento.

---

# Formulário

## Campo

Nome do Grupo

Tipo.

Input Text.

Obrigatório.

---

Mesmo comportamento da tela de criação.

---

## Campo

Descrição

Tipo.

Textarea.

Obrigatório.

---

Permitir atualização.

---

## Campo

Responsável

Tipo.

Input Text.

Obrigatório.

---

Permitir edição.

---

## Campo

Telefone

Tipo.

Input com máscara.

Obrigatório.

---

Validar em tempo real.

---

## Campo

Cidade

Tipo.

Select pesquisável.

Obrigatório.

---

Ao alterar.

Atualizar automaticamente.

DRP.

---

## Campo

Curso

Tipo.

Select pesquisável.

Obrigatório.

---

Ao alterar.

Atualizar automaticamente.

Eixo.

---

## Campo

DRP

Somente leitura.

Atualização automática.

---

## Campo

Eixo

Somente leitura.

Atualização automática.

---

## Campo

Quantidade Máxima de Participantes

Tipo.

Input Number.

---

Valor mínimo.

2.

---

Valor máximo.

30.

---

Não permitir valor inferior à quantidade atual de participantes.

---

## Campo

Quantidade Atual de Participantes

Tipo.

Input Number.

---

Não permitir valor negativo.

---

Não permitir valor superior à capacidade máxima.

---

## Campo

Link do Grupo WhatsApp

Tipo.

Input URL.

Obrigatório.

---

Validar formato.

```
https://chat.whatsapp.com/
```

---

## Campo

Aceita novos participantes

Tipo.

Switch Bootstrap.

---

Quando desligado.

Ocultar botão de entrada nas pesquisas públicas.

---

## Campo

Grupo Ativo

Tipo.

Switch Bootstrap.

---

Quando desligado.

Grupo deixa de aparecer nas pesquisas públicas.

---

# Botão Principal

Texto.

```
Salvar Alterações
```

---

Ícone.

```
bi-save
```

---

Durante gravação.

Spinner Bootstrap.

Texto.

```
Salvando...
```

---

# Botão Secundário

Texto.

```
Cancelar
```

---

Retornar para.

```
/grupos
```

---

# Área de Encerramento

Exibir Card Bootstrap com destaque.

---

Título.

```
Zona de Perigo
```

---

Descrição.

```
Ao encerrar este grupo ele deixará de aparecer nas pesquisas públicas.

O histórico permanecerá armazenado para fins administrativos.
```

---

Botão.

```
Encerrar Grupo
```

---

Cor.

Danger.

---

Ao clicar.

Abrir Modal Bootstrap.

---

Título.

```
Confirmar Encerramento
```

---

Mensagem.

```
Deseja realmente encerrar este grupo?

Após a confirmação ele deixará de aparecer nas pesquisas públicas.

Esta ação poderá ser revertida posteriormente por um administrador.
```

---

Botões.

Cancelar.

Encerrar Grupo.

---

# Validações

Nome obrigatório.

---

Descrição obrigatória.

---

Telefone válido.

---

Cidade obrigatória.

---

Curso obrigatório.

---

Quantidade máxima compatível.

---

Link do WhatsApp válido.

---

# Atualizações Automáticas

Cidade alterada.

↓

Atualizar DRP.

---

Curso alterado.

↓

Atualizar Eixo.

---

Atualizar automaticamente.

```
updated_at
```

---

# Integração com Supabase

Tabela.

```
grupos
```

Operação.

Update.

---

Tabela.

```
logs
```

Registrar.

Atualização.

Encerramento.

Reativação.

---

# Mensagem de Sucesso

Toast Bootstrap.

```
Grupo atualizado com sucesso.
```

---

Após encerramento.

Modal.

```
Seu grupo foi encerrado e não aparecerá mais nas pesquisas públicas.
```

---

Botão.

```
Voltar para Pesquisa de Grupos
```

---

# Mensagens de Erro

Nome duplicado.

---

Telefone inválido.

---

Cidade inválida.

---

Curso inválido.

---

Capacidade incompatível.

---

Link do WhatsApp inválido.

---

Erro de comunicação.

---

Servidor indisponível.

---

Todas utilizando mensagens amigáveis.

---

# Estados da Tela

Carregando.

Spinner Bootstrap.

---

Editando.

---

Salvando.

---

Atualizado.

Toast.

---

Erro.

---

Sem conexão.

---

Grupo encerrado.

---

# Responsividade

Desktop.

Formulário centralizado.

Largura máxima de 800 pixels.

---

Tablet.

Campos distribuídos em duas colunas.

---

Celular.

Campos empilhados.

Botões ocupando toda a largura.

Área de encerramento posicionada ao final da página.

---

# Componentes React

Navbar.

EditGroupForm.

CitySelect.

CourseSelect.

WhatsappInput.

CapacityInput.

DangerZoneCard.

ConfirmationModal.

ToastSuccess.

Footer.

---

# Hooks

useEditGroup.

useValidation.

---

# Serviços

GroupService.

CidadeService.

CursoService.

DRPService.

EixoService.

ValidationService.

---

# Regras de Interface

As alterações deverão ocorrer sem recarregar a página.

Os campos DRP e Eixo permanecerão bloqueados para edição manual.

Os botões deverão permanecer desabilitados durante o salvamento.

Todos os dados preenchidos deverão permanecer na tela caso ocorra erro de comunicação.

Os Switches deverão atualizar imediatamente sua representação visual.

Toda alteração deverá solicitar confirmação apenas quando envolver impacto público, como desativação ou encerramento do grupo.

---

# Critérios de Aceitação

O formulário deverá carregar automaticamente todas as informações do grupo.

A alteração da cidade deverá atualizar automaticamente a DRP.

A alteração do curso deverá atualizar automaticamente o eixo.

A capacidade máxima nunca poderá ser inferior ao número atual de participantes.

O link do WhatsApp deverá ser validado antes da gravação.

Toda alteração deverá gerar registro de auditoria.

O encerramento deverá ocultar imediatamente o grupo das pesquisas públicas.

Administradores deverão poder reativar grupos posteriormente.

A tela deverá permanecer totalmente responsiva em smartphones, tablets e desktops.

A interface deverá atender aos critérios de acessibilidade WCAG 2.1 nível AA.


# TP008 - Login Administrativo

## Objetivo

Permitir que administradores autenticados acessem com segurança o módulo administrativo do ConectaDRP para gerenciamento da plataforma.

A autenticação deverá ser realizada exclusivamente através do Supabase Authentication.

---

# Rota

```
/admin/login
```

---

# Tipo de Acesso

Privado.

Disponível apenas para administradores previamente cadastrados.

---

# Atores

Administrador.

---

# Estrutura da Página

Logo

↓

Título

↓

Descrição

↓

Formulário de Login

↓

Botão Entrar

↓

Mensagem de Erro

↓

Rodapé

---

# Cabeçalho

## Logotipo

ConectaDRP

---

## Título

```
Área Administrativa
```

---

## Subtítulo

```
Acesso restrito aos administradores do sistema.
```

---

# Formulário

## Campo

E-mail

Tipo.

Input Email.

Obrigatório.

---

Placeholder.

```
Digite seu e-mail
```

---

Validação.

Formato de e-mail válido.

---

Mensagem.

```
Informe um e-mail válido.
```

---

## Campo

Senha

Tipo.

Password.

Obrigatório.

---

Placeholder.

```
Digite sua senha
```

---

Quantidade mínima.

8 caracteres.

---

Botão.

Mostrar/Ocultar senha.

Ícone.

```
bi-eye
```

---

Mensagem.

```
Informe sua senha.
```

---

## Campo

Lembrar acesso

Tipo.

Checkbox.

Opcional.

---

Descrição.

```
Manter minha sessão ativa neste dispositivo.
```

---

# Botão Principal

Texto.

```
Entrar
```

---

Ícone.

```
bi-box-arrow-in-right
```

---

Durante autenticação.

Desabilitar botão.

Texto.

```
Entrando...
```

Spinner Bootstrap.

---

# Link

Esqueci minha senha

Texto.

```
Esqueci minha senha
```

---

Destino.

Fluxo padrão do Supabase Authentication.

---

# Processo de Login

Administrador informa.

E-mail.

Senha.

↓

Sistema valida.

↓

Supabase Authentication.

↓

Validação das permissões.

↓

Criação da sessão.

↓

Registro de auditoria.

↓

Redirecionamento.

```
/admin/dashboard
```

---

# Mensagens de Erro

E-mail inexistente.

```
E-mail ou senha inválidos.
```

---

Senha incorreta.

```
E-mail ou senha inválidos.
```

---

Administrador inativo.

```
Sua conta encontra-se desativada.

Entre em contato com o administrador do sistema.
```

---

Sem permissão.

```
Você não possui permissão para acessar esta área.
```

---

Servidor indisponível.

```
Não foi possível realizar o login.

Tente novamente em alguns instantes.
```

---

# Estados da Tela

Inicial.

---

Validando credenciais.

Spinner Bootstrap.

---

Login realizado.

Redirecionamento automático.

---

Erro.

Mensagem amigável.

---

Sem conexão.

Mensagem.

```
Verifique sua conexão com a Internet.
```

---

# Responsividade

Desktop.

Card centralizado.

Largura máxima de 420 pixels.

---

Tablet.

Card centralizado.

---

Celular.

Card ocupando aproximadamente 95% da largura.

Botão largura total.

Campos empilhados.

---

# Componentes React

AdminLoginForm.

Logo.

PasswordInput.

LoadingButton.

Footer.

---

# Hooks

useAuth.

useLogin.

---

# Serviços

AuthService.

AuditService.

---

# Integração com Supabase

Authentication.

Login.

Logout.

Refresh Token.

Sessão.

---

Tabela.

```
administradores
```

---

Tabela.

```
logs
```

Registrar.

Login.

Falhas.

Logout.

---

# Regras de Interface

Nunca armazenar senha localmente.

Tokens deverão permanecer protegidos.

Sessões expiradas deverão redirecionar automaticamente para o login.

As mensagens de erro nunca deverão informar qual campo está incorreto.

---

# Critérios de Aceitação

Somente administradores ativos poderão autenticar.

Toda autenticação deverá utilizar Supabase Authentication.

Toda tentativa de login deverá gerar auditoria.

A sessão deverá ser criada corretamente.

O redirecionamento deverá ocorrer automaticamente após autenticação.

A tela deverá funcionar corretamente em smartphones, tablets e desktops.

---

# TP009 - Dashboard Administrativo

## Objetivo

Apresentar ao administrador uma visão geral da plataforma por meio de indicadores, gráficos e informações estratégicas para acompanhamento do uso do ConectaDRP.

---

# Rota

```
/admin/dashboard
```

---

# Tipo de Acesso

Privado.

Administrador autenticado.

---

# Estrutura da Página

Sidebar

↓

Navbar Superior

↓

Cards de Indicadores

↓

Gráficos

↓

Últimas Atividades

↓

Rodapé Administrativo

---

# Cards de Indicadores

Exibir no mínimo os seguintes indicadores.

Total de colegas cadastrados.

---

Colegas ativos.

---

Colegas inativos.

---

Total de grupos.

---

Grupos ativos.

---

Grupos encerrados.

---

Cursos cadastrados.

---

Cidades cadastradas.

---

DRPs cadastradas.

---

Eixos cadastrados.

---

Administradores cadastrados.

---

# Gráficos

## Gráfico 01

Cadastros por mês.

Tipo.

Barra.

---

## Gráfico 02

Colegas por curso.

Tipo.

Pizza.

---

## Gráfico 03

Colegas por cidade.

Tipo.

Barra horizontal.

---

## Gráfico 04

Grupos por curso.

Tipo.

Pizza.

---

## Gráfico 05

Grupos por cidade.

Tipo.

Barra.

---

# Painel de Atividades

Listar.

Últimos cadastros.

Últimos grupos criados.

Últimas alterações.

Últimos logins administrativos.

---

Cada registro deverá exibir.

Data.

Hora.

Usuário.

Operação.

---

# Atalhos Rápidos

Botões.

Gerenciar Colegas.

---

Gerenciar Grupos.

---

Gerenciar Cursos.

---

Gerenciar Cidades.

---

Gerenciar DRPs.

---

Gerenciar Eixos.

---

Consultar Logs.

---

Configurações.

---

# Atualização

Os indicadores deverão ser atualizados automaticamente ao abrir a tela.

Deverá existir botão.

```
Atualizar Dados
```

para recarregar manualmente as informações.

---

# Estados da Tela

Carregando.

Spinner Bootstrap.

---

Dashboard carregado.

---

Erro.

Mensagem amigável.

---

Sem conexão.

---

# Componentes React

AdminSidebar.

TopNavbar.

StatisticCard.

ChartCard.

RecentActivities.

QuickActions.

FooterAdmin.

---

# Hooks

useDashboard.

---

# Serviços

DashboardService.

AuditService.

StatisticsService.

---

# Integração com Supabase

Consultas agregadas às tabelas.

```
colegas
```

```
grupos
```

```
cursos
```

```
cidades
```

```
drps
```

```
eixos
```

```
administradores
```

```
logs
```

---

# Critérios de Aceitação

Todos os indicadores deverão refletir os dados reais do banco.

Os gráficos deverão atualizar corretamente.

A abertura da tela deverá ocorrer em tempo inferior a três segundos em condições normais.

Todas as ações rápidas deverão navegar corretamente.

A interface deverá permanecer totalmente responsiva para notebooks, desktops e tablets.


# TP010 - Gerenciar Colegas

## Objetivo

Permitir que administradores consultem, pesquisem, filtrem, editem, ativem e desativem cadastros de colegas, garantindo a integridade e qualidade das informações disponíveis no ConectaDRP.

---

# Rota

```
/admin/colegas
```

---

# Tipo de Acesso

Privado.

Administrador autenticado.

---

# Estrutura da Página

Sidebar

↓

Navbar Superior

↓

Filtros

↓

Tabela de Colegas

↓

Paginação

↓

Rodapé Administrativo

---

# Cabeçalho

Título.

```
Gerenciar Colegas
```

---

Subtítulo.

```
Consulte, edite e acompanhe os cadastros de colegas da plataforma.
```

---

# Área de Filtros

## Nome

Input Text.

Pesquisa parcial.

---

## Cidade

Select pesquisável.

---

## Curso

Select pesquisável.

---

## DRP

Select.

---

## Eixo

Select.

---

## Status

Select.

Valores.

Todos.

Ativo.

Inativo.

---

## Data de Cadastro

Intervalo de datas.

---

## Botões

Pesquisar.

---

Limpar.

---

Exportar.

---

# Tabela

Colunas.

Nome.

Cidade.

Curso.

DRP.

Eixo.

Telefone.

Status.

Data de Cadastro.

Última Atualização.

Ações.

---

# Ações

Visualizar.

---

Editar.

---

Ativar.

---

Desativar.

---

Visualizar Histórico.

---

# Modal

Visualizar Cadastro

Exibir.

Todos os dados do colega.

Data de criação.

Última atualização.

Histórico resumido.

---

# Modal

Confirmar Desativação

Mensagem.

```
Deseja realmente desativar este cadastro?

O colega deixará de aparecer nas pesquisas públicas.
```

---

Botões.

Cancelar.

Desativar.

---

# Modal

Confirmar Reativação

Mensagem.

```
Deseja reativar este cadastro?
```

---

# Exportação

Permitir exportar resultados.

CSV.

Excel.

PDF.

---

# Paginação

20 registros por página.

---

Botões.

Primeira.

Anterior.

Próxima.

Última.

---

# Estados da Tela

Carregando.

---

Resultados.

---

Sem registros.

---

Erro.

---

Sem conexão.

---

# Componentes React

AdminSidebar.

TopNavbar.

FilterPanel.

DataTable.

Pagination.

ExportButton.

ConfirmationModal.

FooterAdmin.

---

# Hooks

useColleaguesAdmin.

usePagination.

---

# Serviços

AdminColleagueService.

ExportService.

AuditService.

---

# Integração com Supabase

Tabela.

```
colegas
```

---

Tabela.

```
logs
```

---

# Regras de Interface

Filtros deverão permanecer preenchidos após consultas.

Paginação deverá manter filtros ativos.

Toda alteração deverá atualizar automaticamente a tabela.

Nenhuma operação deverá recarregar a página.

---

# Critérios de Aceitação

Permitir localizar qualquer colega rapidamente.

Filtros funcionando em conjunto.

Paginação correta.

Exportações funcionando.

Toda alteração registrada em auditoria.

---

# TP011 - Gerenciar Grupos

## Objetivo

Permitir que administradores mantenham todos os grupos cadastrados no ConectaDRP, garantindo que apenas grupos válidos permaneçam disponíveis para pesquisa.

---

# Rota

```
/admin/grupos
```

---

# Tipo de Acesso

Privado.

Administrador autenticado.

---

# Estrutura da Página

Sidebar

↓

Navbar Superior

↓

Filtros

↓

Tabela de Grupos

↓

Paginação

↓

Rodapé Administrativo

---

# Cabeçalho

Título.

```
Gerenciar Grupos
```

---

Subtítulo.

```
Consulte e administre todos os grupos cadastrados na plataforma.
```

---

# Área de Filtros

Nome do Grupo.

---

Cidade.

---

Curso.

---

DRP.

---

Eixo.

---

Status.

Ativo.

Encerrado.

---

Aceita novos participantes.

Sim.

Não.

---

# Botões

Pesquisar.

---

Limpar.

---

Exportar.

---

# Tabela

Colunas.

Nome.

Cidade.

Curso.

Responsável.

Participantes.

Capacidade.

Status.

Aceita novos membros.

Última atualização.

Ações.

---

# Ações

Visualizar.

---

Editar.

---

Encerrar.

---

Reativar.

---

Visualizar Histórico.

---

# Modal

Visualizar Grupo

Exibir.

Nome.

Descrição.

Responsável.

Telefone.

Cidade.

Curso.

DRP.

Eixo.

Capacidade.

Participantes.

Link WhatsApp.

Datas.

---

# Modal

Confirmar Encerramento

Mensagem.

```
Ao encerrar este grupo ele deixará de aparecer nas pesquisas públicas.
```

---

# Modal

Confirmar Reativação

Mensagem.

```
Deseja reativar este grupo?
```

---

# Exportação

CSV.

Excel.

PDF.

---

# Paginação

20 registros por página.

---

# Estados da Tela

Carregando.

---

Resultados.

---

Sem registros.

---

Erro.

---

Sem conexão.

---

# Componentes React

AdminSidebar.

TopNavbar.

FilterPanel.

GroupTable.

Pagination.

ExportButton.

ConfirmationModal.

FooterAdmin.

---

# Hooks

useGroupsAdmin.

---

# Serviços

AdminGroupService.

ExportService.

AuditService.

---

# Integração com Supabase

Tabela.

```
grupos
```

---

Tabela.

```
logs
```

---

# Regras de Interface

Toda alteração deverá atualizar imediatamente a listagem.

Filtros deverão permanecer preenchidos.

Exportações respeitarão os filtros aplicados.

As ações deverão ocorrer sem recarregamento da página.

---

# Critérios de Aceitação

Permitir localizar qualquer grupo rapidamente.

Permitir encerramento e reativação.

Exportações funcionando corretamente.

Paginação eficiente.

Auditoria registrada para todas as operações administrativas.

A interface deverá permanecer totalmente responsiva para notebooks, tablets e desktops.


# TP012 - Gerenciar Cursos

## Objetivo

Permitir que administradores realizem o gerenciamento completo dos cursos disponíveis no ConectaDRP, garantindo consistência entre cursos, eixos e pesquisas realizadas pelos estudantes.

---

# Rota

```
/admin/cursos
```

---

# Tipo de Acesso

Privado.

Administrador autenticado.

---

# Estrutura da Página

Sidebar

↓

Navbar Superior

↓

Filtros

↓

Tabela de Cursos

↓

Paginação

↓

Rodapé Administrativo

---

# Cabeçalho

Título.

```
Gerenciar Cursos
```

---

Subtítulo.

```
Cadastre e mantenha atualizada a relação oficial de cursos da plataforma.
```

---

# Área de Filtros

Nome.

---

Eixo.

---

Status.

Todos.

Ativo.

Inativo.

---

Botões.

Pesquisar.

Limpar.

Novo Curso.

Exportar.

---

# Tabela

Colunas.

Nome.

Eixo.

Status.

Quantidade de colegas.

Última atualização.

Ações.

---

# Ações

Visualizar.

Editar.

Ativar.

Desativar.

---

# Modal

Novo Curso

Campos.

Nome.

Eixo.

Status.

---

# Modal

Editar Curso

Permitir alterar.

Nome.

Eixo.

Status.

---

# Modal

Confirmar Desativação

Mensagem.

```
Este curso deixará de aparecer em novos cadastros.

Os colegas já cadastrados permanecerão vinculados ao curso.
```

---

# Exportação

CSV.

Excel.

PDF.

---

# Paginação

20 registros por página.

---

# Componentes React

AdminSidebar.

TopNavbar.

CourseTable.

CourseModal.

FilterPanel.

Pagination.

FooterAdmin.

---

# Hooks

useCoursesAdmin.

---

# Serviços

CourseService.

ExportService.

AuditService.

---

# Integração com Supabase

Tabela.

```
cursos
```

---

Tabela.

```
eixos
```

---

Tabela.

```
logs
```

---

# Regras de Interface

Não permitir nomes duplicados.

Não permitir exclusão física.

Atualizar imediatamente todas as telas que utilizam cursos.

---

# Critérios de Aceitação

Cursos duplicados deverão ser bloqueados.

Toda alteração deverá gerar auditoria.

Filtros e paginação deverão funcionar corretamente.

---

# TP013 - Gerenciar Eixos

## Objetivo

Permitir que administradores mantenham a estrutura oficial de eixos utilizada pelos cursos da UNIVESP.

---

# Rota

```
/admin/eixos
```

---

# Tipo de Acesso

Privado.

Administrador autenticado.

---

# Estrutura da Página

Sidebar

↓

Navbar Superior

↓

Filtros

↓

Tabela

↓

Paginação

↓

Rodapé

---

# Cabeçalho

Título.

```
Gerenciar Eixos
```

---

# Área de Filtros

Nome.

---

Status.

---

Botões.

Pesquisar.

Limpar.

Novo Eixo.

Exportar.

---

# Tabela

Nome.

Status.

Quantidade de cursos.

Última atualização.

Ações.

---

# Ações

Visualizar.

Editar.

Ativar.

Desativar.

---

# Modal

Novo Eixo

Campos.

Nome.

Descrição.

Status.

---

# Modal

Editar Eixo

---

# Componentes React

AdminSidebar.

TopNavbar.

AxisTable.

AxisModal.

Pagination.

FooterAdmin.

---

# Serviços

AxisService.

AuditService.

ExportService.

---

# Integração com Supabase

Tabela.

```
eixos
```

---

Tabela.

```
cursos
```

---

Tabela.

```
logs
```

---

# Regras de Interface

Não permitir eixos duplicados.

Não permitir exclusão física.

Atualizar automaticamente os cursos vinculados.

---

# Critérios de Aceitação

Todas as alterações deverão gerar auditoria.

Os filtros deverão funcionar corretamente.

Paginação obrigatória.

---

# TP014 - Gerenciar DRPs

## Objetivo

Permitir o gerenciamento das Diretorias Regionais de Ensino utilizadas pelas cidades cadastradas.

---

# Rota

```
/admin/drps
```

---

# Tipo de Acesso

Privado.

Administrador autenticado.

---

# Estrutura

Sidebar.

Navbar.

Filtros.

Tabela.

Paginação.

Rodapé.

---

# Área de Filtros

Nome.

---

Status.

---

Botões.

Pesquisar.

Limpar.

Nova DRP.

Exportar.

---

# Tabela

Nome.

Quantidade de cidades.

Status.

Última atualização.

Ações.

---

# Ações

Visualizar.

Editar.

Ativar.

Desativar.

---

# Modal

Nova DRP

Campos.

Nome.

Descrição.

Status.

---

# Componentes React

AdminSidebar.

TopNavbar.

DRPTable.

DRPModal.

Pagination.

FooterAdmin.

---

# Serviços

DRPService.

AuditService.

ExportService.

---

# Integração com Supabase

Tabela.

```
drps
```

---

Tabela.

```
cidades
```

---

Tabela.

```
logs
```

---

# Regras de Interface

Não permitir nomes duplicados.

Não permitir exclusão física.

Atualizar automaticamente todas as cidades vinculadas.

---

# Critérios de Aceitação

Todas as operações deverão gerar auditoria.

Filtros funcionando.

Paginação obrigatória.

---

# TP015 - Gerenciar Cidades

## Objetivo

Permitir o gerenciamento da base oficial de cidades utilizada por todo o ConectaDRP.

---

# Rota

```
/admin/cidades
```

---

# Tipo de Acesso

Privado.

Administrador autenticado.

---

# Estrutura da Página

Sidebar

↓

Navbar Superior

↓

Filtros

↓

Tabela

↓

Paginação

↓

Rodapé

---

# Cabeçalho

Título.

```
Gerenciar Cidades
```

---

# Área de Filtros

Cidade.

---

Estado.

---

DRP.

---

Status.

---

Botões.

Pesquisar.

Limpar.

Nova Cidade.

Exportar.

---

# Tabela

Cidade.

Estado.

DRP.

Quantidade de colegas.

Quantidade de grupos.

Status.

Última atualização.

Ações.

---

# Ações

Visualizar.

Editar.

Ativar.

Desativar.

---

# Modal

Nova Cidade

Campos.

Cidade.

Estado.

DRP.

Status.

---

# Modal

Editar Cidade

Permitir alterar.

Nome.

Estado.

DRP.

Status.

---

# Componentes React

AdminSidebar.

TopNavbar.

CityTable.

CityModal.

Pagination.

FooterAdmin.

---

# Hooks

useCitiesAdmin.

---

# Serviços

CityService.

DRPService.

ExportService.

AuditService.

---

# Integração com Supabase

Tabela.

```
cidades
```

---

Tabela.

```
drps
```

---

Tabela.

```
colegas
```

---

Tabela.

```
grupos
```

---

Tabela.

```
logs
```

---

# Regras de Interface

Não permitir cidades duplicadas no mesmo estado.

Não permitir exclusão física.

As alterações deverão refletir imediatamente em todos os formulários públicos.

Filtros deverão permanecer preenchidos após consultas.

---

# Critérios de Aceitação

Não permitir duplicidade.

Todas as operações deverão gerar auditoria.

Filtros deverão funcionar corretamente.

Exportações deverão respeitar os filtros aplicados.

A interface deverá permanecer totalmente responsiva para notebooks, tablets e desktops.



# TP012 - Gerenciar Cursos

## Objetivo

Permitir que administradores realizem o gerenciamento completo dos cursos disponíveis no ConectaDRP, garantindo consistência entre cursos, eixos e pesquisas realizadas pelos estudantes.

---

# Rota

```
/admin/cursos
```

---

# Tipo de Acesso

Privado.

Administrador autenticado.

---

# Estrutura da Página

Sidebar

↓

Navbar Superior

↓

Filtros

↓

Tabela de Cursos

↓

Paginação

↓

Rodapé Administrativo

---

# Cabeçalho

Título.

```
Gerenciar Cursos
```

---

Subtítulo.

```
Cadastre e mantenha atualizada a relação oficial de cursos da plataforma.
```

---

# Área de Filtros

Nome.

---

Eixo.

---

Status.

Todos.

Ativo.

Inativo.

---

Botões.

Pesquisar.

Limpar.

Novo Curso.

Exportar.

---

# Tabela

Colunas.

Nome.

Eixo.

Status.

Quantidade de colegas.

Última atualização.

Ações.

---

# Ações

Visualizar.

Editar.

Ativar.

Desativar.

---

# Modal

Novo Curso

Campos.

Nome.

Eixo.

Status.

---

# Modal

Editar Curso

Permitir alterar.

Nome.

Eixo.

Status.

---

# Modal

Confirmar Desativação

Mensagem.

```
Este curso deixará de aparecer em novos cadastros.

Os colegas já cadastrados permanecerão vinculados ao curso.
```

---

# Exportação

CSV.

Excel.

PDF.

---

# Paginação

20 registros por página.

---

# Componentes React

AdminSidebar.

TopNavbar.

CourseTable.

CourseModal.

FilterPanel.

Pagination.

FooterAdmin.

---

# Hooks

useCoursesAdmin.

---

# Serviços

CourseService.

ExportService.

AuditService.

---

# Integração com Supabase

Tabela.

```
cursos
```

---

Tabela.

```
eixos
```

---

Tabela.

```
logs
```

---

# Regras de Interface

Não permitir nomes duplicados.

Não permitir exclusão física.

Atualizar imediatamente todas as telas que utilizam cursos.

---

# Critérios de Aceitação

Cursos duplicados deverão ser bloqueados.

Toda alteração deverá gerar auditoria.

Filtros e paginação deverão funcionar corretamente.

---

# TP013 - Gerenciar Eixos

## Objetivo

Permitir que administradores mantenham a estrutura oficial de eixos utilizada pelos cursos da UNIVESP.

---

# Rota

```
/admin/eixos
```

---

# Tipo de Acesso

Privado.

Administrador autenticado.

---

# Estrutura da Página

Sidebar

↓

Navbar Superior

↓

Filtros

↓

Tabela

↓

Paginação

↓

Rodapé

---

# Cabeçalho

Título.

```
Gerenciar Eixos
```

---

# Área de Filtros

Nome.

---

Status.

---

Botões.

Pesquisar.

Limpar.

Novo Eixo.

Exportar.

---

# Tabela

Nome.

Status.

Quantidade de cursos.

Última atualização.

Ações.

---

# Ações

Visualizar.

Editar.

Ativar.

Desativar.

---

# Modal

Novo Eixo

Campos.

Nome.

Descrição.

Status.

---

# Modal

Editar Eixo

---

# Componentes React

AdminSidebar.

TopNavbar.

AxisTable.

AxisModal.

Pagination.

FooterAdmin.

---

# Serviços

AxisService.

AuditService.

ExportService.

---

# Integração com Supabase

Tabela.

```
eixos
```

---

Tabela.

```
cursos
```

---

Tabela.

```
logs
```

---

# Regras de Interface

Não permitir eixos duplicados.

Não permitir exclusão física.

Atualizar automaticamente os cursos vinculados.

---

# Critérios de Aceitação

Todas as alterações deverão gerar auditoria.

Os filtros deverão funcionar corretamente.

Paginação obrigatória.

---

# TP014 - Gerenciar DRPs

## Objetivo

Permitir o gerenciamento das Diretorias Regionais de Ensino utilizadas pelas cidades cadastradas.

---

# Rota

```
/admin/drps
```

---

# Tipo de Acesso

Privado.

Administrador autenticado.

---

# Estrutura

Sidebar.

Navbar.

Filtros.

Tabela.

Paginação.

Rodapé.

---

# Área de Filtros

Nome.

---

Status.

---

Botões.

Pesquisar.

Limpar.

Nova DRP.

Exportar.

---

# Tabela

Nome.

Quantidade de cidades.

Status.

Última atualização.

Ações.

---

# Ações

Visualizar.

Editar.

Ativar.

Desativar.

---

# Modal

Nova DRP

Campos.

Nome.

Descrição.

Status.

---

# Componentes React

AdminSidebar.

TopNavbar.

DRPTable.

DRPModal.

Pagination.

FooterAdmin.

---

# Serviços

DRPService.

AuditService.

ExportService.

---

# Integração com Supabase

Tabela.

```
drps
```

---

Tabela.

```
cidades
```

---

Tabela.

```
logs
```

---

# Regras de Interface

Não permitir nomes duplicados.

Não permitir exclusão física.

Atualizar automaticamente todas as cidades vinculadas.

---

# Critérios de Aceitação

Todas as operações deverão gerar auditoria.

Filtros funcionando.

Paginação obrigatória.

---

# TP015 - Gerenciar Cidades

## Objetivo

Permitir o gerenciamento da base oficial de cidades utilizada por todo o ConectaDRP.

---

# Rota

```
/admin/cidades
```

---

# Tipo de Acesso

Privado.

Administrador autenticado.

---

# Estrutura da Página

Sidebar

↓

Navbar Superior

↓

Filtros

↓

Tabela

↓

Paginação

↓

Rodapé

---

# Cabeçalho

Título.

```
Gerenciar Cidades
```

---

# Área de Filtros

Cidade.

---

Estado.

---

DRP.

---

Status.

---

Botões.

Pesquisar.

Limpar.

Nova Cidade.

Exportar.

---

# Tabela

Cidade.

Estado.

DRP.

Quantidade de colegas.

Quantidade de grupos.

Status.

Última atualização.

Ações.

---

# Ações

Visualizar.

Editar.

Ativar.

Desativar.

---

# Modal

Nova Cidade

Campos.

Cidade.

Estado.

DRP.

Status.

---

# Modal

Editar Cidade

Permitir alterar.

Nome.

Estado.

DRP.

Status.

---

# Componentes React

AdminSidebar.

TopNavbar.

CityTable.

CityModal.

Pagination.

FooterAdmin.

---

# Hooks

useCitiesAdmin.

---

# Serviços

CityService.

DRPService.

ExportService.

AuditService.

---

# Integração com Supabase

Tabela.

```
cidades
```

---

Tabela.

```
drps
```

---

Tabela.

```
colegas
```

---

Tabela.

```
grupos
```

---

Tabela.

```
logs
```

---

# Regras de Interface

Não permitir cidades duplicadas no mesmo estado.

Não permitir exclusão física.

As alterações deverão refletir imediatamente em todos os formulários públicos.

Filtros deverão permanecer preenchidos após consultas.

---

# Critérios de Aceitação

Não permitir duplicidade.

Todas as operações deverão gerar auditoria.

Filtros deverão funcionar corretamente.

Exportações deverão respeitar os filtros aplicados.

A interface deverá permanecer totalmente responsiva para notebooks, tablets e desktops.


# TP016 - Logs de Auditoria

## Objetivo

Permitir que administradores consultem todo o histórico de operações realizadas no ConectaDRP, garantindo rastreabilidade, transparência e suporte às atividades de administração da plataforma.

---

# Rota

```
/admin/logs
```

---

# Tipo de Acesso

Privado.

Exclusivo para administradores autenticados.

---

# Estrutura da Página

Sidebar

↓

Navbar Superior

↓

Filtros

↓

Tabela de Logs

↓

Paginação

↓

Rodapé Administrativo

---

# Cabeçalho

Título.

```
Logs de Auditoria
```

---

Subtítulo.

```
Consulte todas as operações realizadas na plataforma.
```

---

# Área de Filtros

## Usuário

Input Text.

Pesquisa parcial.

---

## Tipo de Operação

Select.

Valores.

Todos.

Login.

Logout.

Cadastro.

Atualização.

Exclusão.

Reativação.

Criação de Grupo.

Atualização de Grupo.

Encerramento de Grupo.

Alteração de Configuração.

---

## Tabela Afetada

Select.

Todos.

Colegas.

Grupos.

Cursos.

Cidades.

DRPs.

Eixos.

Administradores.

Configurações.

---

## Data Inicial

Date Picker.

---

## Data Final

Date Picker.

---

## Botões

Pesquisar.

---

Limpar.

---

Exportar.

---

# Tabela

Colunas.

Data.

Hora.

Usuário.

Operação.

Tabela.

Registro.

Endereço IP.

Navegador.

Resultado.

Ações.

---

# Ações

Visualizar detalhes.

---

# Modal

Detalhes do Log

Campos.

Identificador.

Data.

Hora.

Administrador.

Operação.

Tabela afetada.

Registro afetado.

Valores anteriores.

Valores atualizados.

IP.

Navegador.

Tempo da operação.

---

# Exportação

CSV.

Excel.

PDF.

---

# Paginação

50 registros por página.

---

# Estados da Tela

Carregando.

---

Resultados.

---

Sem registros.

---

Erro.

---

Sem conexão.

---

# Componentes React

AdminSidebar.

TopNavbar.

FilterPanel.

AuditTable.

AuditDetailsModal.

Pagination.

ExportButton.

FooterAdmin.

---

# Hooks

useAuditLogs.

---

# Serviços

AuditService.

ExportService.

---

# Integração com Supabase

Tabela.

```
logs
```

---

# Regras de Interface

Os logs nunca poderão ser alterados manualmente.

Apenas consulta será permitida.

Filtros deverão permanecer preenchidos após cada pesquisa.

---

# Critérios de Aceitação

Todas as operações administrativas deverão possuir registro.

Filtros funcionando corretamente.

Exportações funcionando.

Paginação eficiente.

Consulta rápida mesmo com grande volume de registros.

---

# TP017 - Configurações do Sistema

## Objetivo

Permitir que administradores configurem parâmetros gerais do ConectaDRP sem necessidade de alterações no código da aplicação.

---

# Rota

```
/admin/configuracoes
```

---

# Tipo de Acesso

Privado.

Administrador autenticado.

---

# Estrutura da Página

Sidebar

↓

Navbar Superior

↓

Categorias

↓

Formulários

↓

Botão Salvar

↓

Rodapé

---

# Categorias

## Geral

Nome da plataforma.

Versão.

Descrição.

Logo.

Favicon.

---

## Cadastro

Permitir novos cadastros.

Sim.

Não.

---

Permitir criação de grupos.

Sim.

Não.

---

Permitir edição pública.

Sim.

Não.

---

## Pesquisa

Quantidade padrão de registros por página.

---

Ordenação padrão.

---

Tempo de cache.

---

## Segurança

Tempo de expiração da sessão.

---

Quantidade máxima de tentativas de login.

---

Bloqueio automático.

---

## Comunicação

E-mail de suporte.

Telefone de suporte.

URL do site oficial.

---

## LGPD

Texto da Política de Privacidade.

---

Texto dos Termos de Uso.

---

Versão dos documentos.

---

# Botão

Salvar Configurações

---

# Mensagem

```
Configurações atualizadas com sucesso.
```

---

# Integração com Supabase

Tabela.

```
configuracoes
```

---

Tabela.

```
logs
```

---

# Regras

Toda alteração deverá gerar auditoria.

As configurações deverão entrar em vigor imediatamente sempre que possível.

---

# Critérios de Aceitação

Todas as configurações deverão persistir corretamente.

Alterações registradas em auditoria.

---

# TP018 - Página 404

## Objetivo

Informar ao usuário que a página solicitada não foi encontrada.

---

# Rota

Qualquer rota inexistente.

---

# Estrutura

Navbar.

↓

Ilustração.

↓

Mensagem.

↓

Botões.

↓

Rodapé.

---

# Mensagem Principal

```
Ops!

A página que você procura não foi encontrada.
```

---

# Texto

```
Ela pode ter sido removida, renomeada ou nunca ter existido.
```

---

# Botões

Voltar para Home.

---

Pesquisar Colegas.

---

Pesquisar Grupos.

---

# Código HTTP

404.

---

# Critérios de Aceitação

Nunca apresentar tela em branco.

Sempre oferecer navegação de retorno.

---

# TP019 - Página de Erro

## Objetivo

Apresentar mensagens amigáveis quando ocorrer qualquer erro inesperado durante a utilização da plataforma.

---

# Rotas

Erro interno.

Erro inesperado.

Erro de autorização.

Erro de comunicação.

---

# Estrutura

Navbar.

↓

Ilustração.

↓

Mensagem.

↓

Detalhes resumidos.

↓

Botão Tentar Novamente.

↓

Rodapé.

---

# Tipos de Erro

## Erro 401

Mensagem.

```
Sua sessão expirou.

Faça login novamente.
```

---

## Erro 403

Mensagem.

```
Você não possui permissão para acessar este recurso.
```

---

## Erro 404

Redirecionar para TP018.

---

## Erro 500

Mensagem.

```
Ocorreu um erro inesperado.

Nossa equipe já foi notificada.
```

---

## Erro de Rede

Mensagem.

```
Não foi possível estabelecer conexão com o servidor.
```

---

# Botões

Tentar Novamente.

---

Voltar para Home.

---

Entrar em Contato.

---

# Registro Automático

Todos os erros deverão ser registrados automaticamente.

Tabela.

```
logs
```

Sempre que possível.

---

# Componentes React

ErrorPage.

ErrorIllustration.

RetryButton.

Footer.

---

# Hooks

useErrorHandler.

---

# Serviços

ErrorService.

AuditService.

---

# Critérios de Aceitação

Todas as mensagens deverão ser claras e objetivas.

Nunca expor detalhes técnicos ao usuário final.

Sempre oferecer uma ação para recuperação.

A interface deverá permanecer totalmente responsiva.

Todos os erros deverão ser registrados para análise administrativa.

---

# Encerramento do Documento

Este documento consolida todas as especificações funcionais das telas do sistema ConectaDRP, servindo como referência oficial para implementação da interface, integração com o Supabase, desenvolvimento em React, padronização visual utilizando Bootstrap 5 e garantia dos critérios funcionais, técnicos e de usabilidade definidos para o projeto.

