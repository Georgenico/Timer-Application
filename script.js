"use strict mode";
const timeElement = document.querySelector(".time");
const startButton = document.querySelector(".lunch--1"); // Button insde the lunch modal
const modal = document.querySelector(".modal");
const modalOne = document.querySelector(".modal-1");
const overlay = document.querySelector(".overlay");
const startLunch = document.querySelector(".lunch");
const startBreak = document.querySelector(".break");
const startButtonBreak = document.querySelector(".break--1"); //Button inside the break modal
const resetButton = document.querySelector(".back");
const resetButtonBack = document.querySelector(".break-back");

let timerId; // Store the timer ID for clearInterval()

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const OpenModal15min = function () {
  modalOne.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

startLunch.addEventListener("click", openModal);
startBreak.addEventListener("click", OpenModal15min);

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

startButtonBreak.addEventListener("click", function () {
  // Disable start button after first click
  startButtonBreak.disabled = true;

  // Get the current time
  const currentTimes = new Date().getTime();

  // Set the target time to 15 minutes from now
  const targetTimes = currentTimes + 15 * 60 * 1000; // 15 minutes

  // Update the timer element every second
  timerId = setInterval(function () {
    // Get the current time
    const now = new Date().getTime();

    // Calculate the remaining time
    const remainingTimes = targetTimes - now;

    // Check if the remaining time is positive
    if (remainingTimes > 0) {
      // Convert remaining time to hours, minutes, seconds, and milliseconds
      const hours = Math.floor(remainingTimes / (60 * 60 * 1000));
      const minutes = Math.floor(
        (remainingTimes % (60 * 60 * 1000)) / (60 * 1000)
      );
      const seconds = Math.floor((remainingTimes % (60 * 1000)) / 1000);
      const milliseconds = Math.floor((remainingTimes % 1000) / 10);

      // Update the timer element with the remaining time
      timeElement.textContent = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds
        .toString()
        .padStart(2, "0")}`;
    } else {
      // If remaining time is negative, stop the timer and enable the start button
      clearInterval(timerId);
      startButtonBreak.disabled = false;
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

  closeModal();
});
