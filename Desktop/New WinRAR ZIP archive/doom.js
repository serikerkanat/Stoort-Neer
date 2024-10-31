//Это для выбора и манипуляции элементами у нас
document.querySelectorAll('.rating-star').forEach((star, index) => {
    star.addEventListener('click', () => {
        document.querySelectorAll('.rating-star').forEach((s, i) => {
            s.style.color = i <= index ? 'gold' : 'gray';
        });
    });
});
//Это чтобы изменять стили(там еще код с найт есть в ссс файле)
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('night-theme');
    
    // Сохранение темы в localStorage
    if (document.body.classList.contains('night-theme')) {
        localStorage.setItem('theme', 'night');
    } else {
        localStorage.setItem('theme', 'day');
    }
});

// Установка темы при загрузке страницы
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'night') {
        document.body.classList.add('night-theme');
    }
});
//манипулятор атрибутами
document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.addEventListener('click', () => {
        document.getElementById('main-image').src = thumb.src;
    });
});
