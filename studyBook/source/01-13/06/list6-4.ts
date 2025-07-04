let currentPage = 1; // 현재 읽고 있는 페이지의 번호
const totalPages = 10; // 전체 페이지 수

do {
    console.log(`${currentPage}/${totalPages} 페이지가 읽혔습니다`); // 현재 읽은 페이지 수
    currentPage++;
} while (currentPage <= totalPages);
console.log("완료!")