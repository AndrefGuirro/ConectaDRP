# Documento 06
# Especificação Funcional dos Casos de Uso
## ConectaDRP

Versão: 1.0

Data: 08/07/2026

---

# Objetivo

Este documento descreve detalhadamente todos os casos de uso do sistema ConectaDRP.

Cada funcionalidade da aplicação deverá possuir um comportamento claramente definido.

Este documento será utilizado como referência principal para a implementação das regras de negócio, desenvolvimento do frontend, backend, testes automatizados e validações funcionais.

Nenhuma funcionalidade deverá ser implementada sem possuir um caso de uso correspondente documentado.

---

# Padrão dos Casos de Uso

Todos os casos de uso deverão seguir exatamente a estrutura abaixo.

```
Código

Nome

Objetivo

Atores

Pré-condições

Fluxo Principal

Fluxos Alternativos

Fluxos de Exceção

Regras de Negócio

Dados Utilizados

Resultado Esperado

Critérios de Aceitação
```

---

# Atores do Sistema

## Visitante

Pessoa que acessa o ConectaDRP sem possuir qualquer autenticação.

Pode.

Pesquisar colegas.

Visualizar grupos.

Cadastrar-se.

Consultar informações públicas.

Não pode.

Acessar área administrativa.

Alterar dados de terceiros.

Consultar informações internas.

---

## Colega

Estudante cadastrado no sistema.

Pode.

Atualizar seus dados.

Criar grupos.

Editar grupos sob sua responsabilidade.

Pesquisar colegas.

Entrar em contato pelo WhatsApp.

Solicitar exclusão do cadastro.

---

## Administrador

Usuário responsável pela administração da plataforma.

Pode.

Gerenciar colegas.

Gerenciar grupos.

Gerenciar cursos.

Gerenciar cidades.

Gerenciar eixos.

Gerenciar DRPs.

Consultar estatísticas.

Consultar logs.

Gerenciar administradores.

---

# Caso de Uso UC001

## Nome

Pesquisar colegas.

---

## Objetivo

Permitir que qualquer visitante encontre outros colegas compatíveis para formar grupos de Projeto Integrador ou TCC.

---

## Atores

Visitante.

Colega.

Administrador.

---

## Pré-condições

Sistema disponível.

Banco de dados acessível.

Cidade cadastrada.

Curso cadastrado.

---

## Fluxo Principal

1.

O usuário acessa a tela inicial.

2.

Seleciona uma cidade.

3.

Seleciona um curso.

4.

Clica em "Pesquisar".

5.

O sistema identifica automaticamente o eixo correspondente ao curso.

6.

O sistema identifica automaticamente a DRP correspondente à cidade.

7.

É executada a pesquisa prioritária.

Curso.

Cidade.

8.

Caso existam colegas compatíveis.

O sistema apresenta os resultados.

9.

O usuário poderá iniciar contato através do botão do WhatsApp.

10.

Fim do processo.

---

## Fluxo Alternativo A

Nenhum colega encontrado.

O sistema executa automaticamente nova pesquisa.

Mesmo eixo.

Mesma cidade.

---

## Fluxo Alternativo B

Persistindo ausência de resultados.

Pesquisar.

Mesmo curso.

Mesma DRP.

---

## Fluxo Alternativo C

Persistindo ausência.

Pesquisar.

Mesmo eixo.

Mesma DRP.

---

## Fluxo Alternativo D

Nenhum colega localizado.

O sistema apresenta.

Mensagem amigável.

Convite para cadastro.

---

## Fluxos de Exceção

Banco indisponível.

Exibir mensagem.

```
Não foi possível realizar sua pesquisa neste momento.
Tente novamente em alguns instantes.
```

---

Conexão perdida.

Exibir.

Modo Offline.

---

Filtros inválidos.

Solicitar correção.

---

## Regras de Negócio

RN001.

Pesquisar inicialmente por.

Curso + Cidade.

---

RN002.

Caso não existam resultados.

Pesquisar.

Eixo + Cidade.

---

RN003.

Persistindo ausência.

Pesquisar.

Curso + DRP.

---

RN004.

Persistindo ausência.

Pesquisar.

Eixo + DRP.

---

RN005.

Nunca apresentar colegas inativos.

---

RN006.

Nunca apresentar colegas que optaram por não receber contatos.

---

RN007.

Ordenar resultados pela prioridade.

Mesmo curso.

↓

Mesmo eixo.

↓

Mesmo DRP.

---

RN008.

Exibir no máximo cinquenta resultados por consulta.

---

RN009.

Permitir paginação para consultas maiores.

---

## Dados Utilizados

Cidade.

Curso.

Eixo.

DRP.

Nome.

Telefone.

Status.

Autorização para contato.

---

## Resultado Esperado

O usuário encontra rapidamente colegas compatíveis para iniciar contato.

---

## Critérios de Aceitação

A pesquisa deverá respeitar integralmente a ordem de prioridade definida.

Os resultados deverão ser apresentados em menos de dois segundos em condições normais de operação.

O botão do WhatsApp deverá abrir corretamente a conversa com o colega selecionado.

Nenhum dado privado deverá ser exibido além das informações autorizadas.


# Caso de Uso UC002

## Nome

Cadastrar colega.

---

## Objetivo

Permitir que qualquer estudante realize seu cadastro no ConectaDRP para que possa ser encontrado por outros colegas interessados em formar grupos para Projetos Integradores e TCC.

O processo deverá ser simples, rápido e totalmente responsivo para dispositivos móveis.

---

## Atores

Visitante.

Administrador.

---

## Pré-condições

Sistema disponível.

Banco de dados acessível.

Cidade cadastrada.

Curso cadastrado.

Aceite dos Termos de Uso.

Aceite da Política de Privacidade.

---

## Fluxo Principal

1.

O usuário acessa a tela "Quero me cadastrar".

2.

O sistema apresenta o formulário de cadastro.

3.

O usuário informa seu nome completo.

4.

Informa seu telefone celular.

5.

Seleciona sua cidade.

6.

Seleciona seu curso.

7.

O sistema identifica automaticamente.

DRP.

Eixo.

8.

O sistema gera automaticamente o link do WhatsApp.

9.

O usuário marca.

Aceito os Termos de Uso.

10.

O usuário marca.

Aceito a Política de Privacidade.

11.

O usuário escolhe se deseja receber contatos de outros colegas.

12.

O usuário clica em.

Salvar Cadastro.

13.

O sistema valida todas as informações.

14.

Os dados são gravados no banco.

15.

O sistema apresenta mensagem.

```
Cadastro realizado com sucesso.

Agora outros colegas poderão encontrar você.
```

16.

Fim do processo.

---

## Fluxo Alternativo A

Telefone já cadastrado.

O sistema informa.

```
Já existe um cadastro utilizando este telefone.

Deseja atualizar seu cadastro?
```

Botões.

Atualizar Cadastro.

Cancelar.

---

## Fluxo Alternativo B

Cidade não localizada.

O sistema informa.

```
Cidade indisponível.

Entre em contato com um administrador.
```

---

## Fluxo Alternativo C

Curso indisponível.

O sistema informa.

```
Curso não encontrado.

Selecione outro curso.
```

---

## Fluxo Alternativo D

Erro temporário.

Exibir.

```
Não foi possível concluir o cadastro.

Tente novamente em alguns instantes.
```

---

## Fluxos de Exceção

Sem conexão.

Exibir.

Modo Offline.

---

Banco indisponível.

Registrar log.

Exibir mensagem amigável.

---

Falha inesperada.

Registrar erro.

Exibir mensagem.

---

## Regras de Negócio

RN010.

Nome obrigatório.

---

