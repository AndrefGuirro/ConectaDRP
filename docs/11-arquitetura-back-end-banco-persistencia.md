# DOCUMENTO 11
# Arquitetura Back-end, Banco de Dados e Persistência

Versão: 1.0

Projeto: ConectaDRP

---

# Objetivo

Este documento define a arquitetura oficial do Back-end e da camada de persistência do ConectaDRP.

Seu objetivo é estabelecer padrões para modelagem do banco de dados, organização da estrutura de persistência, segurança, desempenho, integridade dos dados e evolução da plataforma.

Todas as implementações deverão seguir integralmente as diretrizes descritas neste documento.

---

# Objetivos da Arquitetura

Garantir integridade dos dados.

Garantir alta disponibilidade.

Facilitar manutenção.

Permitir evolução da plataforma.

Reduzir redundâncias.

Melhorar desempenho das consultas.

Garantir segurança das informações.

Padronizar acesso aos dados.

---

# Tecnologias

Banco de Dados.

PostgreSQL.

---

Plataforma.

Supabase.

---

Autenticação.

Supabase Authentication.

---

Storage.

Supabase Storage.

---

Edge Functions.

Supabase Edge Functions.

---

Migrações.

Supabase Migrations.

---

Linguagem SQL.

PostgreSQL SQL.

---

# Arquitetura Geral

```
Frontend React

↓

API

↓

Supabase

↓

PostgreSQL

↓

Storage

↓

Edge Functions
```

---

# Organização da Persistência

O banco deverá ser dividido em módulos funcionais.

---

Módulos previstos.

Autenticação.

Colegas.

Grupos.

Cursos.

Cidades.

DRPs.

Eixos.

Administradores.

Logs.

Configurações.

Relatórios.

---

# Princípios da Modelagem

Toda modelagem deverá seguir.

Normalização.

Integridade referencial.

Baixo acoplamento.

Alta coesão.

Escalabilidade.

Consistência.

Segurança.

---

# Convenções

Todas as tabelas utilizarão.

Nomes em minúsculo.

Separação por underscore.

---

Exemplo.

```
grupo_estudo
```

---

Campos.

Minúsculo.

Snake_case.

---

Exemplo.

```
data_criacao

ultima_atualizacao

aceita_contato
```

---

# Chaves Primárias

Todas as tabelas utilizarão.

UUID.

---

Exemplo.

```
id UUID PRIMARY KEY
```

---

Não utilizar identificadores sequenciais como chave principal.

---

# Datas

Todas as tabelas deverão possuir.

```
created_at
```

---

```
updated_at
```

---

Sempre utilizar.

Timestamp with Time Zone.

---

# Exclusão

Priorizar Soft Delete.

---

Campo.

```
deleted_at
```

---

Registros excluídos logicamente deverão permanecer disponíveis para auditoria.

---

# Auditoria

Todas as tabelas críticas deverão possuir.

Usuário responsável pela criação.

Usuário responsável pela atualização.

Data de criação.

Data da atualização.

---

Campos recomendados.

```
created_by

updated_by
```

---

# Integridade Referencial

Todas as relações deverão utilizar Foreign Keys.

---

Não permitir referências inválidas.

---

Definir comportamento para.

Update.

Delete.

---

# Índices

Criar índices para.

Campos frequentemente pesquisados.

Chaves estrangeiras.

Filtros.

Ordenações.

---

Evitar índices desnecessários.

---

# Constraints

Utilizar.

Primary Key.

Foreign Key.

Unique.

Check.

Not Null.

---

Toda regra possível deverá ser implementada no banco de dados.

---

# Padronização dos Campos

Campos booleanos.

```
true

false
```

---

Campos obrigatórios.

```
NOT NULL
```

---

Campos opcionais.

Permitir.

NULL.

---

# Relacionamentos

Tipos previstos.

Um para Um.

---

Um para Muitos.

---

Muitos para Muitos.

---

Sempre documentar cada relacionamento.

---

# Organização das Tabelas

Sugestão.

```
public

    colegas

    grupos

    cursos

    cidades

    drps

    eixos

    administradores

    logs

    configuracoes
```

---

# Convenções para Tabelas de Relacionamento

Utilizar nomes compostos.

---

Exemplo.

```
grupo_colega
```

---

Nunca utilizar abreviações.

---

# Campos de Status

Sempre utilizar valores padronizados.

---

Exemplos.

Ativo.

Inativo.

Arquivado.

Encerrado.

---

Evitar códigos numéricos sem significado explícito.

---

# Armazenamento de Arquivos

Arquivos deverão ser armazenados no Supabase Storage.

---

O banco armazenará apenas.

Identificador.

Nome.

URL.

Metadados.

---

Nunca armazenar arquivos binários diretamente nas tabelas.

---

# Consistência

Todas as operações críticas deverão utilizar transações quando necessário.

---

Nenhuma atualização parcial deverá comprometer a integridade dos dados.

---

# Critérios de Aceitação

Toda modelagem deverá utilizar UUID como chave primária.

Todas as tabelas deverão possuir campos de auditoria quando aplicável.

Todos os relacionamentos deverão utilizar integridade referencial.

As regras de negócio deverão ser implementadas preferencialmente por constraints e validações do banco.

Toda estrutura deverá permanecer preparada para evolução futura.

