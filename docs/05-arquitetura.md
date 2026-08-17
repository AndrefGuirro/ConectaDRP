# Documento 05
# Arquitetura do Sistema
## ConectaDRP

Versão: 1.0

Data: 08/07/2026

---

# Objetivo

Este documento define toda a arquitetura técnica do ConectaDRP.

Seu objetivo é padronizar completamente a estrutura do projeto para que qualquer desenvolvedor ou Inteligência Artificial consiga implementar o sistema sem necessidade de tomar decisões arquiteturais adicionais.

Todas as tecnologias, padrões, organização de pastas, fluxo de navegação, comunicação com banco de dados e regras gerais de desenvolvimento deverão seguir este documento.

---

# Objetivos da Arquitetura

A arquitetura deverá atender aos seguintes requisitos.

- Alta performance.

- Excelente experiência em dispositivos móveis.

- Interface responsiva.

- Estrutura escalável.

- Código organizado.

- Componentização.

- Fácil manutenção.

- Fácil evolução.

- PWA instalável.

- Offline sempre que possível.

- Banco em nuvem.

- Segurança dos dados.

- Hospedagem de baixo custo.

---

# Tecnologias Definidas

## Frontend

React.

TypeScript.

Vite.

React Router.

Bootstrap 5.

Bootstrap Icons.

React Hook Form.

Zod.

TanStack Query.

Axios.

---

## Backend

Supabase.

PostgreSQL.

Supabase Edge Functions.

Row Level Security (RLS).

Realtime Database.

Storage.

---

## Hospedagem

Frontend.

Vercel.

Como alternativa.

Netlify.

---

Banco de Dados.

Supabase.

---

Arquivos.

Supabase Storage.

---

Domínio

Domínio próprio.

Exemplo.

```
conectadrp.com.br
```

---

# Aplicação

Tipo.

Progressive Web App.

(PWA)

---

Características.

Instalável.

Funciona em celular.

Funciona em computador.

Responsiva.

Ícone próprio.

Splash Screen.

Modo offline parcial.

Atualização automática.

Notificações futuras.

---

# Navegadores Suportados

Google Chrome.

Microsoft Edge.

Mozilla Firefox.

Safari.

Opera.

Samsung Internet.

---

# Sistemas Operacionais

Android.

iOS.

Windows.

Linux.

macOS.

---

# Arquitetura Geral

```
Usuário

↓

Frontend React

↓

Camada de Serviços

↓

Supabase SDK

↓

PostgreSQL

↓

Storage

↓

Edge Functions

↓

Realtime
```

Toda comunicação deverá ocorrer através do SDK oficial do Supabase.

Não haverá servidor próprio na primeira versão.

---

# Padrão Arquitetural

Será utilizado.

Arquitetura em Camadas.

```
Interface

↓

Componentes

↓

Páginas

↓

Serviços

↓

Banco

```

Cada camada deverá possuir responsabilidade única.

---

# Organização Geral

A aplicação será dividida em cinco grandes blocos.

Interface.

Componentes.

Serviços.

Banco.

Utilidades.

Cada bloco possuirá sua própria organização interna.

---

# Convenções de Código

Idioma.

Português.

---

Arquivos.

kebab-case.

Exemplo.

```
cadastro-colega.tsx

lista-grupos.tsx

editar-perfil.tsx
```

---

Componentes.

PascalCase.

Exemplo.

```
BotaoPesquisar

CardColega

MenuInferior

CampoTelefone
```

---

Funções.

camelCase.

Exemplo.

```
buscarColegas()

salvarCadastro()

listarCursos()

gerarLinkWhatsapp()
```

---

Variáveis.

camelCase.

---

Constantes.

UPPER_CASE.

---

Interfaces.

Sempre iniciar com.

```
I
```

Exemplo.

```
IColega

ICurso

ICidade

IGrupo
```

---

Enums.

Sempre terminar com.

```
Enum
```

Exemplo.

```
PerfilEnum

StatusEnum

CursoEnum
```

---

# Padrão Visual

Tema claro.

Interface limpa.

Poucos botões.

Grandes áreas de toque.

Tipografia simples.

Ícones intuitivos.

Poucas cores.

---

# Paleta Principal

Azul.

Branco.

Cinza claro.

Verde apenas para ações positivas.

Vermelho apenas para erros.

---

# Identidade Visual

Nome.

ConectaDRP.

---

Slogan.

Conectando colegas estudantes da UNIVESP para Projetos Integradores e TCC.

O ensino é a distância.

O estudo pode ser bem perto de você.

---

# Filosofia do Sistema

O usuário deve conseguir utilizar todo o sistema praticamente com apenas uma mão.

Toda ação importante deverá exigir no máximo três toques.

As telas deverão carregar rapidamente mesmo em conexões móveis.

A interface deverá ser intuitiva para usuários com pouca experiência em tecnologia.

Nenhuma tela deverá apresentar excesso de informações.

Sempre que possível, o sistema deverá orientar o usuário sobre o próximo passo de forma simples e objetiva.

Toda a experiência do ConectaDRP deverá transmitir sensação de simplicidade, proximidade entre colegas e facilidade de uso.


# Estrutura de Pastas do Projeto

A estrutura do projeto deverá seguir rigorosamente o padrão abaixo.

```
conectadrp/

│

├── docs/

│

├── public/

│   ├── favicon.ico

│   ├── manifest.json

│   ├── robots.txt

│   ├── offline.html

│   ├── icons/

│   └── screenshots/

│

├── src/

│

├── assets/

│   ├── images/

│   ├── logos/

│   ├── backgrounds/

│   ├── icons/

│   └── styles/

│

├── components/

│

├── common/

│

├── layout/

│

├── pages/

│

├── routes/

│

├── hooks/

│

├── contexts/

│

├── services/

│

├── repositories/

│

├── types/

│

├── interfaces/

│

├── enums/

│

├── utils/

│

├── validations/

│

├── constants/

│

├── config/

│

├── database/

│

├── supabase/

│

├── functions/

│

├── store/

│

├── tests/

│

├── App.tsx

│

├── main.tsx

│

└── vite.config.ts
```

---

# Organização da Pasta assets

```
assets/

├── images/

├── icons/

├── logos/

├── backgrounds/

├── fonts/

├── styles/

│

├── variables.css

├── global.css

├── reset.css

└── animations.css
```

Responsabilidades.

images.

Imagens utilizadas nas páginas.

---

icons.

Ícones personalizados.

---

logos.

Logotipos oficiais.

---

backgrounds.

Imagens de fundo.

---

fonts.

Fontes adicionais.

---

styles.

Arquivos globais de CSS.

---

# Organização da Pasta components

Todo componente reutilizável deverá ficar nesta pasta.

