document.getElementById("name").addEventListener("blur", validateField);
document.getElementById("email").addEventListener("blur", validateField);
document.getElementById("message").addEventListener("blur", validateField);

// التحقق من حقل واحد
function validateField(event) {
  const field = event.target;
  const value = field.value.trim();

  // Remove existing validation classes
  field.classList.remove("is-valid", "is-invalid");

  if (field.id === "email") {
    if (value === "" || !value.includes("@")) {
      field.classList.add("is-invalid");
    } else {
      field.classList.add("is-valid");
    }
  } else {
    if (value === "") {
      field.classList.add("is-invalid");
    } else {
      field.classList.add("is-valid");
    }
  }
}
// التحقق من كل الوثيقة
function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const successAlert = document.getElementById("successAlert");
  const errorAlert = document.getElementById("errorAlert");

  // اخفاء التنبيهات
  successAlert.classList.add("d-none");
  errorAlert.classList.add("d-none");

  // تشغيل التحقق
  [name, email, message].forEach((field) => {
    const event = new Event("blur");
    field.dispatchEvent(event);
  });

  // التحقق
  const isValid = document.querySelectorAll(".is-invalid").length === 0;

  if (isValid) {
    successAlert.classList.remove("d-none");
    document.getElementById("contactForm").reset();
    // Remove validation classes after successful submission
    [name, email, message].forEach((field) => {
      field.classList.remove("is-valid", "is-invalid");
    });
  } else {
    errorAlert.classList.remove("d-none");
  }
}
// اعادة تعيين الوثيقة
function resetForm() {
  // Reset the form
  document.getElementById("contactForm").reset();

  // Remove validation classes from all form controls
  const formControls = document.querySelectorAll(".form-control");
  formControls.forEach((control) => {
    control.classList.remove("is-valid", "is-invalid");
  });

  // Hide all feedback messages
  const feedbackElements = document.querySelectorAll(".invalid-feedback");
  feedbackElements.forEach((element) => {
    element.style.display = "none";
  });

  // Hide alert messages
  document.getElementById("successAlert").classList.add("d-none");
  document.getElementById("errorAlert").classList.add("d-none");
}
