
let arr = []
alert('Только 5 пользователей хотя хотел 52')
for (let i = 1; i < 6; i++) {
    const name = prompt(`Введите имя`)
    const age  = +prompt(`Введите возраст`)
    arr.push({
        id: i, 
        user: `Пользователь-${i}`,
        userName: name, 
        userAge: age
    })
}
console.log(arr);


// let user1 = (`Пользователь-1`),
//     name1 = prompt(`Введите имя`),
//     age1  = prompt(`Введите возраст`),
//     user2 = (`Пользователь-2`),
//     name2 = prompt(`Введите имя`),
//     age2  = prompt(`Введите возраст`),
//     user3 = (`Пользователь-3`),
//     name3 = prompt(`Введите имя`),
//     age3  = prompt(`Введите возраст`),
//     user4 = (`Пользователь-4`),
//     name4 = prompt(`Введите имя`),
//     age4  = prompt(`Введите возраст`),
//     user5 = (`Пользователь-5`),
//     name5 = prompt(`Введите имя`),
//     age5  = prompt(`Введите возраст`)
    
// console.log(`${user1}: ${name1} ${age1}`);
// console.log(`${user2}: ${name2} ${age2}`);
// console.log(`${user3}: ${name3} ${age3}`);
// console.log(`${user4}: ${name4} ${age4}`);
// console.log(`${user5}: ${name5} ${age5}`);