```
components/

├── Button/

├── CardColega/

├── CardGrupo/

├── Input/

├── Select/

├── Modal/

├── ConfirmDialog/

├── Navbar/

├── Footer/

├── BottomNavigation/

├── FloatingButton/

├── SearchBar/

├── EmptyState/

├── Loading/

├── ErrorMessage/

├── Toast/

├── Badge/

├── Avatar/

├── Pagination/

└── WhatsAppButton/
```

Cada componente deverá possuir.

```
Componente.tsx

Componente.module.css

index.ts
```

Opcionalmente.

```
Componente.test.tsx
```

---

# Organização da Pasta pages

Cada tela possuirá sua própria pasta.

```
pages/

Home/

Pesquisar/

Cadastro/

EditarCadastro/

ResultadoPesquisa/

DetalhesColega/

Grupos/

CriarGrupo/

EditarGrupo/

Sobre/

Privacidade/

Termos/

Contato/

Admin/

Login/

Dashboard/

Configuracoes/

NaoEncontrado/
```

Cada página deverá possuir.

```
index.tsx

styles.module.css

hooks.ts

services.ts

types.ts
```

Sempre que necessário.

---

# Organização da Pasta services

A camada de serviços será responsável pela comunicação com o Supabase.

Nenhuma página poderá acessar diretamente o banco.

```
services/

colegas.service.ts

grupos.service.ts

cidades.service.ts

drps.service.ts

cursos.service.ts

eixos.service.ts

estatisticas.service.ts

administradores.service.ts

logs.service.ts

auth.service.ts

storage.service.ts
```

Cada Service deverá possuir.

CRUD completo.

Tratamento de erros.

Validação.

Conversão de dados.

---

# Organização da Pasta repositories

Os repositórios serão responsáveis apenas pelas consultas ao banco.

Nenhuma regra de negócio deverá existir aqui.

```
repositories/

colegas.repository.ts

grupos.repository.ts

cidades.repository.ts

cursos.repository.ts

drps.repository.ts

eixos.repository.ts

administradores.repository.ts

logs.repository.ts
```

---

# Organização da Pasta hooks

```
hooks/

useColegas.ts

useCursos.ts

useCidades.ts

useGrupos.ts

usePesquisa.ts

useAuth.ts

useToast.ts

useLoading.ts

useConnectivity.ts

useDarkMode.ts
```

Os hooks deverão encapsular toda lógica reutilizável.

---

# Organização da Pasta contexts

```
contexts/

AuthContext.tsx

ThemeContext.tsx

AppContext.tsx

NotificationContext.tsx
```

---

# Organização da Pasta validations

Toda validação ficará centralizada.

```
validations/

colega.schema.ts

grupo.schema.ts

cidade.schema.ts

curso.schema.ts

login.schema.ts

perfil.schema.ts
```

Todas utilizando.

Zod.

---

# Organização da Pasta utils

```
utils/

formatarTelefone.ts

formatarNome.ts

formatarCidade.ts

formatarData.ts

gerarWhatsapp.ts

validarTelefone.ts

validarNome.ts

normalizarTexto.ts

exportarCSV.ts

downloadArquivo.ts
```

Nenhuma função nesta pasta poderá acessar banco de dados.

---

# Organização da Pasta constants

```
constants/

cores.ts

rotas.ts

mensagens.ts

config.ts

limites.ts

regex.ts

storage.ts
```

Todos os valores fixos deverão permanecer aqui.

Nunca espalhados pelo projeto.

---

# Organização da Pasta interfaces

```
interfaces/

IColega.ts

ICurso.ts

ICidade.ts

IGrupo.ts

IEixo.ts

IDrp.ts

IAdministrador.ts

ILog.ts

IApiResponse.ts
```

Cada entidade possuirá sua interface própria.

---

# Organização da Pasta enums

```
enums/

StatusCadastroEnum.ts

NivelAdministradorEnum.ts

TipoGrupoEnum.ts

TipoPesquisaEnum.ts

MensagemEnum.ts
```

Enums nunca deverão ser substituídos por números ou textos fixos no código.

---

# Organização da Pasta database

```
database/

migrations/

seeds/

views/

functions/

policies/

triggers/
```

Esta pasta armazenará toda a estrutura SQL do projeto.

---

# Organização da Pasta supabase

```
supabase/

client.ts

config.ts

auth.ts

storage.ts

realtime.ts
```

Centralizar toda configuração do Supabase.

Nenhum componente poderá criar uma conexão própria.

---

# Organização da Pasta functions

```
functions/

pesquisar-colegas/

criar-grupo/

editar-grupo/

gerar-estatisticas/

backup/

importar-dados/
```

Cada função deverá possuir.

```
index.ts

README.md
```

---

# Organização da Pasta store

Caso seja utilizado gerenciamento global de estado.

```
store/

auth.store.ts

app.store.ts

pesquisa.store.ts

grupo.store.ts
```

Preferencialmente utilizando.

Zustand.

Evitar Redux devido à complexidade desnecessária para este projeto.

---

# Organização da Pasta tests

```
tests/

unit/

integration/

e2e/

fixtures/

mocks/
```

Preparada para testes futuros utilizando Vitest e Playwright.

---

# Regras Gerais

Nenhuma página poderá acessar diretamente o banco de dados.

Toda comunicação deverá ocorrer através da camada de Services.

Os Services utilizarão os Repositories.

Os Repositories acessarão exclusivamente o Supabase.

Toda regra de negócio deverá permanecer na camada de Services.

Os componentes deverão ser reutilizáveis e independentes.

Nenhuma lógica complexa deverá existir dentro das páginas.

As páginas deverão apenas organizar componentes e coordenar o fluxo da interface.


# Arquitetura das Telas

## Objetivo

Este capítulo define toda a arquitetura das telas do ConectaDRP.

Cada tela possui uma responsabilidade única.

Toda navegação deverá ser simples, intuitiva e otimizada para dispositivos móveis.

A experiência do usuário deverá exigir o menor número possível de toques para atingir seu objetivo.

---

# Fluxo Geral da Aplicação

```
Tela Inicial

↓

Pesquisar Colegas

↓

Resultados

↓

Visualizar Colega

↓

Conversar pelo WhatsApp

↓

Criar Grupo (Opcional)

↓

Consultar Grupos

↓

Entrar em Grupo
```

Fluxos secundários.

```
Cadastro

↓

Editar Cadastro

↓

Atualizar Dados
```

```
Login Administrador

↓

Dashboard

↓

Cadastros

↓

Relatórios

↓

Logs
```

---

# Mapa de Navegação

```
Home

├── Pesquisar

│

├── Cadastro

│

├── Grupos

│

├── Sobre

│

├── Termos

│

├── Privacidade

│

└── Contato
```

Área administrativa.

```
Login

↓

Dashboard

├── Colegas

├── Cursos

├── Eixos

├── DRPs

├── Cidades

├── Grupos

├── Estatísticas

├── Logs

└── Configurações
```

---

# Tela 01 - Home

## Objetivo

Permitir que qualquer visitante realize pesquisas imediatamente.

