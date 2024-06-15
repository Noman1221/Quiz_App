const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const username = JSON.parse(localStorage.getItem('username')) || [];
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(username.name)
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

// username.addEventListener('keyup', () => {
//     saveScoreBtn.disabled = !username.value;
// });

saveHighScore = (e) => {

    const score = {
        score: mostRecentScore,
        name: username.name
    };
    console.log(highScores)
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/home.html');
};