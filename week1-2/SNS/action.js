
const imageInput = document.querySelector('input[type="file"]');
const imagePreview = document.getElementById('imag_preview');
const openModal = document.getElementById('open_modal');
const newWrite = document.getElementById('new_write');

// 게시글 추가 버튼
const writePostButton = document.getElementById('write_post');

// 이미지 미리보기
imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            imagePreview.innerHTML = `<img src="${event.target.result}" alt="미리보기 이미지" style="max-width: 100%; height: auto;">`;
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.innerHTML = '';
    }
});

openModal.addEventListener('click', () => {
    newWrite.style.display = 'flex';
});