Sem necessidade de cadastro.

---

## Componentes

Logo.

Campo Cidade.

Campo Curso.

Campo Eixo.

Botão Pesquisar.

Botão Quero me cadastrar.

Botão Ver Grupos.

Rodapé.

---

## Wireframe

```
+----------------------------------+

ConectaDRP

Conectando colegas estudantes

----------------------------------

Cidade

[_______________]

Curso

[_______________]

Eixo

[_______________]

[ Pesquisar ]

-------------------------------

Ainda não faz parte?

[ Quero me cadastrar ]

-------------------------------

Já existe um grupo?

[ Ver grupos ]

-------------------------------

Sobre

Privacidade

Termos

Contato

+----------------------------------+
```

---

## Responsabilidades

Receber filtros.

Encaminhar pesquisa.

Permitir acesso ao cadastro.

Permitir acesso aos grupos.

---

# Tela 02 - Resultado da Pesquisa

## Objetivo

Apresentar os colegas encontrados.

---

## Componentes

Título.

Quantidade encontrada.

Lista de cartões.

Botão WhatsApp.

Botão Nova Pesquisa.

Mensagem quando vazio.

---

## Wireframe

```
Resultados encontrados

(5 colegas)

------------------------

André Fernandes

Engenharia Computação

Presidente Prudente

[ Conversar ]

------------------------

Carlos Henrique

Engenharia Computação

Presidente Prudente

[ Conversar ]

------------------------

Nova Pesquisa
```

---

## Informações exibidas

Nome.

Cidade.

Curso.

Telefone.

Botão WhatsApp.

Nunca exibir.

E-mail.

IP.

Dados internos.

Identificadores.

---

# Tela 03 - Cadastro

## Objetivo

Cadastrar novo colega.

---

## Campos

Nome.

Telefone.

Cidade.

Curso.

Aceite dos Termos.

Aceite para receber contatos.

Botão Salvar.

---

## Campos Automáticos

DRP.

Eixo.

WhatsApp.

Data.

Status.

---

## Wireframe

```
Cadastro

Nome

[____________]

Telefone

[____________]

Cidade

[____________]

Curso

[____________]

☑ Aceito os termos

☑ Desejo receber contatos

[ Salvar Cadastro ]
```

---

## Validações

Todos os campos obrigatórios.

Telefone válido.

Curso obrigatório.

Cidade obrigatória.

Nome mínimo.

Cinco caracteres.

---

# Tela 04 - Editar Cadastro

Objetivo.

Permitir atualização dos dados.

---

Campos.

Mesmos do cadastro.

---

Botões.

Salvar.

Cancelar.

Excluir Cadastro.

---

Exclusão.

Sempre lógica.

---

# Tela 05 - Lista de Grupos

Objetivo.

Exibir grupos existentes.

---

Filtros.

Cidade.

Curso.

Eixo.

DRP.

---

Cada cartão deverá apresentar.

Nome.

Cidade.

Curso.

Quantidade de membros.

Responsável.

Botão Entrar.

---

Wireframe.

```
Grupo PI Computação

Cidade

Presidente Prudente

Curso

Engenharia Computação

Membros

35

[ Entrar ]
```

---

# Tela 06 - Criar Grupo

Objetivo.

Permitir criação de grupo.

---

Campos.

Nome.

Descrição.

Cidade.

Curso.

Link do Grupo.

Quantidade Atual.

Capacidade Máxima.

Aceita novos membros.

---

Botão.

Salvar Grupo.

---

# Tela 07 - Sobre

Conteúdo institucional.

Objetivo do projeto.

Missão.

Visão.

Slogan.

Versão.

Equipe.

Contato.

---

# Tela 08 - Termos de Uso

Exibir documento completo.

Rolagem.

Botão.

Aceito.

---

# Tela 09 - Política de Privacidade

Informações.

Dados armazenados.

Finalidade.

Compartilhamento.

Contato.

LGPD.

---

# Tela 10 - Contato

Campos.

Nome.

Email.

Mensagem.

Botão Enviar.

---

# Tela 11 - Login Administrativo

Campos.

Email.

Senha.

Botão Entrar.

Esqueci minha senha.

---

Wireframe.

```
ConectaDRP

Administrador

Email

[____________]

Senha

[____________]

[ Entrar ]
```

---

# Tela 12 - Dashboard Administrativo

Indicadores.

Quantidade de colegas.

Quantidade de grupos.

Quantidade de cidades.

Quantidade de cursos.

Quantidade de pesquisas.

Quantidade de cadastros.

Gráfico de crescimento.

Últimos cadastros.

Últimos grupos.

Últimos acessos.

Menu lateral.

---

# Componentes Compartilhados

As seguintes telas utilizarão componentes reutilizáveis.

Navbar.

Footer.

Bottom Navigation.

Campo de Pesquisa.

Cards.

Botões.

Modais.

Toast.

Loading.

Empty State.

Dialog de Confirmação.

Badge.

Avatar.

Paginação.

---

# Navegação Mobile

Na versão para celulares deverá existir uma barra inferior fixa contendo.

```
Pesquisar

Cadastro

Grupos

Sobre
```

Cada botão deverá possuir.

Ícone.

Texto.

Área ampla para toque.

---

# Navegação Desktop

Na versão desktop utilizar menu superior responsivo.

```
Home

Pesquisar

Cadastro

Grupos

Sobre

Contato
```

Área administrativa.

Separada.

Nunca aparecer para usuários comuns.

---

# Diretrizes de UX

Nenhuma tela deverá possuir mais de uma ação principal.

Botões principais deverão utilizar largura máxima possível em dispositivos móveis.

Campos deverão possuir altura mínima de 48 pixels.

Mensagens de erro deverão aparecer abaixo do campo correspondente.

Mensagens de sucesso deverão utilizar notificações discretas.

Toda navegação deverá ocorrer sem recarregamento completo da página.

As telas deverão ser compatíveis com acessibilidade, navegação por teclado e leitores de tela.

Sempre que possível, o sistema deverá apresentar feedback visual durante carregamentos e operações assíncronas.


# Fluxo Funcional da Aplicação

## Objetivo

Este documento descreve o comportamento funcional completo do ConectaDRP.

Todos os fluxos apresentados deverão ser implementados exatamente conforme especificado.

O objetivo é garantir uma experiência simples, intuitiva e rápida para o estudante.

---

# Fluxo Principal do Usuário

```
Usuário acessa o sistema

↓

Tela Inicial

↓

Seleciona Cidade

↓

Seleciona Curso

↓

Pesquisar

↓

Sistema procura colegas

↓

Encontrou?

↓

SIM

↓

Exibe lista

↓

Usuário conversa pelo WhatsApp

↓

Formação do grupo

↓

Fim
```

---

Caso não encontre.

```
Pesquisar

↓

Nenhum colega encontrado

↓

Pesquisar mesmo eixo

↓

Encontrou?

↓

SIM

↓

Mostrar colegas

↓

Fim
```

