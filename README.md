# Landing page — Cecília Noda

Landing page institucional de página única para a psicóloga Cecília Noda, construída com Vite, React e TypeScript.

## Instalação e execução

Requer Node.js 20.19+.

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: servidor de desenvolvimento.
- `npm run build`: checagem TypeScript e build de produção.
- `npm run lint`: análise estática.
- `npm run typecheck`: checagem TypeScript isolada.
- `npm run test`: testes automatizados com Vitest e Testing Library.

## Organização

- `src/features/home/content/siteContent.ts`: textos, navegação, FAQ e contatos tipados.
- `src/features/home/pages`: composição da landing page.
- `src/components`: elementos reutilizáveis de layout e interface, com estilos em arquivos `*.styles.ts`.
- `src/styles/theme.ts`: tokens centrais de cor, largura e movimento.
- `src/styles/global.styles.ts`: fontes, reset e estilos globais via `styled-components`.
- `src/assets`: fontes licenciadas, imagens originais e otimizadas, logos e vetores.

## Fontes e assets

Open Sauce One e Playfair Display são carregadas localmente com `font-display: swap`; somente os pesos usados estão incluídos. Os SVGs originais permanecem vetoriais. As fotografias originais foram preservadas em `src/assets/images/originals`, e cópias WebP menores são usadas na interface.

## Personalização

Atualize conteúdo e contatos em `siteContent.ts`. Quando houver um domínio definitivo, inclua a URL canônica e `og:url` em `index.html`.
