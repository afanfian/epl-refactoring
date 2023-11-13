document.addEventListener("DOMContentLoaded", () => {
  // Mengambil elemen HTML dengan ID "scoreList"
  const scoreList = document.getElementById("scoreList");

  // Melakukan permintaan AJAX untuk mengambil data dari URL yang diberikan
  fetch("https://ets-pemrograman-web-f.cyclic.app/scores/score")
    .then((response) => response.json()) // Mengubah respons menjadi objek JavaScript
    .then((result) => {
      console.log(result);

      // Memeriksa apakah respons memiliki status "success" dan data dalam bentuk array
      if (result.status === "success" && Array.isArray(result.data)) {
        // Ekstrak data dari respons untuk mempermudah penggunaan
        const data = result.data;

        // Mengurutkan data berdasarkan skor dari tertinggi ke terendah
        data.sort((a, b) => b.score - a.score);

        // Mengambil tiga peringkat teratas
        const top3Scores = data.slice(0, 3);

        // Menambahkan setiap peringkat teratas ke elemen daftar pada halaman HTML
        top3Scores.forEach((score) => {
          // Membuat elemen <li> dan mengisinya dengan nama dan skor
          const li = document.createElement("li");
          li.innerHTML = `
            <span>${score.nama}</span>
            <span>${score.score}</span>
          `;

          // Menambahkan elemen <li> ke dalam elemen daftar pada halaman HTML
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
