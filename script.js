"use strict mode";
const timeElement = document.querySelector(".time");
const startButton = document.querySelector(".lunch");
const resetButton = document.querySelector(".back");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

let timerId; // Store the timer ID for clearInterval()

// Event listener for start button
startButton.addEventListener("click", function () {
  // Disable start button after first click
  startButton.disabled = true;

  // Get the current time
  const currentTime = new Date().getTime();

  // Set the target time to 1 hour from now
  const targetTime = currentTime + 60 * 60 * 1000; // 1 hour = 60 minutes * 60 seconds * 1000 milliseconds

  // Update the timer element every second
  timerId = setInterval(function () {
    // Get the current time
    const now = new Date().getTime();

    // Calculate the remaining time
    const remainingTime = targetTime - now;

    // Check if the remaining time is positive
    if (remainingTime > 0) {
      // Convert remaining time to hours, minutes, seconds, and milliseconds
      const hours = Math.floor(remainingTime / (60 * 60 * 1000));
      const minutes = Math.floor(
        (remainingTime % (60 * 60 * 1000)) / (60 * 1000)
      );
      const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
      const milliseconds = Math.floor((remainingTime % 1000) / 10);

      // Update the timer element with the remaining time
      timeElement.textContent = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds
        .toString()
        .padStart(2, "0")}`;
    } else {
      // If remaining time is negative, stop the timer and enable the start button
      clearInterval(timerId);
      startButton.disabled = false;
    }
  }, 10); // Update the timer every 10 milliseconds
});

// Event listener for reset button
resetButton.addEventListener("click", function () {
  // Stop the timer and enable the start button
  clearInterval(timerId);
  startButton.disabled = false;

  // Reset the timer element to 1 hour
  timeElement.textContent = "00:01:00:00";
});
