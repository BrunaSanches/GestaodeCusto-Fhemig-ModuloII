
const reiniciar = document.getElementById('reiniciar'); 


  reiniciar.addEventListener('click', function() {
    location.reload();
  });
  
  function verificarBotao() {
    const botaoCorreto = document.querySelector('button:last-child');
    if (botaoCorreto.classList.contains('selecionado')) {
      alert('Você acertou! Parabéns!');
      botaoCorreto.style.backgroundColor = 'green';

    } else {
      alert('Tente novamente!');
    }
  }
  
  // Adicionar um evento de clique em cada botão
  const botoes = document.querySelectorAll('button:not(#corrigir)');
  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      botoes.forEach(b => b.classList.remove('selecionado'));
      botao.classList.add('selecionado');
    });
  });
  
  // Adicionar um evento de clique no botão de correção
  const botaoCorrigir = document.querySelector('#corrigir');
  botaoCorrigir.addEventListener('click', verificarBotao);