A arquitetura deverá garantir desempenho, segurança e facilidade de manutenção.


# Modelagem Física do Banco de Dados

## Objetivo

Definir a estrutura física de todas as entidades persistidas no banco de dados do ConectaDRP.

Cada tabela deverá possuir finalidade claramente definida, integridade referencial, padronização de nomenclatura e suporte para evolução futura.

---

# Tabela

## colegas

### Objetivo

Armazenar os dados dos estudantes cadastrados na plataforma.

---

Campos.

```
id
```

Tipo.

UUID.

Obrigatório.

Sim.

Descrição.

Identificador único do colega.

---

```
nome
```

Tipo.

VARCHAR(150).

Obrigatório.

Sim.

---

```
telefone
```

Tipo.

VARCHAR(20).

Obrigatório.

Não.

---

```
email
```

Tipo.

VARCHAR(150).

Obrigatório.

Não.

---

```
cidade_id
```

Tipo.

UUID.

Obrigatório.

Sim.

Relacionamento.

cidades.

---

```
curso_id
```

Tipo.

UUID.

Obrigatório.

Sim.

Relacionamento.

cursos.

---

```
drp_id
```

Tipo.

UUID.

Obrigatório.

Sim.

Relacionamento.

drps.

---

```
eixo_id
```

Tipo.

UUID.

Obrigatório.

Sim.

Relacionamento.

eixos.

---

```
aceita_contato
```

Tipo.

BOOLEAN.

Valor padrão.

TRUE.

---

```
status
```

Tipo.

VARCHAR(30).

Valor padrão.

ATIVO.

---

```
created_at
```

Timestamp with Time Zone.

---

```
updated_at
```

Timestamp with Time Zone.

---

```
deleted_at
```

Timestamp with Time Zone.

---

```
created_by
```

UUID.

---

```
updated_by
```

UUID.

---

# Índices

Nome.

Telefone.

Cidade.

Curso.

DRP.

Eixo.

Status.

---

# Relacionamentos

Muitos colegas pertencem a uma cidade.

Muitos colegas pertencem a um curso.

Muitos colegas pertencem a um DRP.

Muitos colegas pertencem a um eixo.

---

# Tabela

## grupos

### Objetivo

Armazenar informações dos grupos de estudo cadastrados.

---

Campos.

```
id
```

UUID.

---

```
nome
```

VARCHAR(150).

---

```
descricao
```

TEXT.

---

```
responsavel_id
```

UUID.

Relacionamento.

colegas.

---

```
cidade_id
```

UUID.

---

```
curso_id
```

UUID.

---

```
drp_id
```

UUID.

---

```
eixo_id
```

UUID.

---

```
capacidade
```

INTEGER.

---

```
quantidade_participantes
```

INTEGER.

Valor padrão.

0.

---

```
aceita_participantes
```

BOOLEAN.

---

```
link_whatsapp
```

TEXT.

---

```
status
```

VARCHAR(30).

---

```
created_at
```

Timestamp with Time Zone.

---

```
updated_at
```

Timestamp with Time Zone.

---

```
deleted_at
```

Timestamp with Time Zone.

---

```
created_by
```

UUID.

---

```
updated_by
```

UUID.

---

# Índices

Nome.

Cidade.

Curso.

DRP.

Eixo.

Status.

Responsável.

---

# Relacionamentos

Um colega poderá administrar vários grupos.

Cada grupo possuirá apenas um responsável principal.

---

# Tabela

## cursos

### Objetivo

Armazenar os cursos disponíveis.

---

Campos.

```
id
```

UUID.

---

```
nome
```

VARCHAR(150).

---

```
sigla
```

VARCHAR(30).

---

```
status
```

VARCHAR(30).

---

```
created_at
```

Timestamp with Time Zone.

---

```
updated_at
```

Timestamp with Time Zone.

---

# Tabela

## cidades

### Objetivo

Armazenar municípios disponíveis.

---

Campos.

```
id
```

UUID.

---

```
nome
```

VARCHAR(150).

---

```
estado
```

CHAR(2).

---

```
codigo_ibge
```

VARCHAR(20).

---

```
status
```

VARCHAR(30).

---

```
created_at
```

Timestamp with Time Zone.

---

```
updated_at
```

Timestamp with Time Zone.

---

# Índices

Nome.

Estado.

Código IBGE.

---

# Tabela

## drps

### Objetivo

Cadastrar todas as DRPs da plataforma.

---

Campos.

```
id
```

UUID.

---

```
nome
```

VARCHAR(150).

---

```
descricao
```

TEXT.

---

```
status
```

VARCHAR(30).

---

```
created_at
```

Timestamp with Time Zone.

---

```
updated_at
```

Timestamp with Time Zone.

---

# Tabela

## eixos

### Objetivo

Cadastrar os eixos acadêmicos.

---

Campos.

```
id
```

UUID.

---

```
nome
```

VARCHAR(150).

---

```
descricao
```

TEXT.

---

```
status
```

VARCHAR(30).

---

```
created_at
```

Timestamp with Time Zone.

---

```
updated_at
```

Timestamp with Time Zone.

---

# Relacionamentos Gerais

Curso.

↓

Possui vários colegas.

---

Cidade.

↓

Possui vários colegas.

---

DRP.

