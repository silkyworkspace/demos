const textContainers = document.querySelectorAll('.text_container');
console.log(textContainers);

// タッチデバイスかどうかの判定
const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

textContainers.forEach(item => {
    // タッチデバイスの場合はクリックイベント、PCの場合はマウス出入りのイベント
    if (isTouchDevice) {
        item.addEventListener('click', () => {
            const inActive = !item.classList.contains('is-active');
            textContainers.forEach(item => item.classList.remove('is-active'));
            if (inActive) {
                item.classList.add('is-active');
            }
        });
    } else {
        item.addEventListener('mouseenter', () => item.classList.add('is-active'));
        item.addEventListener('mouseleave', () => item.classList.remove('is-active'));
    }
    });