---

Caso continue sem encontrar.

```
Mesmo DRP

↓

Mesmo curso

↓

Encontrou?

↓

SIM

↓

Mostrar colegas

↓

Fim
```

---

Última tentativa.

```
Mesmo DRP

↓

Mesmo eixo

↓

Encontrou?

↓

SIM

↓

Mostrar colegas

↓

Fim
```

---

Caso ainda não exista nenhum colega.

```
Nenhum resultado

↓

Exibir mensagem

↓

"Seja o primeiro colega desta região."

↓

Botão

Cadastrar-me
```

---

# Fluxo de Pesquisa

## Etapa 01

Receber.

Cidade.

Curso.

---

## Etapa 02

Descobrir automaticamente.

Eixo.

DRP.

---

## Etapa 03

Executar pesquisa.

```
Curso

+

Cidade
```

---

## Etapa 04

Sem resultados.

Executar.

```
Eixo

+

Cidade
```

---

## Etapa 05

Sem resultados.

Executar.

```
Curso

+

DRP
```

---

## Etapa 06

Sem resultados.

Executar.

```
Eixo

+

DRP
```

---

## Etapa 07

Persistindo ausência.

Exibir.

Mensagem amigável.

Convite para cadastro.

---

# Fluxo de Cadastro

```
Usuário

↓

Preenche Nome

↓

Telefone

↓

Cidade

↓

Curso

↓

Aceita Termos

↓

Salvar
```

---

Após salvar.

```
Gerar WhatsApp

↓

Obter DRP

↓

Obter Eixo

↓

Salvar Banco

↓

Mensagem

Cadastro realizado
```

---

# Fluxo de Atualização

```
Editar Cadastro

↓

Modificar informações

↓

Salvar

↓

Atualizar Banco

↓

Mensagem

Cadastro atualizado
```

---

# Fluxo para Conversar

```
Resultado

↓

Botão WhatsApp

↓

Abrir aplicativo

↓

Conversa iniciada
```

---

Nenhuma tela intermediária deverá existir.

---

# Fluxo dos Grupos

```
Entrar em Grupos

↓

Pesquisar

↓

Encontrou grupo

↓

Entrar
```

---

Caso não exista grupo.

```
Criar Grupo

↓

Preencher dados

↓

Salvar

↓

Grupo disponível
```

---

# Fluxo Administrativo

```
Administrador

↓

Login

↓

Dashboard

↓

Selecionar módulo

↓

Cadastrar

Editar

Excluir

Consultar

↓

Salvar

↓

Registrar Log
```

---

# Fluxo de Erros

Toda operação deverá tratar erros.

Nunca exibir mensagens técnicas ao usuário.

---

Exemplo.

```
Erro inesperado

↓

Registrar Log

↓

Mostrar mensagem amigável

↓

Permitir tentar novamente
```

---

# Estados da Interface

Cada tela deverá possuir.

Estado inicial.

---

Carregando.

```
Loading
```

---

Sucesso.

```
Dados carregados
```

---

Sem resultados.

```
Empty State
```

---

Erro.

```
Error State
```

---

Sem conexão.

```
Offline State
```

---

# Estados de Pesquisa

```
Iniciando

↓

Consultando Banco

↓

Processando

↓

Resultado

↓

Fim
```

---

# Estados do Cadastro

```
Digitando

↓

Validando

↓

Enviando

↓

Salvando

↓

Concluído
```

---

# Estados do Grupo

```
Disponível

↓

Lotado

↓

Fechado

↓

Inativo
```

---

# Comunicação entre Camadas

```
Tela

↓

Hook

↓

Service

↓

Repository

↓

Supabase

↓

PostgreSQL

↓

Resposta

↓

Tela
```

Nenhuma tela poderá acessar diretamente o banco.

---

# Comunicação com o Supabase

Fluxo.

```
Página

↓

Service

↓

Supabase Client

↓

Banco

↓

Resposta

↓

Service

↓

Tela
```

Toda resposta deverá ser tratada antes de chegar à interface.

---

# Tratamento de Erros

Todos os Services deverão retornar.

```
success

message

data

errors
```

Nunca lançar mensagens técnicas diretamente para o usuário.

---

# Feedback Visual

Toda operação superior a 300 ms deverá apresentar indicador de carregamento.

Toda operação concluída deverá apresentar confirmação visual.

Toda operação com falha deverá apresentar orientação clara para nova tentativa.

---

# Regras de Navegação

Não utilizar recarregamento completo da página.

Toda navegação deverá utilizar React Router.

Os dados da pesquisa deverão permanecer disponíveis durante a navegação, evitando consultas desnecessárias ao banco.

O botão "Voltar" deverá preservar os filtros informados anteriormente pelo usuário.

---

# Otimização de Consultas

Sempre limitar o número inicial de registros retornados.

Utilizar paginação ou carregamento incremental quando necessário.

Evitar consultas repetidas para os mesmos filtros durante uma mesma sessão.

Utilizar cache do TanStack Query para melhorar desempenho e reduzir chamadas ao Supabase.

---

# Experiência do Usuário

O sistema deverá sempre orientar o usuário sobre o próximo passo.

Caso não existam colegas ou grupos compatíveis, a interface deverá incentivar o cadastro ou a criação de um novo grupo.

Toda comunicação deverá utilizar linguagem simples, acolhedora e objetiva.

O objetivo principal do ConectaDRP é aproximar colegas que estudam à distância, reduzindo o isolamento acadêmico e facilitando a formação de grupos para Projetos Integradores e TCC.



# Arquitetura das Camadas da Aplicação

## Objetivo

Este documento define a responsabilidade de cada camada da aplicação ConectaDRP.

Nenhuma camada deverá executar responsabilidades pertencentes a outra camada.

Toda implementação deverá seguir rigorosamente esta arquitetura.

O objetivo é produzir um código organizado, reutilizável, escalável e de fácil manutenção.

---

# Visão Geral

```
Interface

↓

Pages

↓

Components

↓

Hooks

↓

Services

↓

Repositories

↓

Supabase

↓

PostgreSQL
```

Cada camada possui responsabilidade única.

---

# Camada Pages

## Objetivo

Representar as telas da aplicação.

Uma página deverá apenas organizar componentes e controlar o fluxo da interface.

Não deverá conter regras de negócio.

Não deverá acessar o banco.

Não deverá executar consultas SQL.

---

## Responsabilidades

Receber parâmetros da rota.

Renderizar componentes.

Consumir Hooks.

Exibir mensagens.

Controlar navegação.

---

## Não é responsabilidade

Validar dados complexos.

Consultar banco.

Executar regras de negócio.

Gerar relatórios.

---

## Exemplo

```
pages/

Pesquisar/

Cadastro/

Grupos/

Dashboard/
```

---

# Camada Components

## Objetivo

