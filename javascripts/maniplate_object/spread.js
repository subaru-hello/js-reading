const original = { a: 1, b: 2, c: 3 };

const copy = { ...original };
console.log(copy);
console.log(copy === original); //=> false

const assigned = { ...original, ...{ c: 10, d: 50 }, d: 100 }; //=>{ a: 1, b: 2, c: 10, d: 100 }
console.log(assigned);
console.log(original); //=> 破壊されていない{ a: 1, b: 2, c: 3 }
