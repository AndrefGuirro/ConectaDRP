begin;

insert into public.administradores (nome, email, ativo)
values ('Administrador Principal', 'andrefguirro@gmail.com', true)
on conflict (email) do update
set nome = excluded.nome,
    ativo = true;

commit;