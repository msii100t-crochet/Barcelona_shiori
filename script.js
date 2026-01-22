let total = 0;

function addMoney() {
  const payer = document.getElementById("payer").value;
  const item = document.getElementById("item").value;
  const amount = Number(document.getElementById("amount").value);

  if (!payer || !item || !amount) return;

  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${payer}</td><td>${item}</td><td>€${amount}</td>`;
  document.getElementById("money-list").appendChild(tr);

  total += amount;
  document.getElementById("total").textContent = total;

  document.getElementById("payer").value = "";
  document.getElementById("item").value = "";
  document.getElementById("amount").value = "";
}