RN011.

Telefone obrigatório.

---

RN012.

Cidade obrigatória.

---

RN013.

Curso obrigatório.

---

RN014.

Aceite dos Termos obrigatório.

---

RN015.

Aceite da Política de Privacidade obrigatório.

---

RN016.

Telefone deverá ser único.

---

RN017.

O sistema identificará automaticamente o eixo correspondente ao curso.

---

RN018.

O sistema identificará automaticamente a DRP correspondente à cidade.

---

RN019.

O link do WhatsApp será gerado automaticamente.

Formato.

```
https://wa.me/55DDDNUMERO
```

---

RN020.

O telefone deverá ser armazenado apenas com números.

---

RN021.

O nome deverá ser armazenado utilizando capitalização adequada.

---

RN022.

Não permitir nomes contendo apenas números.

---

RN023.

Remover espaços excedentes.

---

RN024.

Todo cadastro iniciará como.

```
ativo = true
```

---

RN025.

Todo cadastro registrará.

Data.

Hora.

IP (quando disponível).

Versão dos termos aceitos.

---

RN026.

Todo cadastro gerará registro na tabela.

```
logs
```

---

## Validações

Nome.

Mínimo.

Cinco caracteres.

Máximo.

150 caracteres.

---

Telefone.

Obrigatório.

Somente números brasileiros.

DDD válido.

Quantidade correta de dígitos.

---

Cidade.

Obrigatória.

Selecionada da lista oficial.

---

Curso.

Obrigatório.

Selecionado da lista oficial.

---

Consentimentos.

Obrigatórios.

---

## Dados Utilizados

Nome.

Telefone.

Cidade.

Curso.

DRP.

Eixo.

WhatsApp.

Data de cadastro.

Status.

Consentimentos.

---

## Dados Gerados Automaticamente

ID.

UUID.

DRP.

Eixo.

WhatsApp Link.

Data de criação.

Última atualização.

Status ativo.

---

## Integrações

Tabela.

```
cidades
```

Para localizar a DRP.

---

Tabela.

```
cursos
```

Para localizar o eixo.

---

Tabela.

```
colegas
```

Para gravar o cadastro.

---

Tabela.

```
logs
```

Para registrar o evento.

---

## Resultado Esperado

O estudante passa a fazer parte da base pública do ConectaDRP, permitindo que outros colegas o encontrem através das pesquisas realizadas pelo sistema.

---

## Critérios de Aceitação

O cadastro somente deverá ser concluído quando todos os campos obrigatórios estiverem válidos.

O telefone deverá ser único.

O link do WhatsApp deverá ser gerado automaticamente.

O eixo deverá ser identificado automaticamente.

A DRP deverá ser identificada automaticamente.

O cadastro deverá ser salvo em menos de dois segundos em condições normais.

O registro de auditoria deverá ser criado automaticamente.

O usuário deverá receber confirmação clara do sucesso da operação.

O cadastro deverá ficar imediatamente disponível para futuras pesquisas, respeitando as regras de privacidade definidas pelo sistema.


# Caso de Uso UC003

## Nome

Atualizar cadastro.

---

## Objetivo

Permitir que um colega já cadastrado mantenha suas informações sempre atualizadas.

A atualização deverá refletir imediatamente nas pesquisas realizadas pelos demais colegas.

---

## Atores

Colega.

Administrador.

---

## Pré-condições

Cadastro existente.

Cadastro ativo.

Sistema disponível.

Banco de dados acessível.

---

## Fluxo Principal

1.

O usuário acessa a tela.

Editar Cadastro.

2.

O sistema localiza o cadastro.

3.

Exibe todas as informações atuais.

4.

O usuário altera os campos desejados.

5.

Clica em.

Salvar Alterações.

6.

O sistema valida todas as informações.

7.

Caso a cidade tenha sido alterada.

Atualizar automaticamente.

DRP.

8.

Caso o curso tenha sido alterado.

Atualizar automaticamente.

Eixo.

9.

Caso o telefone tenha sido alterado.

Gerar novamente.

Link do WhatsApp.

10.

Salvar alterações.

11.

Atualizar.

Data da última modificação.

12.

Registrar log.

13.

Exibir mensagem.

```
Cadastro atualizado com sucesso.
```

14.

Fim do processo.

---

## Fluxo Alternativo A

Nenhuma alteração realizada.

O sistema informa.

```
Nenhuma alteração foi detectada.
```

---

## Fluxo Alternativo B

Telefone já utilizado por outro cadastro.

O sistema informa.

```
Este telefone já pertence a outro colega.
```

Nenhuma alteração será salva.

---

## Fluxo Alternativo C

Cidade removida da base.

Exibir.

```
Cidade não disponível.

Selecione outra cidade.
```

---

## Fluxo Alternativo D

Curso desativado.

Exibir.

```
Curso indisponível.

Escolha outro curso.
```

---

## Fluxo Alternativo E

Falha ao salvar.

Exibir.

```
Não foi possível atualizar seu cadastro.

Tente novamente.
```

---

## Fluxos de Exceção

Conexão perdida.

Entrar em modo offline.

Não permitir gravação.

---

Banco indisponível.

Registrar erro.

Exibir mensagem amigável.

---

Erro inesperado.

Registrar log técnico.

Exibir mensagem.

---

## Regras de Negócio

RN027.

Somente cadastros ativos poderão ser alterados.

---

RN028.

Nome continua obrigatório.

---

RN029.

Telefone permanece único.

---

RN030.

Cidade obrigatória.

---

RN031.

Curso obrigatório.

---

RN032.

Alteração de cidade atualiza automaticamente a DRP.

---

RN033.

Alteração de curso atualiza automaticamente o eixo.

---

RN034.

Alteração do telefone gera novo link do WhatsApp.

---

RN035.

Atualizar automaticamente.

```
updated_at
```

---

RN036.

Toda alteração deverá gerar registro de auditoria.

---

RN037.

Não alterar o identificador único do cadastro.

---

RN038.

As alterações passam a valer imediatamente nas pesquisas.

---

## Validações

Nome.

Mínimo de cinco caracteres.

Máximo de cento e cinquenta caracteres.

---

Telefone.

Formato brasileiro.

DDD válido.

Número único.

---

Cidade.

Obrigatória.

Ativa.

---

Curso.

Obrigatório.

Ativo.

---

Consentimentos.

Caso alterados.

Registrar nova data de aceite.

---

## Dados Utilizados

ID.

Nome.

Telefone.

Cidade.

Curso.

DRP.

Eixo.

Consentimentos.

Status.

---

## Dados Atualizados Automaticamente

DRP.

Eixo.

WhatsApp Link.

Data da atualização.

Registro de auditoria.

---

## Integrações

Tabela.

```
colegas
```

Atualização do cadastro.

---

Tabela.

```
cidades
```

Atualização da DRP.

---

Tabela.

```
cursos
```

Atualização do eixo.

---

Tabela.

```
logs
```

Registro da alteração.

---

## Resultado Esperado

O cadastro permanece atualizado e imediatamente disponível para novas pesquisas realizadas pelos demais usuários do sistema.

---

## Critérios de Aceitação

As alterações deverão ser persistidas corretamente no banco de dados.

A DRP deverá ser recalculada automaticamente quando a cidade for alterada.

O eixo deverá ser recalculado automaticamente quando o curso for alterado.

O link do WhatsApp deverá ser atualizado quando o telefone for modificado.

A data de atualização deverá ser registrada automaticamente.

O registro de auditoria deverá ser criado automaticamente.

As alterações deverão aparecer imediatamente nas pesquisas do sistema.

Nenhum dado obrigatório poderá permanecer inválido após a atualização.


