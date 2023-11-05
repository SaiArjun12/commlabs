function openForm() {
  document.getElementById("registration-form-container").style.display = "block";
  setTimeout(() => {
  formContainer.classList.add("active");
}, 50);
}

function closeForm() {
  document.getElementById("registration-form-container").style.display = "none";
  setTimeout(() => {
  formContainer.style.display = "none";
}, 2000);
}

const buttons = document.querySelectorAll(".open-form-button");
buttons.forEach(button=>{
  button.addEventListener("click", openForm);
}
);