↓

Possui vários colegas.

---

Eixo.

↓

Possui vários colegas.

---

Colega.

↓

Pode administrar grupos.

---

Grupo.

↓

Pertence a um curso.

---

Grupo.

↓

Pertence a uma cidade.

---

Grupo.

↓

Pertence a um DRP.

---

Grupo.

↓

Pertence a um eixo.

---

# Integridade

Nenhum colega poderá ser associado a registros inexistentes.

Nenhum grupo poderá ser criado sem curso, cidade, DRP e eixo válidos.

Toda chave estrangeira deverá possuir integridade referencial.

Toda alteração deverá atualizar o campo `updated_at`.

---

# Critérios de Aceitação

Todas as tabelas deverão utilizar UUID como chave primária.

Todos os relacionamentos deverão possuir Foreign Keys.

Todos os campos obrigatórios deverão possuir restrições `NOT NULL`.

As tabelas deverão conter índices compatíveis com os principais filtros de pesquisa.

A estrutura deverá permanecer preparada para futuras expansões sem necessidade de alterações incompatíveis.


# Continuação da Modelagem Física do Banco de Dados

## Tabela

### administradores

#### Objetivo

Armazenar os usuários responsáveis pela administração da plataforma.

---

Campos.

```
id
```

UUID.

---

```
auth_user_id
```

UUID.

Relacionamento.

Supabase Auth.

---

```
nome
```

VARCHAR(150).

---

```
email
```

VARCHAR(150).

---

```
perfil
```

VARCHAR(30).

---

Valores permitidos.

SUPER_ADMIN.

ADMIN.

MODERADOR.

---

```
ativo
```

BOOLEAN.

Valor padrão.

TRUE.

---

```
ultimo_login
```

Timestamp with Time Zone.

---

```
created_at
```

Timestamp with Time Zone.

---

```
updated_at
```

Timestamp with Time Zone.

---

```
created_by
```

UUID.

---

```
updated_by
```

UUID.

---

# Constraints

E-mail único.

Perfil obrigatório.

Usuário autenticado obrigatório.

---

# Índices

Email.

Perfil.

Ativo.

---

# Relacionamentos

Cada administrador deverá estar vinculado a um usuário autenticado do Supabase.

---

# Tabela

## grupo_participantes

### Objetivo

Representar o relacionamento entre colegas e grupos de estudo.

---

Tipo.

Tabela de relacionamento.

---

Campos.

```
id
```

UUID.

---

```
grupo_id
```

UUID.

---

```
colega_id
```

UUID.

---

```
status
```

VARCHAR(30).

---

Valores.

PENDENTE.

ACEITO.

RECUSADO.

REMOVIDO.

---

```
data_ingresso
```

Timestamp with Time Zone.

---

```
created_at
```

Timestamp with Time Zone.

---

```
updated_at
```

Timestamp with Time Zone.

---

# Constraint

Um colega não poderá participar duas vezes do mesmo grupo.

---

Unique.

```
grupo_id

colega_id
```

---

# Índices

Grupo.

Colega.

Status.

---

# Relacionamentos

Um grupo poderá possuir vários participantes.

Um colega poderá participar de vários grupos.

---

# Tabela

## configuracoes

### Objetivo

Armazenar parâmetros globais do sistema.

---

Campos.

```
id
```

UUID.

---

```
chave
```

VARCHAR(100).

---

```
valor
```

TEXT.

---

```
descricao
```

TEXT.

---

```
categoria
```

VARCHAR(50).

---

```
created_at
```

Timestamp with Time Zone.

---

```
updated_at
```

Timestamp with Time Zone.

---

# Constraint

A chave deverá ser única.

---

# Índices

Categoria.

Chave.

---

# Tabela

## logs_auditoria

### Objetivo

Registrar todos os eventos relevantes da plataforma.

---

Campos.

```
id
```

UUID.

---

```
usuario_id
```

UUID.

---

```
acao
```

VARCHAR(100).

---

```
tabela
```

VARCHAR(100).

---

```
registro_id
```

UUID.

---

```
dados_anteriores
```

JSONB.

---

```
dados_novos
```

JSONB.

---

```
ip
```

VARCHAR(50).

---

```
user_agent
```

TEXT.

---

```
created_at
```

Timestamp with Time Zone.

---

# Índices

Usuário.

Tabela.

Registro.

Data.

---

# Observações

Os registros de auditoria nunca deverão ser alterados.

---

Não permitir exclusão lógica.

---

Não permitir atualização.

---

# Tabela

## notificacoes

### Objetivo

Preparar a plataforma para envio de notificações futuras.

---

Campos.

```
id
```

UUID.

---

```
usuario_id
```

UUID.

---

```
titulo
```

VARCHAR(150).

---

```
mensagem
```

TEXT.

---

```
tipo
```

VARCHAR(30).

---

Valores previstos.

SISTEMA.

GRUPO.

ADMINISTRATIVO.

LEMBRETE.

---

```
visualizada
```

BOOLEAN.

---

```
created_at
```

Timestamp with Time Zone.

---

# Índices

Usuário.

Visualizada.

Tipo.

---

# Tabela

## historico_operacoes

### Objetivo

Registrar alterações relevantes realizadas sobre entidades da plataforma.

---

Campos.

```
id
```

UUID.

