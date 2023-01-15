//Создать функцию которая вернет все ключи обьекта переданного параметром

function getAllKeys(obj) {
  console.log(Object.keys(obj));
}

const obj = { name: "Vasya", age: 1 };

getAllKeys(obj);
