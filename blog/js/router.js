import { getPostById, getAllPosts } from './posts.js';

const postListEl = document.getElementById('postList');
const postContentEl = document.getElementById('postContent');

/**
 * Renderiza a lista de posts
 */
export function renderPostList() {
    const posts = getAllPosts();
    
    postListEl.innerHTML = posts.map(post => createPostCard(post)).join('');
    postListEl.style.display = 'grid';
    postContentEl.classList.remove('active');
}

/**
 * Cria o HTML de um card de post
 * @param {Object} post - Objeto do post
 * @returns {string} HTML do card
 */
function createPostCard(post) {
    return `
        <div class="post-card" data-post-id="${post.id}">
            <h2>${escapeHtml(post.title)}</h2>
            <div class="post-meta">${escapeHtml(post.date)}</div>
            <div class="post-excerpt">${escapeHtml(post.excerpt)}</div>
        </div>
    `;
}

/**
 * Renderiza um post específico
 * @param {number} id - ID do post
 */
export function renderPost(id) {
    const post = getPostById(id);
    if (!post) {
        renderPostNotFound();
        return;
    }

    // Atualiza a URL para permitir acesso direto
    if (window.history && window.history.pushState) {
        const url = new URL(window.location);
        url.searchParams.set('id', id);
        window.history.pushState({}, '', url);
    }

    if (post.file) {
        fetch(post.file)
            .then(response => {
                if (!response.ok) throw new Error('Erro ao carregar o post');
                return response.text();
            })
            .then(md => {
                const htmlContent = marked.parse(md);
                postContentEl.innerHTML = `
                    <button class="back-btn" id="backBtn">← Voltar</button>
                    <div class="post-meta">${escapeHtml(post.date)}</div>
                    ${htmlContent}
                `;
                postListEl.style.display = 'none';
                postContentEl.classList.add('active');
                window.scrollTo(0, 0);
            })
            .catch(() => {
                renderPostNotFound();
            });
    } else if (post.content) {
        const htmlContent = marked.parse(post.content);
        postContentEl.innerHTML = `
            <button class="back-btn" id="backBtn">← Voltar</button>
            <div class="post-meta">${escapeHtml(post.date)}</div>
            ${htmlContent}
        `;
        postListEl.style.display = 'none';
        postContentEl.classList.add('active');
        window.scrollTo(0, 0);
    } else {
        renderPostNotFound();
    }
}

/**
 * Renderiza mensagem de post não encontrado
 */
function renderPostNotFound() {
    postContentEl.innerHTML = `
        <button class="back-btn" id="backBtn">← Voltar</button>
        <h1>Post não encontrado</h1>
        <p>O post que você está procurando não existe.</p>
    `;
    
    postListEl.style.display = 'none';
    postContentEl.classList.add('active');
}

/**
 * Escapa HTML para prevenir XSS
 * @param {string} text - Texto a ser escapado
 * @returns {string} Texto escapado
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Configura event listeners
 */
export function setupEventListeners() {
    // Event delegation para cards de posts
    postListEl.addEventListener('click', (e) => {
        const card = e.target.closest('.post-card');
        if (card) {
            const postId = parseInt(card.dataset.postId);
            renderPost(postId);
        }
    });

    // Event delegation para botão voltar
    postContentEl.addEventListener('click', (e) => {
        if (e.target.id === 'backBtn') {
            // Remove o parâmetro id da URL ao voltar
            if (window.history && window.history.pushState) {
                const url = new URL(window.location);
                url.searchParams.delete('id');
                window.history.pushState({}, '', url.pathname);
            }
            renderPostList();
        }
    });
}