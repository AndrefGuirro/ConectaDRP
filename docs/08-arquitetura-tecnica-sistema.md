# DOCUMENTO 08
# Arquitetura Técnica do Sistema

Versão: 1.0

Projeto: ConectaDRP

---

# Objetivo

Este documento define toda a arquitetura técnica do sistema ConectaDRP.

Seu objetivo é servir como referência oficial para implementação do projeto, estabelecendo padrões de desenvolvimento, organização do código, comunicação entre camadas, segurança, escalabilidade, desempenho e manutenção.

Este documento deverá ser seguido integralmente durante todo o desenvolvimento do sistema.

---

# Objetivos da Arquitetura

A arquitetura deverá atender aos seguintes princípios.

- Simplicidade.
- Baixo acoplamento.
- Alta coesão.
- Escalabilidade.
- Facilidade de manutenção.
- Componentização.
- Reutilização de código.
- Responsividade.
- Performance.
- Segurança.
- Facilidade para novos colaboradores.

---

# Stack Tecnológica

## Front-end

React 19

---

Vite

---

JavaScript ES2024

---

Bootstrap 5.3

---

Bootstrap Icons

---

React Router DOM

---

Axios

---

React Hook Form

---

Zod

---

React Query (TanStack Query)

---

React Toastify

---

React Loading Skeleton

---

Chart.js

---

React ChartJS 2

---

## Back-end

Backend as a Service.

Supabase.

---

Serviços utilizados.

Authentication.

Database PostgreSQL.

Storage.

Edge Functions (quando necessário).

Realtime (uso futuro).

---

## Banco de Dados

PostgreSQL.

Hospedado no Supabase.

---

## Hospedagem

Frontend.

Vercel.

---

Alternativa.

Netlify.

---

Banco.

Supabase Cloud.

---

Domínio.

Cloudflare.

---

HTTPS obrigatório.

---

# Estrutura Geral da Aplicação

Arquitetura.

```
Cliente

↓

React

↓

Services

↓

Supabase

↓

PostgreSQL
```

---

Toda comunicação deverá ocorrer utilizando HTTPS.

---

Nenhuma consulta SQL será realizada diretamente pelo Front-end.

Toda comunicação deverá ocorrer através do SDK oficial do Supabase.

---

# Organização do Projeto

```
src/

    assets/

    components/

    layouts/

    pages/

    routes/

    services/

    hooks/

    contexts/

    providers/

    utils/

    validations/

    constants/

    types/

    styles/

    data/

    config/

    lib/

    store/

    helpers/
```

---

# Descrição das Pastas

## assets

Imagens.

Ícones.

Logotipos.

SVG.

Fontes.

---

## components

Componentes reutilizáveis.

Botões.

Cards.

Inputs.

Tabelas.

Paginação.

Navbar.

Sidebar.

Footer.

Modais.

Alertas.

Skeletons.

---

## layouts

Layouts principais.

Layout Público.

Layout Administrativo.

Layout de Erro.

---

## pages

Todas as páginas do sistema.

Cada página possuirá sua própria pasta.

Exemplo.

```
pages/

    Home/

    SearchColleagues/

    SearchGroups/

    Register/

    AdminDashboard/
```

---

## routes

Configuração completa do React Router.

Separação entre.

Rotas públicas.

Rotas administrativas.

Rotas protegidas.

Página 404.

---

## services

Camada responsável pela comunicação com o Supabase.

Nenhum componente React deverá acessar diretamente o banco.

Toda comunicação ocorrerá através desta camada.

---

Exemplo.

```
ColleagueService

GroupService

CityService

CourseService

AxisService

DRPService

DashboardService

AuditService

ConfigurationService

AuthenticationService
```

---

## hooks

Hooks personalizados.

Exemplo.

```
usePagination

useAuth

useValidation

useToast

useLoading

useDashboard

useModal

useFilters
```

---

## contexts

Context API.

Exemplo.

```
AuthContext

ThemeContext

ConfigurationContext
```

---

## providers

Inicialização dos Providers.

React Query.

Toast.

Theme.

Router.

---

## utils

Funções utilitárias.

Máscaras.

Datas.

Conversões.

Formatações.

Helpers matemáticos.

Validações simples.

---

## validations

Schemas utilizando Zod.

Separados por entidade.

Exemplo.

```
colleagueSchema

groupSchema

citySchema

courseSchema
```

---

## constants

Constantes do sistema.

Rotas.

Mensagens.

Configurações.

Limites.

Status.

---

## types

Tipos compartilhados.

Interfaces.

Enums.

Objetos comuns.

---

## styles

CSS global.

Variáveis.

Temas.

Bootstrap customizado.

---

## data

Arquivos estáticos utilizados pela aplicação.

---

## config

Configuração do Supabase.

Variáveis globais.

Ambiente.

---

## lib

Bibliotecas internas.

Wrappers.

Integrações.

---

## store

Estado global da aplicação.

Preferencialmente utilizando Context API.

Caso o crescimento do sistema justifique.

Migrar para Zustand.

---

## helpers

Funções auxiliares reutilizadas em todo o sistema.

---

# Convenções Gerais

Todo nome de componente utilizará PascalCase.

Exemplo.

```
SearchFilters.jsx
```

---

Toda função utilizará camelCase.

Exemplo.

```
loadGroups()
```

---

Todos os arquivos possuirão apenas uma responsabilidade principal.

---

Cada componente deverá possuir menos de 300 linhas sempre que possível.

---

Toda regra de negócio deverá permanecer na camada Service.

Nunca dentro dos componentes React.

---

Toda validação deverá permanecer em arquivos próprios.

Nunca misturada com renderização.

---

Todo acesso ao banco deverá passar obrigatoriamente pelos Services.

Jamais diretamente pelas páginas.

---

Nenhuma página deverá possuir lógica complexa.

Ela deverá apenas coordenar componentes e chamadas de serviços.


# Arquitetura React

## Princípios

Toda a aplicação deverá seguir a arquitetura baseada em componentes reutilizáveis.

Cada componente deverá possuir uma única responsabilidade.

A reutilização será priorizada em todo o projeto.

Componentes nunca deverão conter regras de negócio complexas.

---

# Separação em Camadas

A aplicação será dividida em camadas independentes.

```
Interface (Pages)

↓

Components

↓

Hooks

↓

Services

↓

Supabase

↓

PostgreSQL
```

---

## Pages

Responsáveis apenas por organizar a interface.

Não deverão possuir consultas ao banco.

Não deverão conter regras de negócio.

Não deverão conter validações complexas.

Sua função será apenas coordenar os componentes.

---

## Components

Responsáveis exclusivamente pela interface.

Cada componente deverá ser reutilizável.

Exemplos.

Botões.

Inputs.

Cards.

Paginação.

Navbar.

Sidebar.

Footer.

Modais.

Alertas.

Gráficos.

---

## Hooks

Responsáveis pela lógica reutilizável.

Nunca renderizar interface.

Nunca acessar diretamente elementos HTML.

Poderão consumir Services.

---

Exemplo.

```
useAuth()

↓

AuthenticationService
```

---

Outro exemplo.

```
usePagination()

↓

DataTable
```

---

## Services

Responsáveis pela comunicação com o banco.

Toda regra de negócio deverá estar nesta camada.

Nenhum componente poderá acessar diretamente o Supabase.

---

## Banco de Dados

Responsável apenas pelo armazenamento.

Nenhuma lógica da interface será implementada no banco.

---

# Fluxo Geral

```
Usuário

↓

Página

↓

Componentes

↓

Hook

↓

Service

↓

Supabase

↓

PostgreSQL
```

---

Resposta.

```
PostgreSQL

↓

Supabase

↓

Service

↓

Hook

↓

Componente

↓

Página

↓

Usuário
```

---

# React Router

Será utilizado.

React Router DOM.

---

Organização.

```
routes/

    publicRoutes.jsx

    adminRoutes.jsx

    privateRoutes.jsx

    index.jsx
```

---

# Rotas Públicas

```
/

/colegas

/grupos

/cadastro

/editar-cadastro

/grupos/novo

/grupos/editar

/termos

/privacidade
```

---

# Rotas Administrativas

```
/admin/login

/admin/dashboard

/admin/colegas

/admin/grupos

/admin/cursos

/admin/eixos

/admin/drps

/admin/cidades

/admin/logs

/admin/configuracoes
```

---

# Rotas Protegidas

Toda rota administrativa deverá passar pelo componente.

```
ProtectedRoute
```

---

Funcionamento.

```
Usuário

↓

Existe sessão?

↓

Sim

↓

Permissão válida?

↓

Sim

↓

Renderizar página

↓

Não

↓

Redirecionar Login
```

---

# Layouts

Serão utilizados layouts independentes.

---

## PublicLayout

Navbar.

Conteúdo.

Footer.

---

## AdminLayout

Sidebar.

Navbar Superior.

Conteúdo.

Footer Administrativo.

---

## ErrorLayout

