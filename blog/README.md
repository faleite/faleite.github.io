# Blog em Markdown

Um blog simples e elegante feito com HTML, CSS e JavaScript puro.

## 🚀 Características

- Posts escritos em Markdown
- Sem dependências de servidor
- Design responsivo
- Código limpo e organizado

## 📦 Como usar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em um navegador
3. Para adicionar posts, edite o arquivo `js/posts.js`

## 📝 Adicionando Posts

Edite o array `posts` em `js/posts.js`:

\`\`\`javascript
{
    id: 3,
    title: "Meu Novo Post",
    date: "Data",
    excerpt: "Resumo do post",
    content: `# Conteúdo em Markdown...`
}
\`\`\`

## 🌐 Deploy

Compatível com:
- GitHub Pages
- Netlify
- Vercel
- Qualquer hosting estático

## 📄 Licença

MIT
```

---

## ✅ Melhorias Implementadas

1. **Separação de responsabilidades**: Cada arquivo tem um propósito específico
2. **Módulos ES6**: Uso de import/export
3. **Funções documentadas**: JSDoc para melhor compreensão
4. **Segurança**: Função `escapeHtml` para prevenir XSS
5. **Event delegation**: Melhor performance com eventos
6. **Código reutilizável**: Funções pequenas e focadas
7. **Manutenibilidade**: Fácil de entender e modificar

---

## 📚 O que é Marked.js?

**Marked.js** é uma biblioteca JavaScript que **converte Markdown em HTML**.

## 🎯 Para que serve?

Quando você escreve um post assim:

```markdown
# Meu Título
Este é um **texto em negrito** e este é *itálico*.

- Item 1
- Item 2
```

O Marked.js transforma isso em:

```html
<h1>Meu Título</h1>
<p>Este é um <strong>texto em negrito</strong> e este é <em>itálico</em>.</p>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

## 💡 No código do blog

No arquivo `router.js`, esta linha usa o Marked:

```javascript
const htmlContent = marked.parse(post.content);
```

Ela pega o conteúdo em Markdown do post e converte para HTML que o navegador pode exibir.

## 🌐 Por que está no CDN?

**CDN (Content Delivery Network)** é um servidor que hospeda bibliotecas JavaScript populares. Usar o CDN tem vantagens:

✅ **Não precisa baixar**: A biblioteca vem da internet  
✅ **Rápido**: Servidores otimizados  
✅ **Cache**: Se o usuário já visitou outro site que usa a mesma biblioteca, ela já está no cache  
✅ **Fácil**: Basta adicionar a tag `<script>`

## 🔄 Alternativa: Baixar localmente

Se preferir ter a biblioteca no seu projeto:

1. Baixe de: https://cdnjs.com/libraries/marked
2. Salve em `js/libs/marked.min.js`
3. Altere o HTML para:
```html
<script src="js/libs/marked.min.js"></script>
```

**Vantagem**: Funciona offline  
**Desvantagem**: Aumenta o tamanho do projeto

Ficou claro? Quer que eu mostre outras bibliotecas úteis para blogs?