document.addEventListener("DOMContentLoaded", function () {
  const startStopBtn = document.getElementById("startStopBtn");
  const inputInterval = document.getElementById("inputInterval");
  let intervalId;
  let userInputInterval = false;

  function generateRandomColors() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const alpha = 0.4;
    return `rgba(${r},${g},${b},${alpha})`;
  }

  const toggleColors = () => {
    document.body.style.backgroundColor = generateRandomColors();
  };

  const setbuttonValue = (text, addCSSClass, removeCSSClass) => {
    startStopBtn.value = text;
    startStopBtn.classList.add(addCSSClass);
    startStopBtn.classList.remove(removeCSSClass);
  };

  const startButton = () => {
    intervalId = setInterval(toggleColors, inputInterval.value * 1000);
    setbuttonValue("Stop", "btn-danger", "btn-primary");
  };

  const stopButton = () => {
    clearInterval(intervalId);
    setbuttonValue("Start", "btn-primary", "btn-danger");
  };

  const toggleStartStopButtons = () => {
    if (userInputInterval) stopButton();
    else startButton();
    userInputInterval = !userInputInterval;
  };

  startStopBtn.addEventListener("click", toggleStartStopButtons);
  toggleStartStopButtons();
});
