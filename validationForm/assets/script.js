// JavaScript for handling validations
document.getElementById("comprehensiveForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission for testing

  let isValid = true;

  // Name validation
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  if (!nameInput.checkValidity()) {
    nameError.textContent = "Name must be 2-50 characters and only contain letters and spaces.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  if (!emailInput.checkValidity()) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  if (!passwordInput.checkValidity()) {
    passwordError.textContent = "Password must be at least 8 characters with an uppercase letter, a number, and a special character.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Confirm password validation
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  // Age validation
  const ageInput = document.getElementById("age");
  const ageError = document.getElementById("ageError");
  if (!ageInput.checkValidity()) {
    ageError.textContent = "Age must be between 18 and 120.";
    isValid = false;
  } else {
    ageError.textContent = "";
  }

  // Date of Birth validation
  const dobInput = document.getElementById("dob");
  const dobError = document.getElementById("dobError");
  if (!dobInput.checkValidity()) {
    dobError.textContent = "Please enter a valid date of birth.";
    isValid = false;
  } else {
    dobError.textContent = "";
  }

  // Terms validation
  const termsInput = document.getElementById("terms");
  const termsError = document.getElementById("termsError");
  if (!termsInput.checkValidity()) {
    termsError.textContent = "You must accept the terms and conditions.";
    isValid = false;
  } else {
    termsError.textContent = "";
  }

  // Country validation
  const countryInput = document.getElementById("country");
  const countryError = document.getElementById("countryError");
  if (!countryInput.checkValidity()) {
    countryError.textContent = "Please select your country.";
    isValid = false;
  } else {
    countryError.textContent = "";
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
});

//toggle button
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.removeAttribute('data-theme');
  }
});