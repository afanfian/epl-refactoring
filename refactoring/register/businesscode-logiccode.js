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
    const response = await registerUser(registerData);
    handleRegisterResponse(response);
  } catch (error) {
    console.error("An error occurred:", error);
  }
});

async function registerUser(registerData) {
  return fetch("https://ets-pemrograman-web-f.cyclic.app/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
  });
}

async function handleRegisterResponse(response) {
  if (response.ok) {
    handleSuccessfulRegistration(response);
  } else {
    handleFailedRegistration(response);
  }
}

async function handleSuccessfulRegistration(response) {
  const data = await response.json();
  console.log(data);
  alert(data.message);
  window.location.href = "/ets/pages/login.html";
}

async function handleFailedRegistration(response) {
  const data = await response.json();
  alert("User gagal register!");
}
