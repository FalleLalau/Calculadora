function appendToDisplay(valor) {
  const display = document.getElementById("display");

  if (display.value.length < 6) {
    display.value += valor;
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteToDisplay() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function Negative() {
  let display = document.getElementById("display");
  let conta = display.value;

  let negativo = "(";

  let operadores = ["+", "*", "/"];

  let operador = operadores.find((op) => conta.includes(op));

  let partes = conta.split(operador);

  let num1 = Number(partes[0]);
  let num2 = Number(partes[1]);

  if (!operador) {
    display.value = num1 * -1;
    return;
  }

  if (operador) {
    display.value = num1 + operador + num2 * -1;
  }
}

function calculate() {
  let conta = document.getElementById("display").value;

  let operador;

  if (conta.includes("+")) operador = "+";
  else if (conta.includes("-")) operador = "-";
  else if (conta.includes("*")) operador = "*";
  else if (conta.includes("/")) operador = "/";

  if (!operador) return;

  let partes = conta.split(operador);

  let num1 = Number(partes[0]);
  let num2 = Number(partes[1]);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("display").value = "Erro";
    return;
  }

  let resultado;

  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;

    case "-":
      resultado = num1 - num2;
      break;

    case "*":
      resultado = num1 * num2;
      break;

    case "/":
      resultado = num1 / num2;
      break;
  }

  document.getElementById("display").value = resultado;
}
