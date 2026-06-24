const botao=document.getElementById('meubotao');
const paragrafo=document.getElementById('mensagem');
botao.onclick=function(){
  paragrafo.innerHTML='✅ Botão foi clicado! Interação registrada com sucesso.';
  paragrafo.style.color='#b45309';
  paragrafo.style.backgroundColor = "#fff0e0";
  paragrafo.style.padding = "8px 12px";
  paragrafo.style.borderRadius = "40px"; 
}