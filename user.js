const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const userName = {
        name: username.value,
        score: 0
    };

    localStorage.setItem('username', JSON.stringify(userName));
    window.location.assign('/home.html');
};