Criar componentes reutilizáveis.

Todo componente deverá funcionar independentemente da página onde estiver sendo utilizado.

---

## Exemplos

Botão.

Campo de texto.

Card de colega.

Card de grupo.

Modal.

Navbar.

Rodapé.

Toast.

Loading.

Avatar.

Badge.

---

## Regras

Componentes nunca consultarão banco.

Componentes nunca acessarão Supabase.

Componentes apenas recebem dados.

E retornam eventos.

---

# Camada Hooks

## Objetivo

Centralizar lógica reutilizável.

Toda lógica repetida deverá ser transformada em Hook.

---

## Exemplos

```
usePesquisa()

useColegas()

useCursos()

useCidade()

useGrupos()

useAuth()

useLoading()

useToast()

useInternet()

useDebounce()
```

---

## Responsabilidades

Consumir Services.

Gerenciar estados.

Controlar carregamentos.

Tratar erros.

Retornar dados prontos para a interface.

---

## Exemplo

```
Página

↓

Hook

↓

Service

↓

Banco
```

---

# Camada Services

## Objetivo

Implementar todas as regras de negócio.

Esta será uma das camadas mais importantes do projeto.

---

## Responsabilidades

Executar validações.

Aplicar regras.

Consultar Repository.

Converter dados.

Gerar mensagens.

Tratar erros.

Registrar Logs.

Executar pesquisas inteligentes.

---

## Exemplo

```
colegas.service.ts

grupos.service.ts

pesquisa.service.ts

dashboard.service.ts

estatisticas.service.ts
```

---

## Exemplo de Fluxo

```
Pesquisar

↓

Validar filtros

↓

Consultar Repository

↓

Executar algoritmo

↓

Ordenar resultados

↓

Retornar lista
```

---

# Camada Repository

## Objetivo

Acessar exclusivamente o banco de dados.

Nenhuma regra de negócio poderá existir nesta camada.

---

## Responsabilidades

SELECT

INSERT

UPDATE

DELETE

Chamadas Supabase

---

## Exemplo

```
listar()

buscarPorCidade()

buscarPorCurso()

salvar()

editar()

excluir()
```

---

## Não deverá fazer

Validação.

Ordenação inteligente.

Regras de pesquisa.

Tratamento visual.

---

# Camada Database

Representa o banco PostgreSQL.

Todas as tabelas documentadas anteriormente.

Views.

Triggers.

Policies.

Functions.

---

# Fluxo Completo

```
Usuário

↓

Tela

↓

Hook

↓

Service

↓

Repository

↓

Supabase

↓

Banco

↓

Repository

↓

Service

↓

Hook

↓

Tela
```

---

# Comunicação entre Camadas

Pages poderão acessar apenas.

Components.

Hooks.

---

Hooks poderão acessar apenas.

Services.

---

Services poderão acessar apenas.

Repositories.

---

Repositories poderão acessar apenas.

Supabase.

---

Supabase acessará apenas.

PostgreSQL.

---

É proibido pular camadas.

---

# Organização dos Services

Cada entidade possuirá um Service.

```
ColegasService

CursosService

GruposService

CidadeService

DrpService

DashboardService

EstatisticasService

AdminService

PesquisaService
```

---

# Organização dos Repositories

Cada tabela possuirá um Repository.

```
ColegasRepository

CursosRepository

GruposRepository

CidadeRepository

DrpRepository

LogsRepository
```

---

# Organização dos Hooks

```
useColegas

usePesquisa

useCursos

useCidade

useGrupos

useDashboard

useLogin

useFormulario

useConexao

useNotificacao
```

---

# Organização dos Componentes

## Componentes Básicos

Button

Input

Select

Checkbox

Switch

Radio

Textarea

Card

Badge

Avatar

Spinner

Toast

---

## Componentes Compostos

CardColega

CardGrupo

FormularioCadastro

FormularioGrupo

TabelaColegas

TabelaGrupos

FiltroPesquisa

ResultadoPesquisa

Navbar

BottomNavigation

Footer

---

# Dependências Permitidas

```
Pages

↓

Hooks

↓

Services

↓

Repositories

↓

Supabase
```

Nunca inverter.

Nunca criar dependência circular.

---

# Tratamento de Erros

Toda exceção deverá ser capturada na camada Service.

O Repository nunca exibirá mensagens ao usuário.

A Page nunca interpretará erros técnicos.

O Hook retornará apenas mensagens amigáveis.

---

# Padrão de Retorno dos Services

Todos os Services deverão retornar exatamente a seguinte estrutura.

```typescript
{
  success: boolean,
  message: string,
  data: any,
  errors: string[]
}
```

Esse padrão deverá ser utilizado em toda a aplicação.

---

# Boas Práticas

Uma função deverá possuir apenas uma responsabilidade.

Evitar funções com mais de 50 linhas sempre que possível.

Evitar duplicação de código.

Reutilizar componentes.

Centralizar validações.

Centralizar mensagens.

Centralizar constantes.

Utilizar tipagem forte em toda a aplicação.

Evitar uso de `any`, exceto quando estritamente necessário.

---

# Objetivo Final da Arquitetura

A arquitetura do ConectaDRP foi planejada para permitir que novos módulos possam ser adicionados sem alterar a estrutura existente.

Novos recursos, como notificações, integração com calendário, chat interno, eventos acadêmicos, inteligência artificial para recomendação de grupos ou integração com APIs da UNIVESP, deverão poder ser implementados reutilizando a mesma arquitetura, preservando organização, desempenho e facilidade de manutenção.



# Arquitetura do Supabase

## Objetivo

Este capítulo define toda a arquitetura de utilização do Supabase no projeto ConectaDRP.

Todas as funcionalidades relacionadas ao banco de dados, autenticação, armazenamento de arquivos, funções serverless, políticas de segurança e comunicação em tempo real deverão seguir rigorosamente esta especificação.

O objetivo é garantir uma infraestrutura segura, escalável, organizada e de fácil manutenção.

---

# Visão Geral da Arquitetura

```
React

↓

Services

↓

Repositories

↓

Supabase Client

↓

Supabase

├── PostgreSQL

├── Authentication

├── Storage

├── Edge Functions

├── Realtime

└── Row Level Security
```

Todo acesso ao banco deverá ocorrer exclusivamente através do cliente oficial do Supabase.

---

# Estrutura do Projeto Supabase

```
supabase/

├── client.ts

├── auth.ts

├── database.ts

├── storage.ts

├── realtime.ts

├── config.ts

│

├── migrations/

│

├── seeds/

│

├── functions/

│

├── policies/

│

├── triggers/

│

├── views/

│

└── backups/
```

---

# Configuração do Cliente

O projeto deverá possuir apenas uma instância do cliente Supabase.

Arquivo.

```
supabase/client.ts
```

Responsabilidades.

Criar conexão.

Exportar cliente.

Centralizar configuração.

