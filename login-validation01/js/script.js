// 各要素を取得
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const togglePassword = document.getElementById('togglePassword');
const form = document.getElementById('loginForm');

// ====== 各バリデーション関数 ======

function validateEmail() {
    const emailValue = email.value.trim();

    if (!emailValue) {
        emailError.textContent = 'メールアドレスを入力してください';
        return false;
    } else if (emailValue.length > 254) {
        emailError.textContent = 'パスワードは254文字以内で入力してください';
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        emailError.textContent = '正しいメールアドレスの形式で入力してください';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validatePassword() {
    const passwordValue = password.value.trim();

    if (!passwordValue) {
        passwordError.textContent = 'パスワードを入力してください';
        return false;
    } else if (passwordValue.length < 8) {
        passwordError.textContent = 'パスワードは8文字以上必要です';
        return false;
    } else if (passwordValue.length > 128) {
        passwordError.textContent = 'パスワードは128文字以内で入力してください';
        return false;
    }
    else if (passwordValue.length < 8) {
        passwordError.textContent = 'パスワードは8文字以上必要です';
        return false;
    } else {
        passwordError.textContent = '';
        return true;
    }
}

// ====== inputイベント：リアルタイムでエラー解除 ======
// inputがないと正しく入力したのにエラーが消えない（フォーカスを外して初めてエラーが出るから）

email.addEventListener('input', () => {
    console.log('inputが発火');
    console.log(emailError.textContent);
    if (emailError.textContent) validateEmail();
});

password.addEventListener('input', () => {
    if (passwordError.textContent) validatePassword();
});

// ====== blurイベント：入力完了後のチェック ======

email.addEventListener('blur', () => {
    console.log('blurが発火');
    validateEmail();
});
password.addEventListener('blur', validatePassword);

// ====== パスワードの表示・非表示 ======

togglePassword.addEventListener('click', () => {
    const isHidden = password.type === 'password';
    password.type = isHidden ? 'text' : 'password';
    togglePassword.classList.toggle('active');
});

// ====== submitイベント：最終チェックとサーバー送信 ======

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(); // trueまたはfalseが戻り値
    const isPasswordValid = validatePassword(); // trueまたはfalseが戻り値

    // どちらかがエラーだったら true にする
    if (!isEmailValid || !isPasswordValid) {
        alert('全ての項目を正しく入力してください');
        return;
    }
    //     // または
    //    if (!(isEmailValid && isPasswordValid)) {
    //         alert('全ての項目を正しく入力してください');
    //         return;
    //     }

    // バリデーションを通過したので、サーバー（ログインAPI）へログイン情報を送信
    // Flask なら /api/login というルートに POST を受けるエンドポイントを作る    
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email.value.trim(),
            password: password.value.trim()
        }),
        // クッキーを使って認証情報（トークンなど）をサーバーとやり取りするために必要な設定（ローカルストレージでトークン管理はセキュリティが弱いため）
        credentials: 'include'
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                alert('ログイン成功');
                location.href = '/mypage.html'; // マイページへ遷移
            } else {
                alert('メールアドレスまたはパスワードが違います');
            }
        })
        .catch(error => {
            console.error('通信エラー:', error);
            alert('サーバーとの通信に失敗しました');
        });
});