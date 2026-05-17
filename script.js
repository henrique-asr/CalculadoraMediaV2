function calcularMedia() {
  const np1 = parseFloat(document.getElementById("np1").value);
  const np2 = parseFloat(document.getElementById("np2").value);
 
  if (isNaN(np1) || isNaN(np2)) {
    document.getElementById("resultado").innerHTML =
      "Por favor, preencha as notas NP1 e NP2.";
    document.getElementById("resultado").className = "resultado";
    return;
  }
 
  if (np1 < 0 || np1 > 10 || np2 < 0 || np2 > 10) {
    document.getElementById("resultado").innerHTML =
      "As notas devem estar entre 0 e 10.";
    document.getElementById("resultado").className = "resultado";
    return;
  }
 
  const media = (np1 + np2) / 2;
  let mensagem = `Sua média é: <strong>${media.toFixed(2)}</strong><br>`;
 
  if (media < 6.60) {
    const notaMinimaExame = 4.75 * 2 - media;
    mensagem += `Você ficou de exame.<br>`;
    mensagem += `Para não pegar DP, precisa tirar pelo menos: <strong>${notaMinimaExame.toFixed(2)}</strong> no exame.<br>`;
    if (notaMinimaExame > 10) {
      mensagem += `<strong>Infelizmente, não é possível evitar a DP mesmo com nota máxima.</strong>`;
    }
    document.getElementById("resultado").className = "resultado exame";
  } else {
    mensagem += `<strong>Parabéns!</strong> Você passou direto e não precisa fazer exame.`;
    document.getElementById("resultado").className = "resultado aprovado";
  }
 
  document.getElementById("resultado").innerHTML = mensagem;
}
 
function alternarModo() {
  document.body.classList.toggle("dark");
}