---

```
entidade
```

VARCHAR(100).

---

```
registro_id
```

UUID.

---

```
operacao
```

VARCHAR(30).

---

Valores.

CREATE.

UPDATE.

DELETE.

RESTORE.

---

```
usuario_id
```

UUID.

---

```
descricao
```

TEXT.

---

```
created_at
```

Timestamp with Time Zone.

---

# Índices

Entidade.

Operação.

Usuário.

Data.

---

# Relacionamentos Gerais

Administrador.

↓

Executa operações administrativas.

↓

Gera auditoria.

---

Colega.

↓

Participa de grupos.

↓

Recebe notificações futuras.

---

Grupo.

↓

Possui vários participantes.

↓

Possui histórico de alterações.

---

Configurações.

↓

Controlam parâmetros globais da aplicação.

---

Logs.

↓

Relacionam usuários, operações e registros alterados.

---

# Estratégias de Integridade

Todas as alterações administrativas deverão gerar registros na tabela de auditoria.

---

Toda operação de criação deverá registrar histórico.

---

Toda atualização deverá registrar histórico.

---

Toda exclusão lógica deverá registrar histórico.

---

Toda restauração deverá registrar histórico.

---

# Estratégias de Crescimento

As tabelas deverão suportar crescimento contínuo.

---

Os índices deverão ser revisados periodicamente.

---

As tabelas de auditoria deverão permitir particionamento futuro.

---

Os registros históricos deverão permanecer preservados para consultas administrativas.

---

# Critérios de Aceitação

Todas as tabelas deverão possuir finalidade claramente definida.

As tabelas de relacionamento deverão utilizar constraints de unicidade quando necessário.

Os logs deverão ser imutáveis.

As configurações deverão ser parametrizadas.

O histórico deverá registrar todas as operações relevantes.

A modelagem deverá permanecer preparada para futuras funcionalidades sem necessidade de alterações incompatíveis.


# Segurança do Banco de Dados

## Objetivo

Definir todas as políticas de segurança aplicadas ao banco de dados do ConectaDRP, garantindo confidencialidade, integridade, disponibilidade e rastreabilidade das informações.

Toda regra de acesso deverá ser implementada priorizando o princípio do menor privilégio.

---

# Princípios Gerais

Nenhum usuário deverá possuir acesso superior ao necessário para executar suas funções.

---

Toda operação deverá respeitar autenticação e autorização.

---

Os dados deverão permanecer protegidos contra acessos indevidos.

---

Toda tentativa de acesso deverá obedecer às políticas definidas neste documento.

---

# Row Level Security (RLS)

Todas as tabelas públicas deverão possuir RLS habilitado.

---

Objetivos.

Controlar acesso aos registros.

Restringir leitura.

Restringir alterações.

Restringir exclusões.

Permitir políticas específicas por perfil.

---

# Tabelas com RLS Obrigatório

colegas.

---

grupos.

---

grupo_participantes.

---

administradores.

---

configuracoes.

---

notificacoes.

---

historico_operacoes.

---

logs_auditoria.

---

# Políticas para Visitantes

Permissões.

Consultar colegas públicos.

Consultar grupos públicos.

Consultar cursos.

Consultar cidades.

Consultar DRPs.

Consultar eixos.

---

Restrições.

Não criar registros.

Não editar registros.

Não excluir registros.

Não acessar área administrativa.

---

# Políticas para Colegas

Permissões.

Consultar informações públicas.

Cadastrar informações autorizadas.

Atualizar apenas dados próprios quando disponível.

Consultar grupos.

Solicitar participação em grupos.

---

Restrições.

Não editar dados de terceiros.

Não acessar auditorias.

Não acessar configurações.

Não acessar administradores.

---

# Políticas para Administradores

Permissões.

Gerenciar colegas.

Gerenciar grupos.

Gerenciar cursos.

Gerenciar cidades.

Gerenciar DRPs.

Gerenciar eixos.

Consultar relatórios.

Consultar logs.

Gerenciar configurações conforme perfil.

---

# Políticas para Super Administradores

Permissões totais.

---

Incluindo.

Gerenciamento de administradores.

Alteração de configurações críticas.

Visualização completa de auditorias.

Gerenciamento de permissões.

---

# Autenticação

Toda autenticação deverá utilizar Supabase Authentication.

---

Não armazenar senhas no banco de dados da aplicação.

---

As credenciais permanecerão sob responsabilidade do serviço de autenticação.

---

# Tokens

Utilizar JWT emitido pelo Supabase.

---

Todo token deverá possuir prazo de expiração.

---

Tokens expirados deverão exigir nova autenticação.

---

# Triggers

## Objetivo

Automatizar regras que devam ser executadas diretamente pelo banco.

---

Triggers previstas.

Atualização automática do campo.

```
updated_at
```

---

Registro automático de auditoria.

---

Registro de histórico.

---

Atualização automática de quantidade de participantes.

---

Validação de regras críticas.

---

# Funções SQL

As funções deverão concentrar regras reutilizáveis.

---

Exemplos.

Cadastrar participante.

Remover participante.

Atualizar quantidade de vagas.

Registrar auditoria.

Atualizar histórico.

Consultar estatísticas.

---

Sempre priorizar funções pequenas e específicas.

---

# Views

