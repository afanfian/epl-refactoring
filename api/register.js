const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const registerData = {
    nama,
    email,
    password,
  };

  try {
    const response = await fetch(
      "https://ets-pemrograman-web-f.cyclic.app/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      alert(data.message);
      window.location.href = "/ets/pages/login.html";
    } else {
      const data = await response.json();
      alert("User gagal register!");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
});
