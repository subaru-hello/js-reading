const octuples = [];

// iが変わるから、この文を実行するとアウトプットが変わっていく。=>　副作用がある。
for(let i = 1; i <= 100; i+=1) {
    if(i % 8 == 0) {
        octuples.push(i);
    }
}

console.log(octuples);

//参照透過性: どこから呼び出してもインプットが同じなら同じアウトプットが返ってくる。
const range = (start, end) => [...new Array(end - start).keys()].map((i) => i + start);
const octuples_procedure = range(1, 100).filter((n) => n % 8 === 0);
console.log(octuples_procedure);