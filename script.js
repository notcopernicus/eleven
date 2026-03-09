// Add event listeners to handle fade-out effect during navigation
window.addEventListener('beforeunload', () => {
    document.body.classList.add('fade-out');
});

document.body.addEventListener('click', (e) => {
    // don't override clicks on real links or form controls
    if (e.target.closest('a, button, input, textarea, select')) return;

    // normalize to the filename (handle '/', '/index.html', and paths with folders)
    const lastSegment = window.location.pathname.split('/').pop();
    const page = lastSegment === '' ? 'index.html' : lastSegment;

    const nextMap = {
        'index.html': 'page2.html',
        'page2.html': 'page3.html',
        'page3.html': 'page4.html',
        'page4.html': 'index.html'
    };

    const next = nextMap[page] || 'index.html';
    window.location.href = next;
});

