const achievements = [
    {
        title: "Медиа",
        text: "Набрал некоторую аудиторию в соц. сети tiktok."
    },
    {
        title: "Киберспорт",
        text: "В процессе..."
    },
    {
        title: "Учёба",
        text: "Вторую сессию успешно закрыл (остаюсь на стипендии)."
    },
    {
        title: "Фан факт",
        text: "Заболел летом."
    }
];

const cardsGrid = document.querySelector('.cards-grid');

achievements.forEach(item => {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    article.classList.add('project-card');
    h3.classList.add('card-title');
    p.classList.add('section-text');

    h3.textContent = item.title;
    p.textContent = item.text;

    article.append(h3);
    article.append(p);

    cardsGrid.append(article);
});