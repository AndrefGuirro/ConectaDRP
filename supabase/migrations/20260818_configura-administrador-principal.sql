begin;

insert into public.administradores (email, ativo)
values ('andrefguirro@gmail.com', true)
on conflict (email) do update
set ativo = true;

commit;