Utilizar Views para simplificar consultas complexas.

---

Exemplos.

Colegas completos.

Grupos completos.

Dashboard administrativo.

Estatísticas.

Relatórios.

---

Evitar duplicação de lógica no Front-end.

---

# Materialized Views

Utilizar apenas quando houver benefício significativo de desempenho.

---

Exemplos.

Indicadores estatísticos.

Relatórios consolidados.

Ranking de utilização.

---

Atualizar periodicamente conforme necessidade.

---

# Controle de Permissões

Permissões deverão ser concedidas exclusivamente por perfil.

---

Nunca conceder permissões diretamente a usuários individuais quando puderem ser herdadas pelo perfil.

---

# Auditoria

Toda operação administrativa deverá registrar.

Usuário.

Data.

Hora.

Operação.

Tabela.

Registro.

Valores alterados quando aplicável.

---

Os registros de auditoria deverão permanecer imutáveis.

---

# Criptografia

Dados sensíveis deverão utilizar mecanismos seguros quando necessário.

---

Nunca armazenar informações confidenciais em texto puro quando houver alternativa segura.

---

# Integridade

Toda operação crítica deverá ocorrer dentro de transações.

---

Caso qualquer etapa falhe.

Toda a operação deverá ser revertida.

---

# Backup

Preparar estratégia para.

Backups automáticos.

Backups manuais.

Recuperação pontual.

Retenção.

---

Nenhuma rotina de backup deverá interromper o funcionamento da aplicação.

---

# Recuperação

O banco deverá permitir recuperação em caso de falhas.

---

Toda estratégia deverá ser previamente documentada.

---

# Monitoramento

Monitorar continuamente.

Tempo de resposta.

Consultas lentas.

Bloqueios.

Falhas.

Consumo de recursos.

---

# Índices Avançados

Revisar periodicamente.

Índices pouco utilizados.

Índices duplicados.

Consultas críticas.

---

Criar novos índices apenas quando houver justificativa técnica.

---

# Boas Práticas

Evitar consultas sem filtros.

Evitar SELECT * em consultas de produção.

Utilizar paginação.

Priorizar consultas parametrizadas.

Evitar operações em massa sem transações.

---

# Escalabilidade

Preparar estrutura para crescimento do volume de dados.

---

Permitir criação futura de particionamento.

---

Permitir replicação quando necessária.

---

Preparar arquitetura para expansão horizontal dos serviços.

---

# Critérios de Aceitação

Todas as tabelas críticas deverão possuir RLS habilitado.

Toda autenticação deverá utilizar Supabase Authentication.

Todas as operações administrativas deverão gerar auditoria.

As triggers deverão automatizar regras repetitivas.

As funções SQL deverão concentrar regras reutilizáveis.

As Views deverão simplificar consultas complexas.

As permissões deverão respeitar rigorosamente os perfis definidos.

A arquitetura deverá garantir segurança, desempenho, integridade e possibilidade de expansão futura.


# Migrações, Versionamento e Administração do Banco de Dados

## Objetivo

Definir o processo oficial para criação, evolução e manutenção da estrutura do banco de dados do ConectaDRP.

Todas as alterações estruturais deverão ser controladas por migrações versionadas, garantindo rastreabilidade, repetibilidade e segurança durante a evolução da aplicação.

---

# Princípios

Toda alteração no banco de dados deverá possuir migração correspondente.

---

Nenhuma alteração estrutural deverá ser realizada diretamente em ambiente de produção.

---

Toda migração deverá ser testada previamente em ambiente de desenvolvimento.

---

As migrações deverão ser versionadas juntamente com o código-fonte da aplicação.

---

# Ferramenta de Migração

Utilizar.

Supabase Migrations.

---

Todas as migrações deverão permanecer armazenadas no repositório oficial do projeto.

---

# Convenção de Nomenclatura

Cada arquivo deverá possuir.

Data.

Hora.

Descrição.

---

Exemplo.

```
20260708143000_create_table_colegas.sql
```

---

Outros exemplos.

```
20260709101500_create_table_grupos.sql

20260710120000_add_index_colegas.sql

20260711153000_create_logs.sql
```

---

# Organização das Migrações

As migrações deverão conter apenas uma finalidade principal.

---

Exemplos.

Criar tabela.

Adicionar coluna.

Criar índice.

Criar trigger.

Criar função.

Atualizar constraint.

Criar política RLS.

---

Evitar migrações excessivamente grandes.

---

# Ordem de Execução

A sequência deverá respeitar as dependências entre objetos.

---

Ordem recomendada.

Extensões.

↓

Schemas.

↓

Tabelas principais.

↓

Tabelas de relacionamento.

↓

Constraints.

↓

Índices.

↓

Triggers.

↓

Funções.

↓

Views.

↓

Materialized Views.

↓

Políticas RLS.

---

# Versionamento

Cada alteração deverá gerar nova versão da estrutura.

---

Nunca modificar migrações já executadas em produção.

---

Correções deverão ocorrer por novas migrações.

---

# Rollback

Toda migração deverá possuir estratégia de reversão.

---

Sempre que possível.

Criar script reversível.

---

Caso não seja possível.

Documentar claramente o procedimento manual.

---

# Seed de Dados

## Objetivo

Popular automaticamente o banco em novos ambientes.