Página simplificada.

Sem Sidebar.

Sem recursos administrativos.

---

# Context API

Será utilizada para compartilhamento de estados globais.

---

## AuthContext

Responsável por.

Usuário autenticado.

Sessão.

Logout.

Permissões.

Refresh Token.

---

## ConfigurationContext

Responsável pelas configurações globais.

---

## ThemeContext

Responsável pelo tema da aplicação.

Inicialmente.

Tema Claro.

Arquitetura preparada para Tema Escuro.

---

# React Query

Será utilizado para gerenciamento das consultas.

Benefícios.

Cache.

Revalidação automática.

Retry.

Loading.

Sincronização.

---

Configuração padrão.

```
retry

3
```

---

Tempo padrão de cache.

```
5 minutos
```

---

Refetch automático.

Ao recuperar conexão.

---

Refetch automático.

Ao retornar para a aba.

---

# Fluxo React Query

```
Página

↓

Hook

↓

React Query

↓

Service

↓

Supabase
```

---

# Tratamento de Loading

Nunca utilizar apenas texto.

Sempre utilizar.

Skeleton Loading.

Spinner.

Placeholder.

---

# Skeleton

Utilizar.

React Loading Skeleton.

---

Tempo superior a.

300 milissegundos.

---

# Toasts

Biblioteca.

React Toastify.

---

Tipos.

Sucesso.

Erro.

Aviso.

Informação.

---

Posição.

Superior direita.

---

Tempo padrão.

4 segundos.

---

# Modais

Bootstrap Modal.

Todos os modais deverão possuir.

Título.

Descrição.

Botão Confirmar.

Botão Cancelar.

Fechamento pelo ESC.

Fechamento pelo botão X.

---

# Tratamento Global de Erros

Todo erro deverá ser capturado.

Registrar auditoria.

Apresentar mensagem amigável.

Nunca exibir Stack Trace ao usuário.

---

# Error Boundary

Criar componente.

```
AppErrorBoundary
```

---

Responsável por.

Capturar erros inesperados.

Registrar logs.

Redirecionar para Página de Erro.

---

# Organização dos Componentes

Cada componente deverá possuir sua própria estrutura.

Exemplo.

```
SearchFilters/

    index.jsx

    styles.css

    constants.js

    helpers.js
```

---

Caso o componente seja pequeno.

```
SearchFilters.jsx
```

---

# Componentes Compartilhados

Exemplos.

Button.

Input.

Select.

Textarea.

Modal.

Card.

Badge.

Avatar.

Pagination.

Spinner.

Skeleton.

EmptyState.

Toast.

ConfirmDialog.

Navbar.

Sidebar.

Footer.

---

Todos deverão seguir exatamente o mesmo padrão visual definido pelo Bootstrap customizado da aplicação.


# Arquitetura da Camada de Services

## Objetivo

A camada de Services será responsável por centralizar toda a comunicação entre a aplicação React e o Supabase.

Nenhum componente React poderá realizar consultas diretamente ao banco de dados.

Toda operação deverá obrigatoriamente passar pelos Services.

---

# Responsabilidades

Os Services deverão ser responsáveis por.

Consultar dados.

Inserir registros.

Atualizar registros.

Realizar Soft Delete.

Executar validações de negócio.

Converter dados.

Padronizar mensagens de erro.

Registrar auditoria quando necessário.

---

# Estrutura dos Services

```
services/

    AuthService.js

    ColleagueService.js

    GroupService.js

    CourseService.js

    AxisService.js

    CityService.js

    DRPService.js

    DashboardService.js

    AuditService.js

    ConfigurationService.js
```

---

# Responsabilidade Individual

Cada Service deverá manipular apenas uma entidade principal.

Exemplo.

```
GroupService

↓

Somente grupos.
```

---

Nunca deverá manipular colegas.

---

Caso seja necessário acessar outra entidade.

Utilizar outro Service.

Nunca duplicar código.

---

# Fluxo de Comunicação

```
Page

↓

Hook

↓

Service

↓

Supabase Client

↓

PostgreSQL
```

---

Resposta.

```
PostgreSQL

↓

Supabase Client

↓

Service

↓

Hook

↓

Componente
```

---

# Repository Pattern

Mesmo utilizando Supabase diretamente, a arquitetura seguirá o conceito de Repository Pattern.

O restante da aplicação nunca conhecerá detalhes do banco de dados.

---

Exemplo.

```
GroupService.getAll()
```

Internamente.

```
Supabase

↓

Tabela grupos

↓

Retorno tratado

↓

Objeto padronizado
```

---

# Padronização das Respostas

Todos os Services deverão retornar objetos padronizados.

Modelo.

```
success

data

message

error
```

---

Exemplo.

Operação bem-sucedida.

```
success = true
```

---

Erro.

```
success = false
```

---

Nunca lançar mensagens técnicas diretamente para a interface.

---

# Tratamento de Exceções

Todos os Services deverão utilizar.

```
try

catch

finally
```

---

Toda exceção deverá ser convertida para mensagens compreensíveis.

---

Exemplo.

Erro PostgreSQL.

↓

Mensagem amigável.

```
Não foi possível concluir a operação.
```

---

Erro de conexão.

↓

Mensagem.

```
Servidor indisponível.
```

---

Erro de autenticação.

↓

Mensagem.

```
Sua sessão expirou.
```

---

# Organização das Consultas

Cada Service deverá possuir operações padronizadas.

---

Consultar lista.

---

Consultar por ID.

---

Inserir.

---

Atualizar.

---

Excluir logicamente.

---

Reativar.

---

Pesquisar.

---

Paginar.

---

Ordenar.

---

Validar.

---

# Soft Delete

Nenhuma entidade principal será removida fisicamente.

---

Ao excluir.

Atualizar.

```
ativo = false
```

---

Registrar.

```
deleted_at
```

---

Registrar auditoria.

---

# Hard Delete

Permitido apenas para tabelas temporárias.

Nunca para.

Colegas.

Grupos.

Cursos.

Cidades.

DRPs.

Eixos.

Administradores.

---

# Integração com Supabase

Será utilizado exclusivamente.

SDK Oficial.

---

Criar arquivo.

```
config/supabase.js
```

Responsável por inicializar o cliente.

---

Toda configuração ficará centralizada.

---

# Variáveis de Ambiente

Utilizar.

```
VITE_SUPABASE_URL
```

---

```
VITE_SUPABASE_ANON_KEY
```

---

Nunca armazenar chaves diretamente no código.

---

Arquivo.

```
.env
```

Não deverá ser enviado ao GitHub.

---

# Autenticação

Responsável.

Supabase Authentication.

---

Métodos.

Login.

Logout.

Refresh Session.

Reset Password.

---

Toda autenticação deverá utilizar JWT.

---

# Controle de Sessão

Ao iniciar a aplicação.

Verificar.

Sessão existente.

↓

Sessão válida.

↓

Atualizar Context.

↓

Renderizar sistema.

---

Caso inválida.

↓

Logout automático.

↓

Redirecionar Login.

---

# Controle de Permissões

Modelo.

RBAC.

Role Based Access Control.

---

Perfis previstos.

Administrador.

---

Visitante.

---

Colega.

---

Cada perfil possuirá permissões específicas.

---

# Row Level Security

Todas as tabelas deverão possuir RLS habilitado.

---

As Policies deverão impedir acesso indevido.

---

Exemplo.

Colegas.

Permitir leitura pública.

---

Permitir alteração apenas do próprio cadastro.

---

Administradores.

Acesso completo.

---

Logs.

Somente administradores.

---

Configurações.

Somente administradores.

---

# Cache

Responsável.

React Query.

---

Evitar consultas repetidas.

---

Atualizar automaticamente.

Sempre que necessário.

---

# Timeout

Tempo máximo.

30 segundos.

---

Após esse período.

Cancelar requisição.

---

# Retry

Tentativas automáticas.

3.

---

Apenas para erros temporários.

---

# Paginação

Sempre realizada no servidor.

Nunca carregar todos os registros.

---

Quantidade padrão.

20 registros.

---

Dashboard.

50 registros.

---

Logs.

50 registros.

---

# Ordenação

Sempre realizada pelo banco.

Nunca pelo navegador.

---

# Filtros

Sempre aplicados diretamente nas consultas do Supabase.

---

Nunca carregar dados desnecessários.

---

# Auditoria

Toda alteração deverá registrar.

Administrador.

Data.

Hora.

IP.

Operação.

Tabela.

Registro.

Valores anteriores.

Novos valores.

---

# Performance

Selecionar apenas colunas necessárias.

Evitar.

```
SELECT *
```

---

Utilizar índices nas colunas de pesquisa.

---

Priorizar consultas paginadas.

---

Evitar múltiplas consultas sequenciais quando uma consulta otimizada resolver o problema.

---

# Segurança

Nunca confiar em validações do Front-end.

Toda validação crítica deverá ocorrer também na camada de dados.

