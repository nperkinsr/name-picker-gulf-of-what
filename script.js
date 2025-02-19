document.addEventListener("DOMContentLoaded", function () {
  const pickNameButton = document.getElementById("pickNameButton");
  const nameInput = document.getElementById("nameInput");
  const resultSpan = document.querySelector(".gulf-of span");
  const soundEffect = document.getElementById("tududum");
  const rouletteSound = document.getElementById("roulette");

  pickNameButton.addEventListener("click", function () {
    let names = nameInput.value
      .split("\n")
      .map((name) => name.trim())
      .filter((name) => name.length > 0);

    if (names.length === 0) {
      alert("Please enter at least one name.");
      return;
    }

    let shuffleTime = 4000;
    let intervalTime = 50;
    let elapsedTime = 0;

    // Start the roulette sound
    rouletteSound.play();

    const shuffleEffect = setInterval(() => {
      resultSpan.textContent = names[Math.floor(Math.random() * names.length)];

      elapsedTime += intervalTime;

      if (elapsedTime >= shuffleTime - 800) {
        intervalTime += 80;
      } else if (elapsedTime >= shuffleTime - 2000) {
        intervalTime += 40;
      }

      if (elapsedTime >= shuffleTime) {
        clearInterval(shuffleEffect);
        const finalName = names[Math.floor(Math.random() * names.length)];
        resultSpan.textContent = finalName;
        soundEffect.play();

        // Stop the roulette sound
        rouletteSound.pause();
        rouletteSound.currentTime = 0;
      }
    }, intervalTime);
  });
});