---

Dados previstos.

Cursos.

Cidades.

DRPs.

Eixos.

Configurações iniciais.

Administrador inicial.

---

Os Seeds deverão ser independentes das migrações estruturais.

---

# Dados Obrigatórios

A aplicação deverá iniciar contendo.

Configurações básicas.

Cursos cadastrados.

Estrutura mínima para funcionamento.

---

# Ambientes

## Desenvolvimento

Permitir alterações frequentes.

Dados fictícios.

Maior nível de detalhamento dos logs.

---

## Homologação

Estrutura idêntica à produção.

Dados de testes controlados.

Validação das migrações.

---

## Produção

Dados reais.

Maior controle de acesso.

Backups automáticos.

Monitoramento contínuo.

---

# Atualizações

As atualizações deverão ocorrer de forma controlada.

---

Fluxo recomendado.

Desenvolvimento.

↓

Homologação.

↓

Produção.

---

Nunca atualizar produção sem validação prévia.

---

# Estratégia de Implantação

Antes da atualização.

Executar backup.

---

Aplicar migrações.

---

Executar validações automáticas.

---

Validar funcionamento.

---

Liberar utilização.

---

# Compatibilidade

As migrações deverão evitar interrupções prolongadas.

---

Sempre que possível.

Preservar compatibilidade entre versões consecutivas.

---

Evitar alterações destrutivas.

---

# Administração do Banco

Toda administração deverá ocorrer por usuários autorizados.

---

Registrar todas as operações administrativas.

---

Utilizar contas individuais.

---

Evitar compartilhamento de credenciais.

---

# Monitoramento

Acompanhar continuamente.

Uso de armazenamento.

Tempo médio das consultas.

Quantidade de conexões.

Utilização de CPU.

Utilização de memória.

Consultas lentas.

Erros recorrentes.

---

# Manutenção Preventiva

Realizar periodicamente.

Atualização de estatísticas.

Reorganização de índices quando necessário.

Análise de desempenho.

Revisão de políticas RLS.

Validação das rotinas de backup.

---

# Limpeza de Dados

Nunca remover informações críticas automaticamente.

---

Dados temporários poderão possuir política específica de retenção.

---

Logs antigos poderão ser arquivados conforme política institucional.

---

# Auditoria das Alterações

Toda mudança estrutural deverá registrar.

Responsável.

Data.

Versão.

Objetivo.

Impacto esperado.

Resultado da implantação.

---

# Documentação

Cada migração deverá possuir documentação quando envolver alterações relevantes.

---

Registrar.

Objetivo.

Dependências.

Impactos.

Procedimento de rollback.

Observações.

---

# Checklist de Implantação

Antes da publicação.

Validar migrações.

Executar testes.

Validar constraints.

Validar índices.

Validar triggers.

Validar funções.

Validar políticas RLS.

Executar backup.

Confirmar versão.

---

Após a publicação.

Validar integridade dos dados.

Verificar desempenho.

Confirmar funcionamento da autenticação.

Validar consultas críticas.

Monitorar logs.

---

# Evolução da Estrutura

Toda expansão futura deverá preservar compatibilidade com a arquitetura existente.

Alterações que afetem outras entidades deverão ser cuidadosamente documentadas.

Novas tabelas deverão seguir integralmente as convenções estabelecidas neste documento.

---

# Critérios de Aceitação

Todas as alterações estruturais deverão ser realizadas exclusivamente por migrações.

Todas as migrações deverão permanecer versionadas.

Todos os ambientes deverão utilizar a mesma estrutura de banco de dados.

Os Seeds deverão permitir inicialização completa de novos ambientes.

Toda implantação deverá possuir estratégia de rollback.

As alterações deverão ser rastreáveis e documentadas.

A administração do banco deverá seguir rigorosos critérios de segurança, controle e auditoria.


# Camada de Acesso aos Dados (Data Access Layer)

## Objetivo

Definir os padrões oficiais para acesso ao banco de dados do ConectaDRP, garantindo consultas eficientes, reutilização de lógica, segurança, desempenho e padronização entre todos os módulos da aplicação.

Toda comunicação entre o Front-end e o banco de dados deverá respeitar as diretrizes estabelecidas nesta seção.

---

# Princípios

Toda consulta deverá priorizar desempenho.

---

Toda operação deverá respeitar as políticas de segurança.

---

Evitar duplicação de consultas.

---

Centralizar regras reutilizáveis.

---

Reduzir tráfego desnecessário entre aplicação e banco de dados.

---

# Estratégias de Acesso

Priorizar.

Consultas simples.

↓

Views.

↓

RPCs.

↓

Funções SQL.

---

Selecionar a estratégia mais adequada conforme a complexidade da operação.

---

# Consultas Simples

Utilizar para.

Listagens.

Consultas individuais.

Filtros simples.

Atualizações diretas.

---

Evitar processamento complexo diretamente no Front-end.

---

# Views

Utilizar quando.

Houver necessidade frequente de junções.

Consultas administrativas.

Relatórios simples.

Dados consolidados.

---

As Views deverão evitar repetição de lógica SQL.

---

# RPC (Remote Procedure Calls)

Utilizar para regras de negócio executadas no banco.

---

Exemplos.

Ingressar em grupo.

Cancelar participação.

Atualizar estatísticas.

