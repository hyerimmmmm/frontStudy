class House {
    private _color: string = "";

    get color(): string { // getter 메서드 추가
        return this._color;
    }
    set color(value: string) { // setter 메서드 추가
        this._color = value;
    }

    // ...
}