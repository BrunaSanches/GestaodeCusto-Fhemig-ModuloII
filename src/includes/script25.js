function verificarRespostas1() {
    var tabela = document.getElementById("respostas");
    var respostas = tabela.getElementsByClassName("resposta");
    var corretas = 0;
    var respostasCorretas1 = [
      ["22.000,00", "2,50", "55.000,00", "115.000,00"],
      ["170.000,00", "47.000,00", "2,50", "117.500,00"],
      ["202.000,00", "319.500,00", "21.000,00", "2,50"],
      ["52.500,00", "168.000,00", "220.500,00", "90.000,00"],
      ["2,50", "225.000,00", "485.000,00", "710.000,00"]
    ];

    for (var i = 0; i < respostas.length; i++) {
      var resposta = respostas[i].value;
      var linha = Math.floor(i / 4);
      var coluna = i % 4;

      if (resposta === respostasCorretas1[linha][coluna]) {
        respostas[i].style.backgroundColor = "#cfc"; // Marcar como correta
        corretas++;
      } else {
        respostas[i].style.backgroundColor = "#f99"; // Marcar como incorreta
      }
    }

    alert("Você acertou " + corretas + " respostas.");
  }

  function verificarRespostas2() {
    var tabela2 = document.getElementById("respostas2");
    var respostas2 = tabela2.getElementsByClassName("resposta2");
    var corretas2 = 0;
    var respostasCorretas2 = [
      ["x", "2,50", "55.000,00", "a"],
      ["170.000,00", "47.000,00", "v", "117.500,00"],
      ["202.000,00", "319.500,00", "21.000,00", "2,50"],
      ["52.500,00", "168.000,00", "220.500,00", "90.000,00"],
      ["2,50", "225.000,00", "485.000,00", "710.000,00"]
    ];

    for (var i = 0; i < respostas2.length; i++) {
      var resposta2 = respostas2[i].value;
      var linha2 = Math.floor(i / 4);
      var coluna2 = i % 4;

      if (resposta2 === respostasCorretas2[linha2][coluna2]) {
        respostas2[i].style.backgroundColor = "#cfc"; // Marcar como correta
        corretas2++;
      } else {
        respostas2[i].style.backgroundColor = "#f99"; // Marcar como incorreta
      }
    }

    alert("Você acertou " + corretas2 + " respostas.");
  }