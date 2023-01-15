//Создать функцию которая вернет все значения объекта переданного параметром

function getAllKeys(obj) {
  console.log(Object.values(obj));
}

const obj = { name: "Vasya", age: 1 };

getAllKeys(obj);
