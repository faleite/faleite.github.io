/**
 * Posts do Blog
 * Adicione novos posts neste array
 */
export const posts = [
    {
        id: 1,
        title: "Bem-vindo ao meu blog!",
        date: "10 de Novembro, 2025",
        excerpt: "Primeiro post do blog explicando como tudo funciona.",
        file: "posts/post-1.md"
    },
    {
        id: 2,
        title: "Como adicionar novos posts",
        date: "10 de Novembro, 2025",
        excerpt: "Tutorial rápido para adicionar novos posts ao seu blog.",
        file: "posts/post-2.md" 
    }
];

/**
 * Busca um post pelo ID
 * @param {number} id - ID do post
 * @returns {Object|undefined} Post encontrado ou undefined
 */
export function getPostById(id) {
    return posts.find(post => post.id === id);
}

/**
 * Retorna todos os posts
 * @returns {Array} Array com todos os posts
 */
export function getAllPosts() {
    return posts;
}