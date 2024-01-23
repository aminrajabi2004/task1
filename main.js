const typeInput = document.createElement("input");
typeInput.id = "type";
typeInput.placeholder = "نوع تگ";
document.body.appendChild(typeInput);
typeInput.style.display = "block";

const valueInput = document.createElement("input");
valueInput.id = "value";
valueInput.placeholder = "مقدار";
document.body.appendChild(valueInput);
valueInput.style.display = "block";

const colorInput = document.createElement("input");
colorInput.id = "type";
colorInput.placeholder = " رنگ";
document.body.appendChild(colorInput);
colorInput.style.display = "block";

const submitButton = document.createElement("button");
submitButton.id = "submit";
submitButton.innerText = "نشون دادن";
document.body.appendChild(submitButton);

const Button2 = document.createElement("button");
Button2.id = "submit";
Button2.innerText = "درست کردن تگ";
document.body.appendChild(Button2);

const outputDiv = document.createElement("div");
outputDiv.id = "output";
document.body.appendChild(outputDiv);

submitButton.addEventListener("click", () => {
  const type = typeInput.value;
  const value = valueInput.value;
  const color = colorInput.value;
  const element = document.createElement(type);
  element.textContent = value;
  document.body.style.color = color;
  outputDiv.appendChild(element);
});

Button2.addEventListener("click", () => {
  const type = typeInput.value;
  const element = document.createElement(type);
  outputDiv.appendChild(element);
  colorInput.style.marginBottom = "20px";
});
