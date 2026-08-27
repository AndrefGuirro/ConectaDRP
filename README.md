# ConectaDRP

Aplicacao web para aproximar colegas da UNIVESP por cidade, curso, eixo e DRP.

## Desenvolvimento local

Use Node.js 22 ou superior. Na pasta que contem `package.json`:

```powershell
npm install
npm run dev
```

Crie um arquivo `.env` local com as credenciais publicas do projeto Supabase:

```text
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-publica
```

## Producao na Vercel

1. No projeto da Vercel, abra **Settings > Environment Variables**.
2. Cadastre `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` para **Production**, **Preview** e **Development**.
3. Em **Deployments**, abra o menu do ultimo deployment e selecione **Redeploy**.

As variaveis `VITE_*` sao incorporadas durante o build. Alterar uma variavel sem fazer redeploy nao atualiza o site publicado.

## Banco de dados

Execute as migrations da pasta `supabase/migrations` no SQL Editor do projeto Supabase. A migration `20260826_politicas-leitura-publica.sql` libera apenas a leitura publica de catalogos e colegas com status `ATIVO`, mantendo a escrita administrativa protegida.

Depois de aplicar as migrations, confirme em **Table Editor** se existem registros ativos em `cidades`, `cursos`, `drps` e `eixos`.

## Validacao

```powershell
npm run lint
npm run build
```
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
