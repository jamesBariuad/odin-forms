const pwd1 = document.querySelector("#pwd1");
const pwd2 = document.querySelector("#pwd2");
const message = document.createElement("p");
pwd1.style.position = "relative";

const check = () => {
  if (pwd1.value == pwd2.value) {
    pwd1.style.border = "#e5e7eb 1px solid";
    pwd2.style.border = "#e5e7eb 1px solid";
    message.remove();
  } else {
    message.textContent = "*passwords do not match";
    message.style.color = "red";
    pwd1.after(message);
    pwd1.style.border = "red 1px solid";
    pwd2.style.border = "red 1px solid";
  }
};
pwd1.addEventListener("keyup", check);

pwd2.addEventListener("keyup", check);

pwd2.addEventListener("click", check);