Nenhuma outra parte da aplicação poderá criar novas conexões.

---

# Banco de Dados

O PostgreSQL será o banco oficial do projeto.

Todas as tabelas deverão seguir exatamente o Documento 04.

Características obrigatórias.

UUID.

Foreign Keys.

Índices.

Views.

Functions.

Triggers.

RLS.

Soft Delete.

---

# Migrations

Toda alteração estrutural deverá ocorrer através de migrations.

Nunca alterar tabelas manualmente em produção.

Estrutura.

```
migrations/

001_create_eixos.sql

002_create_cursos.sql

003_create_drps.sql

004_create_cidades.sql

005_create_colegas.sql

006_create_grupos.sql

007_create_administradores.sql

008_create_logs.sql
```

Cada migration deverá possuir descrição clara e ser executada em ordem numérica.

---

# Seeds

Os dados iniciais deverão ser separados das migrations.

Estrutura.

```
seeds/

eixos.sql

cursos.sql

drps.sql

cidades.sql

administrador.sql
```

Esses arquivos serão utilizados para popular o banco durante o desenvolvimento e implantação inicial.

---

# Autenticação

## Primeira Versão

Área pública.

Pesquisa de colegas.

Cadastro.

Consulta de grupos.

Não exigem autenticação.

---

Área administrativa.

Obrigatoriamente autenticada.

Utilizar Supabase Authentication.

Login por e-mail e senha.

---

# Perfis de Acesso

Administrador Geral.

Administrador Operacional.

Moderador.

As permissões deverão ser controladas tanto na aplicação quanto nas políticas RLS do banco.

---

# Row Level Security (RLS)

Todas as tabelas deverão possuir políticas específicas.

---

## Colegas

Leitura.

Permitir apenas registros.

Ativos.

Com autorização para receber contatos.

Não excluídos.

---

Inserção.

Permitida ao público.

---

Atualização.

Permitida apenas ao próprio usuário (quando implementado) ou administrador autorizado.

---

Exclusão.

Sempre lógica.

---

## Grupos

Leitura.

Permitida para todos.

Desde que.

Grupo ativo.

Aceitando novos membros.

---

Inserção.

Permitida para colegas cadastrados.

---

Atualização.

Permitida apenas ao responsável pelo grupo ou administrador.

---

## Administradores

Acesso exclusivo para administradores autenticados.

---

## Logs

Somente leitura para administradores autorizados.

Nenhuma alteração.

Nenhuma exclusão manual.

---

# Edge Functions

As Edge Functions deverão concentrar operações sensíveis.

Estrutura.

```
functions/

pesquisar-colegas/

criar-grupo/

editar-grupo/

estatisticas/

backup/

importacao/

exportacao/

enviar-notificacao/
```

Cada função deverá conter.

```
index.ts

README.md
```

---

# Responsabilidades das Edge Functions

Pesquisar colegas utilizando o algoritmo completo.

Gerar estatísticas.

Executar tarefas agendadas.

Importar dados.

Exportar dados.

Executar backups.

Registrar logs.

Enviar notificações futuras.

Evitar processamento pesado no frontend.

---

# Storage

O Storage será utilizado apenas para arquivos necessários ao sistema.

Estrutura.

```
logos/

icones/

imagens/

documentos/

backups/
```

Não armazenar arquivos desnecessários.

Controlar permissões de acesso por bucket.

---

# Realtime

O módulo Realtime será preparado para futuras funcionalidades.

Exemplos.

Atualização automática da quantidade de colegas cadastrados.

Atualização da lista de grupos.

Atualização do painel administrativo.

Notificações de novos grupos.

A primeira versão poderá utilizar apenas recursos básicos, mantendo a arquitetura preparada para expansão.

---

# Tratamento de Erros

Toda chamada ao Supabase deverá retornar um objeto padronizado.

```typescript
{
  success: boolean,
  message: string,
  data: any,
  errors: string[]
}
```

Nenhum erro interno do Supabase deverá ser exibido diretamente ao usuário.

Os detalhes técnicos deverão ser registrados na tabela de logs.

---

# Variáveis de Ambiente

Todas as informações sensíveis deverão ser armazenadas em variáveis de ambiente.

Exemplos.

```
VITE_SUPABASE_URL

VITE_SUPABASE_ANON_KEY

SUPABASE_SERVICE_ROLE_KEY
```

Nunca armazenar chaves diretamente no código-fonte.

---

# Estratégia de Backup

Backup automático diário do banco de dados.

Backup semanal dos arquivos armazenados no Storage.

Backup mensal completo da documentação técnica.

Todos os backups deverão possuir identificação por data e horário.

---

# Monitoramento

O sistema deverá registrar indicadores mínimos de funcionamento.

Quantidade de acessos.

Quantidade de pesquisas.

Quantidade de cadastros.

Quantidade de grupos criados.

Erros críticos.

Tempo médio das consultas.

Esses indicadores serão utilizados futuramente no Dashboard Administrativo.

---

# Escalabilidade

A infraestrutura deverá suportar crescimento gradual sem alterações estruturais.

Objetivos mínimos.

100.000 colegas cadastrados.

50.000 grupos.

10 milhões de registros de log.

Consultas rápidas utilizando índices e paginação.

---

# Diretrizes Gerais

Nunca acessar o banco diretamente pelas páginas da aplicação.

Toda comunicação deverá passar pelas camadas Repository e Service.

Utilizar sempre consultas parametrizadas.

Aplicar o princípio do menor privilégio nas políticas RLS.

Documentar toda alteração estrutural por meio de migrations.

Preparar a infraestrutura para futuras integrações, como notificações push, autenticação social, integração com APIs externas e novos módulos acadêmicos, mantendo compatibilidade com a arquitetura definida neste documento.


# Arquitetura do Frontend React

## Objetivo

Este capítulo define todos os padrões para desenvolvimento do frontend do ConectaDRP.

Toda a interface deverá seguir rigorosamente estas diretrizes.

O objetivo é produzir uma aplicação moderna, rápida, organizada, responsiva e de fácil manutenção.

---

# Stack Oficial

Frontend.

React 19.

---

Linguagem.

TypeScript.

---

Build.

Vite.

---

Roteamento.

React Router.

---

Gerenciamento de Estado.

Zustand.

---

Gerenciamento de Requisições.

TanStack Query.

---

Formulários.

React Hook Form.

---

Validações.

Zod.

---

Interface.

Bootstrap 5.

Bootstrap Icons.

---

PWA.

Vite PWA Plugin.

---

# Estrutura da Aplicação

```
App

↓

Router

↓

Layout

↓

Page

↓

Components

↓

Hooks

↓

Services

↓

Repositories
```

---

# Organização dos Layouts

A aplicação possuirá layouts independentes.

```
layouts/

MainLayout/

AdminLayout/

AuthLayout/

BlankLayout/
```

---

## MainLayout

Responsável pela área pública.

Contém.

Navbar.