As permissões deverão ser garantidas pelas Policies do Supabase.

As mensagens de erro nunca deverão revelar detalhes internos da infraestrutura.

---

# Critérios de Aceitação

Nenhum componente React poderá acessar diretamente o Supabase.

Toda comunicação deverá passar obrigatoriamente pelos Services.

Todos os Services deverão retornar respostas padronizadas.

Toda operação deverá tratar exceções.

Todas as tabelas deverão utilizar Row Level Security.

Toda autenticação deverá utilizar Supabase Authentication.

Toda alteração deverá gerar auditoria.

A arquitetura deverá permitir evolução futura sem necessidade de grandes refatorações.


# Arquitetura do Banco de Dados PostgreSQL

## Objetivo

Definir a arquitetura oficial do banco de dados do ConectaDRP, estabelecendo padrões para modelagem, nomenclatura, integridade, desempenho, escalabilidade e manutenção.

O banco de dados será hospedado no Supabase utilizando PostgreSQL.

---

# Princípios

A modelagem deverá seguir os seguintes princípios.

Normalização.

Integridade referencial.

Baixo acoplamento.

Alta performance.

Facilidade de manutenção.

Escalabilidade.

Segurança.

Auditoria.

---

# Modelo de Dados

O modelo será predominantemente relacional.

Relacionamentos deverão utilizar chaves estrangeiras.

Toda integridade deverá ser garantida pelo banco.

---

# Convenções de Nomenclatura

## Tabelas

Sempre utilizar.

Letras minúsculas.

Plural.

Snake_case.

---

Exemplos.

```
colegas

grupos

cidades

cursos

drps

eixos

administradores

logs

configuracoes
```

---

## Colunas

Sempre utilizar.

Snake_case.

Minúsculas.

---

Exemplos.

```
nome

telefone

cidade_id

curso_id

created_at

updated_at

deleted_at

ativo
```

---

## Chaves Primárias

Sempre utilizar.

```
id
```

Tipo.

UUID.

---

Gerado automaticamente.

---

Nunca utilizar números sequenciais.

---

## Chaves Estrangeiras

Sempre terminar com.

```
_id
```

Exemplos.

```
cidade_id

curso_id

eixo_id

drp_id

administrador_id
```

---

# Tipos de Dados

## UUID

Identificadores.

---

## VARCHAR

Campos curtos.

---

## TEXT

Descrições.

---

## BOOLEAN

Status.

---

## TIMESTAMP WITH TIME ZONE

Datas.

---

## INTEGER

Contadores.

---

## SMALLINT

Valores pequenos.

---

# Datas Padrão

Toda tabela deverá possuir.

```
created_at
```

---

```
updated_at
```

---

Sempre que aplicável.

```
deleted_at
```

---

# Campo de Status

Toda entidade principal deverá possuir.

```
ativo
```

Tipo.

Boolean.

---

Valor padrão.

```
true
```

---

# Chaves Primárias

Todas as tabelas utilizarão.

UUID.

---

Benefícios.

Maior segurança.

Melhor sincronização.

Escalabilidade.

---

# Integridade Referencial

Todas as relações deverão possuir Foreign Keys.

---

Exemplo.

```
colegas

↓

cidade_id

↓

cidades.id
```

---

Outro exemplo.

```
colegas

↓

curso_id

↓

cursos.id
```

---

# Constraints

Sempre utilizar.

NOT NULL.

UNIQUE.

CHECK.

FOREIGN KEY.

---

# Exemplos

Telefone.

UNIQUE.

---

Nome do Curso.

UNIQUE.

---

Nome do Eixo.

UNIQUE.

---

Nome da DRP.

UNIQUE.

---

Cidade + Estado.

UNIQUE.

---

Quantidade máxima.

CHECK.

Maior que zero.

---

Participantes.

CHECK.

Nunca maior que capacidade.

---

# Índices

Criar índices para todas as colunas utilizadas em pesquisas.

---

Exemplos.

```
nome

telefone

cidade_id

curso_id

drp_id

eixo_id

ativo

created_at
```

---

Também criar índices compostos.

---

Exemplo.

```
cidade_id

+

curso_id
```

---

Outro.

```
curso_id

+

ativo
```

---

Outro.

```
cidade_id

+

ativo
```

---

# Relacionamentos

## Cidades

1

↓

N

Colegas.

---

## Cursos

1

↓

N

Colegas.

---

## DRPs

1

↓

N

Cidades.

---

## Eixos

1

↓

N

Cursos.

---

## Administradores

1

↓

N

Logs.

---

## Colegas

1

↓

N

Grupos.

Responsável.

---

# Exclusão

Nunca utilizar.

CASCADE DELETE.

---

Preferência.

RESTRICT.

---

Exclusão lógica.

Soft Delete.

---

# Versionamento

Toda alteração estrutural deverá utilizar.

Migration.

---

Nunca alterar tabelas manualmente em produção.

---

Todas as alterações deverão permanecer versionadas.

---

# Seeds

Criar arquivos específicos para popular.

Cursos.

---

Eixos.

---

DRPs.

---

Estados.

---

Cidades.

---

Administrador inicial.

---

Configurações iniciais.

---

# Auditoria

Toda alteração importante deverá gerar registro.

Tabela.

```
logs
```

---

Operações auditadas.

INSERT.

UPDATE.

SOFT DELETE.

LOGIN.

LOGOUT.

ALTERAÇÃO DE CONFIGURAÇÃO.

---

# Transações

Sempre utilizar transações quando envolver.

Mais de uma tabela.

---

Exemplos.

Cadastro de colega.

↓

Inserir colega.

↓

Inserir log.

---

Caso ocorra erro.

↓

Rollback.

---

# Performance

Evitar consultas desnecessárias.

---

Selecionar apenas colunas necessárias.

---

Utilizar paginação.

---

Utilizar índices.

---

Evitar consultas aninhadas complexas.

---

Priorizar JOINs otimizados.

---

# Escalabilidade

Preparar o banco para crescimento futuro.

---

Permitir milhões de registros.

---

Evitar bloqueios longos.

---

Preparar estrutura para cache.

---

Preparar estrutura para futuras integrações.

---

# Segurança

Nunca armazenar senhas.

Utilizar apenas Supabase Authentication.

---

Nunca armazenar tokens.

---

Nunca armazenar informações sensíveis sem necessidade.

---

Aplicar Row Level Security.

Em todas as tabelas.

---

# Backup

Utilizar backups automáticos do Supabase.

---

Manter política de retenção.

---

Possibilitar restauração.

---

# Monitoramento

Monitorar.

Tempo das consultas.

---

Uso de índices.

---

Quantidade de conexões.

---

Erros.

---

Uso de armazenamento.

---

# Padrões SQL

Utilizar nomes consistentes.

Evitar abreviações desnecessárias.

Documentar todas as tabelas.

Documentar todas as colunas.

Documentar todas as constraints.

---

# Critérios de Aceitação

Todas as tabelas deverão utilizar UUID.

Toda entidade principal deverá possuir os campos de auditoria.

Todas as relações deverão utilizar Foreign Keys.

Todas as consultas críticas deverão possuir índices.

Nenhuma exclusão física deverá ocorrer nas entidades principais.

Toda alteração estrutural deverá utilizar migrations.

O banco deverá estar preparado para crescimento contínuo sem perda de desempenho.

A arquitetura deverá seguir integralmente as boas práticas do PostgreSQL e do Supabase.


# Modelagem Física do Banco de Dados

## Tabela

```
colegas
```

### Objetivo

Armazenar os dados dos estudantes cadastrados na plataforma.

---

# Campos

## id

Tipo.

UUID.

---

Obrigatório.

Sim.

---

Chave Primária.

Sim.

---

Gerado automaticamente.

---

## nome

Tipo.

VARCHAR(150).

---

Obrigatório.

Sim.

---

Índice.

Sim.

---

## telefone

Tipo.

VARCHAR(20).

---

Obrigatório.

Sim.

---

Único.

Sim.

---

Índice.

Sim.

---

## cidade_id

Tipo.

UUID.

---

Obrigatório.

Sim.

---

Foreign Key.

```
cidades.id
```

---

Índice.

Sim.

---

## curso_id

Tipo.

UUID.

---

Obrigatório.

Sim.

---

Foreign Key.

```
cursos.id
```

---

Índice.

Sim.

---

## drp_id

Tipo.

UUID.

---

Obrigatório.

Sim.

---

Foreign Key.

```
drps.id
```

---

Índice.

Sim.

---

## eixo_id

Tipo.

UUID.

---

Obrigatório.

Sim.

---

Foreign Key.

```
eixos.id
```

---

Índice.

Sim.

---

## aceita_contato

Tipo.

BOOLEAN.

---

Valor padrão.

```
true
```

---

## ativo

Tipo.

BOOLEAN.

---

Valor padrão.

```
true
```

---

Índice.

Sim.

---

## created_at

Tipo.

TIMESTAMP WITH TIME ZONE.

