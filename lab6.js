console.log("Задача 1.");
{
    let age = 15;
    let height = 150;

    if (age < 8) {
        console.log("Вход запрещен, слишком мал");
    } else if (age >= 8 && age <= 18 && height < 140) {
        console.log("Вход только с родителями");
    } else if (age > 18 || (height > 140 && age >= 8)) {
        console.log("Добро пожаловать на аттракцион!");
    }
}

console.log("\nЗадача 2.");
{
    let sum = 0;
    for (let i = 1; i <= 200; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            sum += i;
        }
    }
    console.log("Итоговая сумма:", sum);
}

console.log("\nЗадача 3.");
{
    for (let i = 15; i >= 1; i--) {
        if (i % 2 === 0) {
            console.log(i);
        } else {
            console.log(i * 2);
        }
    }
}

console.log("\nЗадача 4.");
{
    let capital = 10000;
    for (let i = 0; i < 10; i++) {
        capital += capital * 0.08;
    }
    console.log("Итоговая сумма через 10 лет:", capital);
}

console.log("\nЗадача 5.");
{
    let stairs = "";
    for (let i = 0; i < 6; i++) {
        stairs += "#";
        console.log(stairs);
    }
}

console.log("\nЗадача 6.");
{
    for (let i = 1; i <= 50; i++) {
        if (i % 4 === 0 && i % 7 === 0) {
            console.log("BeepBoop");
        } else if (i % 4 === 0) {
            console.log("Beep");
        } else if (i % 7 === 0) {
            console.log("Boop");
        } else {
            console.log(i);
        }
    }
}

console.log("\nЗадача 7.");
{
    let n = 27;
    for (let i = 0; i < 15; i++) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = n * 3 + 1;
        }
        console.log(n);
    }
}