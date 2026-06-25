const portfolioData = {
    profile: {
        name: "Алексей Смирнов",
        profession: "Frontend Developer",
        age: 28
    },
    projects: [
        {
            id: 1,
            title: "Корпоративный портал",
            category: "Веб",
            likes: 150,
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: 2,
            title: "Мобильное приложение",
            category: "Дизайн",
            likes: 85,
            technologies: ["Figma", "UI/UX"]
        },
        {
            id: 3,
            title: "Интернет-магазин",
            category: "Веб",
            likes: 320,
            technologies: ["HTML", "CSS", "React"]
        },
        {
            id: 4,
            title: "API сервера",
            category: "Бекенд",
            likes: 115,
            technologies: ["Node.js", "JavaScript", "MongoDB"]
        },
        {
            id: 5,
            title: "Лендинг продукта",
            category: "Дизайн",
            likes: 45,
            technologies: ["Figma", "Photoshop"]
        }
    ],
    preferences: new Map([
        ["theme", "dark"],
        ["language", "ru"]
    ])
};

console.log("Шаг 2: Анализ профиля");
const profileKeys = Object.keys(portfolioData.profile);
console.log(profileKeys); 

console.log("Шаг 3: Выборка лучших работ");
const bestProjectsStrings = portfolioData.projects
    .filter(project => project.likes > 100)
    .map(project => `Проект: ${project.title} из категории ${project.category}`);

console.log(bestProjectsStrings);

console.log("Шаг 4: Подсчет статистики");
let totalLikes = 0;
portfolioData.projects.forEach(project => {
    totalLikes += project.likes;
});

console.log(`Общее число лайков: ${totalLikes}`);

console.log("Шаг 5: Облако тегов");
const uniqueTechnologies = new Set();

portfolioData.projects.forEach(project => {
    project.technologies.forEach(tech => {
        uniqueTechnologies.add(tech);
    });
});

console.log(uniqueTechnologies);