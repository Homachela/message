document.addEventListener('DOMContentLoaded', () => {
    // Получаем элементы
    const audioPlayer = document.getElementById('audioPlayer');
    const visualizer = document.getElementById('visualizer');

    // 1. Событие: Когда аудио начинает воспроизводиться
    audioPlayer.addEventListener('play', () => {
        // Добавляем класс 'active', который запускает CSS-анимацию
        visualizer.classList.add('active');
    });

    // 2. Событие: Когда аудио приостановлено или завершилось
    audioPlayer.addEventListener('pause', () => {
        // Удаляем класс 'active', останавливая анимацию
        visualizer.classList.remove('active');
    });

    audioPlayer.addEventListener('ended', () => {
        visualizer.classList.remove('active');
    });
});
