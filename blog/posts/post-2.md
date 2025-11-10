# Como adicionar novos posts

Adicionar novos posts é muito simples! Basta editar o arquivo \`js/posts.js\`.

## Passo a passo

1. Abra o arquivo `js/posts.js`
2. Adicione um novo objeto no array `posts`
3. Preencha as propriedades necessárias
4. Salve o arquivo

## Estrutura de um post

```javascript
{
    id: 3,
    title: "Título do Post",
    date: "Data de Publicação",
    excerpt: "Resumo curto do post",
    content: `
# Conteúdo em Markdown

Escreva aqui...
    `
}
```

É isso! Seu novo post aparecerá automaticamente na lista.