Processar operações em lote.

Gerar indicadores.

---

As RPCs deverão possuir documentação própria.

---

# Funções SQL

Cada função deverá possuir responsabilidade única.

---

Evitar funções excessivamente longas.

---

Documentar.

Parâmetros.

Retorno.

Exceções.

Dependências.

---

# Paginação

Todas as listagens deverão utilizar paginação.

---

Evitar carregamento completo de grandes volumes de dados.

---

Parâmetros recomendados.

Página.

Quantidade por página.

Ordenação.

Filtros.

---

# Ordenação

Permitir ordenação quando aplicável.

---

Exemplos.

Nome.

Cidade.

Curso.

Data de criação.

Última atualização.

---

A ordenação deverá utilizar índices sempre que possível.

---

# Filtros

Os filtros deverão ser opcionais e combináveis.

---

Exemplos.

Curso.

Cidade.

DRP.

Eixo.

Status.

Aceita contato.

Possui vagas.

---

As consultas deverão ignorar filtros não informados.

---

# Busca Textual

Utilizar mecanismos nativos do PostgreSQL.

---

Priorizar.

Full Text Search.

---

Permitir pesquisas por.

Nome.

Descrição.

Curso.

Cidade.

---

# Índices Especializados

Quando necessário utilizar.

GIN.

---

GIST.

---

Trigram.

---

Os índices deverão ser criados apenas após análise de desempenho.

---

# Consultas Agregadas

Utilizar funções SQL para.

Quantidade de colegas.

Quantidade de grupos.

Participantes.

Indicadores.

Estatísticas.

---

Evitar cálculos repetitivos no Front-end.

---

# Consultas Complexas

Sempre documentar.

Objetivo.

Entradas.

Saídas.

Tempo esperado.

Dependências.

---

# Atualizações

Atualizar apenas campos necessários.

---

Evitar atualizações completas quando não forem necessárias.

---

# Exclusão

Priorizar Soft Delete.

---

Evitar remoções permanentes.

---

# Transações

Utilizar transações quando.

Houver múltiplas alterações relacionadas.

---

Garantir consistência dos dados.

---

Toda falha deverá provocar rollback.

---

# Tratamento de Exceções

Toda função deverá prever tratamento de erros.

---

Registrar falhas críticas.

---

Retornar mensagens padronizadas para a aplicação.

---

# Cache

Utilizar cache para consultas de baixa volatilidade.

---

Exemplos.

Cursos.

Cidades.

DRPs.

Eixos.

Configurações.

---

Atualizar automaticamente após alterações.

---

# Estatísticas

As estatísticas administrativas deverão utilizar consultas otimizadas.

---

Evitar processamento excessivo em tempo real.

---

Quando necessário.

Utilizar Materialized Views.

---

# Desempenho

Toda consulta deverá ser analisada periodicamente.

---

Indicadores.

Tempo médio.

Quantidade de leituras.

Uso de índices.

Quantidade de registros.

---

# Plano de Execução

Consultas críticas deverão ser avaliadas utilizando.

EXPLAIN.

---

EXPLAIN ANALYZE.

---

Eliminar varreduras completas quando houver alternativa melhor.

---

# Escalabilidade

Preparar consultas para crescimento do volume de dados.

---

Evitar dependência de estruturas temporárias.

---

Utilizar paginação em todas as consultas administrativas.

---

# Reutilização

Sempre reutilizar funções SQL e RPCs existentes antes de criar novas implementações.

---

Evitar duplicação de regras de negócio.

---

# Documentação

Toda consulta complexa deverá possuir documentação contendo.

Objetivo.

Responsável.

Parâmetros.

Retorno.

Dependências.

Índices utilizados.

---

# Boas Práticas

Selecionar apenas colunas necessárias.

Evitar consultas aninhadas desnecessárias.

Priorizar índices existentes.

Reduzir quantidade de JOINs quando possível.

Utilizar aliases claros.

Padronizar nomenclatura das consultas.

---

# Critérios de Aceitação

Toda consulta deverá possuir finalidade claramente definida.

Todas as operações críticas deverão utilizar transações.

Todas as consultas complexas deverão ser documentadas.

Toda paginação deverá ocorrer no banco de dados.

As buscas deverão utilizar mecanismos otimizados.

Os índices deverão ser revisados periodicamente.

A camada de acesso aos dados deverá permanecer organizada, reutilizável, segura e preparada para expansão futura.


# Otimização, Desempenho e Alta Disponibilidade

## Objetivo

Definir as estratégias oficiais para otimização do PostgreSQL/Supabase, garantindo desempenho consistente, alta disponibilidade, escalabilidade e confiabilidade durante todo o ciclo de vida do ConectaDRP.

Todas as decisões de otimização deverão priorizar estabilidade, segurança e facilidade de manutenção.

---

# Estratégia Geral

A otimização deverá ser realizada continuamente.

---

Toda alteração de desempenho deverá ser baseada em métricas.

---

Evitar otimizações prematuras sem evidências técnicas.

---

As alterações deverão ser documentadas.

---

# Indexação

Os índices deverão ser criados considerando.

Frequência das consultas.

Filtros utilizados.

Ordenações.

Relacionamentos.

Volume de dados.

---

Revisar periodicamente índices pouco utilizados.

