const wordToBeHighlighted = document.getElementById("word");
const text = document.getElementById("text");

function handleKeyDown() {
  const searchWord = wordToBeHighlighted.value.trim().toLowerCase();
  const textContent = text.textContent;
  const wordsArray = textContent.split(' ');

  if (searchWord !== "") {
    wordsArray.forEach((wordMatch, i) => {
      const trimmedWord = wordMatch.replace(/[^\w\s]/gi, "");
      if (trimmedWord === searchWord) {
        wordsArray[i] = `<span class="bg-warning">${wordMatch}</span>`;
      }
    });

    text.innerHTML = wordsArray.join(" ");
  }
}

wordToBeHighlighted.addEventListener('input', handleKeyDown);