---

Valor padrão.

NOW().

---

## updated_at

Tipo.

TIMESTAMP WITH TIME ZONE.

---

Atualizado automaticamente.

---

## deleted_at

Tipo.

TIMESTAMP WITH TIME ZONE.

---

Permitir NULL.

---

# Índices

Telefone.

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

---

Cidade + Curso.

---

Cidade + DRP.

---

Curso + Eixo.

---

# Relacionamentos

Cidade.

N:1.

---

Curso.

N:1.

---

DRP.

N:1.

---

Eixo.

N:1.

---

Logs.

1:N.

---

# Regras

Telefone único.

---

Soft Delete obrigatório.

---

Nunca excluir fisicamente.

---

# Tabela

```
grupos
```

## Objetivo

Armazenar os grupos cadastrados para Projetos Integradores e TCC.

---

# Campos

## id

UUID.

PK.

---

## nome

VARCHAR(100).

Obrigatório.

---

Índice.

Sim.

---

## descricao

TEXT.

Obrigatório.

---

## responsavel

VARCHAR(150).

Obrigatório.

---

## telefone

VARCHAR(20).

Obrigatório.

---

## cidade_id

UUID.

FK.

```
cidades.id
```

---

## curso_id

UUID.

FK.

```
cursos.id
```

---

## drp_id

UUID.

FK.

```
drps.id
```

---

## eixo_id

UUID.

FK.

```
eixos.id
```

---

## capacidade

INTEGER.

---

Valor mínimo.

2.

---

Valor máximo.

30.

---

Constraint.

CHECK.

---

## participantes

INTEGER.

---

Valor inicial.

1.

---

Constraint.

Nunca maior que capacidade.

---

## link_whatsapp

TEXT.

Obrigatório.

---

## aceita_participantes

BOOLEAN.

---

Valor padrão.

```
true
```

---

## ativo

BOOLEAN.

---

Valor padrão.

```
true
```

---

## created_at

TIMESTAMP WITH TIME ZONE.

---

## updated_at

TIMESTAMP WITH TIME ZONE.

---

## deleted_at

TIMESTAMP WITH TIME ZONE.

---

# Índices

Nome.

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

---

Cidade + Curso.

---

Curso + Ativo.

---

# Relacionamentos

Cidade.

N:1.

---

Curso.

N:1.

---

DRP.

N:1.

---

Eixo.

N:1.

---

# Regras

Nunca permitir.

Participantes > Capacidade.

---

Soft Delete obrigatório.

---

# Tabela

```
cidades
```

## Objetivo

Cadastro oficial das cidades utilizadas pela plataforma.

---

# Campos

## id

UUID.

PK.

---

## nome

VARCHAR(120).

---

## estado

CHAR(2).

---

## drp_id

UUID.

FK.

```
drps.id
```

---

## ativo

BOOLEAN.

---

## created_at

TIMESTAMP.

---

## updated_at

TIMESTAMP.

---

# Índices

Nome.

---

Estado.

---

DRP.

---

Nome + Estado.

UNIQUE.

---

# Relacionamentos

DRP.

N:1.

---

Colegas.

1:N.

---

Grupos.

1:N.

---

# Tabela

```
cursos
```

## Objetivo

Cadastro oficial dos cursos da UNIVESP.

---

# Campos

## id

UUID.

---

## nome

VARCHAR(120).

---

## eixo_id

UUID.

FK.

```
eixos.id
```

---

## ativo

BOOLEAN.

---

## created_at

TIMESTAMP.

---

## updated_at

TIMESTAMP.

---

# Índices

Nome.

UNIQUE.

---

Eixo.

---

# Relacionamentos

Eixo.

N:1.

---

Colegas.

1:N.

---

Grupos.

1:N.

---

# Tabela

```
eixos
```

## Objetivo

Cadastro oficial dos eixos educacionais.

---

# Campos

## id

UUID.

---

## nome

VARCHAR(120).

---

## descricao

TEXT.

---

## ativo

BOOLEAN.

---

## created_at

TIMESTAMP.

---

## updated_at

TIMESTAMP.

---

# Índices

Nome.

UNIQUE.

---

# Relacionamentos

Cursos.

1:N.

---

Colegas.

1:N.

---

Grupos.

1:N.

---

# Regras Gerais das Tabelas

Toda chave primária utilizará UUID.

---

Todas as tabelas possuirão.

```
created_at
```

---

```
updated_at
```

---

Sempre que aplicável.

```
deleted_at
```

---

Todas as entidades principais possuirão.

```
ativo
```

---

Nenhuma entidade principal permitirá exclusão física.

---

Todos os relacionamentos utilizarão Foreign Keys.

---

Todas as pesquisas utilizarão índices apropriados.

---

Todas as alterações deverão gerar registros na tabela de auditoria.

---

Todas as constraints deverão ser implementadas diretamente no PostgreSQL.

---

Todas as tabelas deverão possuir documentação descritiva através de comentários SQL (COMMENT ON TABLE e COMMENT ON COLUMN), facilitando a manutenção futura e a compreensão do modelo de dados.


# Continuação da Modelagem Física do Banco de Dados

# Tabela

```
drps
```

## Objetivo

Armazenar as Diretorias Regionais de Ensino (DRPs) utilizadas como referência para organização geográfica da plataforma.

---

# Campos

## id

Tipo.

UUID.

---

Obrigatório.

Sim.

---

Chave Primária.

Sim.

---

## nome

Tipo.

VARCHAR(150).

---

Obrigatório.

Sim.

---

Único.

Sim.

---

Índice.

Sim.

---

## descricao

Tipo.

TEXT.

---

Obrigatório.

Não.

---

## ativo

Tipo.

BOOLEAN.

---

Valor padrão.

```
true
```

---

Índice.

Sim.

---

## created_at

Tipo.

TIMESTAMP WITH TIME ZONE.

---

Valor padrão.

NOW().

---

## updated_at

Tipo.

TIMESTAMP WITH TIME ZONE.

---

Atualizado automaticamente.

---

## deleted_at

Tipo.

TIMESTAMP WITH TIME ZONE.

---

Permitir NULL.

---

# Relacionamentos

DRP.

1:N.

Cidades.

---

DRP.

1:N.

Colegas.

---

DRP.

1:N.

Grupos.

---

# Regras

Não permitir nomes duplicados.

Utilizar Soft Delete.

Não permitir exclusão física.

---

# Tabela

```
administradores
```

## Objetivo

Armazenar os usuários responsáveis pela administração do ConectaDRP.

---

# Campos

## id

UUID.

PK.

---

## auth_id

UUID.

---

Obrigatório.

Sim.

---

Relacionamento com.

Supabase Authentication.

---

## nome

VARCHAR(150).

---

Obrigatório.

Sim.

---

## email

VARCHAR(150).

---

Obrigatório.

Sim.

---

Único.

Sim.

---

Índice.

Sim.

---

## perfil

VARCHAR(30).

---

Valores previstos.

Administrador.

SuperAdministrador.

---

## ultimo_login

TIMESTAMP WITH TIME ZONE.

---

Permitir NULL.

---

## ativo

BOOLEAN.

---

Valor padrão.

```
true
```

---

## created_at

TIMESTAMP WITH TIME ZONE.

---

## updated_at

TIMESTAMP WITH TIME ZONE.

---

## deleted_at

TIMESTAMP WITH TIME ZONE.

---

# Índices

Email.

---

Perfil.

---

Status.

---

# Relacionamentos

Administrador.

1:N.

Logs.

---

# Regras

A autenticação será realizada exclusivamente pelo Supabase Authentication.

Nenhuma senha será armazenada nesta tabela.

---

# Tabela

```
logs
```

## Objetivo

Registrar todas as operações relevantes executadas no sistema para fins de auditoria, rastreabilidade e conformidade.

---

# Campos

## id

UUID.

PK.

---

## administrador_id

UUID.

FK.

```
administradores.id
```

---

## operacao

VARCHAR(80).

---

Exemplos.

LOGIN.

LOGOUT.

INSERT.

UPDATE.

SOFT_DELETE.

REATIVACAO.

EXPORTACAO.

CONFIGURACAO.

---

## tabela

VARCHAR(80).

---

## registro_id

UUID.

---

Permitir NULL.

---

## valores_anteriores

JSONB.

---

Permitir NULL.

---

## valores_novos

JSONB.

---

Permitir NULL.

---

## endereco_ip

VARCHAR(50).

---

## navegador

TEXT.

---

## sistema_operacional

VARCHAR(100).

---

## resultado

VARCHAR(30).

---

Valores.

SUCESSO.

ERRO.

---

## mensagem

TEXT.

---

Permitir NULL.

---

## created_at

TIMESTAMP WITH TIME ZONE.

---

Valor padrão.

NOW().

---

# Índices

Administrador.

---

Operação.

---

Tabela.

---

Data.

---

Resultado.

---

# Regras

Os registros nunca poderão ser alterados.

