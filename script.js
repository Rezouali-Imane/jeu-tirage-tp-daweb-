//!reinitialisation
let scoreHumain = 0;
let scoreOrdinateur = 0;

//!recup des elements
const labelTirageHumain = document.getElementById('tirage-humain');
const labelTirageOrdinateur = document.getElementById('tirage-ordinateur');
const labelScoreHumain = document.getElementById('score-humain');
const labelScoreOrdinateur = document.getElementById('score-ordinateur');

//!ma fonc main
function jouer() {
    const tirageHumain = Math.floor(Math.random() * 6) + 1;
    const tirageOrdinateur = Math.floor(Math.random() * 6) + 1;

    labelTirageHumain.textContent = `Votre tirage: ${tirageHumain}`;
    labelTirageOrdinateur.textContent = `Tirage ordinateur: ${tirageOrdinateur}`;

    if (tirageHumain > tirageOrdinateur) {
        scoreHumain += 1;
    } else {
        scoreHumain -= 0.25;
        scoreOrdinateur += 1;
    }

    //!update du score
    labelScoreHumain.textContent = `Votre score: ${scoreHumain.toFixed(2)}`;
    labelScoreOrdinateur.textContent = `Score ordinateur: ${scoreOrdinateur}`;

    //!end de la partie
    if (scoreHumain >= 10) {
        setTimeout(() => {
            alert("🎉 Vous avez gagné la partie !");
            resetGame();
        }, 100);
    } else if (scoreOrdinateur >= 10) {
        setTimeout(() => {
            alert("🤖 L'ordinateur a gagné la partie !");
            resetGame();
        }, 100);
    }
}

//! reset a zero
function resetGame() {
    scoreHumain = 0;
    scoreOrdinateur = 0;

    labelTirageHumain.textContent = `Votre tirage: -`;
    labelTirageOrdinateur.textContent = `Tirage ordinateur: -`;
    labelScoreHumain.textContent = `Votre score: 0`;
    labelScoreOrdinateur.textContent = `Score ordinateur: 0`;
}
