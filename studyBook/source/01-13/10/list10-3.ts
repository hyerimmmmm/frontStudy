interface PlaySound {
    name: string;
    play():void;
    stop():void;
}

interface PlayVideo extends PlaySound {
    videoName: string;
    playVideo():void;
    stopVideo():void;
}

class VideoPlayer implements PlayVideo {
    videoName: string = "Sample Video";

    playVideo(): void {
        console.log(`${this.videoName}을 재생했습니다.`);
    }
    stopVideo(): void {
        console.log(`${this.videoName}을 중지했습니다.`);
    }

    name : string = "sample";

    play() {
        console.log(`${this.name}을 재생했습니다.`);
    }

    stop() {
        console.log(`${this.name}을 중지했습니다.`);
    }
}

const vp = new VideoPlayer();
vp.playVideo();
vp.stopVideo();
vp.play();
vp.stop();