document.addEventListener("DOMContentLoaded", () => {
  const scoreList = document.getElementById("scoreList");
  fetch("https://ets-pemrograman-web-f.cyclic.app/scores/score")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.status === "success" && Array.isArray(result.data)) {
        const data = result.data;
        data.sort((a, b) => b.score - a.score);
        const top3Scores = data.slice(0, 3);
        top3Scores.forEach((score) => {
          const li = document.createElement("li");
          li.innerHTML = `
            <span>${score.nama}</span>
            <span>${score.score}</span> `;
          scoreList.appendChild(li);
        });
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
