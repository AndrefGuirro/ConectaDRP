begin;

alter table if exists cidades enable row level security;
alter table if exists cursos enable row level security;
alter table if exists drps enable row level security;
alter table if exists eixos enable row level security;
alter table if exists colegas enable row level security;

drop policy if exists "cidades_public_read" on cidades;
create policy "cidades_public_read"
on cidades
for select
to anon, authenticated
using (status = 'ATIVO');

drop policy if exists "cursos_public_read" on cursos;
create policy "cursos_public_read"
on cursos
for select
to anon, authenticated
using (status = 'ATIVO');

drop policy if exists "drps_public_read" on drps;
create policy "drps_public_read"
on drps
for select
to anon, authenticated
using (status = 'ATIVO');

drop policy if exists "eixos_public_read" on eixos;
create policy "eixos_public_read"
on eixos
for select
to anon, authenticated
using (status = 'ATIVO');

drop policy if exists "colegas_public_read" on colegas;
create policy "colegas_public_read"
on colegas
for select
to anon, authenticated
using (status = 'ATIVO');

commit;