import { renderPostList, setupEventListeners } from './router.js';

/**
 * Inicializa o blog
 */
function init() {
    setupEventListeners();
    renderPostList();
}

// Inicia o blog quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}