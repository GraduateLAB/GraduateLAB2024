// timeScript.js

let startTime;
let timerInterval;
let dailyElapsedTime = 0;
let weeklyElapsedTime = 0;
let monthlyElapsedTime = 0;
const timerClock = document.getElementById('timer-clock');
const dailyStatisticsText = document.getElementById('daily-statistics-text');
const weeklyStatisticsText = document.getElementById('weekly-statistics-text');
const monthlyStatisticsText = document.getElementById('monthly-statistics-text');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

function startTimer() {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    updateStatistics();
    startButton.disabled = false;
    stopButton.disabled = true;
    // 타이머 중지 시 startTime 재설정
    startTime = null;
}

function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    dailyElapsedTime += elapsedTime;
    weeklyElapsedTime += elapsedTime;
    monthlyElapsedTime += elapsedTime;
    startTime = currentTime;
    const formattedTime = formatTime(dailyElapsedTime);
    timerClock.textContent = formattedTime;
}

function formatTime(elapsedTime) {
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

function pad(num) {
    return (num < 10) ? '0' + num : num;
}

function updateStatistics() {
    dailyStatisticsText.textContent = `일간 통계: ${formatTime(dailyElapsedTime)}`;
    weeklyStatisticsText.textContent = `주간 통계: ${formatTime(weeklyElapsedTime)}`;
    monthlyStatisticsText.textContent = `월간 통계: ${formatTime(monthlyElapsedTime)}`;
}
