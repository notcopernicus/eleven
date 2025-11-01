// Add event listeners to handle fade-out effect during navigation
window.addEventListener('beforeunload', () => {
    document.body.classList.add('fade-out');
});

document.body.addEventListener('click', () => {
    if (window.location.pathname === '/index.html') {
        window.location.href = 'page2.html';
    } else if (window.location.pathname === '/page2.html') {
        window.location.href = 'page3.html';
    } else if (window.location.pathname === '/page3.html') {
        window.location.href = 'page4.html';
    } else if (window.location.pathname =='/page4.html')
        window.location.href = 'page1.html';
});

