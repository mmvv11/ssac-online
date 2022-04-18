const a = {
  test: 1,
};

console.log(JSON.stringify(a));
console.log(typeof a);
JSON.parse(JSON.stringify(a));
console.log(JSON.parse(JSON.stringify(a)));
