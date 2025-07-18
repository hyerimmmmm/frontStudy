// 열거 타입 KoreanEra를 정의한다.
enum KoreanEra {
    Dangun = 'Dangun',
    Gojoseon = 'Gojoseon',
    Silla = 'Silla',
    Goryeo = 'Goryeo',
    Joseon = 'Joseon',
    RepublicOfKorea = 'RepublicOfKorea'
}

// 열거 타입 변수 currentEra를 선언하고 초기화한다.
let currentEra: KoreanEra = KoreanEra.RepublicOfKorea;

// currentEra의 값을 출력한다.
console.log(`현재: ${currentEra}`);