## Validações

Cidade.

Obrigatória.

---

Curso.

Opcional.

Quando informado, terá prioridade sobre o eixo.

---

Eixo.

Opcional.

Será utilizado quando não houver curso informado.

---

Grupo.

Somente grupos ativos.

---

Quantidade de membros.

Nunca poderá ser negativa.

---

Link do grupo.

Obrigatório para permitir entrada direta.

---

## Dados Utilizados

Cidade.

Curso.

Eixo.

DRP.

Nome do grupo.

Descrição.

Responsável.

Quantidade de membros.

Capacidade máxima.

Status.

Aceita novos membros.

Link do grupo.

---

## Integrações

Tabela.

```
grupos
```

Pesquisar grupos.

---

Tabela.

```
colegas
```

Obter responsável.

---

Tabela.

```
cidades
```

Identificar DRP.

---

Tabela.

```
cursos
```

Identificar eixo.

---

## Resultado Esperado

O usuário encontra rapidamente um grupo já existente compatível com seu perfil, evitando a criação de grupos duplicados e fortalecendo a colaboração entre estudantes.

---

## Critérios de Aceitação

Somente grupos ativos deverão ser exibidos.

A ordenação deverá respeitar a prioridade definida pelo algoritmo do sistema.

O botão "Entrar no Grupo" somente deverá aparecer quando existir link válido e o grupo aceitar novos membros.

Grupos lotados deverão ser identificados visualmente.

Grupos inativos nunca deverão ser exibidos.

A consulta deverá ser concluída em menos de dois segundos em condições normais.

---

# Caso de Uso UC006

## Nome

Criar grupo.

---

## Objetivo

Permitir que um colega cadastrado crie um grupo de WhatsApp relacionado ao seu curso, eixo, cidade ou DRP, facilitando a organização dos estudantes para Projetos Integradores e TCC.

---

## Atores

Colega.

Administrador.

---

## Pré-condições

Colega cadastrado.

Cadastro ativo.

Sistema disponível.

Banco acessível.

---

## Fluxo Principal

1.

O usuário acessa.

```
Criar Grupo
```

2.

O sistema apresenta o formulário.

3.

O usuário informa.

Nome do grupo.

Descrição.

Cidade.

Curso.

Link do grupo do WhatsApp.

Capacidade máxima.

4.

O sistema identifica automaticamente.

DRP.

Eixo.

5.

O usuário informa se o grupo aceita novos membros.

6.

Clica em.

Salvar Grupo.

7.

O sistema valida os dados.

8.

Grava as informações.

9.

Registra auditoria.

10.

Apresenta a mensagem.

```
Grupo criado com sucesso.
```

11.

O grupo passa a aparecer imediatamente nas pesquisas.

12.

Fim do processo.

---

## Fluxo Alternativo A

Já existe grupo semelhante.

O sistema informa.

```
Já existe um grupo para esta combinação.

Deseja visualizá-lo antes de criar outro?
```

Botões.

Visualizar.

Continuar mesmo assim.

---

## Fluxo Alternativo B

Link inválido.

Exibir.

```
Informe um link válido do WhatsApp.
```

---

## Fluxo Alternativo C

Cidade inválida.

Solicitar nova seleção.

---

## Fluxo Alternativo D

Curso indisponível.

Solicitar nova seleção.

---

## Fluxos de Exceção

Banco indisponível.

Registrar erro.

Exibir mensagem amigável.

---

Falha inesperada.

Registrar log.

Cancelar operação.

---

## Regras de Negócio

RN057.

Somente colegas ativos poderão criar grupos.

---

RN058.

Todo grupo deverá possuir um responsável.

---

RN059.

O responsável será o colega que realizou o cadastro.

---

RN060.

Cidade obrigatória.

---

RN061.

Curso opcional.

Quando informado.

Determina automaticamente o eixo.

---

RN062.

Caso o curso não seja informado.

O grupo ficará associado apenas ao eixo.

---

RN063.

A capacidade máxima deverá ser maior que zero.

---

RN064.

Todo grupo iniciará como.

```
ativo = true
```

---

RN065.

Quantidade inicial de membros.

```
1
```

Representando o responsável.

---

RN066.

O grupo deverá aceitar novos membros por padrão.

---

RN067.

Todo cadastro de grupo deverá gerar registro de auditoria.

---

RN068.

O grupo ficará imediatamente disponível para pesquisa.

---

RN069.

O sistema deverá sugerir grupos semelhantes antes da criação de novos grupos, reduzindo duplicidades.

---

## Validações

Nome obrigatório.

---

Descrição opcional.

---

Cidade obrigatória.

---

Curso opcional.

---

Capacidade máxima.

Maior que zero.

---

Link do WhatsApp.

Obrigatório.

Formato válido.

---

Responsável.

Obrigatoriamente ativo no sistema.


## Dados Utilizados

Nome do grupo.

Descrição.

Cidade.

Curso.

Eixo.

DRP.

Link do WhatsApp.

Capacidade máxima.

Quantidade atual de membros.

Responsável.

Status.

Aceita novos membros.

Data de criação.

Data da última atualização.

---

## Dados Gerados Automaticamente

ID.

UUID.

DRP.

Eixo.

Quantidade inicial de membros.

Status ativo.

Data de criação.

Data da atualização.

Registro de auditoria.

---

## Integrações

Tabela.

```
grupos
```

Cadastro do grupo.

---

Tabela.

```
colegas
```

Identificação do responsável.

---

Tabela.

```
cidades
```

Identificação da DRP.

---

Tabela.

```
cursos
```

Identificação do eixo.

---

Tabela.

```
logs
```

Registro da criação.

---

## Resultado Esperado

O grupo passa a ficar disponível imediatamente para pesquisa por outros colegas.

O responsável torna-se automaticamente o administrador do grupo dentro do ConectaDRP.

---

## Critérios de Aceitação

O grupo deverá ser salvo corretamente.

O responsável deverá existir no sistema.

O link do WhatsApp deverá ser válido.

A cidade deverá existir.

O eixo deverá ser identificado automaticamente.

A DRP deverá ser identificada automaticamente.

O grupo deverá aparecer imediatamente nas pesquisas.

O registro de auditoria deverá ser criado.

Toda operação deverá ser concluída em menos de dois segundos em condições normais.

---

# Caso de Uso UC007

## Nome

Editar grupo.

---

## Objetivo

Permitir que o responsável pelo grupo ou um administrador atualize as informações de um grupo já cadastrado.

---

## Atores

Responsável pelo grupo.

Administrador.

---

## Pré-condições

Grupo existente.

Grupo ativo.

Responsável autenticado quando essa funcionalidade estiver disponível.

Administrador autenticado.

Banco disponível.

---

## Fluxo Principal

1.

O usuário acessa.

```
Meus Grupos
```

2.

Seleciona o grupo desejado.

3.

Clica em.

```
Editar
```

4.

O sistema apresenta os dados atuais.

5.

O usuário altera as informações desejadas.

6.

Clica em.

```
Salvar Alterações
```

7.

O sistema valida os dados.

8.

Atualiza automaticamente.

Data da atualização.

9.

Caso cidade seja alterada.

Atualizar DRP.

10.

Caso curso seja alterado.

Atualizar eixo.

11.

Salvar alterações.

12.

Registrar auditoria.

13.

Exibir mensagem.

```
Grupo atualizado com sucesso.
```

14.

Fim do processo.

---

## Fluxo Alternativo A

Nenhuma alteração realizada.

Exibir.

```
Nenhuma alteração foi detectada.
```

---

## Fluxo Alternativo B

Grupo inativo.

Não permitir edição.

---

## Fluxo Alternativo C

