function updateNumber(input, isIncrease, phone, priceRate) {
  const inputField = document.getElementById(input + "-input-field");
  let number = inputField.value;
  if (isIncrease == true) {
    number++;
  } else if (inputField.value > 0) {
    number--;
  }
  inputField.value = number;

  const amount = document.getElementById(phone + "-price");
  const totalAmount = eval(number * priceRate);
  amount.innerText = totalAmount;

  // subtotal
  document.getElementById("subtotal").innerText = subtotal();
  document.getElementById("tax").innerText = subtotal() / 10;
  document.getElementById("total").innerText = subtotal() + subtotal() / 10;
}

// subtotal
function subtotal() {
  const phone = document.getElementById("phone-price");
  const phonePrice = parseFloat(phone.innerText);
  const cas = document.getElementById("case-price");
  const casPrice = parseFloat(cas.innerText);
  let total = phonePrice + casPrice;
  return total;
}

// phone
document.getElementById("phone-plus").addEventListener("click", () => {
  /* const inputField = document.getElementById("phone-input-field");
  inputField.value++; */
  updateNumber("phone", true, "phone", 1219);
});

document.getElementById("phone-minus").addEventListener("click", () => {
  /* const inputField = document.getElementById('phone-input-field')
    inputField++;
     */
  updateNumber("phone", false, "phone", 1219);
});

//case
document.getElementById("case-plus").addEventListener("click", () => {
  /* const inputField = document.getElementById("input-field");
  inputField.value++; */
  updateNumber("case", true, "case", 59);
});

document.getElementById("case-minus").addEventListener("click", () => {
  /* const inputField = document.getElementById("input-field");
  inputField.value--; */
  updateNumber("case", false, "case", 59);
});

const incrementButton = document.getElementById("increment-btn");
incrementButton.addEventListener("click", function () {
  incrementButton.innerText = parseInt(incrementButton.innerText) + 3;
  console.log(incrementButton.innerText);
});
