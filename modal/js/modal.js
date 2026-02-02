// 1. 要素の取得
const openBtn = document.getElementById('open_modal');
const modal = document.getElementById('modal');
const overlay = document.querySelector('.modal_overlay');
const closeBtns = document.querySelectorAll('.modal_close');

// 2-1. 開く(is_openクラスをつける)関数
function openModal() {
    modal.classList.add('is_open');
}

// 2-2. 閉じる(is_openクラスを外す)関数
function closeModal() {
    modal.classList.remove('is_open');
}

// クリックイベントの設定
// 3-1.「モーダルを開く」ボタン
openBtn.addEventListener('click', openModal);
// 3-2. 「閉じる」ボタンと[×]ボタン(対象が複数)
closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
});
// 3-3. オーバレイ
overlay.addEventListener('click', closeModal);

// 3-4. Escキーでも閉じられるようにする
document.addEventListener('keydown', (e) => {    
    // モーダルが開いている時だけ Escを効かせる
    if (e.key === 'Escape' && modal.classList.contains('is_open')) {
        closeModal();
    }
});