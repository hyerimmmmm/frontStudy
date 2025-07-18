class MyException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MyException";
    }
}

throw new MyException("사용자 지정 예외가 발생했습니다");