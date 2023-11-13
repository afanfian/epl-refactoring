const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const loginData = {
    email,
    password,
  };

  try {
    const response = await fetch(
      "https://ets-pemrograman-web-f.cyclic.app/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      }
    );

    if (response.ok) {
      const data = await response.json();
      alert(data.message);
      console.log(data);
    } else {
      alert("User gagal login!");
    }
  } catch (error) {
    alert("User gagal login!");
  }
});
