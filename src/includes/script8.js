function toggleTexto() {
    var ckb1 = document.getElementById("ckb1");


    var resposta1 = document.getElementById("texto1");
   
    
    if (ckb1.checked) {
       texto1.style.display = "block";
    
    } else {
        texto1.style.display = "none";
    }
   

}

// Adiciona o evento onchange ao checkbox
var ckb1 = document.getElementById("ckb1");
ckb1.onchange = toggleTexto;