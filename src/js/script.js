document.addEventListener('DOMContentLoaded', function () {
    const filterBtns = document.querySelectorAll('.filtro-btn');
    const galeriaItems = document.querySelectorAll('.galeria-item');
    const galeriaVideos = document.querySelectorAll('.galeria-video');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            galeriaItems.forEach(item => {
                const categoria = item.getAttribute('data-categoria');

                // Esconde vídeos se o filtro for diferente de "video"
                const isVideo = item.classList.contains('galeria-video');

                if (filter === 'todos' && !isVideo) {
                    // Mostrar tudo exceto vídeos
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else if (filter === categoria) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Oculta vídeos inicialmente
    galeriaVideos.forEach(video => {
        video.style.display = 'none';
    });
});