Link inválido.

Solicitar correção.

---

## Fluxo Alternativo D

Capacidade máxima inferior ao número atual de membros.

Exibir.

```
A capacidade informada é menor que a quantidade atual de participantes.
```

Cancelar atualização.

---

## Fluxos de Exceção

Erro no banco.

Registrar log.

Apresentar mensagem amigável.

---

Conexão indisponível.

Cancelar operação.

---

Erro inesperado.

Registrar auditoria.

---

## Regras de Negócio

RN070.

Somente o responsável ou administrador poderá editar o grupo.

---

RN071.

Nome permanece obrigatório.

---

RN072.

Cidade obrigatória.

---

RN073.

Curso opcional.

---

RN074.

Alteração da cidade recalcula automaticamente a DRP.

---

RN075.

Alteração do curso recalcula automaticamente o eixo.

---

RN076.

Alteração do link deverá validar o formato do WhatsApp.

---

RN077.

A capacidade máxima nunca poderá ser inferior ao número atual de membros.

---

RN078.

Registrar automaticamente.

Data da atualização.

---

RN079.

Toda alteração deverá gerar auditoria.

---

RN080.

As alterações deverão refletir imediatamente nas pesquisas do sistema.

---

## Validações

Nome.

Obrigatório.

---

Cidade.

Obrigatória.

---

Curso.

Opcional.

---

Capacidade.

Maior ou igual ao número atual de membros.

---

Link.

Formato válido.

---

Responsável.

Obrigatoriamente ativo.

---

## Dados Utilizados

Nome.

Descrição.

Cidade.

Curso.

Eixo.

DRP.

Responsável.

Capacidade.

Quantidade atual de membros.

Status.

Aceita novos membros.

Link do WhatsApp.


## Dados Gerados Automaticamente

Data da atualização.

Registro de auditoria.

Atualização da DRP.

Atualização do eixo.

---

## Integrações

Tabela.

```
grupos
```

Atualização do grupo.

---

Tabela.

```
cidades
```

Atualização da DRP.

---

Tabela.

```
cursos
```

Atualização do eixo.

---

Tabela.

```
colegas
```

Validação do responsável.

---

Tabela.

```
logs
```

Registro da alteração.

---

## Resultado Esperado

O grupo permanece atualizado e disponível para pesquisa imediatamente após a conclusão da edição.

As alterações tornam-se visíveis para todos os usuários sem necessidade de qualquer processamento adicional.

---

## Critérios de Aceitação

As alterações deverão ser persistidas corretamente.

A DRP deverá ser recalculada automaticamente quando houver alteração da cidade.

O eixo deverá ser recalculado automaticamente quando houver alteração do curso.

O grupo deverá permanecer disponível para pesquisa.

O histórico de auditoria deverá ser registrado.

Nenhuma informação obrigatória poderá permanecer inválida.

Toda alteração deverá ser refletida imediatamente na aplicação.

---

# Caso de Uso UC008

## Nome

Encerrar grupo.

---

## Objetivo

Permitir que o responsável pelo grupo ou um administrador encerre um grupo que não esteja mais sendo utilizado.

O encerramento deverá retirar imediatamente o grupo das pesquisas públicas, preservando seu histórico para auditoria.

---

## Atores

Responsável pelo grupo.

Administrador.

---

## Pré-condições

Grupo existente.

Grupo ativo.

Usuário autorizado.

Sistema disponível.

---

## Fluxo Principal

1.

O usuário acessa.

```
Meus Grupos
```

2.

Seleciona o grupo.

3.

Clica em.

```
Encerrar Grupo
```

4.

O sistema apresenta confirmação.

```
Deseja realmente encerrar este grupo?

Ele deixará de aparecer nas pesquisas.
```

5.

O usuário confirma.

6.

O sistema altera.

```
ativo = false
```

7.

Atualiza.

```
encerrado_em
```

8.

Atualiza.

```
updated_at
```

9.

Registra auditoria.

10.

Remove imediatamente o grupo das pesquisas.

11.

Apresenta mensagem.

```
Grupo encerrado com sucesso.
```

12.

Fim do processo.

---

## Fluxo Alternativo A

Usuário cancela a operação.

Nenhuma alteração é realizada.

---

## Fluxo Alternativo B

Grupo já encerrado.

Exibir.

```
Este grupo já se encontra encerrado.
```

---

## Fluxo Alternativo C

Administrador reabre o grupo.

Atualizar.

```
ativo = true
```

Remover.

```
encerrado_em
```

Registrar auditoria.

---

## Fluxos de Exceção

Erro ao salvar.

Registrar log.

Exibir mensagem amigável.

---

Banco indisponível.

Cancelar operação.

---

Erro inesperado.

Registrar auditoria.

---

## Regras de Negócio

RN081.

Somente o responsável ou administrador poderá encerrar grupos.

---

RN082.

O encerramento será sempre lógico.

---

RN083.

Nunca excluir fisicamente registros.

---

RN084.

Atualizar automaticamente.

```
ativo = false
```

---

RN085.

Preencher automaticamente.

```
encerrado_em
```

---

RN086.

Atualizar.

```
updated_at
```

---

RN087.

Registrar auditoria obrigatória.

---

RN088.

Grupos encerrados não aparecerão nas pesquisas.

---

RN089.

Administradores poderão reativar grupos futuramente.

---

RN090.

O histórico do grupo deverá permanecer preservado.

---

## Validações

Grupo existente.

Grupo ativo.

Usuário autorizado.

Confirmação da operação.

---

## Dados Utilizados

Grupo.

Responsável.

Status.

Quantidade de membros.

Data de criação.

Data de atualização.

---

## Dados Atualizados

Status.

Data de encerramento.

Última atualização.

Registro de auditoria.

---

## Integrações

Tabela.

```
grupos
```

Atualização do status.

---

Tabela.

```
logs
```

Registro da operação.

---

## Resultado Esperado

O grupo deixa de ser exibido nas pesquisas públicas, mantendo todas as informações preservadas para futuras consultas administrativas.

---

## Critérios de Aceitação

O grupo deverá desaparecer imediatamente das pesquisas.

O encerramento deverá utilizar Soft Delete.

A auditoria deverá ser registrada.

A data de encerramento deverá ser armazenada.

Administradores deverão poder reativar o grupo futuramente.

Nenhum relacionamento do banco poderá ser comprometido.

A operação deverá ser concluída em menos de dois segundos em condições normais.

---

# Caso de Uso UC009

## Nome

Entrar em contato com um colega.

---

## Objetivo

Permitir que um estudante inicie rapidamente uma conversa pelo WhatsApp com outro colega encontrado durante a pesquisa, facilitando a formação de grupos para Projetos Integradores e TCC.

---

## Atores

Visitante.

Colega.

Administrador.

---

## Pré-condições

Colega encontrado na pesquisa.

Telefone autorizado para contato.

WhatsApp cadastrado.

Sistema disponível.

---

## Fluxo Principal

1.

O usuário realiza uma pesquisa.

2.

Seleciona um colega.

3.

Visualiza o cartão do colega.

4.

Clica em.

```
Conversar no WhatsApp
```

5.

O sistema abre automaticamente o aplicativo ou a versão Web do WhatsApp.

6.

A conversa é iniciada.

7.

Fim do processo.

---

## Fluxo Alternativo A

WhatsApp não disponível no dispositivo.

Abrir versão Web do WhatsApp.

---

## Fluxo Alternativo B

Telefone inválido.

Exibir.

```
Não foi possível iniciar a conversa.
```

Registrar ocorrência para auditoria.



## Fluxos de Exceção

Falha ao abrir o WhatsApp.

Exibir.

