function corrigirRespostas() {
    var q1 = document.getElementById("q1").value.toLowerCase();
    var q2 = document.getElementById("q2").value.toLowerCase();
    var q3 = document.getElementById("q3").value.toLowerCase();
    
    if (q1 === "atendimento hospitalar") {
      document.getElementById("q1").classList.add("correct");
      document.getElementById("q1").classList.remove("incorrect");
    } else {
      document.getElementById("q1").classList.add("incorrect");
      document.getElementById("q1").classList.remove("correct");
    }
    
    if (q2 === "atendimento de uma radiografia") {
      document.getElementById("q2").classList.add("correct");
      document.getElementById("q2").classList.remove("incorrect");
    } else {
      document.getElementById("q2").classList.add("incorrect");
      document.getElementById("q2").classList.remove("correct");
    }
    
    if (q3 === "custo de uma cirurgia") {
      document.getElementById("q3").classList.add("correct");
      document.getElementById("q3").classList.remove("incorrect");
    } else {
      document.getElementById("q3").classList.add("incorrect");
      document.getElementById("q3").classList.remove("correct");
    }
  }