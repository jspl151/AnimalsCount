const animals = ["dog", "cat", "wolf", "lion", "dog", "cat", "wolf", "lion", "dog", "tiger"];

let countObject = animals.reduce((acc, cur) =>
acc[cur] ? {...acc,[cur] : acc[cur]+1} : {...acc,[cur] : acc[cur] = 1},{});
   
console.log(countObject);