```
Não foi possível abrir o WhatsApp.

Verifique se o aplicativo está instalado ou tente novamente mais tarde.
```

---

Conexão indisponível.

Exibir mensagem informando que é necessária conexão com a Internet.

---

Erro inesperado.

Registrar auditoria.

Apresentar mensagem amigável.

---

## Regras de Negócio

RN091.

O sistema nunca armazenará o conteúdo das conversas realizadas no WhatsApp.

---

RN092.

O ConectaDRP apenas facilitará o contato entre os colegas.

---

RN093.

Somente colegas que autorizaram receber contatos poderão aparecer nas pesquisas.

---

RN094.

O botão do WhatsApp deverá utilizar o link gerado automaticamente durante o cadastro.

---

RN095.

O sistema nunca enviará mensagens automaticamente em nome do usuário.

---

RN096.

O usuário será responsável pelo conteúdo das conversas realizadas.

---

RN097.

Toda tentativa de contato poderá gerar registro estatístico para fins de métricas da plataforma, sem armazenar o conteúdo das mensagens.

---

## Validações

Telefone válido.

Cadastro ativo.

Permissão para contato habilitada.

Link do WhatsApp válido.

---

## Dados Utilizados

Nome.

Telefone.

Link do WhatsApp.

Status do cadastro.

Permissão para contato.

---

## Dados Gerados

Registro estatístico da tentativa de contato.

Registro de auditoria quando aplicável.

---

## Integrações

Tabela.

```
colegas
```

Consultar dados do colega.

---

Tabela.

```
logs
```

Registrar eventos quando necessário.

---

## Resultado Esperado

O usuário inicia rapidamente uma conversa utilizando o WhatsApp, sem necessidade de copiar números ou realizar pesquisas adicionais.

---

## Critérios de Aceitação

O botão deverá abrir corretamente o WhatsApp.

O telefone deverá estar corretamente formatado.

Somente colegas autorizados poderão receber contatos.

O sistema não deverá armazenar mensagens.

A abertura do WhatsApp deverá ocorrer imediatamente após o clique.

---

# Caso de Uso UC010

## Nome

Entrar em um grupo.

---

## Objetivo

Permitir que um estudante participe de um grupo já existente relacionado ao seu curso, cidade, eixo ou DRP.

---

## Atores

Visitante.

Colega.

Administrador.

---

## Pré-condições

Grupo ativo.

Grupo aceitando novos membros.

Link válido.

Sistema disponível.

---

## Fluxo Principal

1.

O usuário realiza uma pesquisa de grupos.

2.

Seleciona um grupo.

3.

Visualiza suas informações.

4.

Clica em.

```
Entrar no Grupo
```

5.

O sistema abre automaticamente o link do grupo no WhatsApp.

6.

O usuário solicita participação utilizando os recursos do próprio WhatsApp.

7.

Fim do processo.

---

## Fluxo Alternativo A

Grupo lotado.

Exibir.

```
Este grupo atingiu sua capacidade máxima.
```

Ocultar botão de entrada.

---

## Fluxo Alternativo B

Grupo fechado.

Exibir.

```
Este grupo não está aceitando novos participantes.
```

---

## Fluxo Alternativo C

Link inválido.

Exibir.

```
O link deste grupo não está mais disponível.
```

---

## Fluxo Alternativo D

Grupo encerrado.

Não apresentar nas pesquisas.

---

## Fluxos de Exceção

Erro ao abrir o WhatsApp.

Registrar ocorrência.

Exibir mensagem amigável.

---

Sem conexão.

Informar necessidade de acesso à Internet.

---

Erro inesperado.

Registrar auditoria.

---

## Regras de Negócio

RN098.

Somente grupos ativos poderão ser exibidos.

---

RN099.

Somente grupos aceitando novos membros poderão apresentar o botão de entrada.

---

RN100.

O sistema nunca adicionará usuários automaticamente ao grupo.

---

RN101.

Toda entrada dependerá das regras do próprio WhatsApp.

---

RN102.

O responsável pelo grupo continuará administrando seus participantes exclusivamente pelo WhatsApp.

---

RN103.

O ConectaDRP apenas facilitará o acesso ao grupo.

---

RN104.

Grupos encerrados nunca deverão aparecer nas pesquisas.

---

RN105.

Caso o link deixe de funcionar, o administrador poderá atualizá-lo posteriormente.

---

## Validações

Grupo ativo.

Link válido.

Aceita novos membros.

Capacidade disponível.

---

## Dados Utilizados

Nome do grupo.

Descrição.

Cidade.

Curso.

Eixo.

DRP.

Quantidade de membros.

Capacidade máxima.

Responsável.

Status.

Link do WhatsApp.

---

## Dados Gerados

Registro estatístico de acesso ao grupo.

Registro de auditoria quando necessário.

---

## Integrações

Tabela.

```
grupos
```

Consulta das informações.

---

Tabela.

```
logs
```

Registro de eventos.

---

## Resultado Esperado

O estudante acessa rapidamente o grupo de interesse, reduzindo o tempo necessário para encontrar colegas e iniciar a colaboração acadêmica.

---

## Critérios de Aceitação

O botão deverá abrir corretamente o grupo no WhatsApp.

Somente grupos ativos deverão aparecer.

Grupos lotados deverão ser identificados visualmente.

Grupos encerrados não deverão aparecer.

O sistema não deverá controlar a entrada efetiva dos participantes no WhatsApp.

A operação deverá ocorrer imediatamente após o clique.


# Caso de Uso UC011

## Nome

Login Administrativo.

---

## Objetivo

Permitir que administradores autenticados acessem a área administrativa do ConectaDRP para realizar operações de gerenciamento da plataforma.

---

## Atores

Administrador.

---

## Pré-condições

Administrador cadastrado.

Conta ativa.

Sistema disponível.

Supabase Authentication disponível.

---

## Fluxo Principal

1.

O administrador acessa.

```
/admin/login
```

2.

O sistema apresenta a tela de autenticação.

3.

O administrador informa.

E-mail.

Senha.

4.

Clica em.

```
Entrar
```

5.

O sistema autentica utilizando o Supabase Authentication.

6.

Valida as permissões.

7.

Cria a sessão autenticada.

8.

Redireciona para.

```
Dashboard Administrativo
```

9.

Registra auditoria.

10.

Fim do processo.

---

## Fluxo Alternativo A

E-mail ou senha inválidos.

Exibir.

```
E-mail ou senha incorretos.
```

---

## Fluxo Alternativo B

Conta desativada.

Exibir.

```
Sua conta encontra-se desativada.

Entre em contato com o administrador do sistema.
```

---

## Fluxo Alternativo C

Administrador sem permissão.

Exibir.

```
Você não possui permissão para acessar esta área.
```

---

## Fluxos de Exceção

Falha na autenticação.

Registrar erro.

Exibir mensagem amigável.

---

Servidor indisponível.

Cancelar login.

---

Erro inesperado.

Registrar auditoria.

---

## Regras de Negócio

RN106.

Somente administradores autenticados poderão acessar o painel.

---

RN107.

A autenticação utilizará exclusivamente o Supabase Authentication.

---

RN108.

A sessão deverá permanecer ativa conforme configuração do sistema.

---

RN109.

Toda autenticação deverá gerar auditoria.

---

RN110.

Tentativas inválidas poderão ser limitadas futuramente.

---

RN111.

Todas as rotas administrativas deverão validar autenticação.

---

RN112.

Todas as rotas administrativas deverão validar permissões.

---

## Validações

E-mail obrigatório.

Senha obrigatória.

Administrador ativo.

Permissões válidas.

---

## Dados Utilizados

E-mail.

