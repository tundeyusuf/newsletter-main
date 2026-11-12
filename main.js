// Selecting HTML elements

const form = document.getElementById("signup-form");

const emailInput = document.getElementById("email");

const errorMessage = document.getElementById("error-message");

const signup = document.getElementById("signup");

const success = document.getElementById("success");

const submittedEmail = document.getElementById("submitted-email");

const dismiss = document.getElementById("dismiss");

// Form submission

form.addEventListener("submit", function (event) {
  // Prevent the browser from refreshing the page
  event.preventDefault();

  // Remove unnecessary spaces
  const email = emailInput.value.trim();

  emailInput.value = email;

  // Check if the email is valid

  if (!emailInput.validity.valid) {
    errorMessage.classList.remove("hidden");

    emailInput.setAttribute("aria-invalid", "true");

    emailInput.focus();

    return;
  }

  // If the email is valid

  errorMessage.classList.add("hidden");

  emailInput.setAttribute("aria-invalid", "false");

  // Display the submitted email

  submittedEmail.textContent = email;

  // Hide signup section

  signup.classList.add("hidden");

  // Show success section

  success.classList.remove("hidden");
});

// Remove error when the user corrects their email

emailInput.addEventListener("input", function () {
  if (emailInput.validity.valid && emailInput.value.trim() !== "") {
    errorMessage.classList.add("hidden");

    emailInput.setAttribute("aria-invalid", "false");
  }
});

// Dismiss success message

dismiss.addEventListener("click", function () {
  // Hide success section

  success.classList.add("hidden");

  // Show signup section

  signup.classList.remove("hidden");

  // Clear the form

  form.reset();

  // Reset error message

  errorMessage.classList.add("hidden");

  emailInput.setAttribute("aria-invalid", "false");
});
