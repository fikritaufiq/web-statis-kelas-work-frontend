// Sticky Component
if (localStorage.getItem('stickyClosed') !== 'true') {
    const stickyContainer = document.createElement('div');
    stickyContainer.classList.add('sticky-container');
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
        stickyContainer.style.display = 'none';
        localStorage.setItem('stickyClosed', 'true');
    });
    const downloadText = document.createElement('p');
    downloadText.textContent = 'Download Aplikasi Kami';
    const googleButton = document.createElement('button');
    googleButton.textContent = 'Google Play Store';
    googleButton.addEventListener('click', () => {
        window.location.href = 'https://play.google.com/';
    });
    const appleButton = document.createElement('button');
    appleButton.textContent = 'Apple App Store';
    appleButton.addEventListener('click', () => {
        window.location.href = 'https://www.apple.com/id/app-store/';
    });

    stickyContainer.appendChild(downloadText);
    stickyContainer.appendChild(googleButton);
    stickyContainer.appendChild(appleButton);
    stickyContainer.appendChild(closeButton);
    document.body.appendChild(stickyContainer);
}

// Theme Toggle
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
});

// Check theme preference from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}
