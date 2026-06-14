// Add event listeners to handle fade-out effect during navigation
window.addEventListener('beforeunload', () => {
    document.body.classList.add('fade-out');
});

document.body.addEventListener('click', (e) => {
    // don't override clicks on real links or form controls
    if (e.target.closest('a, button, input, textarea, select')) return;

    // normalize to the filename (handle '/', '/index.html', and paths with folders)
    const lastSegment = window.location.pathname.split('/').pop();
    const page = lastSegment === '' ? '1.html' : lastSegment;

    const nextMap = {
        '1.html': '2.html',
        '2.html': '1.html',
    };

    const next = nextMap[page] || '1.html';
    window.location.href = next;
});

