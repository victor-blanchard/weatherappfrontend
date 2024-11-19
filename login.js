// Insert your code here
document.querySelector("#register").addEventListener("click", function () {
  const user = {
    name: document.querySelector("#registerName").value,
    email: document.querySelector("#registerEmail").value,
    password: document.querySelector("#registerPassword").value,
  };
  console.log("register");
  console.log(user);
  fetch("https://weatherappbackend-beryl.vercel.app/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: user.name, email: user.email, password: user.password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        console.log(data);
        window.location.assign("index.html");
      }
    });
});

document.querySelector("#connection").addEventListener("click", function () {
  const user = {
    email: document.querySelector("#connectionEmail").value,
    password: document.querySelector("#connectionPassword").value,
  };
  console.log("connection");
  console.log(user);
  fetch("https://weatherappbackend-beryl.vercel.app/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: user.email, password: user.password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        console.log(data);
        window.location.assign("index.html");
      }
    });
});
