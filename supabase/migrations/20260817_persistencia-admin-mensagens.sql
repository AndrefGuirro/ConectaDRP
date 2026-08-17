begin;

create or replace function is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.administradores
    where lower(email) = lower(auth.email())
      and ativo = true
  );
$$;

alter table if exists colegas
alter column telefone drop not null;

drop policy if exists "colegas_public_insert" on colegas;

create policy "colegas_public_insert"
on colegas
for insert
to anon, authenticated
with check (
  length(trim(nome)) >= 3
  and cidade_id is not null
  and curso_id is not null
  and (telefone is null or length(regexp_replace(telefone, '\\D', '', 'g')) = 11)
);

create table if not exists mensagens_contato (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  email text not null,
  telefone text,
  mensagem text not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_mensagens_contato_created_at
on mensagens_contato(created_at desc);

alter table mensagens_contato enable row level security;

drop policy if exists "mensagens_public_insert" on mensagens_contato;
drop policy if exists "admins_manage_mensagens" on mensagens_contato;

create policy "mensagens_public_insert"
on mensagens_contato
for insert
to anon, authenticated
with check (
  length(trim(nome)) >= 2
  and position('@' in email) > 1
  and length(trim(mensagem)) >= 2
);

create policy "admins_manage_mensagens"
on mensagens_contato
for all
to authenticated
using (is_admin())
with check (is_admin());

commit;
