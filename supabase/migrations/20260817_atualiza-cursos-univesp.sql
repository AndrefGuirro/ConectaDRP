begin;

alter table if exists eixos
add column if not exists updated_at timestamptz not null default now();

alter table if exists cursos
add column if not exists updated_at timestamptz not null default now();

update eixos
set nome = 'Licenciaturas'
where nome = 'Educação';

update eixos
set nome = 'Negócios e Produção'
where nome = 'Negócios';

insert into eixos (nome, descricao, status)
values
  ('Licenciaturas', 'Eixo de Licenciaturas da UNIVESP', 'ATIVO'),
  ('Computação', 'Eixo de Computação da UNIVESP', 'ATIVO'),
  ('Negócios e Produção', 'Eixo de Negócios e Produção da UNIVESP', 'ATIVO')
on conflict (nome) do update
set descricao = excluded.descricao,
    status = 'ATIVO';

update cursos
set nome = 'Engenharia de Computação'
where nome = 'Engenharia da Computação';

update cursos
set eixo_id = (select id from eixos where nome = 'Licenciaturas'),
    status = 'ATIVO'
where nome = 'Pedagogia';

update cursos
set eixo_id = (select id from eixos where nome = 'Computação'),
    status = 'ATIVO'
where nome = 'Ciência de Dados';

update cursos
set eixo_id = (select id from eixos where nome = 'Negócios e Produção'),
    status = 'ATIVO'
where nome = 'Administração';

update cursos
set status = 'INATIVO'
where nome in ('Sistemas para Internet', 'Ciências Contábeis');

insert into cursos (nome, eixo_id, status)
values
  ('Letras', (select id from eixos where nome = 'Licenciaturas'), 'ATIVO'),
  ('Matemática', (select id from eixos where nome = 'Licenciaturas'), 'ATIVO'),
  ('Tecnologia da Informação', (select id from eixos where nome = 'Computação'), 'ATIVO'),
  ('Inteligência Artificial', (select id from eixos where nome = 'Computação'), 'ATIVO'),
  ('Processos Gerenciais', (select id from eixos where nome = 'Negócios e Produção'), 'ATIVO'),
  ('Engenharia de Produção', (select id from eixos where nome = 'Negócios e Produção'), 'ATIVO')
on conflict (nome) do update
set eixo_id = excluded.eixo_id,
    status = 'ATIVO';

commit;
