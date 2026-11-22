# Dunna Candle — versão minimalista

Segunda versão da loja [dunnacandle.com.br](https://dunnacandle.com.br/): mesma estrutura do site original, com visual minimalista e a logo oficial em destaque. React + Vite + Tailwind CSS v4.

## Rodar

```bash
npm install
npm run dev
npm run build
```

## Estilo

- Logo oficial (`public/images/logo.webp`) centralizada no cabeçalho, grande no topo da home e no rodapé.
- Fonte Jost, títulos pequenos em maiúsculas e espaçados, linhas finas no lugar de cards.
- Uma única animação: um fade discreto ao rolar a página.
- Tema claro por padrão, com botão para o escuro (a logo inverte sozinha).

## Páginas

`/` · `/produtos` · `/produtos/:categoria` · `/produto/:slug` · `/contato`. O carrinho aceita o cupom `PRIMEIRADUNNA` e fecha o pedido pelo WhatsApp.

## Publicação

O deploy no GitHub Pages é automático a cada push na `main` (`.github/workflows/deploy.yml`).

## Antes de divulgar — revise

- Textos de fragrância: só o do *Champagne Rosé* é o original; os outros são exemplos (`src/data/products.js`).
- A categoria *Vela Bless* não tem produtos cadastrados.
