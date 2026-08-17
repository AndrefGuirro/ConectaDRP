# ConectaDRP

# Documento 01 - Visão Geral do Projeto

---

# 1. Apresentação

## Nome do Projeto

ConectaDRP

## Slogan

Conectando colegas estudantes da UNIVESP para Projetos Integradores e TCC.

**O ensino é a distância. O estudo pode ser bem perto de você.**

---

# 2. Objetivo

O ConectaDRP é uma plataforma web responsiva desenvolvida para aproximar estudantes da UNIVESP através da localização geográfica, curso, eixo e DRP (Diretoria Regional de Polo).

Seu principal objetivo é facilitar que colegas consigam encontrar uns aos outros para formação de:

- grupos de Projeto Integrador;
- grupos de Trabalho de Conclusão de Curso (TCC);
- grupos de estudos;
- troca de experiências;
- networking acadêmico.

O sistema pretende diminuir uma das maiores dificuldades enfrentadas pelos estudantes da modalidade EAD: encontrar colegas próximos para desenvolver atividades presenciais ou híbridas.

---

# 3. Problema

Atualmente a UNIVESP possui milhares de estudantes distribuídos em diversos polos do Estado de São Paulo.

Apesar de estudarem na mesma instituição, muitos alunos:

- não conhecem colegas da própria cidade;
- não sabem quem pertence ao mesmo DRP;
- não conseguem montar grupos para Projeto Integrador;
- possuem dificuldade para encontrar integrantes para TCC;
- acabam utilizando grupos enormes de WhatsApp onde localizar pessoas da mesma região torna-se praticamente impossível.

O ConectaDRP nasce para resolver esse problema.

---

# 4. Solução

O sistema permitirá que qualquer visitante pesquise colegas utilizando apenas:

- cidade;
- curso.

A partir dessas informações o sistema identificará automaticamente:

- eixo;
- DRP.

Em seguida executará uma pesquisa inteligente seguindo regras previamente definidas.

---

# 5. Objetivos Específicos

O sistema deverá:

- aproximar estudantes;
- facilitar a comunicação;
- incentivar formação de grupos;
- diminuir tempo gasto procurando colegas;
- permitir contato direto através do WhatsApp;
- permitir localização por cidade;
- permitir localização por curso;
- permitir localização por eixo;
- permitir localização por DRP.

---

# 6. Público-Alvo

O sistema destina-se principalmente aos estudantes da UNIVESP.

Entretanto não haverá qualquer mecanismo de validação institucional.

O objetivo do projeto não é controlar quem pode acessar o sistema.

Seu objetivo é facilitar conexões entre pessoas interessadas em encontrar colegas.

---

# 7. Filosofia do Projeto

O ConectaDRP não deve ser tratado como uma rede social.

Também não deve ser tratado como um sistema acadêmico.

O sistema é um facilitador de conexões.

Toda decisão de arquitetura, design e desenvolvimento deverá seguir esta filosofia.

Sempre que existir dúvida entre adicionar uma funcionalidade complexa ou manter a simplicidade, deverá prevalecer a simplicidade.

---

# 8. Missão

Permitir que estudantes encontrem colegas próximos em menos de um minuto.

---

# 9. Visão

Tornar-se a principal plataforma independente de integração entre estudantes da UNIVESP.

---

# 10. Valores

O desenvolvimento do sistema seguirá os seguintes princípios:

- simplicidade;
- rapidez;
- objetividade;
- acessibilidade;
- responsividade;
- organização;
- facilidade de uso;
- código limpo;
- documentação completa.

---

# 11. Escopo da Versão 1.0

A primeira versão do sistema deverá contemplar exclusivamente as funcionalidades abaixo.

## Pesquisa

- pesquisa sem login;
- pesquisa sem cadastro obrigatório;
- pesquisa por cidade;
- pesquisa por curso.

---

## Cadastro

Permitir cadastro contendo:

- nome;
- telefone;
- cidade;
- curso;
- semestre (opcional);
- observações (opcional).

Não haverá campo para DRP.

Não haverá campo para Eixo.

Essas informações serão obtidas automaticamente pelo sistema.

---

## Busca Inteligente

A busca deverá seguir obrigatoriamente a seguinte ordem:

Primeira prioridade

Mesmo curso

+

Mesma cidade

Segunda prioridade

Mesmo eixo

+

Mesma cidade

Terceira prioridade

Mesmo curso

+

Mesmo DRP

Quarta prioridade

Mesmo eixo

+

Mesmo DRP

Quinta prioridade

Todos os colegas do mesmo DRP.

Essa ordem jamais poderá ser alterada sem atualização desta documentação.

---

# 12. Integração com WhatsApp

Cada colega deverá possuir um botão:

"Conversar pelo WhatsApp"

Ao clicar, deverá ser aberta automaticamente uma conversa utilizando o número cadastrado.

Caso exista grupo de WhatsApp cadastrado para aquele curso/cidade, o sistema deverá disponibilizar o botão:

"Entrar no Grupo".

Caso não exista grupo, o sistema deverá oferecer a opção:

"Cadastrar Grupo".

---

# 13. Plataforma

O sistema deverá funcionar:

- Android;
- iPhone;
- Tablets;
- Notebook;
- Desktop.

O desenvolvimento será Mobile First.

Todas as telas deverão ser projetadas inicialmente para celulares.

Posteriormente adaptadas para telas maiores.

---

# 14. Tecnologias Definidas

Frontend

- React
- Vite
- Bootstrap 5
- Bootstrap Icons

Backend

- Node.js

- Express

Banco de Dados

- PostgreSQL

Hospedagem do Banco

- Supabase

Controle de Código

- Git

Repositório

- GitHub

---

# 15. Objetivos de Qualidade

Todo desenvolvimento deverá priorizar:

- baixo tempo de carregamento;
- interface intuitiva;
- poucos cliques;
- componentes reutilizáveis;
- código organizado;
- fácil manutenção;
- fácil evolução.

---

# 16. Fora do Escopo da Versão 1.0

Não fazem parte desta versão:

- chat interno;
- notificações push;
- autenticação por e-mail;
- login obrigatório;
- inteligência artificial;
- criação automática de grupos de WhatsApp;
- geolocalização em tempo real;
- mensagens privadas.

Essas funcionalidades poderão ser estudadas futuramente.

---

# 17. Resultado Esperado

Ao final do desenvolvimento da versão 1.0 espera-se um sistema capaz de permitir que qualquer pessoa encontre colegas de maneira rápida, simples e intuitiva, aproximando estudantes da UNIVESP para Projetos Integradores, Trabalhos de Conclusão de Curso e grupos de estudo, cumprindo o propósito definido pelo slogan oficial do projeto:

"Conectando colegas estudantes da UNIVESP para Projetos Integradores e TCC.

O ensino é a distância.

O estudo pode ser bem perto de você."
