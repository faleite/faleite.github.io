import { renderPostList, setupEventListeners, renderPost } from './router.js';

function getPostIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.has('id') ? parseInt(params.get('id')) : null;
}

/**
 * Inicializa o blog
 */
function init() {
    setupEventListeners();
    const postId = getPostIdFromUrl();
    if (postId) {
        renderPost(postId);
    } else {
        renderPostList();
    }
}

// Inicia o blog quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}