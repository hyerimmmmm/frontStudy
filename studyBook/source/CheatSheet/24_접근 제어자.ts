class House {
    public color: string; // 어디서든 접근할 수 있다.
    private rooms: number; // 동일 클래스 내에서만 접근할 수 있다.
    protected address: string; // 동일 클래스 및 상속 클래스 내에서만 접근할 수 있다.
}