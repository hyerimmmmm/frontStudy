class MyException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MyException";
    }
}

try {
    throw new MyException("커스텀 예외가 발생했습니다.");
} catch (err) {
    console.log(err);
}