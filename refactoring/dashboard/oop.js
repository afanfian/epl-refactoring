document.addEventListener("DOMContentLoaded", () => {
  const scoreList = document.getElementById("scoreList");

  const scoreService = new ScoreService();

  scoreService
    .fetchScores("https://ets-pemrograman-web-f.cyclic.app/scores/score")
    .then((result) => {
      console.log(result);

      if (scoreService.isValidData(result)) {
        const data = result.data;
        const top3Scores = scoreService.getTop3Scores(data);

        scoreService.renderScores(top3Scores, scoreList);
      } else {
        scoreService.handleDataError();
      }
    })
    .catch((error) => {
      scoreService.handleFetchError(error);
    });
});

class ScoreService {
  async fetchScores(url) {
    const response = await fetch(url);
    return response.json();
  }

  getTop3Scores(data) {
    return data.sort((a, b) => b.score - a.score).slice(0, 3);
  }

  renderScores(scores, listElement) {
    scores.forEach((score) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${score.nama}</span>
        <span>${score.score}</span>
      `;
      listElement.appendChild(li);
    });
  }

  isValidData(result) {
    return result.status === "success" && Array.isArray(result.data);
  }

  handleDataError() {
    console.error(
      "Data is not an array or does not have the expected structure"
    );
  }

  handleFetchError(error) {
    console.error("An error occurred during fetch:", error);
  }
}
