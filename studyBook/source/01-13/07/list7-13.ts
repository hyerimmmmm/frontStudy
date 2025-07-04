for (let i = 0; i < 10; i++) {
    let sum : number = 0;
    sum = i + 10;
    console.log(`${i}:${sum}`);
}

console.log(sum); // 오류가 발생한다.
console.log(i);   // 오류가 발생한다.