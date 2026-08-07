# Inventário de assets

| Asset            | Formato e qualidade                     | Uso                             | Observações                                                                 |
| ---------------- | --------------------------------------- | ------------------------------- | --------------------------------------------------------------------------- |
| Monograma 1      | SVG, 519 × 561                          | Footer e fundo decorativo       | Vetor original preservado, sem alterações de traçado.                       |
| Monograma 2      | SVG, 394 × 561                          | Variação de marca disponível    | Mantido no acervo, sem uso ativo no layout.                                 |
| Monograma 3      | SVG, 960 × 250                          | Assinatura horizontal no header | Melhor proporção para navegação.                                            |
| Título           | SVG, 473 × 126                          | Variação de marca disponível    | Mantido no acervo; não necessário no layout inicial.                        |
| image1_upscaled  | PNG, 3712 × 4608, vertical              | Foto principal do hero          | Retrato frontal; WebPs de 960 e 1600 px são selecionados responsivamente.   |
| image2_upscaled  | PNG, 4248 × 4248, quadrado              | Seção de apresentação           | Recorte fornecido; WebPs de 800 e 1600 px são selecionados responsivamente. |
| Open Sauce One   | TTF original + WOFF2 otimizado          | Texto, navegação e botões       | Regular e Semibold; WOFF2 latino reduzido e licença OFL incluída.           |
| Playfair Display | TTF variável original + WOFF2 otimizado | Títulos e destaques editoriais  | Normal e itálica; WOFF2 latino reduzido e licença OFL incluída.             |

Os PNGs e TTFs fornecidos permanecem em `src/assets` como originais; o runtime usa WebP responsivo e WOFF2 reduzido para diminuir a transferência.
