const form = document.querySelector("form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  // get the values
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  //   console.log(formValues); pass
  //   make an api call when the form is subited
  const res = await fetch("https://visgbook.onrender.com/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formValues),
  });
  const data = await res.json();
  console.log(data);
  setTimeout(function () {
    location.reload();
  }, 2000);
});

// calling database and displaying database on client
async function messagehistory() {
  const messages = await fetch("https://visgbook.onrender.com/messages");
  const histdata = await messages.json();
  const messagehistory = document.getElementById("app");
  for (let i = 0; i < histdata.length; i++) {
    messagehistory.innerHTML +=
      `<p>${histdata[i].name}</p>` +
      `<p>${histdata[i].message}</p>` +
      `<p>${histdata[i].emoji}</p>`;
    // const delbtn = document.createElement("button");
    // delbtn.textContent = "delete";
    // messagehistory.appendChild(delbtn);
    // delbtn.addEventListener("click", async () => {
    //   await fetch(`http://localhost:8080/messages/?id=${req.body.id}`, {
    //     method: "DELETE",
  }
  // console.log(id);
}

messagehistory();
