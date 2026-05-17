function calcularMedia() {
  const np1 = parseFloat(document.getElementById("np1").value);
  const np2 = parseFloat(document.getElementById("np2").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(np1) || isNaN(np2)) {
    resultado.textContent = "Por favor, preencha as notas NP1 e NP2.";
    resultado.className = "resultado";
    return;
  }

  if (np1 < 0 || np1 > 10 || np2 < 0 || np2 > 10) {
    resultado.textContent = "As notas devem estar entre 0 e 10.";
    resultado.className = "resultado";
    return;
  }

  const media = (np1 + np2) / 2;
  const mediaFormatada = media.toFixed(2);

  if (media >= 6) {
    resultado.textContent = `Média: ${mediaFormatada} — Aprovado ✅`;
    resultado.className = "resultado aprovado";
  } else if (media >= 4) {
    resultado.textContent = `Média: ${mediaFormatada} — Em Recuperação ⚠️`;
    resultado.className = "resultado recuperacao";
  } else {
    resultado.textContent = `Média: ${mediaFormatada} — Reprovado ❌`;
    resultado.className = "resultado reprovado";
  }
}

function alternarModo() {
  document.body.classList.toggle("dark");
}