Senha.

Perfil.

Permissões.

Status.

---

## Dados Gerados

Sessão autenticada.

Token.

Registro de auditoria.

Último acesso.

---

## Integrações

Supabase Authentication.

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

---

## Resultado Esperado

O administrador acessa o painel administrativo com segurança.

---

## Critérios de Aceitação

Somente administradores autenticados deverão acessar o painel.

Todas as tentativas deverão ser registradas.

Sessões inválidas deverão ser bloqueadas.

As permissões deverão ser verificadas antes do carregamento das páginas.

---

# Caso de Uso UC012

## Nome

Gerenciar colegas.

---

## Objetivo

Permitir que administradores consultem, filtrem, editem, ativem, desativem e acompanhem todos os cadastros de colegas do ConectaDRP.

---

## Atores

Administrador.

---

## Pré-condições

Administrador autenticado.

Permissão para gerenciamento.

Sistema disponível.

---

## Fluxo Principal

1.

Administrador acessa.

```
Colegas
```

2.

Sistema apresenta listagem.

3.

Administrador poderá utilizar filtros.

Nome.

Cidade.

Curso.

DRP.

Eixo.

Status.

Data de cadastro.

4.

Seleciona um colega.

5.

Visualiza os detalhes.

6.

Caso necessário.

Editar informações.

7.

Salvar alterações.

8.

Registrar auditoria.

9.

Atualizar listagem.

10.

Fim do processo.

---

## Fluxo Alternativo A

Nenhum cadastro localizado.

Exibir.

```
Nenhum colega encontrado.
```

---

## Fluxo Alternativo B

Cadastro inativo.

Exibir identificação visual.

Permitir reativação.

---

## Fluxo Alternativo C

Pesquisa sem filtros.

Listar todos os colegas utilizando paginação.

---

## Fluxos de Exceção

Erro de consulta.

Registrar log.

Apresentar mensagem amigável.

---

Erro inesperado.

Registrar auditoria.

---

## Regras de Negócio

RN113.

Somente administradores poderão acessar este módulo.

---

RN114.

Toda alteração deverá gerar auditoria.

---

RN115.

Administradores poderão ativar ou desativar cadastros.

---

RN116.

Administradores poderão alterar informações incorretas.

---

RN117.

A exclusão continuará utilizando Soft Delete.

---

RN118.

Os filtros poderão ser combinados.

---

RN119.

As consultas deverão utilizar paginação.

---

RN120.

A ordenação padrão será.

Nome.

Cidade.

Curso.

---

RN121.

Administradores poderão visualizar o histórico de alterações do cadastro.

---

RN122.

Toda alteração deverá atualizar automaticamente.

```
updated_at
```

---

## Validações

Cadastro existente.

Administrador autorizado.

Permissões válidas.

Dados obrigatórios válidos.

---

## Dados Utilizados

Nome.

Telefone.

Cidade.

Curso.

DRP.

Eixo.

Status.

Data de cadastro.

Última atualização.

Permissão para contato.

---

## Dados Atualizados

Informações do cadastro.

Status.

Última atualização.

Registro de auditoria.

---

## Integrações

Tabela.

```
colegas
```

Consulta e atualização.

---

Tabela.

```
logs
```

Registro das operações.

---

Tabela.

```
cidades
```

Validação da cidade.

---

Tabela.

```
cursos
```

Validação do curso.

---

## Resultado Esperado

O administrador consegue manter a base de colegas sempre organizada, atualizada e consistente, garantindo qualidade nas pesquisas realizadas pelos usuários.

---

## Critérios de Aceitação

A listagem deverá suportar filtros combinados.

As consultas deverão utilizar paginação.

Toda alteração deverá gerar auditoria.

O histórico deverá permanecer preservado.

As alterações deverão refletir imediatamente nas pesquisas públicas.

Nenhuma operação deverá comprometer a integridade dos dados.


# Caso de Uso UC013

## Nome

Gerenciar grupos.

---

## Objetivo

Permitir que administradores realizem o gerenciamento completo dos grupos cadastrados no ConectaDRP.

---

## Atores

Administrador.

---

## Pré-condições

Administrador autenticado.

Permissão para gerenciamento.

Sistema disponível.

Banco de dados disponível.

---

## Fluxo Principal

1.

Administrador acessa.

```
Grupos
```

2.

O sistema apresenta todos os grupos cadastrados.

3.

Administrador utiliza filtros.

Nome.

Cidade.

Curso.

Eixo.

DRP.

Responsável.

Status.

4.

Seleciona um grupo.

5.

Visualiza seus detalhes.

6.

Poderá.

Editar.

Ativar.

Encerrar.

Alterar responsável.

Atualizar link.

Modificar capacidade.

7.

Salvar alterações.

8.

Registrar auditoria.

9.

Atualizar listagem.

10.

Fim do processo.

---

## Fluxo Alternativo A

Nenhum grupo localizado.

Exibir.

```
Nenhum grupo encontrado.
```

---

## Fluxo Alternativo B

Grupo encerrado.

Permitir reativação.

---

## Fluxo Alternativo C

Grupo lotado.

Permitir alteração da capacidade máxima.

---

## Fluxos de Exceção

Erro na consulta.

Registrar log.

Exibir mensagem amigável.

---

Erro inesperado.

Registrar auditoria.

---

## Regras de Negócio

RN123.

Somente administradores poderão acessar este módulo.

---

RN124.

Toda alteração deverá gerar auditoria.

---

RN125.

Administradores poderão alterar qualquer grupo.

---

RN126.

Administradores poderão alterar o responsável.

---

RN127.

Administradores poderão atualizar links inválidos.

---

RN128.

Administradores poderão reativar grupos encerrados.

---

RN129.

Nunca excluir grupos fisicamente.

---

RN130.

Todas as alterações deverão atualizar.

```
updated_at
```

---

RN131.

Toda consulta deverá utilizar paginação.

---

RN132.

Os filtros poderão ser combinados.

---

## Validações

Grupo existente.

Administrador autorizado.

Cidade válida.

Curso válido.

Capacidade compatível.

Link válido.

---

## Dados Utilizados

Nome.

Descrição.

Cidade.

Curso.

DRP.

Eixo.

Responsável.

Capacidade.

Quantidade atual.

Status.

Link.

---

## Dados Atualizados

Grupo.

Responsável.

Status.

Última atualização.

Registro de auditoria.

---

## Integrações

Tabela.

```
grupos
```

---

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

Tabela.

```
cidades
```

---

Tabela.

```
cursos
```

---

## Resultado Esperado

Os administradores conseguem manter todos os grupos atualizados, organizados e disponíveis para os estudantes.

---

## Critérios de Aceitação

As consultas deverão utilizar paginação.

Os filtros deverão funcionar em conjunto.

Toda alteração deverá gerar auditoria.

As alterações deverão aparecer imediatamente nas pesquisas.

---

# Caso de Uso UC014

## Nome

Gerenciar cursos.

---

## Objetivo

Permitir que administradores mantenham atualizada a lista oficial de cursos utilizados pelo ConectaDRP.

---

## Atores

Administrador.

---

## Pré-condições

Administrador autenticado.

Permissão adequada.

Sistema disponível.

---

## Fluxo Principal

1.

Administrador acessa.

```
Cursos
```

2.

Sistema apresenta listagem.

3.

Administrador poderá.

Cadastrar.

Editar.

Ativar.

Desativar.

Consultar.

4.

Seleciona um curso.

5.

Realiza alterações.

6.

Salvar.

7.

Registrar auditoria.

8.

Atualizar listagem.

9.

Fim.

---

## Fluxo Alternativo A

Curso inexistente.

Exibir mensagem.

