// interface 키워드를 사용하여 인터페이스를 정의한다.
interface PlaySound {
    name: string;
    play(): void;
}

// 인터페이스를 구현한 클래스 정의(implements 키워드 사용)한다.
class MusicPlayer implements PlaySound {
    name: string = "sample";

    play() {
        console.log(`${this.name}을 재생했습니다.`);
    }
}
const mp = new MusicPlayer();
mp.name = "MySong.mp3";
mp.play();