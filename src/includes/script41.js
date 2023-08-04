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


  
  function verificarRespostas3() {
    var tabela3 = document.getElementById("respostas3");
    var respostas3 = tabela3.getElementsByClassName("resposta3");
    var corretas3 = 0;
    var respostasCorretas3 = [
      ["1.500,00", "2.000,00", "1.500,00", "1.000,00"]
    ];

    for (var i = 0; i < respostas3.length; i++) {
      var resposta3 = respostas3[i].value;
      var linha3 = Math.floor(i / 4);
      var coluna3 = i % 4;

      if (resposta3 === respostasCorretas3[linha3][coluna3]) {
        respostas3[i].style.backgroundColor = "#cfc"; // Marcar como correta
        corretas3++;
      } else {
        respostas3[i].style.backgroundColor = "#f99"; // Marcar como incorreta
      }
    }

    alert("Você acertou " + corretas3 + " respostas.");
  }



  function verificarRespostas4() {
    var tabela4 = document.getElementById("respostas4");
    var respostas4 = tabela4.getElementsByClassName("resposta4");
    var corretas4 = 0;
    var respostasCorretas4 = [
      ["600,00","100,00","03 exame","35,00","20,00","1.085,00"]
    ];

    for (var i = 0; i < respostas4.length; i++) {
      var resposta4 = respostas4[i].value;
      var linha4 = Math.floor(i / 6);
      var coluna4 = i % 6;

      if (resposta4 === respostasCorretas4[linha4][coluna4]) {
        respostas4[i].style.backgroundColor = "#cfc"; // Marcar como correta
        corretas4++;
      } else {
        respostas4[i].style.backgroundColor = "#f99"; // Marcar como incorreta
      }
    }

    alert("Você acertou " + corretas4 + " respostas.");
  }


  
  function verificarRespostas5() {
    var tabela5 = document.getElementById("respostas5");
    var respostas5 = tabela5.getElementsByClassName("resposta5");
    var corretas5 = 0;
    var respostasCorretas5 = [
      ["água", "depreciação", "aluguel", "alimentação", "água","energia elétrica", "ferramentas", "manutenção do prédio", "combustível do carro", "alimentação","matérias-primas","internet","segurança","contas de água", "energia elétrica","salários", "limpeza","estrutura predial", "estrutura predial","mão de obra", "luz", "internet","material de escritório", "limpeza","telefonia", "material de escritório","salários","telefonia"]
    ];

    for (var i = 0; i < respostas5.length; i++) {
      var resposta5 = respostas5[i].value;
      var linha5 = Math.floor(i / 28);
      var coluna5 = i % 28;

      if (resposta5 === respostasCorretas5[linha5][coluna5]) {
        respostas5[i].style.backgroundColor = "#cfc"; // Marcar como correta
        corretas5++;
      } else {
        respostas5[i].style.backgroundColor = "#f99"; // Marcar como incorreta
      }
    }

    alert("Você acertou " + corretas5 + " respostas.");
  }





  
document.getElementById("reiniciar").addEventListener("click", function() {
  var checkboxes = document.getElementsByName("opcao");
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
});

const checkboxes = document.getElementsByName("opcao");

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", function() {
    for (let j = 0; j < checkboxes.length; j++) {
      if (j !== i) {
        checkboxes[j].checked = false;
      }
    }
  });
}


for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", function() {
    if (checkboxes[0].checked) {
      alert("Parabéns! Você Acertou!");
    }
    else{
      alert("Resposta Incorreta! Clique no botão REINICIAR e tente novamente!");
    }
  });
}


function verificarRespostas6() {
  var tabela6 = document.getElementById("respostas6");
  var respostas6 = tabela6.getElementsByClassName("resposta6");
  var corretas6 = 0;
  var respostasCorretas6 = [
    ["V", "F", "F","V", "V", "F" , "F","V", "F", "F","V", "V","F","V","V","F", "V","V","V","F"]
  ];

  var respostasCorretas6_2 = [
    ["v", "f", "f","v", "v", "f" , "f","v", "f", "f","v", "v","f","v","v","f", "v","v","v","f"]
  ];

  for (var i = 0; i < respostas6.length; i++) {
    var resposta6 = respostas6[i].value;
    var linha6 = Math.floor(i / 20);
    var coluna6 = i % 20;

    if (resposta6 === respostasCorretas6[linha6][coluna6] || resposta6===respostasCorretas6_2[linha6][coluna6]) {
      respostas6[i].style.backgroundColor = "#cfc"; // Marcar como correta
      corretas6++;
    } else {
      respostas6[i].style.backgroundColor = "#f99"; // Marcar como incorreta
    }
  }

  alert("Você acertou " + corretas6 + " respostas.");
}