Não permitir UPDATE.

Não permitir DELETE.

Somente INSERT.

---

# Tabela

```
configuracoes
```

## Objetivo

Armazenar todos os parâmetros globais utilizados pela aplicação.

---

# Campos

## id

UUID.

PK.

---

## chave

VARCHAR(100).

---

Único.

Sim.

---

## valor

TEXT.

---

## descricao

TEXT.

---

## categoria

VARCHAR(80).

---

## publico

BOOLEAN.

---

Valor padrão.

```
false
```

---

## created_at

TIMESTAMP WITH TIME ZONE.

---

## updated_at

TIMESTAMP WITH TIME ZONE.

---

# Índices

Chave.

UNIQUE.

---

Categoria.

---

# Regras

Cada configuração deverá possuir uma chave única.

Alterações deverão gerar auditoria.

---

# Convenções para Chaves Estrangeiras

Todas as Foreign Keys deverão utilizar.

```
ON UPDATE RESTRICT
```

---

Preferencialmente utilizar.

```
ON DELETE RESTRICT
```

---

Nunca utilizar.

```
ON DELETE CASCADE
```

nas entidades principais.

---

# Convenções para Índices

Todo campo utilizado em pesquisas deverá possuir índice.

Campos utilizados em JOINs deverão possuir índice.

Campos utilizados em ORDER BY deverão possuir índice sempre que houver ganho de desempenho.

Campos utilizados em filtros compostos deverão possuir índices compostos.

---

# Convenções para Comentários SQL

Todas as tabelas deverão utilizar.

```
COMMENT ON TABLE
```

---

Todas as colunas deverão utilizar.

```
COMMENT ON COLUMN
```

---

Objetivo.

Documentar completamente o banco de dados diretamente no PostgreSQL.

---

# Convenções para Migrations

Cada alteração estrutural deverá possuir uma migration exclusiva.

Cada migration deverá possuir descrição clara.

As migrations deverão ser executadas na ordem cronológica de criação.

Nunca editar migrations já aplicadas em ambientes de produção.

Novas alterações deverão gerar novas migrations.

---

# Organização das Migrations

```
supabase/

    migrations/

        0001_initial_schema.sql

        0002_seed_data.sql

        0003_indexes.sql

        0004_rls_policies.sql

        0005_views.sql

        0006_functions.sql

        0007_triggers.sql

        0008_storage.sql

        0009_performance.sql

        0010_version_1_1.sql
```

---

# Versionamento

Todo incremento estrutural deverá gerar uma nova versão do banco.

As versões deverão permanecer compatíveis sempre que possível.

Toda alteração deverá ser documentada.

As notas de versão deverão acompanhar cada migration.

---

# Critérios de Aceitação

Todas as tabelas deverão estar documentadas.

Todas as colunas deverão possuir comentários descritivos.

Todas as relações deverão utilizar Foreign Keys.

Todos os índices deverão ser revisados antes da implantação.

Todas as migrations deverão ser reproduzíveis em qualquer ambiente.

A estrutura do banco deverá permitir evolução contínua sem perda de compatibilidade.


# Modelo Entidade-Relacionamento (MER)

## Objetivo

Definir a estrutura lógica dos relacionamentos entre todas as entidades do ConectaDRP, servindo como referência para implementação, manutenção e evolução do banco de dados.

---

# Visão Geral

```
DRPs
   │
   ├──────────────┐
   │              │
   ▼              │
Cidades           │
   │              │
   ├──────┐       │
   │      │       │
   ▼      ▼       │
Colegas  Grupos   │
   ▲      ▲       │
   │      │       │
Cursos────┘       │
   ▲              │
   │              │
Eixos─────────────┘

Administradores
        │
        ▼
      Logs

Configurações
```

---

# Relacionamentos

## DRPs

Relacionamento.

```
1:N
```

Com.

Cidades.

---

Relacionamento.

```
1:N
```

Com.

Colegas.

---

Relacionamento.

```
1:N
```

Com.

Grupos.

---

# Cidades

Relacionamento.

```
1:N
```

Com.

Colegas.

---

Relacionamento.

```
1:N
```

Com.

Grupos.

---

# Eixos

Relacionamento.

```
1:N
```

Com.

Cursos.

---

Relacionamento.

```
1:N
```

Com.

Colegas.

---

Relacionamento.

```
1:N
```

Com.

Grupos.

---

# Cursos

Relacionamento.

```
1:N
```

Com.

Colegas.

---

Relacionamento.

```
1:N
```

Com.

Grupos.

---

# Administradores

Relacionamento.

```
1:N
```

Com.

Logs.

---

# Cardinalidade

DRP.

↓

Possui várias cidades.

---

Cidade.

↓

Possui vários colegas.

---

Cidade.

↓

Possui vários grupos.

---

Curso.

↓

Possui vários colegas.

---

Curso.

↓

Possui vários grupos.

---

Administrador.

↓

Possui diversos registros de auditoria.

---

# Views

## Objetivo

Criar Views para simplificar consultas frequentes e reduzir duplicação de código na aplicação.

---

# View

```
vw_colegas_publicos
```

Objetivo.

Retornar apenas colegas ativos disponíveis para pesquisa pública.

---

Campos.

Nome.

Cidade.

Curso.

DRP.

Eixo.

Telefone.

Aceita contato.

---

# View

```
vw_grupos_publicos
```

Objetivo.

Listar apenas grupos ativos que aceitam novos participantes.

---

Campos.

Nome.

Cidade.

Curso.

Responsável.

Telefone.

Quantidade de participantes.

Capacidade.

Vagas disponíveis.

Link WhatsApp.

---

# View

```
vw_dashboard_admin
```

Objetivo.

Centralizar indicadores utilizados no Dashboard Administrativo.

---

Indicadores.

Quantidade de colegas.

Quantidade de grupos.

Cursos.

Cidades.

DRPs.

Eixos.

Administradores.

Cadastros recentes.

---

# View

```
vw_logs_resumidos
```

Objetivo.

Facilitar consultas administrativas de auditoria.

---

# Stored Procedures

## Objetivo

Centralizar operações complexas que envolvam múltiplas tabelas.

---

# Procedure

```
sp_cadastrar_colega
```

Responsável por.

Validar dados.

Inserir colega.

Registrar auditoria.

Retornar resultado.

---

# Procedure

```
sp_cadastrar_grupo
```

Responsável por.

Validar grupo.

Inserir grupo.

Registrar log.

---

# Procedure

```
sp_desativar_cadastro
```

Responsável por.

Executar Soft Delete.

Atualizar datas.

Registrar auditoria.

---

# Procedure

```
sp_reativar_cadastro
```

Responsável por.

Reativar registros.

Registrar auditoria.

---

# Functions

## Objetivo

Disponibilizar funções reutilizáveis pelo banco de dados.

---

# Function

```
fn_calcular_vagas_disponiveis
```

Entrada.

Grupo.

---

Saída.

Capacidade.

-

Participantes.

---

# Function

```
fn_nome_completo_cidade
```

Retorno.

Cidade.

Estado.

---

# Function

```
fn_qtd_colegas_por_curso
```

Retorno.

Quantidade.

---

# Function

```
fn_qtd_grupos_por_cidade
```

Retorno.

Quantidade.

---

# Function

```
fn_status_grupo
```

Retornar.

Aberto.

Fechado.

Encerrado.

---

# Triggers

## Objetivo

Automatizar operações repetitivas.

---

# Trigger

Atualização automática.

```
updated_at
```

Sempre que ocorrer UPDATE.

---

# Trigger

Registrar auditoria.

Após INSERT.

---

Após UPDATE.

---

Após SOFT DELETE.

---

Após reativação.

---

# Trigger

Validar capacidade do grupo.

Impedir.

Participantes.

>

Capacidade.

---

# Trigger

Atualizar contador.

Participantes.

---

Sempre que houver alteração.

---

# Trigger

Impedir alteração dos Logs.

Bloquear UPDATE.

---

Bloquear DELETE.

---

# Políticas de Row Level Security (RLS)

## Objetivo

Garantir que cada usuário visualize apenas as informações permitidas.

---

# Tabela

```
colegas
```

Leitura pública.

Apenas registros ativos.

---

Atualização.

Permitida somente ao próprio usuário autenticado.

---

Inserção.

Permitida através das regras da aplicação.

---

# Tabela

```
grupos
```

Leitura pública.

Somente grupos ativos.

---

Atualização.

Somente responsável autorizado ou administrador.

---

# Tabela

```
administradores
```

Leitura.

Somente administradores autenticados.

---

Alteração.

Somente SuperAdministrador.

---

# Tabela

```
logs
```

Consulta.

Somente administradores.

---

Inserção.

Automática.

---

Alteração.

Proibida.

---

# Tabela

```
configuracoes
```

Leitura.

Administradores.

---

Alteração.

Somente SuperAdministrador.

---

# Estratégia de Performance

