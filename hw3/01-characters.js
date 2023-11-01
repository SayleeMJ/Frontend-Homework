// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";
const charactersContainer = document.querySelector(".row");
const errorMessage = document.createElement("error");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((character) => {
      // Create character card container
      const cards = document.createElement("div");
      cards.classList.add(
        "character-card",
        "col-sm-6",
        "col-md-3",
        "col-lg-3",
        "mb-4"
      );

      // Create character image elements
      const image = document.createElement("img");
      const names = document.createElement("h2");
      const titles = document.createElement("p");
      const { fullName, title, family } = character;

      image.src = character.imageUrl;
      if (family.includes("House")) {
        image.alt = `${fullName} of ${family}`;
      } else if (
        family.includes("Free") ||
        family.includes("Unk") ||
        family.includes("None") ||
        family.includes("")
      ) {
        image.alt = `${fullName} - ${title}`;
      } else {
        image.alt = `${fullName} of House ${family}`;
      }

      names.textContent = character.fullName;

      titles.textContent = character.title;

      // Appending elements to the container
      cards.appendChild(image);
      cards.appendChild(names);
      cards.appendChild(titles);
      charactersContainer.appendChild(cards);

      // Adding hover effect
      cards.addEventListener("mouseenter", () => {
        cards.classList.add("hovered");
      });
      cards.addEventListener("mouseleave", () => {
        cards.classList.remove("hovered");
      });
    });
  })
  .catch((err) => {
    errorMessage.classList.add("text-center", "h3");
    errorMessage.innerHTML = "Data not found. Try again!";
    charactersContainer.appendChild(errorMessage);
  });
