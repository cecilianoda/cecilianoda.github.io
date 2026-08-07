# Changelog

Todas as alterações relevantes deste projeto serão documentadas neste arquivo.

## [1.2.0] - 2026-08-07

### Adicionado

- Imagens responsivas para as seções principal e de apresentação.
- Metadados de SEO para Open Graph, Twitter Cards e URL canônica.
- Informações complementares nos dados estruturados da página.
- Verificação de lint no fluxo de publicação.

### Alterado

- Centralizados os dados institucionais da profissional.
- Separados os estilos da página inicial em módulos menores.
- Simplificada a inicialização com a remoção do `ThemeProvider` não utilizado.
- Otimizadas as fontes WOFF2, preservando os arquivos originais.
- Atualizados Vite para 8.2.1 e styled-components para 6.5.1.
- Melhorados o comportamento e a acessibilidade do menu mobile.
- Normalizadas a formatação do código e a documentação do projeto.

### Corrigido

- Ajustada a cor do monograma no footer para corresponder ao restante da identidade visual.
- Removida a aplicação indevida de opacidade no monograma do footer.

### Desempenho

- Adicionadas versões menores das fotografias para dispositivos móveis.
- Reduzido em aproximadamente 94 kB o conjunto de fontes carregadas.
- Habilitada a seleção automática de imagens conforme o tamanho e a densidade da tela.

### Segurança

- Auditoria das dependências concluída sem vulnerabilidades conhecidas.

## [1.1.0] - 2026-08-07

### Corrigido

- Removido o flash branco exibido antes do carregamento dos estilos da aplicação.
- Adicionados estilos críticos ao HTML para preservar imediatamente as cores do tema.
- Mantido o link “Pular para o conteúdo” oculto até receber foco pelo teclado.

## [1.0.0]

### Adicionado

- Publicação inicial da landing page institucional.
