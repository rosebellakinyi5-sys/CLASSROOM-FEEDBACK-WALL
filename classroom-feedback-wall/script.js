"use strict";

let feedbackList = [];
let currentView = "all";

const feedbackForm = document.getElementById("feedback-form");
const nameInput = document.getElementById("student-name");
const messageInput =  document.getElementById("feedback-message");
const moodSelect = document.getElementById("mood");
const anonymousCheckbox = document.getElementById("anonymous");
const formMessage = document.getElementById("form-message");

const feedbackListEl = document.getElementById("feedback-list");
const emptyState = document.getElementById("empty-state");
const feedbackCount = document.getElementById("feedback-count");
const currentViewLabel = document.getElementById("current-view");

const showPositiveBtn = document.getElementById("show-positive");
const clearFeedbackBtn = document.getElementById("clear-feedback");

feedbackForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const message = messageInput.value.trim();

  if (message === "") {
    formMessage.textContent = "Please enter a feedback message before posting.";
    return;
  }

  formMessage.textContent = "";

  const newFeedback = {
    name: nameInput.value.trim(),
    message: message,
    mood: moodSelect.value,
    anonymous: anonymousCheckbox.checked
  };

  feedbackList.push(newFeedback);

  feedbackForm.reset();
  renderFeedback();
});

function renderFeedback() {
  feedbackListEl.innerHTML = "";

  let postsToShow = feedbackList;
  if (currentView === "positive") {
    postsToShow = feedbackList.filter(function (post) {
      return post.mood === "positive";
    });
  }

  if (postsToShow.length === 0) {
    feedbackListEl.appendChild(emptyState);
  } else {
    postsToShow.forEach(function (post) {
      feedbackListEl.appendChild(createFeedbackCard(post));
    });
  }

  feedbackCount.textContent = postsToShow.length;
  currentViewLabel.textContent = currentView === "positive" ? "Positive only" : "All feedback";
}

function createFeedbackCard(post) {
  const card = document.createElement("article");
  card.className = "feedback-card feedback-card--" + post.mood;

  const nameEl = document.createElement("h3");
  nameEl.textContent = post.anonymous ? "Anonymous" : (post.name || "Anonymous");

  const messageEl = document.createElement("p");
  messageEl.textContent = post.message;

  const moodEl = document.createElement("span");
  moodEl.className = "feedback-card__mood";
  moodEl.textContent = post.mood;

  card.appendChild(nameEl);
  card.appendChild(messageEl);
  card.appendChild(moodEl);

  return card;
}

showPositiveBtn.addEventListener("click", function () {
  currentView = currentView === "positive" ? "all" : "positive";
  showPositiveBtn.textContent = currentView === "positive" ? "Show All" : "Show Positive";
  renderFeedback();
});

clearFeedbackBtn.addEventListener("click", function () {
  feedbackList = [];
  currentView = "all";
  showPositiveBtn.textContent = "Show Positive";
  renderFeedback();
});

renderFeedback();

/*
  CLASSROOM FEEDBACK WALL
  -----------------------
  Your job is to implement the JavaScript functionality.

  Suggested order:
  1. Select the form, controls, buttons, feedback list, count, view label and message.
  2. Create an array called feedbackPosts.
  3. Listen for the form's submit event.
  4. Validate the feedback message.
  5. Store "Anonymous" instead of the name when the checkbox is checked.
  6. Write a function that displays feedback cards.
  7. Add the mood class to each card.
  8. Add click events to the filter and clear buttons.

  A feedback object could contain:
  {
    name: "Amina",
    message: "The pair activity helped me understand events.",
    mood: "positive",
    anonymous: false
  }

  Required CSS classes for generated cards:
  - feedback-card
  - feedback-card--positive
  - feedback-card--neutral
  - feedback-card--needs-improvement
  - feedback-card__mood

  Important:
  - Use addEventListener().
  - Use event.preventDefault() for form submission.
  - Use textContent when inserting user-provided text.
  - Do not use document.write().
*/

// STEP 1: Select the DOM elements you need.

// STEP 2: Create your feedback array and current filter state.

// STEP 3: Write a function to validate the form.

// STEP 4: Write a function to create and display feedback cards.

// STEP 5: Write a function to update the summary values.

// STEP 6: Add the submit event listener.

// STEP 7: Add the "Show Positive" button event listener.

// STEP 8: Add the "Clear Feedback" button event listener.