Todas as consultas públicas deverão utilizar paginação.

Todas as consultas administrativas deverão possuir filtros indexados.

As Views deverão ser utilizadas sempre que reduzirem a complexidade das consultas.

As consultas deverão retornar apenas os campos necessários.

Evitar processamento excessivo na aplicação quando a operação puder ser realizada diretamente pelo PostgreSQL.

---

# Monitoramento

Acompanhar continuamente.

Tempo médio das consultas.

Uso de CPU.

Uso de memória.

Quantidade de conexões.

Consultas lentas.

Índices não utilizados.

Crescimento do banco.

---

# Plano de Evolução

A arquitetura deverá permitir inclusão futura de novas entidades sem necessidade de alteração das estruturas existentes.

Novos módulos deverão seguir os mesmos padrões de nomenclatura, auditoria, segurança e versionamento definidos neste documento.

Toda evolução estrutural deverá ser realizada por meio de migrations versionadas.

---

# Critérios de Aceitação

Todas as Views deverão estar documentadas.

Todas as Functions deverão possuir descrição funcional.

Todas as Procedures deverão registrar auditoria quando modificarem dados.

Todos os Triggers deverão possuir finalidade claramente documentada.

Todas as tabelas deverão possuir políticas de Row Level Security.

A arquitetura deverá manter compatibilidade com futuras versões do sistema sem necessidade de reestruturação significativa.


# Arquitetura de Segurança

## Objetivo

Definir os padrões de segurança adotados pelo ConectaDRP para proteger os dados dos usuários, garantir a integridade da plataforma, assegurar a disponibilidade dos serviços e atender às boas práticas de desenvolvimento seguro.

---

# Princípios

Toda implementação deverá seguir os princípios.

Confidencialidade.

Integridade.

Disponibilidade.

Autenticidade.

Rastreabilidade.

Menor privilégio.

Defesa em profundidade.

Segurança por padrão.

---

# Autenticação

A autenticação será realizada exclusivamente através do.

```
Supabase Authentication
```

---

Métodos suportados.

E-mail e senha.

---

Recuperação de senha.

---

Renovação automática de sessão.

---

Logout.

---

Não será permitido implementar autenticação própria utilizando tabelas personalizadas para armazenamento de senhas.

---

# Armazenamento de Senhas

Nenhuma senha será armazenada pelo sistema.

Toda responsabilidade será do Supabase Authentication.

---

As senhas deverão ser protegidas utilizando algoritmos modernos disponibilizados pela plataforma.

---

# Autorização

Modelo adotado.

RBAC.

Role Based Access Control.

---

Perfis previstos.

Visitante.

---

Colega.

---

Administrador.

---

SuperAdministrador.

---

Cada perfil possuirá permissões específicas definidas pelas Policies do Supabase.

---

# Gerenciamento de Sessão

Após autenticação.

Criar sessão segura.

---

Renovar automaticamente quando permitido.

---

Encerrar sessão ao realizar logout.

---

Encerrar automaticamente quando expirada.

---

Encerrar automaticamente após revogação das permissões.

---

# Tempo de Sessão

Tempo padrão.

Definido nas configurações do Supabase.

---

A aplicação deverá detectar sessões expiradas automaticamente.

---

# Tokens

Utilizar.

JWT.

---

Os tokens nunca deverão ser armazenados em LocalStorage quando houver alternativa mais segura fornecida pelo Supabase.

---

Nunca registrar tokens em logs.

---

Nunca enviar tokens por parâmetros de URL.

---

# Comunicação

Toda comunicação deverá utilizar.

HTTPS.

---

Não permitir conexões HTTP em ambiente de produção.

---

Utilizar certificados válidos.

---

# Variáveis Sensíveis

Todas as chaves deverão permanecer em variáveis de ambiente.

---

Exemplos.

```
VITE_SUPABASE_URL
```

---

```
VITE_SUPABASE_ANON_KEY
```

---

Nunca publicar arquivos.

```
.env
```

---

Adicionar ao.

```
.gitignore
```

---

# Proteção Contra Ataques

## SQL Injection

Mitigação.

Utilizar SDK oficial do Supabase.

Nunca construir consultas SQL manualmente no Front-end.

---

## Cross Site Scripting (XSS)

Escapar conteúdos renderizados.

Nunca utilizar HTML recebido de usuários sem sanitização.

Evitar uso de.

```
dangerouslySetInnerHTML
```

---

## Cross Site Request Forgery (CSRF)

Utilizar mecanismos de proteção fornecidos pela plataforma.

Validar sessões autenticadas.

---

## Brute Force

Limitar tentativas consecutivas de autenticação.

Registrar tentativas inválidas.

Permitir bloqueio temporário quando configurado.

---

## Enumeração de Usuários

Nunca informar se o e-mail existe ou não.

Sempre retornar mensagens genéricas.

---

Exemplo.

```
E-mail ou senha inválidos.
```

---

## Clickjacking

Utilizar cabeçalhos de proteção.

---

## Content Security Policy

Definir política restritiva para carregamento de scripts, imagens e recursos externos.

---

## Upload de Arquivos

Validar extensão.

Validar tamanho.

Validar tipo MIME.

Gerar nomes únicos.

Armazenar utilizando Supabase Storage.

---

# Row Level Security

Todas as tabelas deverão possuir.

RLS habilitado.

---

Toda permissão deverá ser definida por Policies.

---

A aplicação nunca deverá confiar apenas na interface para controle de acesso.

---

# Auditoria

Registrar.

Login.

Logout.

Alterações.

Exportações.

Configurações.

Tentativas de acesso não autorizado.

Falhas críticas.

---

Os registros deverão permanecer imutáveis.

---

# LGPD

Coletar apenas os dados necessários para funcionamento da plataforma.

---

Solicitar consentimento quando aplicável.

---

Permitir atualização dos dados pessoais.

---

Permitir desativação do cadastro.

---

Disponibilizar.

Política de Privacidade.

---

Disponibilizar.

Termos de Uso.

---

Registrar aceite quando necessário.

---

# Backup

Utilizar backups automáticos do Supabase.

---

Definir política de retenção.

---

Realizar testes periódicos de restauração.

---

Documentar procedimentos de recuperação.

---

# Recuperação de Desastres

Manter plano documentado para recuperação da aplicação.

---

Priorizar restauração do banco de dados.

---

Validar integridade após recuperação.

---

Registrar ocorrências.

---

# Monitoramento

Monitorar continuamente.

Tentativas de login.

Erros.

Consultas lentas.

Uso de recursos.

Disponibilidade.

Falhas de autenticação.

Eventos de segurança.

---

# Logs

Os logs deverão conter.

Data.

Hora.

Usuário.

Operação.

Resultado.

Endereço IP.

Navegador.

Sistema Operacional.

---

Nunca registrar.

Senhas.

Tokens.

Dados sensíveis.

---

# Dependências

Todas as bibliotecas utilizadas deverão ser mantidas atualizadas.

---

Realizar verificações periódicas de vulnerabilidades.

---

Substituir dependências descontinuadas.

---

# Atualizações

Aplicar correções de segurança sempre que disponíveis.

---

Manter documentação atualizada.

---

Revisar políticas de segurança periodicamente.

---

# Boas Práticas para Desenvolvedores

Nunca deixar credenciais fixas no código.

Nunca utilizar informações reais em ambientes de desenvolvimento.

Revisar código antes de cada implantação.

Utilizar branches para desenvolvimento.

Realizar Code Review sempre que possível.

Documentar alterações relacionadas à segurança.

---

# Critérios de Aceitação

Toda autenticação deverá utilizar Supabase Authentication.

Todas as tabelas deverão possuir Row Level Security.

Nenhuma senha deverá ser armazenada pela aplicação.

Toda comunicação deverá utilizar HTTPS.

Todos os eventos críticos deverão ser auditados.

As políticas deverão atender aos princípios da LGPD.

A arquitetura deverá seguir as recomendações da OWASP para aplicações web modernas.

A segurança deverá ser considerada em todas as fases do ciclo de vida do desenvolvimento.


# Arquitetura de Infraestrutura, DevOps e Implantação

## Objetivo

Definir toda a infraestrutura necessária para desenvolvimento, homologação, implantação, monitoramento e manutenção contínua do ConectaDRP.

A arquitetura deverá permitir evolução do projeto de forma organizada, segura e escalável.

---

# Ambientes

O projeto possuirá ambientes independentes.

---

## Ambiente de Desenvolvimento

Objetivo.

Desenvolvimento das funcionalidades.

---

Características.

Utilização de banco de dados próprio.

Dados fictícios.

Logs completos.

Ferramentas de depuração habilitadas.

Hot Reload.

---

Responsável.

Equipe de desenvolvimento.

---

## Ambiente de Homologação

Objetivo.

Validação das funcionalidades antes da publicação.

---

Características.

Configuração semelhante ao ambiente de produção.

Banco independente.

Dados anonimizados quando necessário.

Execução de testes integrados.