---

Eliminar índices redundantes.

---

Criar novos índices somente após análise técnica.

---

# Índices Compostos

Utilizar quando houver consultas frequentes envolvendo múltiplos campos.

---

Exemplos.

Cidade + Curso.

Curso + DRP.

Status + Cidade.

Curso + Eixo.

---

A ordem das colunas deverá refletir os padrões reais de consulta.

---

# Índices Parciais

Utilizar quando apenas parte dos registros for consultada com frequência.

---

Exemplo.

Registros ativos.

---

Evitar indexação desnecessária de dados históricos.

---

# Particionamento

Preparar a estrutura para particionamento futuro.

---

Tabelas candidatas.

logs_auditoria.

historico_operacoes.

notificacoes.

---

Estratégias possíveis.

Por data.

Por período letivo.

Por volume de registros.

---

O particionamento deverá ser transparente para a aplicação.

---

# Estatísticas do Banco

Atualizar periodicamente as estatísticas do PostgreSQL.

---

Garantir que o otimizador de consultas possua informações atualizadas.

---

# VACUUM

Executar rotinas automáticas de limpeza.

---

Objetivos.

Recuperar espaço.

Reduzir fragmentação.

Melhorar desempenho.

---

# ANALYZE

Executar periodicamente.

---

Atualizar estatísticas utilizadas pelo planejador de consultas.

---

# EXPLAIN

Toda consulta crítica deverá ser analisada.

---

Utilizar.

```
EXPLAIN
```

---

E quando necessário.

```
EXPLAIN ANALYZE
```

---

Registrar otimizações realizadas.

---

# Monitoramento

Monitorar continuamente.

Tempo médio das consultas.

Tempo máximo.

Quantidade de conexões.

Consultas lentas.

Consultas bloqueadas.

Utilização de CPU.

Utilização de memória.

Espaço em disco.

---

# Alertas

Gerar alertas para.

Consultas excessivamente lentas.

Uso elevado de recursos.

Falhas recorrentes.

Crescimento inesperado.

Tentativas de acesso indevido.

---

# Replicação

Preparar arquitetura para utilização futura de réplicas de leitura.

---

Objetivos.

Distribuir carga.

Melhorar desempenho.

Garantir disponibilidade.

---

As réplicas deverão permanecer sincronizadas com o banco principal.

---

# Alta Disponibilidade

A arquitetura deverá minimizar indisponibilidades.

---

Sempre que possível.

Evitar ponto único de falha.

---

Planejar recuperação rápida em caso de incidentes.

---

# Backup

Estratégia recomendada.

Backups automáticos diários.

---

Backups completos periódicos.

---

Backups antes de alterações estruturais.

---

Validação periódica dos arquivos de backup.

---

# Recuperação

Realizar testes periódicos de restauração.

---

Documentar.

Tempo estimado.

Procedimentos.

Responsáveis.

---

Garantir recuperação íntegra dos dados.

---

# Continuidade de Negócio

Preparar plano para.

Falhas de infraestrutura.

Falhas humanas.

Erros de implantação.

Corrupção de dados.

Indisponibilidade temporária.

---

# Retenção

Definir políticas para.

Backups.

Logs.

Auditorias.

Históricos.

Notificações.

---

Toda política deverá atender aos requisitos institucionais.

---

# Segurança Operacional

Monitorar continuamente.

Permissões.

Credenciais.

Conexões.

Alterações estruturais.

Tentativas de invasão.

---

# Auditoria Operacional

Registrar.

Migrações executadas.

Backups realizados.

Recuperações.

Atualizações.

Alterações administrativas.

---

# Evolução

A estratégia de otimização deverá ser revisada periodicamente.

---

Novas funcionalidades deverão ser avaliadas quanto ao impacto no desempenho antes da implantação.

---

# Checklist de Desempenho

Antes da publicação.

Validar índices.

Executar EXPLAIN.

Validar consultas críticas.

Revisar funções SQL.

Revisar Views.

Validar políticas RLS.

Executar testes de carga quando necessário.

---

Após a publicação.

Monitorar consultas.

Verificar consumo de recursos.

Acompanhar crescimento do banco.

Analisar logs.

Confirmar estabilidade.

---

# Considerações Finais

A camada de persistência do ConectaDRP deverá permanecer preparada para crescimento contínuo, suportando aumento no número de usuários, grupos de estudo e operações administrativas sem perda significativa de desempenho.

Toda otimização deverá ser baseada em evidências técnicas, preservando a integridade dos dados e a estabilidade da plataforma.

A arquitetura deverá permitir evolução gradual, mantendo compatibilidade com futuras funcionalidades e garantindo facilidade de manutenção ao longo do tempo.

---

# Critérios Gerais de Aceitação

O banco de dados deverá manter desempenho consistente mesmo com crescimento do volume de informações.

As estratégias de otimização deverão ser documentadas e monitoradas.

Os backups deverão ser automáticos, validados e passíveis de restauração.

As consultas críticas deverão possuir análise de desempenho.

A arquitetura deverá suportar alta disponibilidade e expansão futura.

Todas as rotinas administrativas deverão seguir padrões de segurança e auditoria definidos neste documento.

O ambiente de persistência deverá permanecer confiável, seguro, escalável e preparado para a evolução contínua da plataforma.


