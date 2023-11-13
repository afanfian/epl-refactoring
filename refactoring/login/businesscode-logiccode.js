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
    const response = await loginUser(loginData);
    handleLoginResponse(response);
  } catch (error) {
    alert("User gagal login!");
  }
});

async function loginUser(loginData) {
  return fetch("https://ets-pemrograman-web-f.cyclic.app/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });
}

async function handleLoginResponse(response) {
  if (response.ok) {
    const data = await response.json();
    alert(data.message);
    console.log(data);
  } else {
    alert("User gagal login!");
  }
}
