function verificarRespostas1() {
    var tabela = document.getElementById("respostas-1");
    var respostas = tabela.getElementsByClassName("resposta");
    var corretas = 0;
    var respostasCorretas1 = [
      ["v", "v", "v","f"]
    ];
    var respostasCorretas2 = [
      ["V", "V", "V","F"]
    ];

    for (var i = 0; i < respostas.length; i++) {
      var resposta = respostas[i].value;
      var linha = Math.floor(i / 4);
      var coluna = i % 4;

      if (resposta === respostasCorretas1[linha][coluna] || resposta === respostasCorretas2[linha][coluna]) {
        respostas[i].style.backgroundColor = "#cfc"; // Marcar como correta
        corretas++;
      } else {
        respostas[i].style.backgroundColor = "#f99"; // Marcar como incorreta
      }
    }

    alert("Você acertou " + corretas + " respostas.");
  }

 