Footer.

Bottom Navigation.

Área de Conteúdo.

---

## AdminLayout

Responsável pelo painel administrativo.

Contém.

Menu Lateral.

Header.

Área Principal.

Breadcrumb.

Rodapé.

---

## AuthLayout

Utilizado apenas para Login Administrativo.

---

## BlankLayout

Utilizado para páginas especiais.

404.

Offline.

Erro.

---

# React Router

Todas as rotas deverão ser centralizadas.

```
routes/

index.tsx

public.routes.tsx

admin.routes.tsx

auth.routes.tsx
```

---

# Rotas Públicas

```
/

Pesquisar

Cadastro

Grupos

Sobre

Contato

Privacidade

Termos
```

---

# Rotas Administrativas

```
Dashboard

Colegas

Cursos

Eixos

DRPs

Cidades

Grupos

Logs

Configurações
```

---

# Rotas Protegidas

Toda rota administrativa deverá utilizar.

```
ProtectedRoute
```

Fluxo.

```
Usuário

↓

Autenticado?

↓

SIM

↓

Permitir acesso

↓

NÃO

↓

Redirecionar Login
```

---

# Gerenciamento de Estado

O projeto utilizará.

Zustand.

---

Stores previstas.

```
auth.store.ts

pesquisa.store.ts

grupo.store.ts

dashboard.store.ts

config.store.ts
```

---

Responsabilidades.

Estado global.

Usuário autenticado.

Filtros.

Preferências.

Tema.

---

# TanStack Query

Toda consulta ao banco utilizará cache inteligente.

Fluxo.

```
Tela

↓

Hook

↓

Query

↓

Service

↓

Repository
```

---

Benefícios.

Cache automático.

Atualização inteligente.

Requisições paralelas.

Controle de Loading.

Retry automático.

---

# React Hook Form

Todos os formulários deverão utilizar.

React Hook Form.

---

Benefícios.

Alta performance.

Poucas renderizações.

Integração com Zod.

Código limpo.

---

# Validação com Zod

Cada formulário possuirá Schema próprio.

```
CadastroSchema

GrupoSchema

LoginSchema

PesquisaSchema

ContatoSchema
```

Toda validação deverá ocorrer antes do envio.

---

# Componentização

Toda interface deverá ser construída utilizando componentes reutilizáveis.

Nunca duplicar código.

---

Exemplo.

```
CardColega

CardGrupo

CampoTelefone

CampoCidade

BotaoSalvar

BotaoPesquisar

ModalConfirmacao

ToastSucesso

Loading

EmptyState
```

---

# Padrão dos Componentes

Cada componente possuirá.

```
index.tsx

styles.module.css

types.ts

hooks.ts

README.md
```

Opcionalmente.

```
test.tsx
```

---

# Comunicação entre Componentes

Preferencialmente via Props.

Quando necessário.

Context.

Nunca utilizar variáveis globais desnecessárias.

---

# CSS

Priorizar.

CSS Modules.

---

Arquivos.

```
styles.module.css
```

---

Evitar.

CSS Global.

Somente para.

Reset.

Variáveis.

Tipografia.

Cores.

---

# Responsividade

Mobile First.

Sempre.

---

Breakpoints.

```
xs

sm

md

lg

xl

xxl
```

---

Prioridade.

Celulares.

Tablets.

Desktop.

---

# Diretrizes Mobile

Botões grandes.

Campos grandes.

Poucos elementos por tela.

Rolagem natural.

Menu inferior.

Navegação simples.

---

# Diretrizes Desktop

Maior aproveitamento da largura.

Menu superior.

Dashboard em múltiplas colunas.

Tabelas maiores.

Filtros laterais quando necessário.

---

# Ícones

Utilizar.

Bootstrap Icons.

Evitar imagens para ícones.

---

# Tipografia

Fonte principal.

System UI.

Alternativa.

Roboto.

---

Tamanhos mínimos.

Texto.

16px.

Botões.

16px.

Campos.

16px.

Título.

28px.

---

# Paleta

Primária.

Azul.

---

Secundária.

Cinza.

---

Sucesso.

Verde.

---

Aviso.

Amarelo.

---

Erro.

Vermelho.

---

# Feedback Visual

Toda ação deverá apresentar retorno visual.

Exemplos.

Loading.

Toast.

Spinner.

Mensagem.

Modal.

---

# Empty State

Sempre que não existirem registros.

Exibir.

Ilustração.

Mensagem.

Botão principal.

---

Exemplo.

```
Ainda não encontramos colegas.

Que tal ser o primeiro cadastro desta região?

[ Quero me cadastrar ]
```

---

# Error State

Nunca mostrar erro técnico.

Exemplo.

```
Não foi possível concluir esta operação.

Tente novamente em alguns instantes.
```

---

# Loading

Sempre utilizar Skeleton ou Spinner.

Nunca deixar tela vazia.

---

# PWA

O frontend deverá ser totalmente compatível com instalação.

Características.

Manifest.

Service Worker.

Offline parcial.

Atualização automática.

Ícones.

Splash Screen.

---

# Acessibilidade

Utilizar HTML semântico.

Todos os campos deverão possuir Label.

Todos os botões deverão possuir descrição acessível.

Imagens deverão possuir atributo ALT.

Navegação por teclado deverá funcionar em toda aplicação.

Compatibilidade com leitores de tela.

Contraste adequado entre texto e fundo.

---

# Desempenho

Utilizar Lazy Loading nas páginas.

Carregar componentes sob demanda.

Minimizar re-renderizações.

Utilizar React.memo quando necessário.

Utilizar useMemo e useCallback apenas quando houver benefício comprovado.

Evitar consultas repetidas ao banco.

---

# Internacionalização

A arquitetura deverá permitir futura implementação de múltiplos idiomas.

Inicialmente.

Português Brasil.

Estrutura preparada para.

Inglês.

Espanhol.

---

# Objetivo Final

O frontend do ConectaDRP deverá proporcionar uma experiência rápida, intuitiva e agradável em qualquer dispositivo.

Toda a arquitetura foi planejada para privilegiar simplicidade de uso, facilidade de manutenção, alta performance e possibilidade de evolução futura sem necessidade de grandes refatorações.


# Segurança, LGPD, Performance e Boas Práticas

## Objetivo

Este capítulo estabelece todas as diretrizes de segurança, privacidade, desempenho, qualidade e governança do projeto ConectaDRP.

Todas as implementações deverão respeitar integralmente estas normas.

O objetivo é garantir uma aplicação confiável, segura, rápida e preparada para crescimento.

---

# Princípios Gerais

O ConectaDRP deverá seguir cinco princípios fundamentais.

Segurança.

Privacidade.

Desempenho.

Escalabilidade.

Facilidade de manutenção.

Toda decisão técnica deverá considerar esses princípios antes da implementação.

---

# Segurança da Aplicação

A segurança deverá estar presente em todas as camadas do sistema.

