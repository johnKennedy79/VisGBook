const form = document.querySelector("form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  // get the values
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  //   console.log(formValues); pass
  //   make an api call when the form is subited
  const res = await fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formValues),
  });
  const data = await res.json();
  console.log(data);
});

async function messagehistory(array) {
  for (let i = 0; i < array.length; i++) {
    const messages = await fetch("http://localhost:8080/messages");
    const histdata = await messages.json();
    console.log(messages);
    const messagehistory = document.getElementById("app");
    histdata.array.forEach((i) => {
      messagehistory.innerHTML =
        "<p>[histdata.name]</p>" +
        "<p>[histdata.message]</p>" +
        "<p>[histdata.emoji]</p>";
      console.log(messagehistory);
    });
  }
}

messagehistory();
