function playGame() {
  const candidate = Array(49)
    .fill()
    .map((v, i) => i + 1);

  const shuffle = [];
  while (candidate.length > 0) {
    const value = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuffle.push(value);
  }

  const winBalls = shuffle.slice(0, 6).sort((p, c) => p - c);
  const bonusNum = shuffle[6];

  function colorize(number, tag) {
    if (number < 10) {
      tag.style.backgroundColor = "red";
    } else if (number < 20) {
      tag.style.backgroundColor = "orange";
    } else if (number < 30) {
      tag.style.backgroundColor = "yellow";
    } else if (number < 40) {
      tag.style.backgroundColor = "blue";
      tag.style.color = "white";
    } else {
      tag.style.backgroundColor = "green";
    }
  }

  const result = document.querySelector("#display-balls");
  // for(let i = 0 ; i < 6; i+=1) {
  // 	setTimeout(() => {
  // 		const balls = document.createElement('div');
  // 		balls.className = 'balls';
  // 		colorize(winBalls[i], balls);
  // 		balls.textContent = winBalls[i];
  // 		result.appendChild(balls);
  // 		}, 1000 * (i + 1));
  // }

  // other way: foreach
  winBalls.forEach((number, index) => {
    setTimeout(() => {
      const balls = document.createElement("div");
      balls.className = "balls";
      colorize(number, balls);
      balls.textContent = number;
      result.appendChild(balls);
    }, 1000 * (index + 1));
  });

  const bonus = document.querySelector("#display-bonus");
  setTimeout(() => {
    const bonusBall = document.createElement("div");
    bonusBall.className = "balls";
    colorize(bonusNum, bonusBall);
    bonusBall.textContent = bonusNum;
    bonus.appendChild(bonusBall);
  }, 7000);
}

function allClear() {
  location.reload();
}

const btnPlay = document.querySelector("#btn-run");
btnPlay.addEventListener("click", function () {
  playGame();
});

const btnClear = document.querySelector("#btn-stop");
btnClear.addEventListener("click", function () {
  allClear();
});
