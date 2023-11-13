document.addEventListener("DOMContentLoaded", () => {
  const scoreList = document.getElementById("scoreList");

  fetchScores("https://ets-pemrograman-web-f.cyclic.app/scores/score")
    .then((result) => {
      console.log(result);

      if (result.status === "success" && Array.isArray(result.data)) {
        const data = result.data;
        const top3Scores = getTop3Scores(data);

        renderScores(top3Scores, scoreList);
      } else {
        console.error(
          "Data is not an array or does not have the expected structure"
        );
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
});

async function fetchScores(url) {
  const response = await fetch(url);
  return response.json();
}

function getTop3Scores(data) {
  return data.sort((a, b) => b.score - a.score).slice(0, 3);
}

function renderScores(scores, listElement) {
  scores.forEach((score) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${score.nama}</span>
      <span>${score.score}</span>
    `;
    listElement.appendChild(li);
  });
}
