class MyData<T> {
    private vals: T[] = [];

    addValue(item: T) {
        this.vals.push(item);
    }

    getValue(index: number): T {
        return this.vals[index];
    }
}

const dataNum = new MyData<number>();
dataNum.addValue(5);
dataNum.addValue(3);
console.log(dataNum.getValue(1));   // 3

const dataStr = new MyData<string>();
dataStr.addValue("apple");
dataStr.addValue("orange");
console.log(dataStr.getValue(1));   // orange