---

Responsável.

Equipe técnica e usuários responsáveis pela validação.

---

## Ambiente de Produção

Objetivo.

Disponibilização oficial da plataforma aos usuários finais.

---

Características.

Alta disponibilidade.

HTTPS obrigatório.

Logs monitorados.

Backups automáticos.

Monitoramento contínuo.

---

# Controle de Código-Fonte

Todo o projeto será armazenado no GitHub.

---

Estratégia de versionamento.

Git.

---

Repositório.

Privado durante o desenvolvimento.

---

Possibilidade de tornar público após estabilização do projeto.

---

# Estratégia de Branches

Será adotado o modelo simplificado baseado em Git Flow.

---

## Branch

```
main
```

Responsável pela versão estável.

---

## Branch

```
develop
```

Integração das novas funcionalidades.

---

## Branch

```
feature/*
```

Desenvolvimento de novas funcionalidades.

---

Exemplo.

```
feature/cadastro-colegas
```

---

## Branch

```
bugfix/*
```

Correções.

---

## Branch

```
hotfix/*
```

Correções emergenciais em produção.

---

# Commits

Os commits deverão seguir padrão padronizado.

---

Exemplos.

```
feat:
```

Nova funcionalidade.

---

```
fix:
```

Correção.

---

```
refactor:
```

Refatoração.

---

```
docs:
```

Documentação.

---

```
style:
```

Alterações visuais.

---

```
test:
```

Testes.

---

```
chore:
```

Manutenção.

---

# Pull Requests

Toda alteração deverá ocorrer através de Pull Request sempre que houver mais de um desenvolvedor.

---

O Pull Request deverá conter.

Descrição.

Objetivo.

Impacto.

Testes realizados.

Checklist.

---

# Integração Contínua (CI)

A cada envio para o repositório deverão ser executadas verificações automáticas.

---

Executar.

Instalação das dependências.

---

Lint.

---

Build.

---

Testes automatizados.

---

Validação do projeto.

---

# Entrega Contínua (CD)

Após aprovação.

Realizar deploy automático.

---

Ambiente de homologação.

---

Posteriormente.

Produção.

---

# Plataforma de Hospedagem

Frontend.

Vercel.

---

Banco.

Supabase.

---

Storage.

Supabase Storage.

---

Domínio.

Cloudflare.

---

DNS.

Cloudflare.

---

HTTPS.

Obrigatório.

---

# Variáveis de Ambiente

Cada ambiente possuirá seu próprio conjunto de variáveis.

---

Desenvolvimento.

```
.env.local
```

---

Homologação.

```
.env.staging
```

---

Produção.

```
.env.production
```

---

Nunca compartilhar credenciais entre ambientes.

---

# Build

Ferramenta.

Vite.

---

Modo.

Production.

---

Gerar arquivos otimizados.

---

Minificação.

Habilitada.

---

Tree Shaking.

Habilitado.

---

Compressão.

Automática.

---

# Deploy

Fluxo.

```
Desenvolvedor

↓

Git Commit

↓

GitHub

↓

CI

↓

Build

↓

Deploy

↓

Homologação

↓

Validação

↓

Produção
```

---

# Rollback

Sempre que uma implantação apresentar falhas.

Permitir retorno imediato à versão anterior.

---

Registrar motivo do rollback.

---

Documentar incidente.

---

# Logs

Centralizar registros da aplicação.

---

Registrar.

Erros.

Advertências.

Eventos importantes.

---

Separar logs por ambiente.

---

# Observabilidade

Monitorar continuamente.

Disponibilidade.

Tempo de resposta.

Uso de CPU.

Uso de memória.

Erros HTTP.

Falhas de autenticação.

Consultas lentas.

---

# Monitoramento

Indicadores mínimos.

Tempo médio de carregamento.

Tempo médio das consultas.

Disponibilidade.

Quantidade de usuários ativos.

Quantidade de erros.

Uso do banco de dados.

Uso do armazenamento.

---

# Escalabilidade

A arquitetura deverá permitir.

Inclusão de novos módulos.

Ampliação do banco.

Novos administradores.

Novos serviços.

Integrações futuras.

---

# Disponibilidade

Priorizar serviços com alta disponibilidade.

Minimizar indisponibilidades durante atualizações.

---

# Backups

Banco de dados.

Automáticos.

---

Storage.

Conforme política do Supabase.

---

Documentação.

Obrigatória.

---

# Recuperação

Realizar testes periódicos de restauração.

Registrar resultados.

---

# Versionamento da Aplicação

Utilizar padrão.

```
MAJOR.MINOR.PATCH
```

---

Exemplos.

```
1.0.0
```

Primeira versão.

---

```
1.1.0
```

Nova funcionalidade.

---

```
1.1.1
```

Correção.

---

# Release Notes

Cada versão deverá possuir.

Número da versão.

Data.

Resumo das alterações.

Correções.

Melhorias.

Impactos.

---

# Documentação

Toda alteração estrutural deverá atualizar.

Documentação técnica.

---

Documentação funcional.

---

Documentação da API.

---

Documentação do banco.

---

# Critérios de Aceitação

Todos os ambientes deverão permanecer isolados.

O deploy deverá ocorrer de forma automatizada sempre que possível.

Os builds deverão ser reproduzíveis.

Todas as versões deverão ser identificáveis.

Toda implantação deverá possuir possibilidade de rollback.

A infraestrutura deverá permitir crescimento contínuo do projeto.

Todo o fluxo deverá estar documentado para facilitar futuras manutenções e evolução da plataforma.


# Arquitetura de Qualidade de Software e Testes

## Objetivo

Definir os padrões de qualidade, validação, testes e homologação que deverão ser adotados durante todo o ciclo de desenvolvimento do ConectaDRP.

A qualidade deverá ser tratada como parte integrante do processo de desenvolvimento e não apenas como uma etapa final antes da implantação.

---

# Objetivos da Qualidade

Garantir estabilidade.

Reduzir defeitos.

Facilitar manutenção.

Evitar regressões.

Padronizar o desenvolvimento.

Melhorar a experiência do usuário.

Aumentar a confiabilidade da aplicação.

---

# Estratégia de Testes

O projeto deverá utilizar diferentes níveis de testes.

---

## Testes Unitários

Objetivo.

Validar pequenas unidades isoladas do sistema.

---

Escopo.

Funções.

Helpers.

Utils.

Hooks.

Services.

Validações.

---

Ferramentas recomendadas.

Vitest.

---

Testing Library.

---

# Testes de Integração

Objetivo.

Validar a comunicação entre componentes.

---

Exemplos.

Página.

↓

Hook.

↓

Service.

↓

Supabase.

---

Validação dos fluxos principais.

---

# Testes End-to-End

Objetivo.

Simular o comportamento real do usuário.

---

Ferramenta recomendada.

Playwright.

---

Fluxos prioritários.

Cadastro de colega.

Pesquisa de colegas.

Cadastro de grupo.

Pesquisa de grupos.

Login administrativo.

Dashboard.

Exportações.

Configurações.

---

# Testes Manuais

Antes de cada publicação deverá ser realizada validação manual.

---

Itens mínimos.

Navegação.

Responsividade.

Formulários.

Mensagens.

Permissões.

Performance.

Acessibilidade.

---

# Cobertura de Testes

Objetivo mínimo.

80%.

---

Prioridade.

Services.

Hooks.

Validações.

Funções utilitárias.

---

# Padrões de Código

Todo código deverá seguir convenções padronizadas.

---

Utilizar.

ESLint.

---

Utilizar.

Prettier.

---

Não permitir código com erros de lint em produção.

---

# Organização dos Testes

Estrutura sugerida.

```
src/

    components/

    hooks/

    services/

    utils/

tests/

    unit/

    integration/

    e2e/
```

---

# Nomeação

Arquivos de teste.

```
NomeComponente.test.jsx
```

---

Ou.

```
NomeService.test.js
```

---

# Qualidade do Código

Evitar duplicação.

---

Componentes reutilizáveis.

---

Funções pequenas.

---

Responsabilidade única.

---

Baixo acoplamento.

---

Alta coesão.

---

# Complexidade

Evitar funções extensas.

---

Sempre que possível.

Funções com responsabilidade única.

---

Componentes preferencialmente inferiores a.

300 linhas.

---

Services preferencialmente inferiores a.

500 linhas.

---

# Revisão de Código

Toda funcionalidade deverá passar por revisão.

---

Itens avaliados.

Legibilidade.

Segurança.

Performance.

Padronização.

Documentação.

Testes.

---

# Documentação de Código

Funções complexas deverão possuir comentários explicativos.

---

Helpers reutilizáveis deverão ser documentados.

---

Services deverão possuir descrição de responsabilidade.

---

Evitar comentários desnecessários.

O código deverá ser autoexplicativo sempre que possível.

---

# Tratamento de Erros

Todo erro deverá possuir tratamento adequado.

---

Nunca ignorar exceções.

---

