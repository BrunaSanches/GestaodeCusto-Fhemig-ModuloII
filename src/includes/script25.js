function verificarRespostas() {
    var tabela = document.getElementById("respostas");
    var respostas = tabela.getElementsByClassName("resposta");
    var corretas = 0;
    var respostasCorretas = [
      ["resposta1_correta", "resposta2_correta", "resposta3_correta", "resposta4_correta"],
      ["resposta5_correta", "resposta6_correta", "resposta7_correta", "resposta8_correta"],
      ["resposta9_correta", "resposta10_correta", "resposta11_correta", "resposta12_correta"],
      ["resposta13_correta", "resposta14_correta", "resposta15_correta", "resposta16_correta"],
      ["resposta17_correta", "resposta18_correta", "resposta19_correta", "resposta20_correta"]
    ];

    for (var i = 0; i < respostas.length; i++) {
      var resposta = respostas[i].value;
      var linha = Math.floor(i / 4);
      var coluna = i % 4;

      if (resposta === respostasCorretas[linha][coluna]) {
        respostas[i].style.backgroundColor = "#cfc"; // Marcar como correta
        corretas++;
      } else {
        respostas[i].style.backgroundColor = "#f99"; // Marcar como incorreta
      }
    }

    alert("Você acertou " + corretas + " respostas.");
  }