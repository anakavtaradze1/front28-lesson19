const button = document.querySelector("#button");
function buttonRemove() {
  button.remove();
}
button.addEventListener("click", buttonRemove);

const img = document.createElement("img");
img.src =
  "https://fastly.picsum.photos/id/180/2000/1600.jpg?hmac=dr3QTXUHbgPDvKgE9s2UjynoVFsZdxoLI3cxK8YZd9A";
img.alt = "lorem picsum";
const container = document.querySelector(".container");
container.prepend(img);
img.classList.add("img-style");

const cards = characters
  .map((item) => {
    return `
    <div class="card">
    <div>
      <h1>${item.first_name} ${item.last_name}</h1>
      <p> House: ${item.house}</p>
      </div>
      <img src="${item.image}" alt="${item.first_name}" />
    <div class="card-buttons">
            <button class="info-btn">Info</button>
            <button class="delete-btn">Delete</button>
        </div>
    </div>
  `;
  })
  .join("");
document.getElementById("characters-list").innerHTML = cards;

const deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    card.remove();
  });
});

const infoButton = document.querySelectorAll(".info-btn");
infoButton.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const actorInfo = document.createElement("p");
    actorInfo.classList.add("actor-info");
    actorInfo.textContent = ` ${characters[index].actor}`;
    card.querySelector(".card-buttons").appendChild(actorInfo);
  }, { once: true }); 
});