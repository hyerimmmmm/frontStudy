let currentPage = 1; // 현재 읽고 있는 페이지 번호
const totalPages = 10; // 전체 페이지 수

while (currentPage <= totalPages) {
    console.log(`현재 ${currentPage} 페이지를 읽고 있습니다.`);
    currentPage++; // 페이지 넘기기(현재 페이지 번호 1 증가)
}
console.log('모든 페이지를 다 읽었습니다.');