Frontend.

Backend.

Banco de dados.

Infraestrutura.

APIs.

---

# Proteção de Dados

Nenhum dado sensível deverá ser armazenado sem necessidade.

O sistema armazenará apenas as informações essenciais para permitir que os colegas se encontrem.

Dados públicos.

Nome.

Cidade.

Curso.

Telefone.

Grupo.

---

Dados internos.

ID.

Logs.

Datas.

Configurações.

Informações administrativas.

Esses dados nunca deverão ser exibidos aos usuários.

---

# LGPD

O sistema deverá seguir os princípios da Lei Geral de Proteção de Dados.

Coletar apenas os dados necessários.

Informar claramente a finalidade da coleta.

Permitir atualização do cadastro.

Permitir exclusão lógica do cadastro.

Permitir revogação da autorização para receber contatos.

Não compartilhar dados com terceiros.

---

# Consentimento

O cadastro somente poderá ser concluído após o aceite dos Termos de Uso e da Política de Privacidade.

Os seguintes registros deverão ser armazenados.

Data.

Hora.

Versão dos termos aceitos.

Endereço IP (quando disponível).

---

# Exclusão de Dados

O usuário poderá solicitar a exclusão do cadastro.

A exclusão será lógica.

Os registros necessários para auditoria poderão permanecer armazenados conforme legislação aplicável.

---

# Segurança das Consultas

Todas as consultas deverão utilizar parâmetros.

Nunca montar consultas SQL concatenando textos informados pelo usuário.

Evitar qualquer possibilidade de SQL Injection.

---

# Segurança das APIs

Toda Edge Function deverá validar.

Origem da requisição.

Formato dos dados.

Permissões.

Limites de uso.

---

# Rate Limit

Preparar a arquitetura para limitar.

Número de pesquisas por minuto.

Número de cadastros por IP.

Número de tentativas de login.

Número de chamadas administrativas.

---

# Autenticação

Área pública.

Sem autenticação.

---

Área administrativa.

Obrigatória.

Login.

Senha.

Sessão segura.

---

# Autorização

As permissões deverão ser verificadas em duas camadas.

Frontend.

Backend.

Nunca confiar apenas na interface.

---

# Auditoria

Todas as ações administrativas deverão gerar registros na tabela.

```
logs
```

Exemplos.

Login.

Logout.

Cadastro.

Alteração.

Exclusão.

Importação.

Exportação.

Mudança de permissões.

---

# Proteção contra Ataques

Preparar a aplicação para minimizar riscos de.

SQL Injection.

Cross Site Scripting (XSS).

Cross Site Request Forgery (CSRF).

Clickjacking.

Brute Force.

Enumeração de usuários.

Uploads maliciosos.

---

# Validação

Toda informação deverá ser validada.

Frontend.

Backend.

Banco.

Nunca confiar apenas na validação do navegador.

---

# Sanitização

Antes de gravar qualquer texto.

Remover caracteres inválidos.

Normalizar espaços.

Eliminar códigos potencialmente perigosos.

---

# Logs de Erro

Todo erro inesperado deverá registrar.

Data.

Hora.

Usuário.

Módulo.

Descrição.

Stack Trace (quando aplicável).

Esses detalhes nunca deverão ser exibidos ao usuário final.

---

# Performance

Toda tela deverá carregar rapidamente.

Objetivos.

Primeira renderização inferior a dois segundos em conexão estável.

Consultas simples inferiores a quinhentos milissegundos.

Consultas complexas inferiores a dois segundos.

---

# Otimização

Utilizar.

Índices.

Cache.

Paginação.

Lazy Loading.

Compressão.

Carregamento sob demanda.

---

# Cache

Utilizar TanStack Query para cache das consultas.

Evitar chamadas repetidas ao banco.

Invalidar cache apenas quando necessário.

---

# Paginação

Todas as listagens deverão prever paginação.

Mesmo que inicialmente exibam poucos registros.

Preparar arquitetura para crescimento.

---

# Lazy Loading

Carregar páginas somente quando acessadas.

Componentes pesados deverão ser importados dinamicamente.

---

# Monitoramento

Acompanhar indicadores como.

Tempo médio das consultas.

Tempo médio das páginas.

Quantidade de pesquisas.

Quantidade de cadastros.

Quantidade de grupos.

Quantidade de erros.

Disponibilidade do sistema.

---

# Qualidade do Código

Todo código deverá seguir padrões consistentes.

Utilizar TypeScript.

Evitar duplicação.

Funções pequenas.

Responsabilidade única.

Código legível.

Nomes significativos.

Comentários apenas quando agregarem valor.

---

# Testes

A arquitetura deverá suportar.

Testes unitários.

Testes de integração.

Testes end-to-end.

Testes de regressão.

Testes de acessibilidade.

---

# SEO

Mesmo sendo uma aplicação web, as páginas públicas deverão possuir.

Título.

Descrição.

Ícones.

Manifest.

Open Graph.

Favicon.

URLs amigáveis.

---

# Acessibilidade

Atender boas práticas de acessibilidade.

Utilizar HTML semântico.

Labels.

ARIA quando necessário.

Contraste adequado.

Navegação por teclado.

Compatibilidade com leitores de tela.

---

# Compatibilidade

O sistema deverá funcionar corretamente nos principais navegadores modernos.

Também deverá apresentar boa experiência em smartphones Android, iPhone, tablets e computadores.

---

# Evolução da Plataforma

A arquitetura deverá permitir futuras implementações como.

Notificações Push.

Aplicativo Android.

Aplicativo iOS.

Integração com Google Maps.

Geolocalização.

Eventos acadêmicos.

Agenda de reuniões.

Integração com Google Meet.

Integração com Microsoft Teams.

Integração com Discord.

Chat interno.

Sistema de mensagens.

Recomendação inteligente de colegas utilizando Inteligência Artificial.

Integração com calendário.

Exportação de relatórios.

Importação em lote.

Painel estatístico avançado.

---

# Critérios de Qualidade

A arquitetura será considerada aprovada quando.

Toda regra de negócio estiver documentada.

Todas as telas estiverem definidas.

Toda estrutura de banco estiver modelada.

A navegação estiver padronizada.

A aplicação for responsiva.

O código estiver organizado em camadas.

As consultas forem seguras.

Os dados estiverem protegidos.

O desempenho atender aos objetivos definidos.

A arquitetura permitir evolução sem necessidade de reestruturação completa.

---

# Considerações Finais

O Documento 05 estabelece oficialmente toda a arquitetura técnica do ConectaDRP.

Todos os desenvolvedores, ferramentas de Inteligência Artificial e futuras evoluções do projeto deverão seguir integralmente as diretrizes aqui definidas.

O conjunto formado pelos Documentos 01, 02, 03, 04 e 05 constitui a base oficial de especificação do sistema, servindo como referência para implementação, manutenção e expansão da plataforma.

---
