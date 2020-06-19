function themeToggle() {

    const themeStylesheet = document.getElementById('theme');
    const themebtn = document.getElementById('togglebtn');
    // if it's light -> go dark
    if (themeStylesheet.href.includes('light')) {
        themeStylesheet.href = 'css/dark-mode.css';
        themebtn.className = 'fa fa-sun-o';
    } else {
        // if it's dark -> go light
        themeStylesheet.href = 'css/light-mode.css';
        themebtn.className = 'fa fa-moon-o';
    }
}

function openNav() {}

function closeNav() {}