function sampleFunction2() : void {
    const x = 1;
    
    if (x == 1) {
        const y = 2;
        
        console.log(x); // 1
        console.log(y); // 2
    }
    
    for (let i = 0; i < 1; i++) {
        const x = 4;
        const z = 3;
    
        console.log(x); // 4
        //console.log(y); // y는 if 문 한정의 스코프이기 때문에 오류가 발생한다.
        console.log(z); // 3
    }
}

sampleFunction2();