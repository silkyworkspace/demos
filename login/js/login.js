// 1. 要素の取得
const loginForm = document.getElementById('login_form');
const submitButton = document.getElementById('submit_button');
const userNameInput = document.getElementById('user_name');
const passwordInput = document.getElementById('user_password');
const errorLogin = document.getElementById('error_login');
const errorUserName = document.getElementById('error_user_name');
const errorPassword = document.getElementById('error_user_password');


// 2. 二重送信防止のためのフラグ
let isSubmitting = false;

/**
 * 3-10で await する「擬似ログインAPI」
 * - 成功：ユーザー情報を返す
 * - 失敗：Error を投げる（= await 側で catch できる）
 */
const fakeLoginApi = {
    login({ userName, password }) {
        return new Promise((resolve, reject) => {
            const ok = userName === 'abc' && password === 'password123';

            setTimeout(() => {
                if (ok) resolve({ userName });
                else reject(new Error('ユーザーネームまたはパスワードが違います'));
            }, 800);
        });
    },
};

// 3. 以下は、フォーム送信時の処理
loginForm.addEventListener('submit', async (e) => {
    // 3-1. デフォルトの送信を防止
    e.preventDefault();

    // 3-2. エラーメッセージをクリア
    errorLogin.textContent = '';
    errorUserName.textContent = '';
    errorPassword.textContent = '';

    // 3-3. 二重送信防止
    if (isSubmitting) {
        return; // 送信中なら何もしない
    }

    // 3-4. バリデーション
    const userName = userNameInput.value.trim();
    const password = passwordInput.value.trim();

    // 3-5. バリデーション エラー判定のフラグ
    let hasError = false;

    // 3-6. ユーザーネームのチェック
    if (userName === '') {
        errorUserName.textContent = 'ユーザーネームを入力してください';
        hasError = true;
    } else if (userName.length < 3) {
        errorUserName.textContent = 'ユーザーネームは3文字以上入力してください';
        hasError = true;
    } else if (!/^[a-zA-Z0-9]+$/.test(userName)) {
        errorUserName.textContent = 'ユーザーネームは半角英数字で入力してください';
        hasError = true;
    }

    // 3-7. パスワードのチェック
    if (password === '') {
        errorPassword.textContent = 'パスワードを入力してください';
        hasError = true;
    } else if (password.length < 8) {
        errorPassword.textContent = 'パスワードは8文字以上入力してください';
        hasError = true;
    } else if (!/^[a-zA-Z0-9]+$/.test(password)) {
        errorPassword.textContent = 'パスワードは半角英数字で入力してください';
        hasError = true;
    }

    // 3-8. エラーがあれば送信しない
    if (hasError) {
        return;
    }

    // 3-9. 送信開始
    isSubmitting = true;
    submitButton.disabled = true;
    submitButton.value = '送信中...';

    try {
        // 3-10. 送信処理（サーバーに投げるつもりで擬似APIを await）
        const result = await fakeLoginApi.login({ userName, password });

        // 3-11. 送信完了
        alert(`ログイン成功！\nようこそ ${result.userName} さん`);

        // 3-12. フォームをリセット（成功時だけ）
        loginForm.reset();
    } catch (err) {
        // 「サーバー側の失敗」をここで受け取る
        errorLogin.textContent = err.message;
    } finally {
        // 3-13. 元に戻す（成功/失敗どちらでも最後に実行 = 後片付け）
        isSubmitting = false;
        submitButton.disabled = false;
        submitButton.value = 'ログイン';
    }
});