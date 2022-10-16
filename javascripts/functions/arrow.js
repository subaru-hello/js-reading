const oneUp = function(n) {
    return n += 1;
}

//省略
const addOne = (n) => {
    return n + 1;
}

//さらに省略

const plusOne = n => n + 1;


console.log(oneUp(3))
console.log(addOne(3))
console.log(plusOne(3))

// Statement vs Expression
// 関数宣言文による定義
function double(n) {
    return n * 2;
  }
  
  // 関数式による定義
  const dbl = function (n) {
    return n * 2;
  };
  
  console.log(double(10));
  console.log(dbl(10));
  