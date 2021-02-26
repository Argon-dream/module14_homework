
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.round(Math.random() * 100);
        if(num % 2 === 0)
            resolve(num);
        else
            reject(num);
    }, 3000);
});

promise
    .then(data => {
        console.log(`Завершено успешно. Сгенерированное число - ${data}`);
    })
    .catch(data => {
        console.log(`Завершено с ошибкой. Сгенерированное число - ${data}`);
    })