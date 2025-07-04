// 이 샘플 코드를 실제로 사용해 보려면 messageModule.ts 파일과 mainMsg.ts 파일로 나눠서 사용하세요.
//■messageModule.ts
export const message: string = "Hello, World!";

//■mainMsg.ts
import { message } from './messageModule.js';

console.log(message);