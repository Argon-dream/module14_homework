// Определим сразу данную нам строку
const jsonString = `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`;

// Определим JS объект
const user = {
    name: "Anton",
    age: 36,
    skills: ["Javascript","HTML","CSS"],
    salary: 80000,
};

// Преобразует объект JavaScript в строку JSON
let result = JSON.stringify(user);
console.log(result);

if (result === jsonString)
    console.log("Преобразование верно")
else
    console.log("Преобразованиене не верно")