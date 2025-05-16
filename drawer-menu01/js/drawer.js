// ドロワーメニュー

const drawerBtn = document.getElementById('drawer-icon');
const gNav = document.getElementById('gnav');
const gLink = document.querySelectorAll('#gnav a');
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;


// ドロワーアイコンの色の切り替え関数
function updateDrawerIconColor() {
    const isScrolled = window.scrollY > headerHeight;
    const isMenuOpen = gNav.classList.contains('open');

    // ドロワーメニューが開いているか、スクロール位置がヘッダー内なら白、それ以外は黒
    if (isMenuOpen || !isScrolled) {
        drawerBtn.classList.remove('scrolled');
    } else {
        drawerBtn.classList.add('scrolled');
    }
}

// ドロワーメニュー開閉処理
drawerBtn.addEventListener('click', () => {
    drawerBtn.classList.toggle('active');
    gNav.classList.toggle('open');
    updateDrawerIconColor(); 
});

// ドロワーメニュー内リンククリックで閉じる（既存）
gLink.forEach((link) => {
    link.addEventListener('click', () => {
        drawerBtn.classList.remove('active');
        gNav.classList.remove('open');
        updateDrawerIconColor(); 
    });
});

// スクロール時に色判定
window.addEventListener('scroll', updateDrawerIconColor);

// 初期化時も判定（リロード直後の状態用）
updateDrawerIconColor();

