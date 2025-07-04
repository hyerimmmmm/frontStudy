class FileNotFoundException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "FileNotFoundException";
    }
}

throw new FileNotFoundException("파일이 존재하지 않습니다");