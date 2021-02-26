// Получаем дату и имя
let date = localStorage.getItem("lastVisitDate");
let name = localStorage.getItem("userName");

// Проверяем, заходил ли уже пользователь
if(date === undefined || name === undefined)
{name = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");}
else {alert(`Добрый день, ${name}! Давно не виделись. В последний раз вы были у нас ${date}`)}

// Устанавливаем дату и имя
const curDate = new Date; // текущая дата
let Month = curDate.getMonth() + 1; // месяцы начинаются с 0
localStorage.setItem("lastVisitDate", curDate.getDate() + "." + Month + "." + curDate.getFullYear() + " в " + curDate.getHours() + ":" +  curDate.getMinutes());
localStorage.setItem("userName", name);