function greet(name : string, greeting : string ="Hello"):void {
    console.log(`${greeting}, ${name}!`);
}

greet("HIRO"); // "Hello, HIRO!"를 표시한다.
greet("HIRO", "안녕하세요"); // "안녕하세요, HIRO!"를 표시한다.