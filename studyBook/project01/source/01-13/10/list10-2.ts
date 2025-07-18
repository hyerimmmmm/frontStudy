interface PlaySound {
    name: string;
    play():void;
    stop():void;
}

class MusicPlayer implements PlaySound {
    name : string = "sample";

    play() {
        console.log(`${this.name}을 재생했습니다.`);
    }

    stop() {
        console.log(`${this.name}을 중지했습니다.`);
    }
}
const mp = new MusicPlayer();
mp.play();
mp.stop();