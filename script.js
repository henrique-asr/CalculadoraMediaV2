function calcularMedia() {
  const np1 = parseFloat(document.getElementById("np1").value);
  const np2 = parseFloat(document.getElementById("np2").value);
  const el = document.getElementById("resultado");

  if (isNaN(np1) || isNaN(np2)) {
    el.className = "resultado exame";
    el.innerHTML = "<span>Por favor, preencha as notas NP1 e NP2.</span>";
    return;
  }

  if (np1 < 0 || np1 > 10 || np2 < 0 || np2 > 10) {
    el.className = "resultado exame";
    el.innerHTML = "<span>As notas devem estar entre 0 e 10.</span>";
    return;
  }

  const media = (np1 + np2) / 2;

  if (media < 6.60) {
    const notaMinimaExame = 4.75 * 2 - media;
    el.className = "resultado exame";

    let html = `
      <p class="res-media">Média: <strong>${media.toFixed(2)}</strong></p>
      <p class="res-status">Você ficou de exame 📋</p>
    `;

    if (notaMinimaExame > 10) {
      html += `<p class="res-dp">Infelizmente, não é possível evitar a DP mesmo com nota máxima.</p>`;
    } else {
      html += `<p class="res-exame">Nota mínima no exame: <strong>${notaMinimaExame.toFixed(2)}</strong></p>`;
    }

    el.innerHTML = html;
  } else {
    el.className = "resultado aprovado";
    el.innerHTML = `
      <p class="res-media">Média: <strong>${media.toFixed(2)}</strong></p>
      <p class="res-status">Parabéns! 🎉</p>
      <p class="res-info">Você passou direto e não precisa fazer exame.</p>
    `;
  }
}

function alternarModo() {
  document.body.classList.toggle("dark");
}