---

## Fluxo Alternativo B

Curso já existente.

Exibir.

```
Já existe um curso com este nome.
```

---

## Fluxo Alternativo C

Curso utilizado por colegas.

Permitir apenas desativação.

Nunca exclusão física.

---

## Fluxos de Exceção

Erro de banco.

Registrar log.

---

Erro inesperado.

Registrar auditoria.

---

## Regras de Negócio

RN133.

Nome do curso deverá ser único.

---

RN134.

Todo curso deverá pertencer a um eixo.

---

RN135.

Cursos desativados não aparecerão em novos cadastros.

---

RN136.

Cursos utilizados por colegas não poderão ser excluídos fisicamente.

---

RN137.

Toda alteração deverá gerar auditoria.

---

RN138.

Atualizar automaticamente.

```
updated_at
```

---

RN139.

Toda consulta utilizará paginação.

---

RN140.

Cursos deverão permanecer ordenados alfabeticamente.

---

## Validações

Nome obrigatório.

Nome único.

Eixo obrigatório.

Status válido.

---

## Dados Utilizados

Nome.

Descrição.

Eixo.

Status.

Data de criação.

Última atualização.

---

## Dados Atualizados

Curso.

Status.

Última atualização.

Registro de auditoria.

---

## Integrações

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

## Resultado Esperado

A lista oficial de cursos permanece consistente e sincronizada com a estrutura acadêmica da UNIVESP.

---

## Critérios de Aceitação

Não permitir cursos duplicados.

Não excluir cursos utilizados.

Registrar auditoria em todas as operações.

Atualizar imediatamente os formulários públicos após alterações.

Utilizar paginação em consultas administrativas.

Ordenar os cursos alfabeticamente.


# Caso de Uso UC015

## Nome

Gerenciar eixos.

---

## Objetivo

Permitir que administradores mantenham a lista oficial de eixos acadêmicos utilizada pelos cursos da UNIVESP.

Os eixos servirão como mecanismo secundário de pesquisa quando não existirem colegas ou grupos do mesmo curso.

---

## Atores

Administrador.

---

## Pré-condições

Administrador autenticado.

Permissão adequada.

Sistema disponível.

---

## Fluxo Principal

1.

Administrador acessa.

```
Eixos
```

2.

Sistema apresenta todos os eixos cadastrados.

3.

Administrador poderá.

Cadastrar.

Editar.

Consultar.

Ativar.

Desativar.

4.

Seleciona um eixo.

5.

Realiza alterações.

6.

Salvar.

7.

Registrar auditoria.

8.

Atualizar listagem.

9.

Fim.

---

## Fluxo Alternativo A

Nome duplicado.

Exibir.

```
Já existe um eixo com este nome.
```

---

## Fluxo Alternativo B

Eixo utilizado por cursos.

Permitir apenas desativação.

---

## Fluxos de Exceção

Erro de banco.

Registrar log.

---

Erro inesperado.

Registrar auditoria.

---

## Regras de Negócio

RN141.

Nome do eixo deverá ser único.

---

RN142.

Cursos obrigatoriamente pertencem a um eixo.

---

RN143.

Eixos desativados não poderão receber novos cursos.

---

RN144.

Nunca excluir fisicamente um eixo utilizado.

---

RN145.

Registrar auditoria em todas as alterações.

---

RN146.

Atualizar automaticamente.

```
updated_at
```

---

## Validações

Nome obrigatório.

Nome único.

Status válido.

---

## Dados Utilizados

Nome.

Descrição.

Status.

Data de criação.

Última atualização.

---

## Dados Atualizados

Eixo.

Status.

Última atualização.

Registro de auditoria.

---

## Integrações

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

## Resultado Esperado

A estrutura de eixos permanece organizada e consistente com os cursos cadastrados.

---

## Critérios de Aceitação

Não permitir duplicidade.

Não excluir eixos utilizados.

Registrar auditoria.

Atualizar imediatamente os formulários públicos.

---

# Caso de Uso UC016

## Nome

Gerenciar DRPs.

---

## Objetivo

Permitir que administradores mantenham atualizada a relação oficial das Diretorias Regionais de Ensino (DRPs), utilizadas para ampliar as possibilidades de pesquisa entre colegas de cidades próximas.

---

## Atores

Administrador.

---

## Pré-condições

Administrador autenticado.

Permissão adequada.

Sistema disponível.

---

## Fluxo Principal

1.

Administrador acessa.

```
DRPs
```

2.

Sistema apresenta listagem.

3.

Administrador poderá.

Cadastrar.

Editar.

Consultar.

Ativar.

Desativar.

4.

Seleciona uma DRP.

5.

Atualiza informações.

6.

Salvar.

7.

Registrar auditoria.

8.

Atualizar listagem.

9.

Fim.

---

## Fluxo Alternativo A

DRP já cadastrada.

Exibir mensagem.

---

## Fluxo Alternativo B

DRP vinculada a cidades.

Permitir apenas desativação.

---

## Fluxos de Exceção

Erro na gravação.

Registrar log.

---

Erro inesperado.

Registrar auditoria.

---

## Regras de Negócio

RN147.

Nome deverá ser único.

---

RN148.

Cada cidade deverá pertencer obrigatoriamente a uma DRP.

---

RN149.

Nunca excluir DRPs utilizadas.

---

RN150.

Registrar auditoria obrigatória.

---

RN151.

Atualizar automaticamente.

```
updated_at
```

---

## Validações

Nome obrigatório.

Nome único.

Status válido.

---

## Dados Utilizados

Nome.

Descrição.

Status.

Data de criação.

Última atualização.

---

## Integrações

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

## Resultado Esperado

As DRPs permanecem consistentes, permitindo pesquisas regionais corretas.

---

## Critérios de Aceitação

Não permitir duplicidades.

Não excluir DRPs utilizadas.

Registrar auditoria.

Atualizar automaticamente as pesquisas que utilizam DRP.

---

# Caso de Uso UC017

## Nome

Gerenciar cidades.

---

## Objetivo

Permitir que administradores mantenham a base oficial de cidades utilizada pelo sistema.

Cada cidade deverá estar obrigatoriamente vinculada a uma DRP.

---

## Atores

Administrador.

---

## Pré-condições

Administrador autenticado.

Permissão adequada.

Sistema disponível.

---

## Fluxo Principal

1.

Administrador acessa.

```
Cidades
```

2.

Sistema apresenta listagem.

3.

Administrador poderá.

Cadastrar.

Editar.

Consultar.

Ativar.

Desativar.

4.

Seleciona uma cidade.

5.

Informa ou altera.

Nome.

Estado.

DRP.

Status.

6.

Salvar.

7.

Registrar auditoria.

8.

Atualizar listagem.

9.

Fim.

---

## Fluxo Alternativo A

Cidade já cadastrada.

Exibir.

```
Esta cidade já existe.
```

---

## Fluxo Alternativo B

Cidade utilizada por colegas.

Permitir apenas desativação.

---

## Fluxo Alternativo C

DRP inexistente.

Solicitar nova seleção.

---

## Fluxos de Exceção

Erro na gravação.

Registrar log.

---

Erro inesperado.

Registrar auditoria.

---

## Regras de Negócio

RN152.

Nome da cidade deverá ser único dentro do mesmo estado.

---

RN153.

Toda cidade deverá pertencer obrigatoriamente a uma DRP.

---

RN154.

Cidades desativadas não poderão ser utilizadas em novos cadastros.

---

RN155.

Nunca excluir cidades utilizadas.

---

RN156.

Toda alteração deverá gerar auditoria.

---

RN157.

Atualizar automaticamente.

```
updated_at
```

---

