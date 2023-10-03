function isPalindrome(value) {
  const stringInput = value.toString();
  const reversedInput = stringInput.split("").reverse().join("");
  return stringInput === reversedInput;
}

const displayPalindromeResult = (resultColorClass, resultTextString) => {
  const displayResult = document.getElementById("result");
  displayResult.className = resultColorClass;
  displayResult.textContent = resultTextString;
};
const elem = document.querySelector("input");

const handleInput = () => {
  const input = parseInt(elem.value);

  if (!Number.isNaN(input)) {
    if (input >= 0) {
      const isInputPalindrome = isPalindrome(input);
      if (isInputPalindrome) {
        displayPalindromeResult("text-success", "Yes. This is a palindrome!");
      } else {
        displayPalindromeResult("text-danger", "No. Try again.");
      }
    } else {
      displayPalindromeResult("text-danger", "Enter a positive number!");
    }
  } else {
    displayPalindromeResult("text-black", "Please enter a number first!");
  }
};

elem.addEventListener("input", handleInput);
