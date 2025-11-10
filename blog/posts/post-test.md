---
layout: post
title: "Meu Primeiro Post no Blog"
date: 2024-11-06 14:30:00 -0000
categories: [tecnologia, web]
tags: [jekyll, github-pages, blog]
author: Seu Nome
excerpt: "Uma breve descrição do post que aparece na listagem"
---

# Introdução

Este é o meu primeiro post usando Jekyll! Aqui eu posso escrever em **Markdown** normalmente.

## Como Funciona o Markdown

Markdown permite formatação simples:

- Listas com itens
- **Negrito** e *itálico*
- [Links](https://exemplo.com)

### Código

Posso adicionar blocos de código:
```javascript
function hello() {
    console.log("Hello World!");
}
```

## Imagens

![Texto alternativo](/blog/assets/images/foto.jpg)

## Conclusão

É super fácil escrever posts em Markdown!
```

## Explicação do Front Matter

**Campos obrigatórios:**
- `layout`: qual template usar (normalmente "post")
- `title`: título do post
- `date`: data e hora (formato ISO)

**Campos opcionais mas recomendados:**
- `categories`: categorias principais (lista ou string)
- `tags`: tags específicas (lista ou string)
- `author`: nome do autor
- `excerpt`: resumo curto para listagem
- `image`: imagem destaque do post
- `published`: true/false (para rascunhos)

## Mais Exemplos

**Post sobre programação:**
```
2024-11-05-aprendendo-javascript.md
```

**Post pessoal:**
```
2024-11-04-minhas-reflexoes-sobre-2024.md
```

**Post com múltiplas palavras:**
```
2024-11-03-como-criar-um-blog-com-jekyll.md