Nunca utilizar blocos.

```
catch
```

vazios.

---

Registrar eventos relevantes.

---

Apresentar mensagens amigáveis.

---

# Qualidade da Interface

Todos os componentes deverão ser responsivos.

---

Compatibilidade mínima.

Desktop.

Notebook.

Tablet.

Smartphone.

---

Navegadores suportados.

Google Chrome.

Microsoft Edge.

Mozilla Firefox.

Safari.

---

# Acessibilidade

Seguir boas práticas de acessibilidade.

---

Utilizar elementos HTML semânticos.

---

Associar labels aos campos.

---

Permitir navegação por teclado.

---

Contraste adequado.

---

Mensagens compreensíveis.

---

# Performance

Objetivos.

Primeira renderização rápida.

Baixo consumo de memória.

Consultas eficientes.

Componentes otimizados.

---

Evitar renderizações desnecessárias.

---

Utilizar Lazy Loading quando aplicável.

---

Utilizar paginação.

---

Utilizar cache.

---

# Checklist de Homologação

Antes de liberar qualquer versão deverá ser verificado.

---

Todos os testes aprovados.

---

Build executado com sucesso.

---

Lint sem erros.

---

Sem erros críticos no console.

---

Sem erros de acessibilidade conhecidos.

---

Responsividade validada.

---

Permissões funcionando.

---

Autenticação funcionando.

---

Consultas funcionando.

---

Exportações funcionando.

---

Backups disponíveis.

---

Documentação atualizada.

---

Versão atualizada.

---

Release Notes atualizadas.

---

# Critérios para Aprovação de Release

Nenhum erro crítico.

---

Nenhum problema de segurança conhecido.

---

Cobertura mínima atingida.

---

Documentação atualizada.

---

Banco compatível.

---

Deploy validado em homologação.

---

Rollback testado.

---

Aprovação dos responsáveis.

---

# Indicadores de Qualidade

Acompanhar continuamente.

Cobertura de testes.

Quantidade de bugs.

Tempo médio para correção.

Tempo médio entre falhas.

Tempo médio de implantação.

Quantidade de regressões.

Performance das consultas.

Disponibilidade da aplicação.

---

# Melhoria Contínua

Realizar revisões periódicas da arquitetura.

Atualizar dependências.

Refatorar módulos quando necessário.

Eliminar débitos técnicos.

Documentar decisões arquiteturais relevantes.

Promover padronização entre todos os módulos do sistema.

---

# Critérios de Aceitação

Todos os módulos deverão seguir os padrões definidos neste documento.

Os testes deverão fazer parte do processo de desenvolvimento.

Nenhuma versão deverá ser publicada sem validação em ambiente de homologação.

A documentação deverá permanecer sincronizada com a evolução do sistema.

A qualidade deverá ser monitorada continuamente por meio de indicadores objetivos.

A arquitetura deverá favorecer manutenção, evolução e estabilidade do ConectaDRP ao longo de todo o seu ciclo de vida.


# Governança da Arquitetura

## Objetivo

Estabelecer diretrizes para garantir que a arquitetura do ConectaDRP permaneça consistente durante toda a evolução do projeto, independentemente da quantidade de desenvolvedores envolvidos.

Todas as decisões arquitetônicas deverão seguir os princípios definidos neste documento.

---

# Responsabilidades

## Arquiteto do Sistema

Responsável por.

Definir padrões arquitetônicos.

Aprovar alterações estruturais.

Avaliar impactos técnicos.

Validar novas tecnologias.

Garantir a consistência da arquitetura.

---

## Desenvolvedores

Responsáveis por.

Seguir os padrões estabelecidos.

Documentar alterações.

Criar testes.

Atualizar documentação.

Respeitar convenções do projeto.

---

## Revisores

Responsáveis por.

Revisar Pull Requests.

Verificar qualidade.

Avaliar impactos.

Garantir aderência aos padrões.

---

# Registro de Decisões Arquiteturais (ADR)

Todas as decisões importantes deverão ser documentadas.

---

Estrutura sugerida.

```
docs/

    adr/

        ADR-001.md

        ADR-002.md

        ADR-003.md
```

---

Cada ADR deverá conter.

Número.

Título.

Data.

Contexto.

Problema.

Alternativas avaliadas.

Decisão tomada.

Justificativa.

Consequências.

---

# Padrões de Documentação

Toda documentação deverá utilizar Markdown.

---

Organização sugerida.

```
docs/

    arquitetura/

    banco/

    api/

    frontend/

    backend/

    deploy/

    testes/

    adr/
```

---

Toda alteração estrutural deverá atualizar a documentação correspondente.

---

# Convenções Gerais

Utilizar linguagem técnica clara.

Evitar ambiguidades.

Padronizar nomenclaturas.

Utilizar exemplos quando necessário.

Documentar decisões relevantes.

---

# Convenções de Código

Utilizar nomes descritivos.

Evitar abreviações desnecessárias.

Eliminar código morto.

Remover comentários obsoletos.

Manter organização consistente entre os módulos.

---

# Gerenciamento de Dependências

Adicionar novas dependências somente quando houver justificativa técnica.

Avaliar impacto em desempenho.

Avaliar impacto em segurança.

Documentar motivo da inclusão.

Remover dependências não utilizadas.

---

# Atualização Tecnológica

Realizar revisões periódicas.

Atualizar bibliotecas suportadas.

Atualizar frameworks.

Atualizar ferramentas de desenvolvimento.

Atualizar documentação sempre que houver mudanças.

---

# Gestão de Débito Técnico

Todo débito técnico identificado deverá ser registrado.

Classificar prioridade.

Baixa.

Média.

Alta.

Crítica.

---

Sempre que possível.

Planejar correção nas próximas versões.

---

# Evolução da Arquitetura

A arquitetura deverá permanecer preparada para.

Novos módulos.

Novas integrações.

Novos perfis de usuários.

Novos relatórios.

Novas APIs.

Aplicativos móveis.

Internacionalização.

Novos recursos de inteligência artificial.

---

# Compatibilidade

Sempre que possível.

Manter compatibilidade entre versões.

Evitar mudanças que provoquem quebra de funcionalidades existentes.

Documentar alterações incompatíveis.

---

# Roadmap Técnico

## Curto Prazo

Conclusão da versão 1.0.

Implantação em produção.

Validação com usuários.

Correções iniciais.

---

## Médio Prazo

Implementação de notificações.

Melhorias de desempenho.

Dashboards avançados.

Relatórios analíticos.

Integrações externas.

---

## Longo Prazo

Aplicativo móvel.

API pública.

Integração com sistemas acadêmicos.

Recursos de Inteligência Artificial.

Mecanismos avançados de recomendação de grupos.

Análises estatísticas.

---

# Boas Práticas de Manutenção

Realizar revisões periódicas do código.

Eliminar código duplicado.

Refatorar módulos complexos.

Atualizar documentação continuamente.

Executar testes após alterações relevantes.

Revisar políticas de segurança periodicamente.

---

# Critérios para Evolução

Toda nova funcionalidade deverá.

Respeitar a arquitetura existente.

Possuir documentação.

Possuir testes.

Seguir padrões visuais.

Seguir padrões de nomenclatura.

Seguir políticas de segurança.

Registrar auditoria quando aplicável.

---

# Conclusão

Este documento estabelece a arquitetura técnica oficial do ConectaDRP.

Todas as implementações futuras deverão respeitar integralmente os padrões aqui definidos.

Quaisquer alterações arquitetônicas deverão ser previamente avaliadas, documentadas e aprovadas, garantindo a evolução sustentável da plataforma sem comprometer desempenho, segurança, escalabilidade, manutenibilidade e qualidade do software.

A adoção destas diretrizes permitirá que o projeto permaneça organizado, consistente e preparado para crescimento contínuo, facilitando tanto o desenvolvimento atual quanto futuras expansões do sistema.

---

# Referências Técnicas

Arquitetura baseada em componentes.

React.

Vite.

Bootstrap.

Supabase.

PostgreSQL.

JavaScript ES2024.

React Router.

React Query.

Zod.

React Hook Form.

OWASP Top 10.

LGPD.

Git.

GitHub.

Vercel.

Cloudflare.

---

# Histórico de Revisões

| Versão | Data | Descrição |
|---------|------|-----------|
| 1.0 | Primeira versão | Criação do Documento 08 |

---

# Encerramento do Documento

O Documento 08 constitui a referência oficial da arquitetura técnica do ConectaDRP.

Sua finalidade é orientar o desenvolvimento, manutenção e evolução da plataforma, servindo como base para todas as decisões técnicas relacionadas à infraestrutura, banco de dados, segurança, qualidade de software, DevOps e governança arquitetural.

Qualquer novo módulo desenvolvido para o ConectaDRP deverá seguir integralmente as diretrizes estabelecidas neste documento, garantindo uniformidade, escalabilidade e sustentabilidade técnica do projeto ao longo de seu ciclo de vida.