RN158.

As pesquisas deverão utilizar apenas cidades ativas.

---

## Validações

Nome obrigatório.

Estado obrigatório.

DRP obrigatória.

Status válido.

---

## Dados Utilizados

Nome.

Estado.

DRP.

Status.

Data de criação.

Última atualização.

---

## Dados Atualizados

Cidade.

DRP.

Status.

Última atualização.

Registro de auditoria.

---

## Integrações

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

## Resultado Esperado

A base de cidades permanece consistente, garantindo que todos os cadastros e pesquisas utilizem informações geográficas corretas.

---

## Critérios de Aceitação

Não permitir cidades duplicadas no mesmo estado.

Toda cidade deverá possuir uma DRP vinculada.

Não excluir cidades utilizadas.

Registrar auditoria em todas as operações.

As alterações deverão refletir imediatamente nas telas de cadastro e pesquisa.

As consultas administrativas deverão utilizar paginação e filtros.


# Caso de Uso UC018

## Nome

Dashboard Administrativo.

---

## Objetivo

Permitir que administradores visualizem rapidamente os principais indicadores operacionais do ConectaDRP, auxiliando no acompanhamento da utilização da plataforma e na tomada de decisões.

---

## Atores

Administrador.

---

## Pré-condições

Administrador autenticado.

Permissão para acesso ao Dashboard.

Sistema disponível.

Banco de dados disponível.

---

## Fluxo Principal

1.

Administrador acessa.

```
Dashboard
```

2.

O sistema consulta os indicadores.

3.

Apresenta os painéis com informações consolidadas.

4.

Administrador poderá visualizar.

Total de colegas cadastrados.

Colegas ativos.

Colegas inativos.

Total de grupos.

Grupos ativos.

Grupos encerrados.

Cursos cadastrados.

Cidades cadastradas.

DRPs cadastradas.

Eixos cadastrados.

5.

O sistema apresenta gráficos estatísticos.

6.

Administrador poderá aplicar filtros por período.

7.

Fim do processo.

---

## Fluxo Alternativo A

Nenhum dado disponível.

Exibir.

```
Ainda não existem dados suficientes para geração dos indicadores.
```

---

## Fluxos de Exceção

Erro ao consultar banco.

Registrar log.

Exibir mensagem amigável.

---

Erro inesperado.

Registrar auditoria.

---

## Regras de Negócio

RN159.

Os indicadores deverão ser atualizados automaticamente.

---

RN160.

Somente administradores poderão visualizar o Dashboard.

---

RN161.

As estatísticas utilizarão apenas registros válidos.

---

RN162.

Os gráficos deverão respeitar os filtros aplicados.

---

RN163.

Toda consulta deverá respeitar as permissões do administrador.

---

## Validações

Administrador autenticado.

Permissão válida.

---

## Dados Utilizados

Colegas.

Grupos.

Cursos.

Cidades.

DRPs.

Eixos.

Logs.

---

## Integrações

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
cursos
```

---

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
eixos
```

---

## Resultado Esperado

O administrador obtém uma visão geral da utilização da plataforma em uma única tela.

---

## Critérios de Aceitação

Os indicadores deverão carregar corretamente.

Os gráficos deverão refletir os dados reais.

O Dashboard deverá responder rapidamente às consultas.

---

# Caso de Uso UC019

## Nome

Consultar logs de auditoria.

---

## Objetivo

Permitir que administradores acompanhem todas as operações relevantes realizadas no sistema para fins de auditoria, segurança e rastreabilidade.

---

## Atores

Administrador.

---

## Pré-condições

Administrador autenticado.

Permissão para auditoria.

---

## Fluxo Principal

1.

Administrador acessa.

```
Logs
```

2.

Sistema apresenta os registros.

3.

Administrador poderá filtrar por.

Data.

Usuário.

Tipo de operação.

Tabela.

Tipo de evento.

4.

Seleciona um registro.

5.

Visualiza detalhes.

6.

Fim.

---

## Fluxo Alternativo

Nenhum registro encontrado.

Exibir mensagem.

---

## Fluxos de Exceção

Erro de consulta.

Registrar ocorrência.

---

## Regras de Negócio

RN164.

Os logs nunca poderão ser alterados manualmente.

---

RN165.

Os logs nunca poderão ser excluídos pela aplicação.

---

RN166.

Toda operação administrativa deverá gerar auditoria.

---

RN167.

As consultas deverão utilizar paginação.

---

RN168.

Permitir filtros combinados.

---

## Validações

Administrador autorizado.

Permissões válidas.

---

## Dados Utilizados

Usuário.

Data.

Hora.

Operação.

Tabela.

IP.

Descrição.

---

## Integrações

Tabela.

```
logs
```

---

## Resultado Esperado

O administrador consegue rastrear qualquer operação realizada na plataforma.

---

## Critérios de Aceitação

Os registros deverão permanecer íntegros.

Não permitir edição.

Não permitir exclusão.

Consultas rápidas.

Filtros funcionando corretamente.

---

# Caso de Uso UC020

## Nome

Configurações do sistema.

---

## Objetivo

Permitir que administradores mantenham parâmetros globais do ConectaDRP.

---

## Atores

Administrador.

---

## Pré-condições

Administrador autenticado.

Permissão específica.

---

## Fluxo Principal

1.

Administrador acessa.

```
Configurações
```

2.

Sistema apresenta os parâmetros disponíveis.

3.

Administrador altera os valores permitidos.

4.

Salvar.

5.

Registrar auditoria.

6.

Atualizar configurações.

7.

Fim.

---

## Regras de Negócio

RN169.

Somente administradores autorizados poderão alterar configurações.

---

RN170.

Toda alteração deverá gerar auditoria.

---

RN171.

As alterações deverão entrar em vigor imediatamente quando possível.

---

## Resultado Esperado

As configurações globais permanecem centralizadas e controladas.

---

## Critérios de Aceitação

Registrar auditoria.

Validar permissões.

Persistir corretamente os parâmetros.

---

# Caso de Uso UC021

## Nome

Logout Administrativo.

---

## Objetivo

Permitir que o administrador encerre sua sessão com segurança.

---

## Atores

Administrador.

---

## Pré-condições

Administrador autenticado.

---

## Fluxo Principal

1.

Administrador seleciona.

```
Sair
```

2.

O sistema encerra a sessão.

3.

Remove tokens de autenticação.

4.

Redireciona para a tela de login.

5.

Registra auditoria.

6.

Fim.

---

## Fluxos de Exceção

Falha ao encerrar sessão.

Exibir mensagem.

---

## Regras de Negócio

RN172.

Toda sessão deverá ser encerrada corretamente.

---

RN173.

Tokens deverão ser invalidados.

---

RN174.

Registrar auditoria do logout.

---

## Validações

Sessão ativa.

Administrador autenticado.

---

## Resultado Esperado

A sessão administrativa é encerrada de forma segura, impedindo acessos indevidos.

---

## Critérios de Aceitação

Sessão encerrada.

Tokens removidos.

Redirecionamento para login realizado.

Auditoria registrada.

---

# Encerramento do Documento

Este documento estabelece todos os casos de uso funcionais do ConectaDRP.

Os casos de uso aqui definidos servirão como base oficial para:

- Desenvolvimento do Front-end.
- Desenvolvimento do Back-end.
- Modelagem do Banco de Dados.
- Implementação das APIs.
- Desenvolvimento dos testes automatizados.
- Testes funcionais.
- Homologação.
- Evoluções futuras da plataforma.

Toda nova funcionalidade deverá possuir um caso de uso correspondente antes de sua implementação, garantindo rastreabilidade, padronização e facilidade de manutenção do projeto.


